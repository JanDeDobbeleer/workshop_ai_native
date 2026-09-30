import type { NavigationContextType } from '../context/NavigationContext';
import type { SlideCatalogEntry } from '../utils/slideCatalog';
import type { ToolDefinition, ToolExecutor } from './types';

const noParams = { type: 'object', properties: {}, additionalProperties: false };

const tools: ToolDefinition[] = [
  {
    type: 'function',
    function: {
      name: 'gotoSlide',
      description: 'Jump to a slide by its number from the slide catalog. The current slide is remembered so the user can go back later.',
      parameters: {
        type: 'object',
        properties: { number: { type: 'integer', description: 'Slide number from the catalog (1-based)' } },
        required: ['number'],
        additionalProperties: false,
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'gotoSection',
      description: 'Jump to the first slide of a section by its exact section name.',
      parameters: {
        type: 'object',
        properties: { name: { type: 'string', description: 'Section name, e.g. "Prompting"' } },
        required: ['name'],
        additionalProperties: false,
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'findSlides',
      description: 'Search slide titles and content. Returns the best matching slides with their numbers.',
      parameters: {
        type: 'object',
        properties: { query: { type: 'string', description: 'Keywords to search for' } },
        required: ['query'],
        additionalProperties: false,
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'goBack',
      description: 'Go back to the slide the user was on before the most recent jump ("go back to where I was").',
      parameters: noParams,
    },
  },
  {
    type: 'function',
    function: { name: 'nextSlide', description: 'Move to the next slide.', parameters: noParams },
  },
  {
    type: 'function',
    function: { name: 'prevSlide', description: 'Move to the previous slide.', parameters: noParams },
  },
  {
    type: 'function',
    function: { name: 'whereAmI', description: 'Describe the current slide.', parameters: noParams },
  },
];

// Slide numbers shown to the model and the user are 1-based, matching the deck URL (?slide=N)
export const slideNumber = (entry: SlideCatalogEntry): number => entry.index + 1;

export const slideLabel = (entry: SlideCatalogEntry): string =>
  entry.title || `${entry.section} title slide`;

export const describeSlide = (entry: SlideCatalogEntry | undefined): string =>
  entry ? `slide ${slideNumber(entry)}: "${slideLabel(entry)}" (${entry.section})` : 'unknown slide';

const tokenize = (value: string): string[] =>
  value.toLowerCase().split(/[^a-z0-9]+/).filter((token) => token.length > 1);

export const findSlides = (catalog: SlideCatalogEntry[], query: string, limit = 5): SlideCatalogEntry[] => {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return [];
  }
  const phrase = query.trim().toLowerCase();
  return catalog
    .map((entry) => {
      const heading = `${entry.title} ${entry.subtitle}`.toLowerCase();
      const body = entry.text.toLowerCase();
      let score = 0;
      tokens.forEach((token) => {
        if (heading.includes(token)) score += 3;
        if (body.includes(token)) score += 1;
      });
      if (heading.includes(phrase)) score += 5;
      else if (body.includes(phrase)) score += 2;
      return { entry, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((result) => result.entry);
};

export const createToolExecutor = (nav: NavigationContextType): ToolExecutor => {
  const { catalog } = nav;
  const current = () => catalog[nav.getCurrentSlide()];

  const execute = (name: string, args: Record<string, unknown>): string => {
    switch (name) {
      case 'gotoSlide': {
        const index = Number(args.number) - 1;
        if (!Number.isInteger(index) || index < 0 || index >= catalog.length) {
          return `Invalid slide number ${String(args.number)}. Valid range is 1-${catalog.length}.`;
        }
        if (index === nav.getCurrentSlide()) {
          return `Already on ${describeSlide(current())}.`;
        }
        nav.gotoSlide(index);
        return `Jumped to ${describeSlide(current())}.`;
      }
      case 'gotoSection': {
        const target = nav.gotoSection(String(args.name ?? ''));
        if (target === undefined) {
          const names = nav.sectionData.filter((s) => s.slides.length > 0).map((s) => s.name).join(', ');
          return `No section named "${String(args.name)}". Sections: ${names}.`;
        }
        return `Jumped to ${describeSlide(current())}.`;
      }
      case 'findSlides': {
        const matches = findSlides(catalog, String(args.query ?? ''));
        if (matches.length === 0) {
          return 'No matching slides.';
        }
        return matches.map((entry) => `[${slideNumber(entry)}] ${entry.section} - ${slideLabel(entry)}${entry.subtitle ? `: ${entry.subtitle}` : ''}`).join('\n');
      }
      case 'goBack': {
        const target = nav.goBack();
        return target === undefined
          ? 'There is no earlier jump to go back to.'
          : `Went back to ${describeSlide(current())}.`;
      }
      case 'nextSlide': {
        const before = nav.getCurrentSlide();
        nav.next();
        return nav.getCurrentSlide() === before ? 'Already at the last slide.' : `Moved to ${describeSlide(current())}.`;
      }
      case 'prevSlide': {
        const before = nav.getCurrentSlide();
        nav.prev();
        return nav.getCurrentSlide() === before ? 'Already at the first slide.' : `Moved to ${describeSlide(current())}.`;
      }
      case 'whereAmI':
        return describePosition();
      default:
        return `Unknown tool "${name}".`;
    }
  };

  const describePosition = (): string =>
    `Currently on ${describeSlide(current())}.`;

  return { tools, execute, describePosition };
};
