---
section: MCP
scope: slide
slide: 10
title: "Demo: A Published, Public MCP Server"
tags: mcp, demo, oh-my-posh, registry, streamable-http, ci
sources: https://ohmyposh.dev/api/mcp, https://registry.modelcontextprotocol.io
---
A live demo: oh-my-posh's `website/api/mcp/` is a real remote (`streamable-http`) MCP server,
published to the official MCP Registry on every push to main. It validates an oh-my-posh theme
config (JSON/YAML/TOML) against the official schema in a single tool call, instead of guessing
whether a field name is stale. CI (`publish-mcp.yml`) bumps the version from the git tag,
validates `server.json`, and publishes via DNS-authenticated `mcp-publisher` — no manual
registry step. Any MCP client (Claude Desktop, Cursor, Copilot) can call
`ohmyposh.dev/api/mcp` live and feed it a broken theme to see the validation error.
