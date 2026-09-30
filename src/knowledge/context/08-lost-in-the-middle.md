---
section: Context
scope: slide
slide: 8
title: Lost in the Middle
tags: context, attention, recall, lost-in-the-middle, research
sources: https://arxiv.org/abs/2307.03172
---
Models perform significantly better when relevant information sits at the **beginning or end**
of the context; information buried in the **middle degrades** performance even though it is
technically within the window. Best practices: put critical instructions at the top of the
system prompt, place key data or examples near the end, and repeat key constraints at the end
of long prompts. Avoid burying essential rules in the middle, padding with filler between key
information, or assuming the model read everything equally. Source: arXiv:2307.03172, "Lost in
the Middle: How Language Models Use Long Contexts" (Liu et al., 2023).
