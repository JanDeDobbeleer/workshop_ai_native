---
section: Context
scope: slide
slide: 5
title: Context Window
tags: context-window, tokens, working-memory, input-output
---
The context window is the maximum amount of text, measured in tokens, an LLM can process at
once — and it includes both your input and the model's response. It is the model's working
memory: it determines how much history, documents, or code the model can "see" simultaneously.
Sizes range from a few thousand tokens (early models) to millions (modern models). Input
windows are far larger than output limits — a model can read a 500-page book but won't recite
it back. Anything outside the window is effectively forgotten. Rough scale: 200K tokens ≈
150,000 words ≈ a 500-page book. Larger windows enable more, but cost more compute.
