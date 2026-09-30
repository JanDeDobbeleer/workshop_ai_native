---
section: Context
scope: slide
slide: 10
title: Architecting Instructions for Context Efficiency
tags: context, instructions, scoped, applyTo, agents-md, efficiency
---
Every instruction file loaded consumes context-window space. Unscoped instructions load
everything all the time, leaving less room for actual work; scoped instructions load only what's
relevant, keeping the window free. Scope by file type with `applyTo` frontmatter in
`.instructions.md` files (e.g. `applyTo: "**/*.go"`, `"**/*.ts"`, `"**/*.test.*"`), or scope by
directory with per-folder `AGENTS.md` (`/api/AGENTS.md`, `/frontend/AGENTS.md`, `/db/AGENTS.md`).
Architecture strategy: root level for project-wide conventions, directory level for
layer-specific patterns, file-type level for language/format rules. Pro tip: put detailed,
verbose instructions in scoped files and keep root instructions minimal, because root is always
loaded.
