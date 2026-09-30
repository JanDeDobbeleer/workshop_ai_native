---
section: Instructions
scope: slide
slide: 11
title: "Live Demo: Instructions in Production"
tags: instructions, demo, thin-pointer, oh-my-posh, examples
sources: https://github.com/JanDeDobbeleer/workshop_ai_native/tree/main/.github, https://github.com/JanDeDobbeleer/oh-my-posh/tree/main/.github
---
Closing demo of the Instructions section: real instruction setups in production codebases. Two
example repositories — **this workshop repo** (`workshop_ai_native/.github`, instructions for
building and maintaining the presentation app) and **Oh My Posh** (`oh-my-posh/.github`, an
advanced multi-language project with comprehensive agent instructions). It highlights the
**thin-pointer pattern**: oh-my-posh's entire `.github/copilot-instructions.md` is five lines
that say "All agent guidance lives in AGENTS.md... follow it in full." One source of truth, no
drift between a Claude-flavored copy and a Copilot-flavored copy.
