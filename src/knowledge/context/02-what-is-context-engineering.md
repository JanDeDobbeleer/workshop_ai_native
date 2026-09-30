---
section: Context
scope: slide
slide: 2
title: What is Context Engineering?
tags: context-engineering, prompt-engineering, karpathy, signal
sources: https://twitter.com/karpathy/status/1937902205765607626
---
Context engineering is "the delicate art and science of filling the context window with just
the right information for the next step" (Andrej Karpathy, June 2025 — the source link). It is
broader than prompt engineering: prompt engineering focused narrowly on wording, while context
engineering is about *everything the model sees* — instructions, history, tools, retrieved
docs, images. Why it matters: the model's quality is fixed, but context quality is in your
control. Garbage in, garbage out at any model size. You can't change the weights, but you can
control exactly what the model sees, so focus effort there.
