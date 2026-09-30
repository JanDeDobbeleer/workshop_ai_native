import type { NavigationContextType } from '../context/NavigationContext';
import type { SlideCatalogEntry } from '../utils/slideCatalog';
import { searchKnowledge } from '../utils/knowledgeBase';
import type { ToolExecutor } from './types';

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
      const body = (entry.text + ' ' + (entry.knowledge ?? '')).toLowerCase();
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
      case 'lookupKnowledge': {
        const matches = searchKnowledge(String(args.query ?? ''), 3);
        if (matches.length === 0) {
          return 'No matching knowledge base entries.';
        }
        return matches
          .map((entry) => {
            const loc = entry.slideIndex >= 0 ? ` (slide ${entry.slideIndex + 1})` : '';
            const body = entry.body.length > 700 ? `${entry.body.slice(0, 700)}…` : entry.body;
            const src = entry.sources.length ? `\nSources: ${entry.sources.join(', ')}` : '';
            return `## ${entry.title || entry.section}${loc}\n${body}${src}`;
          })
          .join('\n\n');
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

  return { execute, describePosition };
};

// Compact one-line-per-slide listing the agent gets in its system message
export const catalogListing = (catalog: SlideCatalogEntry[]): string =>
  catalog
    .map((entry) => `${slideNumber(entry)} | ${entry.section} | ${slideLabel(entry)}${entry.subtitle ? ` - ${entry.subtitle}` : ''}`)
    .join('\n');
