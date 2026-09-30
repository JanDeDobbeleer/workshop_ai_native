---
section: Context
scope: slide
slide: 11
title: Architecting Codebases for Context Efficiency
tags: context, codebase, modularity, god-classes, single-responsibility
---
Code structure affects AI effectiveness: large monolithic files waste context on irrelevant
code when you only need to change one function. Context-polluting patterns include god classes
(2000+ line files), mixed concerns (logic + UI + data together), copy-paste code, deep nesting
(6+ levels), and no abstractions. Context-efficient patterns: single responsibility (100–300
lines), clear separation of layers, DRY, shallow functions (2–3 levels), and interface
abstractions that hide complexity. A 3000-line file where you needed 50 lines wastes the window;
a 150-line focused file gives relevant context only. Well-architected code = much more effective
AI; small, focused files = maximum context efficiency.
