---
section: Context
scope: section
title: Context
tags: context-engineering, context-window, tokens, lost-in-the-middle, rag, preprocessing, code-maps
sources: https://twitter.com/karpathy/status/1937902205765607626, https://arxiv.org/abs/2307.03172, https://github.com/JordanCoin/codemap, https://github.com/ast-grep/ast-grep, https://github.com/JanDeDobbeleer/oh-my-posh/blob/main/AGENTS.md
---
Context engineering — filling the context window with just the right information for the next
step. Covers what the window is, everything that competes for it (system prompt, history,
files, tool defs/results, retrieved docs), how history grows every turn, the "lost in the
middle" attention finding, the "dumb zone" where quality degrades before the token ceiling,
and how to architect instructions and codebases for efficiency. Also: activating pre-trained
knowledge, the signal-to-noise problem, and preprocessing raw content to Markdown.

Source links:
- **Karpathy tweet (June 2025)**: the origin of the "context engineering" framing.
- **arXiv:2307.03172** ("Lost in the Middle", Liu et al. 2023): models recall start/end better
  than the middle of long contexts.
- **JordanCoin/codemap**: generates a structural map of a codebase; **ast-grep/ast-grep**:
  AST-based structural search — both give agents structure instead of full-file dumps.
- **oh-my-posh AGENTS.md**: live example of a written orientation table + ast-grep usage.
