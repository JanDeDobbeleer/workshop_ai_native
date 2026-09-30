export type ChatRole = 'user' | 'assistant';

/** UI-facing chat message */
export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export interface AgentResult {
  reply: string;
}

/** Seam between the chat UI and whatever runs the model; the backend keeps the conversation history */
export interface AgentBackend {
  send(userText: string): Promise<AgentResult>;
}

/** Runs navigation tools against the live deck in the browser */
export interface ToolExecutor {
  execute(name: string, args: Record<string, unknown>): string;
  /** Short description of where the deck currently is */
  describePosition(): string;
}
