---
section: Instructions
scope: slide
slide: 7
title: AGENTS.md
tags: instructions, agents-md, cross-tool, nested, portable
---
`AGENTS.md` is a convention that works across multiple AI coding assistants — GitHub Copilot,
Claude Code, Cursor, and more. Cross-tool benefits: the same file works in VS Code and Claude,
gives team consistency across tools, eases migration between assistants, and provides one source
of truth. Nested files are experimental (`/frontend/AGENTS.md`, `/backend/AGENTS.md`,
`/tests/AGENTS.md`; enable with `chat.useNestedAgentsMdFiles`). Recommendation: use `AGENTS.md`
for broad project context and AI-agnostic rules, and `copilot-instructions.md` for
Copilot-specific features. (For portable *skills* rather than instructions, see Agents & Skills
→ Two Portable Layers.)
