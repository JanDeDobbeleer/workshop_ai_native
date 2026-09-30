import React, { useEffect, useRef, useState } from 'react';
import { Bot, Loader2, Send, Sparkles, X } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { createToolExecutor } from '../agent/navigationTools';
import { createCopilotBridge } from '../agent/copilotBridge';
import type { CopilotBridge, HotChannel } from '../agent/copilotBridge';
import type { StatusPayload } from '../agent/deckAgentProtocol';
import type { ChatMessage } from '../agent/types';

interface UiMessage extends ChatMessage {
  isError?: boolean;
}

type ConnectionStatus = StatusPayload | { state: 'connecting' };

interface CopilotChatProps {
  /** The dev server's HMR channel; the assistant only exists under `npm run dev` */
  hot: HotChannel;
}

const SUGGESTIONS = ['Go to the core loop slide', 'Go back to where I was', 'Where am I?'];

// Keep keyboard/touch events inside the chat from reaching the deck's window listeners
const stopPropagation = (e: React.SyntheticEvent) => e.stopPropagation();

export const CopilotChat: React.FC<CopilotChatProps> = ({ hot }) => {
  const nav = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<ConnectionStatus>({ state: 'connecting' });
  const [messages, setMessages] = useState<UiMessage[]>([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const bridgeRef = useRef<CopilotBridge>();
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Navigation methods are stable and read live state, so the bridge lives as long as the HMR channel
  useEffect(() => {
    const bridge = createCopilotBridge(hot, createToolExecutor(nav), nav.catalog);
    bridgeRef.current = bridge;
    setStatus({ state: 'connecting' });
    bridge.connect(setStatus);
    return () => {
      bridge.dispose();
      bridgeRef.current = undefined;
    };
  }, [hot]);

  const isReady = status.state === 'ready';

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isThinking]);

  useEffect(() => {
    if (isOpen && isReady) {
      inputRef.current?.focus();
    }
  }, [isOpen, isReady, isThinking]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    const bridge = bridgeRef.current;
    if (!trimmed || isThinking || !isReady || !bridge) {
      return;
    }
    setMessages((prev) => [...prev, { role: 'user', content: trimmed }]);
    setInput('');
    setIsThinking(true);
    try {
      const { reply } = await bridge.send(trimmed);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', content: (error as Error).message, isError: true }]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void send(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const currentEntry = nav.catalog[nav.currentSlide];
  const positionLabel = currentEntry?.title || currentEntry?.section || '';

  return (
    <>
      {isOpen && (
        <div
          role="dialog"
          aria-label="Deck assistant"
          onKeyDown={handleKeyDown}
          onTouchStart={stopPropagation}
          onTouchEnd={stopPropagation}
          className="fixed z-50 right-4 bottom-36 md:right-6 md:bottom-40 w-[calc(100vw-2rem)] sm:w-96 max-h-[70vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden origin-bottom-right transition-all"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <div className="flex items-center gap-2 min-w-0">
              <Bot className="w-5 h-5 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-semibold">Deck Assistant</div>
                <div className="text-xs text-indigo-100 truncate">
                  Slide {nav.currentSlide + 1}{positionLabel ? ` · ${positionLabel}` : ''}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Close assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div
            role="status"
            className={`px-4 py-1.5 text-xs border-b ${
              status.state === 'error'
                ? 'bg-red-50 text-red-800 border-red-200'
                : 'bg-gray-50 text-gray-500 border-gray-200'
            }`}
          >
            {status.state === 'connecting' && (
              <span className="flex items-center gap-1.5">
                <Loader2 className="w-3 h-3 animate-spin" />
                Connecting to Copilot…
              </span>
            )}
            {status.state === 'ready' && (
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Connected to Copilot ({status.model})
              </span>
            )}
            {status.state === 'error' && <span className="break-words">{status.message}</span>}
          </div>

          <div ref={listRef} className="flex-1 min-h-[12rem] overflow-y-auto px-4 py-3 space-y-2 bg-gradient-to-b from-white to-gray-50">
            {messages.length === 0 && (
              <div className="text-center py-4 space-y-3">
                <Sparkles className="w-8 h-8 mx-auto text-indigo-400" />
                <p className="text-sm text-gray-600">Ask me to move around the deck. I remember where you jumped from.</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => void send(suggestion)}
                      disabled={!isReady}
                      className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm whitespace-pre-wrap break-words ${
                    message.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-sm'
                      : message.isError
                        ? 'bg-red-50 text-red-800 border border-red-200 rounded-bl-sm'
                        : 'bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-sm'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start" aria-live="polite" aria-label="Assistant is thinking">
                <div className="flex items-center gap-1 px-3 py-3 rounded-2xl rounded-bl-sm bg-white border border-gray-200 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-3 border-t border-gray-200 bg-white">
            <label htmlFor="copilot-chat-input" className="sr-only">Message the deck assistant</label>
            <input
              id="copilot-chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isThinking || !isReady}
              placeholder={isReady ? 'e.g. jump to the core loop' : 'Waiting for Copilot…'}
              autoComplete="off"
              className="flex-1 px-3 py-2 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
            />
            <button
              type="submit"
              disabled={isThinking || !isReady || !input.trim()}
              className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed z-50 right-4 bottom-20 md:right-6 md:bottom-24 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
        aria-label={isOpen ? 'Close deck assistant' : 'Open deck assistant'}
        aria-expanded={isOpen}
        aria-busy={isThinking}
      >
        {isThinking && (
          <span className="absolute inset-0 rounded-full bg-purple-400 opacity-60 animate-ping" aria-hidden="true" />
        )}
        {isThinking ? (
          <Loader2 className="relative w-6 h-6 animate-spin" />
        ) : isOpen ? (
          <X className="relative w-6 h-6" />
        ) : (
          <Sparkles className="relative w-6 h-6" />
        )}
      </button>
    </>
  );
};
