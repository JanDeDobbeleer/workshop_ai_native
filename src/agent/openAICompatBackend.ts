import type { SlideCatalogEntry } from '../utils/slideCatalog';
import { slideLabel, slideNumber } from './navigationTools';
import type { AgentBackend, AgentConfig, ChatMessage, ToolExecutor } from './types';

/**
 * Defaults target GitHub Models, an OpenAI-compatible chat-completions endpoint.
 * Create a token at https://github.com/settings/tokens (fine-grained, "Models: read").
 * Other models or Azure OpenAI / OpenAI endpoints work by changing `model` / `baseUrl`,
 * provided the model supports tool calling (check before switching to e.g. a small Phi model). If the browser blocks the call (CORS), point
 * `baseUrl` at a proxy that forwards to the same API.
 */
export const DEFAULT_AGENT_CONFIG: AgentConfig = {
  baseUrl: 'https://models.github.ai/inference',
  apiKey: '',
  model: 'openai/gpt-4o-mini',
};

const MAX_TOOL_ROUNDS = 5;

interface ToolCall {
  id: string;
  type: 'function';
  function: { name: string; arguments: string };
}

interface ApiMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string | null;
  tool_calls?: ToolCall[];
  tool_call_id?: string;
}

interface CompletionResponse {
  choices?: { message?: ApiMessage }[];
  error?: { message?: string };
}

const catalogListing = (catalog: SlideCatalogEntry[]): string =>
  catalog
    .map((entry) => `${slideNumber(entry)} | ${entry.section} | ${slideLabel(entry)}${entry.subtitle ? ` - ${entry.subtitle}` : ''}`)
    .join('\n');

const systemPrompt = (catalog: SlideCatalogEntry[], position: string): string =>
  [
    'You are a concise assistant that controls a live workshop slide deck for the presenter.',
    'When the user asks to move around the deck, call the navigation tools; do not just describe what you would do.',
    'Use the catalog below to pick a slide number. If unsure which slide matches, call findSlides first, then gotoSlide.',
    'When the user asks to go back to where they were, call goBack.',
    'After performing an action, reply in one short sentence (e.g. "Done - on The Core Loop."). Answer questions briefly.',
    '',
    `Current position: ${position}`,
    '',
    'Slide catalog (number | section | title - subtitle):',
    catalogListing(catalog),
  ].join('\n');

const parseArgs = (raw: string): Record<string, unknown> => {
  try {
    const parsed: unknown = JSON.parse(raw || '{}');
    return parsed && typeof parsed === 'object' ? (parsed as Record<string, unknown>) : {};
  } catch {
    return {};
  }
};

export const createBackend = (
  config: AgentConfig,
  toolExecutor: ToolExecutor,
  catalog: SlideCatalogEntry[]
): AgentBackend => {
  const endpoint = `${config.baseUrl.replace(/\/+$/, '')}/chat/completions`;

  const complete = async (messages: ApiMessage[]): Promise<ApiMessage> => {
    let response: Response;
    try {
      response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.apiKey}`,
        },
        body: JSON.stringify({
          model: config.model,
          messages,
          tools: toolExecutor.tools,
          tool_choice: 'auto',
          temperature: 0,
        }),
      });
    } catch (error) {
      throw new Error(`Could not reach the model endpoint (network or CORS): ${(error as Error).message}`);
    }

    let data: CompletionResponse;
    try {
      data = (await response.json()) as CompletionResponse;
    } catch {
      throw new Error(`Model endpoint returned ${response.status} with an unreadable body.`);
    }
    if (!response.ok) {
      throw new Error(`Model error ${response.status}: ${data.error?.message ?? response.statusText}`);
    }
    const message = data.choices?.[0]?.message;
    if (!message) {
      throw new Error('Model returned no message.');
    }
    return message;
  };

  const send = async (userText: string, history: ChatMessage[]) => {
    const messages: ApiMessage[] = [
      { role: 'system', content: systemPrompt(catalog, toolExecutor.describePosition()) },
      ...history
        .filter((message) => message.role === 'user' || message.role === 'assistant')
        .map((message) => ({ role: message.role, content: message.content })),
      { role: 'user', content: userText },
    ];

    const actions: string[] = [];
    for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
      const message = await complete(messages);
      const toolCalls = message.tool_calls ?? [];
      if (toolCalls.length === 0) {
        return { reply: message.content?.trim() || actions[actions.length - 1] || 'Done.' };
      }
      messages.push({ role: 'assistant', content: message.content ?? null, tool_calls: toolCalls });
      toolCalls.forEach((call) => {
        const result = toolExecutor.execute(call.function.name, parseArgs(call.function.arguments));
        actions.push(result);
        messages.push({ role: 'tool', tool_call_id: call.id, content: result });
      });
    }
    return { reply: actions[actions.length - 1] ?? 'Done.' };
  };

  return { send };
};
