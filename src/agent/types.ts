export type ChatRole = 'system' | 'user' | 'assistant' | 'tool';

/** UI-facing chat message */
export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export interface AgentConfig {
  baseUrl: string;
  apiKey: string;
  model: string;
}

export interface AgentResult {
  reply: string;
}

/** Seam between the chat UI and whatever runs the model (browser client today, a server proxy later) */
export interface AgentBackend {
  send(userText: string, history: ChatMessage[]): Promise<AgentResult>;
}

/** OpenAI-compatible function tool definition */
export interface ToolDefinition {
  type: 'function';
  function: {
    name: string;
    description: string;
    parameters: Record<string, unknown>;
  };
}

export interface ToolExecutor {
  tools: ToolDefinition[];
  execute(name: string, args: Record<string, unknown>): string;
  /** Short description of where the deck currently is, for the system prompt */
  describePosition(): string;
}
