---
section: MCP
scope: slide
slide: 9
title: MCP Apps in Action
tags: mcp, mcp-apps, vscode, iframe, ui-resource
---
How an MCP App renders: (1) the tool declares a `ui://` resource containing HTML; (2) the LLM
calls the tool; (3) the host renders the result in a sandboxed iframe. Example apps shown in VS
Code: interactive list reordering (drag-and-drop), a performance profiler (interactive flame
graph), a feature-flag selector (searchable picker with environment status), and Storybook
integration (preview stories directly in the editor). The sandboxed iframe is what keeps
server-provided UI from having free rein over the host.
