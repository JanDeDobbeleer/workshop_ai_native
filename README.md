# AI Native Software Engineering Workshop

An interactive slideshow for the **AI Native Developer Workshop**, built with React and TypeScript. Covers a full curriculum from AI fundamentals to hands-on tool demos.

## Slides

| Section           | Topics                                             |
| ----------------- | -------------------------------------------------- |
| Introduction      | Workshop overview, the AI-native developer mindset |
| Evolution         | How software development is changing with AI       |
| LLM Basics        | Transformers, context windows, GPU acceleration    |
| 4D Fluency        | Framework for effective AI collaboration           |
| Models            | Model landscape and selection guidance             |
| Prompting         | Prompt engineering techniques                      |
| Instructions      | Custom instructions — cross-tool config paths      |
| Agents & Skills   | Two portable layers, custom agents, skills, delegation, permissions |
| Context           | Context window management and attachment           |
| Spec Kit          | Spec-driven development with AI                    |
| Security          | OWASP Top 10, secure AI-assisted coding            |
| MCP               | Model Context Protocol                             |
| Team Knowledge    | Shared knowledge bases (Spaces, APM, repos)        |
| Terminal Agents   | CLI entry points — Copilot, Claude, Cursor, Codex  |
| Multi-Agent       | Scoped conversations, isolated code work, review capacity |
| Loop Engineering  | Reliable sequential agent workflows                |
| Graph Engineering | Explicit routing, safe branches, gates, synthesis  |
| Closing           | Summary and next steps                             |
| Ollama *(addendum)* | Running models locally                           |
| Agent SDKs *(addendum)* | Programmatic agent runtimes                    |

## Tech Stack

- **React 18** + **TypeScript** — UI and type safety
- **Vite** — Dev server and build tool
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Icons

## Getting Started

### Prerequisites

- Node.js 18+

### Installation & Development

```bash
git clone https://github.com/JanDeDobbeleer/workshop_ai_native.git
cd workshop_ai_native
npm install
npm run dev
```

Open `http://localhost:5173` in your browser. The app is password-protected; the default local dev password is `workshop`.

### Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build
```

## Authentication

The slideshow uses a lightweight password gate (SHA-256 hashed, client-side only — not a security mechanism, just casual access control).

Set the password by providing a SHA-256 hash via environment variable:

```bash
VITE_WORKSHOP_PASSWORD_HASH=<your-hash> npm run build
```

To generate a hash in the browser console:

```js
crypto.subtle.digest('SHA-256', new TextEncoder().encode('your-password'))
  .then(buf => Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join(''))
  .then(console.log)
```

## Navigation

| Action          | Control                          |
| --------------- | -------------------------------- |
| Next slide      | → arrow key or Next button       |
| Previous slide  | ← arrow key or Previous button   |
| Jump to section | Hamburger menu or dot indicators |
| Toggle nav side | Panel toggle button              |
| Deck assistant  | Chat-bot button (bottom-right, `npm run dev` only); click outside or press Esc to close |

## Deck Assistant

A pop-out chat (chat-bot button, bottom-right) that drives the deck from plain text. It is powered by the [GitHub Copilot SDK](https://github.com/github/copilot-sdk), which runs inside the Vite dev server. The model calls a small set of navigation tools, and those tools run in the page. For example:

- "Go to the slide about the core loop": finds the slide by title/content and jumps to it
- "Go back to where I was": returns to the slide the last jump started from (menu jumps count too)
- "Next slide", "Go to the MCP section", "Where am I?"

Slide numbers in replies match the `?slide=N` URL. The button animates while the model is thinking.

### Requirements

The assistant only exists when you run the site locally with `npm run dev`. `npm run build` and the deployed site don't include it.

- Node.js ^20.19 or >=22.12
- A GitHub Copilot subscription
- A logged-in Copilot CLI user (run `copilot` and use `/login`), or a token in `GH_TOKEN` / `GITHUB_TOKEN`

The model defaults to `gpt-5-mini`. To use a different Copilot model, for example Microsoft's `mai-code-1.1-flash`:

```bash
DECK_AGENT_MODEL=mai-code-1.1-flash npm run dev
```

```powershell
$env:DECK_AGENT_MODEL = "mai-code-1.1-flash"; npm run dev
```

The chat shows the connection status. If the session can't start, the chat shows the reason, for example that you're not logged in, or that the model isn't available along with the models your account can use.

### Assistant latency diagnostics

The Vite server terminal logs elapsed times for Copilot runtime startup, model-list loading, session creation/readiness, each prompt through its final response, and each browser tool round trip (including timeouts). Prompt timings cover the complete SDK turn, including any model/tool steps; prompt text and reply content are not logged. Runtime startup is a one-time cold-start cost per dev-server process, while session setup occurs when a page connects.

To compare models, restart `npm run dev` with a different `DECK_AGENT_MODEL` and send the same representative prompts in a fresh page session. Compare startup/setup separately from prompt durations, and distinguish the first prompt from later prompts so cold-start effects do not skew the comparison.

### What the agent can do

The session is locked down to the deck's navigation tools: go to a slide or section, search slides, next/previous, go back, and "where am I". It can also look up a curated Markdown knowledge base (see [`src/knowledge/README.md`](src/knowledge/README.md)) for background details and source links that aren't on the slides themselves. It can also list and read the README, Markdown and source under `src/`, `server/` and `docs/`, through a read-only, allow-listed reader that rejects paths outside the repo, dotfiles, `node_modules` and build output. It has no shell, write or web access, and it doesn't load custom instructions, skills or memory from your machine. Each page load starts a new conversation.

The assistant answers only from the slides, the knowledge base and those repo files, and says so when a question falls outside the deck. Its replies always follow a condensed version of the writing-clearly-and-concisely rules (`src/agent/writingStyle.ts`), embedded in the repo rather than loaded from your machine. Model inference itself still calls the GitHub Copilot API.
