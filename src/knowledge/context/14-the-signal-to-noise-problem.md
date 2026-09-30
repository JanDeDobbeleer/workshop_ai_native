---
section: Context
scope: slide
slide: 14
title: The Signal-to-Noise Problem
tags: context, signal-to-noise, html, markdown, preprocessing
---
The more irrelevant text in context, the higher the chance the model extracts the wrong
information — the signal-to-noise ratio problem. Scale of it: a raw HTML page averages 80K+
tokens, ~90% of which is CSS, JS, comments, and noise — far beyond most windows when
unprocessed. The industry has converged on **Markdown** as the intermediate format: fewer
tokens than HTML for the same content, preserves structure without verbose tags, and is easy
for both humans and LLMs to parse. Preprocessing raw HTML into clean Markdown flips a
~90%-noise budget into mostly signal. Preprocessing is context engineering applied at the input
level: clean signal in, accurate output out.
