---
section: Multi-Agent
scope: section
title: Multi-Agent
tags: multi-agent, sessions, conversations, worktrees, isolation, review-capacity
sources: https://git-scm.com/docs/git-worktree, https://code.claude.com/docs/en/worktrees
---
Session-level parallelism: run several independent agent conversations at once to add capacity.
Each session needs a bounded outcome and its own relevant context. Code-writing sessions also need
an isolated workspace, while research and review may only need separate context. Work returns as a
focused branch, diff, or pull request. The practical limit is human operating capacity: ownership
must stay separate, outcomes must remain independently reviewable, and every handback needs review.

The section distinguishes three complementary decisions: agents define reusable workers, sessions
add capacity, and graphs define execution flow. It also uses a captured oh-my-posh worktree example
to show how separate working directories prevent live workspace collisions.

Source links:
- **git-scm.com/docs/git-worktree**: Git's reference for managing multiple working trees.
- **code.claude.com/docs/en/worktrees**: running separate Claude Code sessions in isolated
  worktrees.
