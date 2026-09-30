---
section: Habitat Engineering
scope: section
title: Habitat Engineering
tags: habitat, apm, agent-package-manager, config-drift, team, shared-knowledge
sources: https://github.com/microsoft/apm, https://github.com/JanDeDobbeleer/oh-my-posh/blob/main/apm.yml, https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment
---
Moving agent workflows beyond single-player: making a repository a good "habitat" that many
agents (and humans) can work in. "Amenable to agents = amenable to humans." Tackles the config
drift problem (habitat rules that only live in your head don't scale) and introduces APM, the
Agent Package Manager, to install shared skills/config from one source of truth.

Source links:
- **microsoft/apm**: the Agent Package Manager project ("prompts as shared, version-controlled
  artifacts").
- **oh-my-posh/apm.yml**: a live manifest — `apm install` materializes `.agents/skills/` and
  `.claude/skills/` from one source.
- **docs.github.com — customize the agent environment**: configuring the Copilot coding agent's
  environment.
