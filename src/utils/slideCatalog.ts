import { isValidElement } from 'react';
import type { ReactNode } from 'react';
import { slides, findSectionForSlide } from '../slides/deck';
import { knowledgeEntries } from './knowledgeBase';

export interface SlideCatalogEntry {
  index: number;
  section: string;
  title: string;
  subtitle: string;
  text: string;
  /** Curated knowledge-base prose mapped to this slide, if any */
  knowledge?: string;
}

const MAX_TEXT_LENGTH = 400;

const collectText = (node: ReactNode, parts: string[]): void => {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return;
  }
  if (typeof node === 'string' || typeof node === 'number') {
    parts.push(String(node));
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((child) => collectText(child, parts));
    return;
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    collectText(node.props.children, parts);
  }
};

// Recursively pulls the visible text out of a slide's JSX content
export const extractText = (node: ReactNode): string => {
  const parts: string[] = [];
  collectText(node, parts);
  return parts.join(' ').replace(/\s+/g, ' ').trim();
};

export const buildSlideCatalog = (): SlideCatalogEntry[] =>
  slides.map((slide, index) => {
    const section = findSectionForSlide(index);
    const knowledge = knowledgeEntries
      .filter((entry) => entry.slideIndex === index)
      .map((entry) => entry.body)
      .join('\n');
    return {
      index,
      section: section?.name ?? '',
      title: slide.title,
      subtitle: slide.subtitle,
      text: extractText(slide.content).slice(0, MAX_TEXT_LENGTH),
      knowledge: knowledge || undefined,
    };
  });

export const slideCatalog = buildSlideCatalog();
