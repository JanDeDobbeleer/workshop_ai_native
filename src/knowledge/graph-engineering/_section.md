---
section: Graph Engineering
scope: section
title: Graph Engineering
tags: graph, code-changes, workflow, phases, pi-graph, single-path
sources: https://github.com/JanDeDobbeleer/pi-graph, https://pi.dev/
---
Removing the single-path constraint from agent workflows: instead of one linear script, model
work as a graph of phases with gates. Shows where graphs sit next to specs, multi-agent, and
loops, using oh-my-posh's `code-changes` skill (analyze → plan → delegate → supervise → verify)
as the example. The Markdown says *what* each phase does; an extension decides *when* a phase
may end, so the model can't skip a gate.

Source links:
- **github.com/JanDeDobbeleer/pi-graph**: packages the graph/skill for **pi**.
- **pi.dev**: the pi coding agent.
