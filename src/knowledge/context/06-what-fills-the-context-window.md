---
section: Context
scope: slide
slide: 6
title: What Fills the Context Window
tags: context-window, system-prompt, history, tools, rag, taxonomy
---
The window is shared by everything the model processes, so it helps to know the components
competing for space: the **system prompt** (instructions, persona, rules — always present),
**conversation history** (all previous turns, growing every exchange), **files &
attachments** (documents, code, PDFs — can be large), **tool definitions** (the functions the
model can call), **tool call results** (output returned to the model), and **retrieved docs
(RAG)** (semantically relevant chunks injected at query time). Every component competes for the
same finite space; context engineering is deciding what earns its place.
