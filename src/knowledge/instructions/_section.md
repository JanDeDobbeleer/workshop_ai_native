---
section: Instructions
scope: section
title: Instructions
tags: instructions, custom-instructions, agents-md, applyTo, thin-pointer, cross-tool
sources: https://github.com/github/awesome-copilot/tree/main/instructions, https://github.com/JanDeDobbeleer/workshop_ai_native/tree/main/.github, https://github.com/JanDeDobbeleer/oh-my-posh/tree/main/.github
---
Persistent guidance that every AI session inherits automatically, and where to put it in each
tool. Three concepts (not filenames): project-wide rules, scoped rules (only certain
files/folders), and a cross-tool convention (one file multiple tools read). Copilot uses
`.github/copilot-instructions.md` (global) and `*.instructions.md` with `applyTo` globs
(conditional); `AGENTS.md` is the emerging cross-tool standard. Best practices: keep them
short and specific, version-control them, and iterate via feedback loops.

Source links:
- **awesome-copilot/instructions**: community example instruction files to start from.
- **workshop_ai_native/.github** and **oh-my-posh/.github**: live production examples,
  including the "thin-pointer" pattern where `copilot-instructions.md` is five lines that
  point at `AGENTS.md` as the single source of truth.
