---
section: Context
scope: slide
slide: 4
title: Explicit Context
tags: context, attach, mentions, copilot, cursor, claude
---
Attach what the model needs using your tool's syntax instead of pasting whole files. Copilot
(VS Code): `#file`, `#folder`, `#codebase`, `@workspace`, `@terminal`, drag-and-drop, and the
current selection is auto-included. Cursor: `@file`, `@folder`. Claude Code: `/add-dir`. Many
tools also accept images, terminal output, and git diffs. Implicit context is always present
too: workspace indexing (semantic search over the codebase), the active file/selection, and —
in agent mode — files the agent fetches on its own. Key point: you don't always need to attach
manually, but when you do, use the right symbol for your tool.
