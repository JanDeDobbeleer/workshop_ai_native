---
section: Context
scope: slide
slide: 13
title: Activating Pre-Trained Knowledge
tags: context, pre-trained, weights, activation, knowledge
---
Models are trained on massive datasets (code, docs, standards, domain knowledge) before you
write a single prompt. That knowledge lives in the model's weights, not your context window —
it's always there, but you may need to activate it explicitly. Models already know programming
languages, frameworks and libraries, design patterns and architectural best practices, domain
knowledge (medicine, law, finance, science), RFCs/specs/standards, and common algorithms and
data structures. Activate it by adding a line like `Activate your knowledge about SOLID
principles` / `about OAuth 2.0 flows` / `about REST API design` to your instructions, agent, or
skill. This surfaces the model's pre-trained depth with no external docs needed; without
explicit activation, models may default to more generic responses.
