// Shared between the browser (src/agent/copilotBridge.ts) and the dev server
// (server/deckAgentPlugin.ts). Keep this file free of runtime imports beyond plain constants.
import { writingStyleRules } from './writingStyle';

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
}

const noParams = { type: 'object', properties: {}, additionalProperties: false };

export const toolDefinitions: ToolDefinition[] = [
  {
    name: 'gotoSlide',
    description: 'Jump to a slide by its number from the slide catalog. The current slide is remembered so the user can go back later.',
    parameters: {
      type: 'object',
      properties: { number: { type: 'integer', description: 'Slide number from the catalog (1-based)' } },
      required: ['number'],
      additionalProperties: false,
    },
  },
  {
    name: 'gotoSection',
    description: 'Jump to the first slide of a section by its exact section name.',
    parameters: {
      type: 'object',
      properties: { name: { type: 'string', description: 'Section name, e.g. "Prompting"' } },
      required: ['name'],
      additionalProperties: false,
    },
  },
  {
    name: 'findSlides',
    description: 'Search slide titles and content. Returns the best matching slides with their numbers.',
    parameters: {
      type: 'object',
      properties: { query: { type: 'string', description: 'Keywords to search for' } },
      required: ['query'],
      additionalProperties: false,
    },
  },
  {
    name: 'goBack',
    description: 'Go back to the slide the user was on before the most recent jump ("go back to where I was").',
    parameters: noParams,
  },
  {
    name: 'lookupKnowledge',
    description:
      'Search the curated knowledge base for background details, definitions, and source links that expand on the slides. Use this when the user asks what a topic means or wants detail/sources, not just navigation.',
    parameters: {
      type: 'object',
      properties: { query: { type: 'string', description: 'Keywords/topic to look up' } },
      required: ['query'],
      additionalProperties: false,
    },
  },
  { name: 'nextSlide', description: 'Move to the next slide.', parameters: noParams },
  { name: 'prevSlide', description: 'Move to the previous slide.', parameters: noParams },
  { name: 'whereAmI', description: 'Describe the current slide.', parameters: noParams },
];

export const deckAgentInstructions = (catalogListing: string): string =>
  [
    'You are a concise assistant that controls a live workshop slide deck for the presenter.',
    'When the user asks to move around the deck, call the navigation tools; do not just describe what you would do.',
    'Use the catalog below to pick a slide number. If unsure which slide matches, call findSlides first, then gotoSlide.',
    'When the user asks to go back to where they were, call goBack.',
    'To answer questions about what a topic means or to cite sources/background beyond the slide text, call lookupKnowledge and use the returned source links in your reply.',
    'After performing an action, reply in one short sentence (e.g. "Done - on The Core Loop."). Answer questions briefly.',
    'Each user message starts with the current deck position in brackets.',
    '',
    'Scope (strict):',
    '- Help only with this workshop deck. Ground every substantive answer in the slide catalog, findSlides, lookupKnowledge, or readRepoFile/listRepoFiles results.',
    '- Never answer from general or training knowledge, and never invent facts. Cite only source links that a tool returned.',
    '- If a question is unrelated to the deck, or no tool result supports an answer, reply in one sentence that you can only help with this workshop deck and its docs.',
    '- You have no web access. To read the README, Markdown, or code, use listRepoFiles and readRepoFile.',
    '',
    'Writing style (always apply):',
    writingStyleRules,
    '',
    'Slide catalog (number | section | title - subtitle):',
    catalogListing,
  ].join('\n');

// Custom HMR WebSocket events between the page and the dev server
export const DeckAgentEvent = {
  hello: 'deck-agent:hello',
  status: 'deck-agent:status',
  prompt: 'deck-agent:prompt',
  reply: 'deck-agent:reply',
  error: 'deck-agent:error',
  toolCall: 'deck-agent:tool-call',
  toolResult: 'deck-agent:tool-result',
} as const;

export interface HelloPayload {
  catalog: string;
}

export type StatusPayload =
  | { state: 'ready'; model: string }
  | { state: 'error'; message: string };

export interface PromptPayload {
  requestId: string;
  text: string;
  position: string;
}

export interface ReplyPayload {
  requestId: string;
  reply: string;
}

export interface ErrorPayload {
  requestId: string;
  message: string;
}

export interface ToolCallPayload {
  callId: string;
  name: string;
  args: Record<string, unknown>;
}

export interface ToolResultPayload {
  callId: string;
  result: string;
}
