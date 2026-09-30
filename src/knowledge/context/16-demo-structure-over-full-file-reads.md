---
section: Context
scope: slide
slide: 16
title: "Demo: Structure Over Full-File Reads"
tags: context, demo, agents-md, ast-grep, oh-my-posh, orientation
sources: https://github.com/JanDeDobbeleer/oh-my-posh/blob/main/AGENTS.md
---
A live demo of context efficiency in oh-my-posh. Its AGENTS.md (line 36) says: "Always explore
the actual codebase before planning or writing code. Do not rely on memory or assumptions." Two
practices make that cheap instead of expensive: (1) a **written orientation table** — AGENTS.md
hand-maintains a "Key Paths" table (`src/segments/`, `src/prompt/engine.go`, `src/cache/`) so
one read replaces re-deriving the structure every session; and (2) **ast-grep, not grep/cat** —
the issue-analyzer agent is told to "invoke ast-grep to locate symbols... do not read entire
directories or files to find them," so it matches structurally first and only opens files once
the target is known. Live: github.com/JanDeDobbeleer/oh-my-posh/AGENTS.md.
