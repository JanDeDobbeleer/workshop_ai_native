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
| Multi-Agent       | Parallel orchestration, worktrees, synthesis       |
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
| Deck assistant  | ✨ floating button (bottom-right) |

## Deck Assistant

A pop-out chat (✨ button, bottom-right) that drives the deck from plain text. It uses an OpenAI-compatible chat-completions model with tool calling to navigate the slides. For example:

- "Go to the slide about the core loop": finds the slide by title/content and jumps to it
- "Go back to where I was": returns to the slide the last jump started from (menu jumps count too)
- "Next slide", "Go to the MCP section", "Where am I?"

Slide numbers in replies match the `?slide=N` URL. The button animates while the model is thinking.

### Setup

Open the chat, click the gear icon, and enter:

| Setting  | Default                                | Notes |
| -------- | -------------------------------------- | ----- |
| API token | *(empty)*                             | A [GitHub token](https://github.com/settings/tokens) with **Models: read** for GitHub Models, or a key for the endpoint below |
| Model    | `openai/gpt-4o-mini`                   | Any model the endpoint serves that supports tool calling |
| Endpoint | `https://models.github.ai/inference`   | Any OpenAI-compatible base URL (`/chat/completions` is appended). Point it at a proxy if the browser blocks the call (CORS) |

Settings live in `sessionStorage` for the current browser session only. The token is never put in the build. Don't put one in a `VITE_` environment variable, because those values end up in the published bundle.
