---
section: Instructions
scope: slide
slide: 4
title: Instruction File Types
tags: instructions, copilot, copilot-instructions, instructions-md, agents-md, applyTo
---
Copilot-specific instruction filenames (one column of the matrix). **`.github/copilot-
instructions.md`** — a single *global* file applied to all chat requests in the workspace
automatically; works in VS Code, Visual Studio, and GitHub.com. **`*.instructions.md`** —
multiple *conditional* files that use `applyTo` glob patterns to target file types (e.g.
`applyTo: "**/*.py"`). **`AGENTS.md`** — a *multi-agent*, universal format read by Copilot,
Claude Code, and others, usable at the root or in subfolders (experimental). All files are
combined when sent to the AI: use `copilot-instructions.md` for project-wide rules,
`.instructions.md` for language-specific rules, and `AGENTS.md` for cross-tool compatibility.
