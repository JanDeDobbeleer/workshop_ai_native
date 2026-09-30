import { sectionData } from '../slides/deck';

export interface KnowledgeEntry {
  section: string;
  scope: 'slide' | 'section';
  /** 1-based ordinal within the section; 0 for section-scoped entries */
  slide: number;
  /** Resolved 0-based global slide index, or -1 if the mapping could not be resolved */
  slideIndex: number;
  title: string;
  tags: string[];
  sources: string[];
  body: string;
  path: string;
}

interface ParsedFrontMatter {
  meta: Record<string, string>;
  body: string;
}

// Bundle knowledge entries, not authoring README files.
const files = import.meta.glob(['../knowledge/**/*.md', '!../knowledge/**/README.md'], {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// Remove a single pair of matching surrounding quotes, e.g. a title that
// contains a colon and was written as `title: "Demo: ..."`.
const stripQuotes = (value: string): string => {
  if (value.length >= 2) {
    const first = value[0];
    const last = value[value.length - 1];
    if ((first === '"' || first === "'") && last === first) {
      return value.slice(1, -1);
    }
  }
  return value;
};

const splitList = (value: string): string[] =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

// Hand-rolled front-matter parser: no YAML dependency.
// A file that starts with a `---` fence has `key: value` lines until the next
// line that is exactly `---`; everything after is the Markdown body.
const parseFrontMatter = (raw: string): ParsedFrontMatter => {
  const normalized = raw.replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) {
    return { meta: {}, body: normalized.trim() };
  }
  const lines = normalized.split('\n');
  const meta: Record<string, string> = {};
  let i = 1;
  for (; i < lines.length; i += 1) {
    if (lines[i].trim() === '---') {
      i += 1;
      break;
    }
    const line = lines[i];
    const colon = line.indexOf(':');
    if (colon === -1) {
      continue;
    }
    const key = line.slice(0, colon).trim();
    const value = stripQuotes(line.slice(colon + 1).trim());
    if (key) {
      meta[key] = value;
    }
  }
  return { meta, body: lines.slice(i).join('\n').trim() };
};

const sectionByName = new Map(sectionData.map((section) => [section.name, section]));

const resolveSlideIndex = (
  scope: 'slide' | 'section',
  sectionName: string,
  slide: number,
  path: string,
): number => {
  const section = sectionByName.get(sectionName);
  if (!section) {
    if (import.meta.env.DEV) {
      console.warn(`[knowledgeBase] ${path}: unknown section "${sectionName}"`);
    }
    return -1;
  }
  if (scope === 'section') {
    return section.startIndex;
  }
  const index = section.startIndex + (slide - 1);
  if (index < section.startIndex || index > section.endIndex) {
    if (import.meta.env.DEV) {
      console.warn(
        `[knowledgeBase] ${path}: slide ${slide} is out of range for section "${sectionName}"`,
      );
    }
    return -1;
  }
  return index;
};

const parseEntry = (path: string, raw: string): KnowledgeEntry => {
  const { meta, body } = parseFrontMatter(raw);
  const section = meta.section ?? '';
  const scope: 'slide' | 'section' = meta.scope === 'section' ? 'section' : 'slide';
  const slide = meta.slide ? parseInt(meta.slide, 10) || 0 : 0;
  const slideIndex = section
    ? resolveSlideIndex(scope, section, slide, path)
    : -1;
  return {
    section,
    scope,
    slide,
    slideIndex,
    title: meta.title ?? '',
    tags: meta.tags ? splitList(meta.tags) : [],
    sources: meta.sources ? splitList(meta.sources) : [],
    body,
    path,
  };
};

export const knowledgeEntries: KnowledgeEntry[] = Object.entries(files).map(([path, raw]) =>
  parseEntry(path, raw),
);

const tokenize = (value: string): string[] =>
  value.toLowerCase().split(/[^a-z0-9]+/).filter((token) => token.length > 1);

export const searchKnowledge = (query: string, limit = 3): KnowledgeEntry[] => {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return [];
  }
  const phrase = query.trim().toLowerCase();
  return knowledgeEntries
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const body = entry.body.toLowerCase();
      const tags = entry.tags.map((tag) => tag.toLowerCase());
      let score = 0;
      tokens.forEach((token) => {
        if (title.includes(token)) score += 3;
        if (tags.some((tag) => tag.includes(token))) score += 2;
        if (body.includes(token)) score += 1;
      });
      if (title.includes(phrase)) score += 5;
      else if (body.includes(phrase)) score += 2;
      return { entry, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((result) => result.entry);
};
