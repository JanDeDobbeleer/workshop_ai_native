---
section: Instructions
scope: slide
slide: 6
title: Conditional Instructions
tags: instructions, conditional, applyTo, frontmatter, glob, scoped
---
Use `.instructions.md` files with YAML frontmatter to apply rules only for specific file types.
Example: a `python-standards.instructions.md` with `applyTo: "**/*.py"` (PEP 8, type hints,
docstrings, pytest); or a `react-components.instructions.md` with `applyTo:
"src/components/**/*.tsx"` (functional components, props interface above the component, custom
hooks for logic). Storage locations: workspace/project-specific in `.github/instructions/`, or
user-profile (all projects) in `~/.vscode/instructions/`. This is the mechanism behind
context-efficient, scoped instructions — the relevant rules load only when you touch matching
files.
