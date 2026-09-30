---
section: MCP
scope: slide
slide: 2
title: MCP Config by Tool
tags: mcp, config, servers, project-config, copilot
sources: https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp
---
MCP is tool-agnostic, but every assistant registers MCP servers in its own config file path.
Project-level configs commit with the repo, so the whole team shares the same servers. The
slide shows a matrix of where each tool expects that config. For Copilot specifically, MCP
outside VS Code is IDE-specific — see the GitHub MCP docs linked as the source for the exact
file locations and setup.
