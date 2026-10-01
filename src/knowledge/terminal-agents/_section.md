---
section: Terminal Agents
scope: section
title: Terminal Agents
tags: terminal, cli, copilot-cli, claude, cursor, codex, approval
sources: https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli, https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli
---
## 1. Terminal agents

Terminal coding agents bring an AI-assisted development workflow to the command line. Tools
such as Copilot CLI, Claude, Cursor, and Codex each provide a CLI entry point for working in a
repository without leaving the terminal.

## 2. Common usage loop

The shared loop is to give the agent a task, let it inspect and propose changes, review the
result, and iterate while it edits files and runs commands. Interactive sessions support an
ongoing conversation; scripted use is better for bounded, repeatable tasks in automation.

## 3. Safe defaults

Start with approvals required for file changes, command execution, and other consequential
actions. Expand permissions only when the task and environment are understood, and keep
human review in the loop before accepting or shipping changes.

Source links:
- **Install Copilot CLI** and **Using Copilot CLI**: official examples of terminal-client setup
  and usage.
