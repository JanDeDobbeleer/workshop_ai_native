---
section: MCP
scope: slide
slide: 5
title: MCP Architecture
tags: mcp, host, client, server, architecture
---
MCP has three core components. The **MCP Host** is the user-facing AI interface (the Claude
app, an IDE plugin) that connects to multiple MCP servers. The **MCP Client** is an
intermediary that manages a secure connection — one client per server for isolation — and lives
inside the host. The **MCP Server** is an external program that provides the capabilities and
connects to systems like Google Drive, Slack, GitHub, and databases. Host ↔ Client ↔ Server:
the host owns clients, each client talks to exactly one server.
