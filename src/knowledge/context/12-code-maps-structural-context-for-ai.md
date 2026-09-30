---
section: Context
scope: slide
slide: 12
title: "Code Maps: Structural Context for AI"
tags: context, code-maps, codemap, ast-grep, structure, navigation
sources: https://github.com/JordanCoin/codemap, https://github.com/ast-grep/ast-grep
---
Code maps give agents a structural overview of a codebase — file relationships, function
signatures, module boundaries — without loading every line into context. Two tools:
**JordanCoin/codemap** generates a concise map of the whole codebase (structure, exports,
relationships) as high-level orientation context, great for onboarding an agent; and
**ast-grep/ast-grep** does AST-based structural search and rewrite, finding patterns by shape
rather than text, across 20+ languages, so you can surgically extract only the relevant
snippet. Use codemap for orientation (project overview before navigating/modifying) and ast-grep
for precision (pull only the exact functions/patterns needed). Give the AI the map, not the
whole territory.
