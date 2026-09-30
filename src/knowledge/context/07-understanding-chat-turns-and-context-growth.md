---
section: Context
scope: slide
slide: 7
title: Understanding Chat Turns & Context Growth
tags: context, turns, history, memory, growth
---
Each turn includes everything that came before. The AI has no persistent memory — it rebuilds
context from scratch every conversation, re-sending the system prompt, prior prompts, and prior
responses on every turn. So context grows because every prompt and response stays in history,
system prompts repeat each turn, and attached files add to the total. Implications: long
conversations hit limits faster, verbose responses consume capacity, and starting fresh resets
your context. Be intentional about what goes in — every message takes space away from the AI's
ability to reason.
