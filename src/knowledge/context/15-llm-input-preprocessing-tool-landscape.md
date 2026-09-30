---
section: Context
scope: slide
slide: 15
title: "LLM Input Preprocessing: Tool Landscape"
tags: context, preprocessing, jina, firecrawl, markitdown, gitingest
---
Practical tools for cleaning content before it enters the window, in two categories.
**Zero-config API services** (no setup, no code): **Jina Reader** — prepend `https://r.jina.ai/`
to any URL; free, handles JS rendering, image captioning, and PDF reading. **Firecrawl**
(firecrawl.dev) — open-source, more feature-rich for full-site crawling and RAG pipelines.
**CLI & local tools**: **strip-tags + llm CLI** (Simon Willison) — pipe `curl url | strip-tags |
llm "summarize"`. **GitIngest / repomix** — turn a GitHub repo into one prompt-friendly text
file. **Microsoft MarkItDown** (`pip install markitdown`) — convert PDF, Word, Excel, and
PowerPoint to Markdown. The tooling has matured; these two categories cover most developer use
cases.
