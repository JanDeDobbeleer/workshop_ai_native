import type { SlideCatalogEntry } from '../utils/slideCatalog';
import { catalogListing } from './navigationTools';
import { DeckAgentEvent } from './deckAgentProtocol';
import type { ErrorPayload, ReplyPayload, StatusPayload, ToolCallPayload } from './deckAgentProtocol';
import type { AgentBackend, AgentResult, ToolExecutor } from './types';

/** The dev server's HMR channel (`import.meta.hot`), only present under `npm run dev` */
export type HotChannel = NonNullable<ImportMeta['hot']>;

export interface CopilotBridge extends AgentBackend {
  /** Ask the dev server to start a Copilot session; status updates arrive via `onStatus` */
  connect(onStatus: (status: StatusPayload) => void): void;
  dispose(): void;
}

interface PendingRequest {
  resolve: (result: AgentResult) => void;
  reject: (error: Error) => void;
}

/**
 * Talks to the Copilot SDK running in the Vite dev server (server/deckAgentPlugin.ts)
 * over the HMR WebSocket. The model runs on the server; tool calls come back here
 * and run against the live deck.
 */
export const createCopilotBridge = (
  hot: HotChannel,
  executor: ToolExecutor,
  catalog: SlideCatalogEntry[]
): CopilotBridge => {
  const pending = new Map<string, PendingRequest>();
  let nextRequestId = 0;
  let statusListener: ((status: StatusPayload) => void) | undefined;

  const onStatus = (status: StatusPayload) => statusListener?.(status);

  const onToolCall = ({ callId, name, args }: ToolCallPayload) => {
    hot.send(DeckAgentEvent.toolResult, { callId, result: executor.execute(name, args ?? {}) });
  };

  const onReply = ({ requestId, reply }: ReplyPayload) => {
    pending.get(requestId)?.resolve({ reply });
    pending.delete(requestId);
  };

  const onError = ({ requestId, message }: ErrorPayload) => {
    pending.get(requestId)?.reject(new Error(message));
    pending.delete(requestId);
  };

  hot.on(DeckAgentEvent.status, onStatus);
  hot.on(DeckAgentEvent.toolCall, onToolCall);
  hot.on(DeckAgentEvent.reply, onReply);
  hot.on(DeckAgentEvent.error, onError);

  const connect = (listener: (status: StatusPayload) => void) => {
    statusListener = listener;
    hot.send(DeckAgentEvent.hello, { catalog: catalogListing(catalog) });
  };

  const send = (text: string) =>
    new Promise<AgentResult>((resolve, reject) => {
      const requestId = String(++nextRequestId);
      pending.set(requestId, { resolve, reject });
      hot.send(DeckAgentEvent.prompt, { requestId, text, position: executor.describePosition() });
    });

  const dispose = () => {
    hot.off(DeckAgentEvent.status, onStatus);
    hot.off(DeckAgentEvent.toolCall, onToolCall);
    hot.off(DeckAgentEvent.reply, onReply);
    hot.off(DeckAgentEvent.error, onError);
    statusListener = undefined;
    pending.forEach(({ reject }) => reject(new Error('Assistant disconnected.')));
    pending.clear();
  };

  return { connect, send, dispose };
};
