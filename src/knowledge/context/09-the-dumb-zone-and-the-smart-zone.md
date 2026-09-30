---
section: Context
scope: slide
slide: 9
title: The Dumb Zone & the Smart Zone
tags: context, dumb-zone, smart-zone, compaction, subagents, budget
---
A million-token window doesn't mean you should fill it. Output quality measurably degrades well
before the limit — often somewhere around 200K–400K tokens depending on the model. Two informal
zones: the **Smart Zone** (well below max context, where reasoning stays sharp and instructions
are followed — keep every working session here) and the **Dumb Zone** (approaching the token
ceiling, where quality quietly degrades before you notice — a signal to compact, delegate, or
start fresh). Staying in the smart zone today: compaction (summarize and drop raw history),
sub-agents (hand off with their own fresh window), and new sessions when a task truly ends.
Treat window size as a budget to manage, not a target to fill; expect tooling to automate more
of this over time.
