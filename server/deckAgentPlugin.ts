import path from 'node:path';
import { performance } from 'node:perf_hooks';
import type { Plugin, ViteDevServer, WebSocketClient } from 'vite';
import type { CopilotClient, CopilotSession } from '@github/copilot-sdk';
import { DeckAgentEvent, deckAgentInstructions, toolDefinitions } from '../src/agent/deckAgentProtocol';
import { listRepoFiles, readRepoFile } from './repoReader';
import type { HelloPayload, PromptPayload, StatusPayload, ToolResultPayload } from '../src/agent/deckAgentProtocol';

const DEFAULT_MODEL = 'gpt-5-mini';
const TOOL_TIMEOUT_MS = 10_000;
const PROMPT_TIMEOUT_MS = 120_000;

interface PendingToolCall {
  resolve: (result: string) => void;
  timer: ReturnType<typeof setTimeout>;
  startedAt: number;
  name: string;
}

interface ClientState {
  session?: CopilotSession;
  /** Bumped on every hello so a slower, superseded session setup can be discarded */
  generation: number;
  pendingToolCalls: Map<string, PendingToolCall>;
}

const errorMessage = (error: unknown): string => (error instanceof Error ? error.message : String(error));
const elapsedMs = (startedAt: number): number => Math.round(performance.now() - startedAt);

/**
 * Runs the GitHub Copilot SDK inside the Vite dev server and bridges it to the deck's
 * chat over the HMR WebSocket. Dev-only: `vite build` and `vite preview` never load it.
 * The agent can only call the deck navigation tools, which execute in the browser.
 */
export const deckAgentPlugin = (): Plugin => ({
  name: 'deck-agent',
  apply: 'serve',
  configureServer(server: ViteDevServer) {
    const model = process.env.DECK_AGENT_MODEL || DEFAULT_MODEL;
    const log = (message: string) => server.config.logger.info(`[deck-agent] ${message}`, { timestamp: true });
    const logError = (message: string) => server.config.logger.error(`[deck-agent] ${message}`, { timestamp: true });

    // Read-only and allow-listed in repoReader; the only file access the session gets
    const repoTools = [
      {
        name: 'listRepoFiles',
        description: 'List readable repository files (README, Markdown, source) in a directory, relative to the repo root.',
        parameters: {
          type: 'object',
          properties: { dir: { type: 'string', description: 'Directory such as "src" (default: repo root)' } },
          additionalProperties: false,
        },
        skipPermission: true,
        handler: (args: { dir?: string }) => listRepoFiles(server.config.root, args?.dir).catch(errorMessage),
      },
      {
        name: 'readRepoFile',
        description: 'Read one repository file (README, Markdown, or source) by repo-relative path.',
        parameters: {
          type: 'object',
          properties: { path: { type: 'string', description: 'Repo-relative path, e.g. "README.md"' } },
          required: ['path'],
          additionalProperties: false,
        },
        skipPermission: true,
        handler: (args: { path: string }) => readRepoFile(server.config.root, String(args?.path ?? '')).catch(errorMessage),
      },
    ];

    const clients = new Map<WebSocketClient, ClientState>();
    let copilot: Promise<{ client: CopilotClient; sdk: typeof import('@github/copilot-sdk') }> | undefined;
    let nextCallId = 0;

    const startCopilot = () => {
      copilot ??= (async () => {
        const sdk = await import('@github/copilot-sdk');
        // Empty mode needs its own state directory; keep it out of ~/.copilot and out of git
        const baseDirectory = path.resolve(server.config.root, 'node_modules/.cache/deck-agent');
        const client = new sdk.CopilotClient({ mode: 'empty', baseDirectory });
        const startupAt = performance.now();
        await client.start();
        log(`Copilot runtime started in ${elapsedMs(startupAt)}ms`);
        return { client, sdk };
      })();
      copilot.catch(() => {
        copilot = undefined; // allow a retry on the next hello
      });
      return copilot;
    };

    const stateFor = (ws: WebSocketClient): ClientState => {
      let state = clients.get(ws);
      if (!state) {
        state = { generation: 0, pendingToolCalls: new Map() };
        clients.set(ws, state);
        ws.socket.on('close', () => {
          void state?.session?.disconnect().catch(() => undefined);
          clients.delete(ws);
        });
      }
      return state;
    };

    // Ask the page to run a navigation tool and wait for its result
    const callBrowser = (ws: WebSocketClient, state: ClientState, name: string, args: unknown): Promise<string> =>
      new Promise((resolve) => {
        const callId = String(++nextCallId);
        const startedAt = performance.now();
        const timer = setTimeout(() => {
          state.pendingToolCalls.delete(callId);
          log(`browser tool ${name} call=${callId} timed out after ${elapsedMs(startedAt)}ms`);
          resolve('The deck did not respond.');
        }, TOOL_TIMEOUT_MS);
        state.pendingToolCalls.set(callId, { resolve, timer, startedAt, name });
        ws.send(DeckAgentEvent.toolCall, { callId, name, args: args ?? {} });
      });

    const explain = (error: unknown): string => {
      const message = errorMessage(error);
      if (/auth|login|token|401|403|unauthori[sz]ed|not signed in/i.test(message)) {
        return `${message}. Log in to Copilot (run \`copilot\` and /login, or \`gh auth login\`), or set GH_TOKEN/GITHUB_TOKEN.`;
      }
      return message;
    };

    server.ws.on(DeckAgentEvent.hello, async (data: HelloPayload, ws: WebSocketClient) => {
      const setupAt = performance.now();
      const state = stateFor(ws);
      const generation = ++state.generation;
      const previous = state.session;
      state.session = undefined;
      void previous?.disconnect().catch(() => undefined);

      const sendStatus = (status: StatusPayload) => ws.send(DeckAgentEvent.status, status);
      try {
        const { client, sdk } = await startCopilot();
        // The runtime silently falls back to another model for unknown ids, so check up front
        const modelListAt = performance.now();
        const modelIds = (await client.listModels()).map((m) => m.id);
        log(`model list loaded in ${elapsedMs(modelListAt)}ms (${modelIds.length} available)`);
        if (!modelIds.includes(model)) {
          throw new Error(`Model "${model}" is not available. Set DECK_AGENT_MODEL to one of: ${modelIds.join(', ')}`);
        }
        const sessionSetupAt = performance.now();
        const session = await client.createSession({
          model,
          tools: [
            ...toolDefinitions.map((tool) => ({
              name: tool.name,
              description: tool.description,
              parameters: tool.parameters,
              skipPermission: true,
              handler: (args: unknown) => callBrowser(ws, state, tool.name, args),
            })),
            ...repoTools,
          ],
          availableTools: [...toolDefinitions, ...repoTools].reduce((set, tool) => set.addCustom(tool.name), new sdk.ToolSet()),
          onPermissionRequest: () => ({ kind: 'reject', feedback: 'Only deck navigation tools are allowed.' }),
          infiniteSessions: { enabled: false },
          // Nothing from the host machine: no repo instructions, skills, memory or cross-session store
          skipCustomInstructions: true,
          enableSkills: false,
          memory: { enabled: false },
          enableSessionStore: false,
          systemMessage: { mode: 'replace', content: deckAgentInstructions(data.catalog) },
        });
        if (generation !== state.generation || !clients.has(ws)) {
          void session.disconnect().catch(() => undefined);
          return;
        }
        state.session = session;
        log(`session created in ${elapsedMs(sessionSetupAt)}ms; ready (model ${model}) after ${elapsedMs(setupAt)}ms total`);
        sendStatus({ state: 'ready', model });
      } catch (error) {
        const message = explain(error);
        logError(`session setup failed after ${elapsedMs(setupAt)}ms: ${message}`);
        if (generation === state.generation) {
          sendStatus({ state: 'error', message });
        }
      }
    });

    server.ws.on(DeckAgentEvent.toolResult, ({ callId, result }: ToolResultPayload, ws: WebSocketClient) => {
      const pending = clients.get(ws)?.pendingToolCalls;
      const call = pending?.get(callId);
      if (call) {
        clearTimeout(call.timer);
        pending?.delete(callId);
        log(`browser tool ${call.name} call=${callId} completed in ${elapsedMs(call.startedAt)}ms`);
        call.resolve(result);
      }
    });

    server.ws.on(DeckAgentEvent.prompt, async ({ requestId, text, position }: PromptPayload, ws: WebSocketClient) => {
      const session = clients.get(ws)?.session;
      if (!session) {
        ws.send(DeckAgentEvent.error, { requestId, message: 'Assistant not ready.' });
        return;
      }
      const promptAt = performance.now();
      try {
        const event = await session.sendAndWait({ prompt: `[${position}]\n${text}` }, PROMPT_TIMEOUT_MS);
        log(`prompt request=${requestId} completed in ${elapsedMs(promptAt)}ms`);
        ws.send(DeckAgentEvent.reply, { requestId, reply: event?.data.content?.trim() || 'Done.' });
      } catch (error) {
        const message = explain(error);
        logError(`prompt request=${requestId} failed after ${elapsedMs(promptAt)}ms: ${message}`);
        ws.send(DeckAgentEvent.error, { requestId, message });
      }
    });

    server.httpServer?.on('close', () => {
      clients.forEach((state) => void state.session?.disconnect().catch(() => undefined));
      clients.clear();
      void copilot?.then(({ client }) => client.stop()).catch(() => undefined);
    });
  },
});
