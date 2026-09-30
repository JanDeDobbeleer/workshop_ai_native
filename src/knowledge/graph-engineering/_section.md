---
section: Graph Engineering
scope: section
title: Graph Engineering
tags: graph, workflow, state, routing, fan-out, fan-in, gates, synthesis, code-changes, pi-graph
sources: https://docs.langchain.com/oss/python/langgraph/graph-api, https://github.com/JanDeDobbeleer/pi-graph, https://pi.dev/
---
Graph engineering makes execution flow explicit through state, nodes, fixed or conditional edges,
branches, joins, cycles, and gates. Specs provide intent and ground truth, workers and sessions
provide execution capacity, and the graph decides how and when work moves.

Safe fan-out gives every branch a bounded contract and routes only the work the current state
requires. One integration owner then synthesizes the results and passes the combined outcome
through review and verification gates. Separate contexts, worktrees, or sandboxes can protect
execution state, but they do not define the graph.

The section uses the `code-changes` workflow as a progressive example. Markdown describes named
phases, handoff artifacts, and stopping points. The pi-graph extension enforces those boundaries
through harness state and tools. Every extra edge adds context, tool calls, debugging, synthesis,
and review cost, so graph structure should prevent a named failure rather than exist by default.

Source links:
- **LangGraph Graph API**: models workflows using state, nodes, and fixed or conditional edges.
- **github.com/JanDeDobbeleer/pi-graph**: packages the graph and skill for **pi**.
- **pi.dev**: the pi coding agent.
