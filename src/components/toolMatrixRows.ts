import { ToolMatrixRow } from './ToolMatrix';

export const instructionsMatrixRows: ToolMatrixRow[] = [
  {
    label: 'Project-wide rules',
    cells: {
      cursor: { kind: 'code', value: '.cursor/rules/*.mdc or AGENTS.md' },
      claude: { kind: 'code', value: 'CLAUDE.md, AGENTS.md' },
      copilot: { kind: 'code', value: '.github/copilot-instructions.md' },
      codex: { kind: 'code', value: 'AGENTS.md (+ ~/.codex/)' },
      devin: { kind: 'code', value: '.devin/rules/*.md or AGENTS.md' },
    },
  },
  {
    label: 'Scoped / conditional',
    cells: {
      cursor: { kind: 'code', value: '.cursor/rules/*.mdc (globs)' },
      claude: { kind: 'code', value: '.claude/rules/*.md' },
      copilot: { kind: 'code', value: '.github/instructions/*.instructions.md' },
      codex: { kind: 'code', value: 'Nested AGENTS.md per directory' },
      devin: { kind: 'code', value: '.devin/rules/ (globs)' },
    },
  },
  {
    label: 'Cross-tool convention',
    cells: {
      cursor: { kind: 'code', value: 'AGENTS.md' },
      claude: { kind: 'code', value: 'AGENTS.md' },
      copilot: { kind: 'code', value: 'AGENTS.md' },
      codex: { kind: 'code', value: 'AGENTS.md' },
      devin: { kind: 'code', value: 'AGENTS.md' },
    },
  },
];

export const contextMatrixRows: ToolMatrixRow[] = [
  {
    label: 'Attach context',
    cells: {
      cursor: { kind: 'text', value: '@file, @folder, @codebase' },
      claude: { kind: 'text', value: '@path, /add-dir' },
      copilot: { kind: 'text', value: '#file, #folder, #codebase' },
      codex: { kind: 'text', value: '@ mentions in CLI' },
      devin: { kind: 'text', value: 'File attach in ACC / CLI' },
    },
  },
  {
    label: 'Indexing / implicit',
    cells: {
      cursor: { kind: 'text', value: 'Codebase index + open files' },
      claude: { kind: 'text', value: 'Project scan + active file' },
      copilot: { kind: 'text', value: 'Workspace index (local/remote)' },
      codex: { kind: 'text', value: 'Repo context in session' },
      devin: { kind: 'text', value: 'Repo indexing in Desktop' },
    },
  },
];

export const agentsMatrixRows: ToolMatrixRow[] = [
  {
    label: 'Custom agents',
    cells: {
      cursor: { kind: 'code', value: '.cursor/agents/*.md' },
      claude: { kind: 'code', value: '.claude/agents/*.md' },
      copilot: { kind: 'code', value: '.github/agents/*.md' },
      codex: { kind: 'code', value: '.codex/agents/*.toml' },
      devin: { kind: 'code', value: '.devin/agents/<name>/AGENT.md' },
    },
  },
  {
    label: 'Skills',
    cells: {
      cursor: { kind: 'code', value: '.cursor/skills/*/SKILL.md' },
      claude: { kind: 'code', value: '.claude/skills/*/SKILL.md' },
      copilot: { kind: 'code', value: '.github/skills/*/SKILL.md' },
      codex: { kind: 'code', value: '.agents/skills/*/SKILL.md' },
      devin: { kind: 'code', value: '.devin/skills/*/SKILL.md' },
    },
  },
  {
    label: 'Subagents',
    cells: {
      cursor: { kind: 'text', value: 'Built-in + custom files' },
      claude: { kind: 'text', value: 'Built-in + custom files' },
      copilot: { kind: 'text', value: 'Runtime subagents (no file)' },
      codex: { kind: 'text', value: 'TOML + spawn_agents_on_csv' },
      devin: { kind: 'text', value: 'Devin Local subagents' },
    },
  },
  {
    label: 'Approval / permissions',
    cells: {
      cursor: { kind: 'text', value: 'Auto-run, ask, sandbox modes' },
      claude: { kind: 'text', value: 'permissionMode in agent frontmatter' },
      copilot: { kind: 'text', value: 'Default / Bypass / Autopilot picker' },
      codex: { kind: 'text', value: 'Approval policies in config' },
      devin: { kind: 'text', value: 'ACC approval workflows' },
    },
  },
];

export const mcpMatrixRows: ToolMatrixRow[] = [
  {
    label: 'Project MCP config',
    cells: {
      cursor: { kind: 'code', value: '.cursor/mcp.json' },
      claude: { kind: 'code', value: '.mcp.json' },
      copilot: { kind: 'code', value: '.vscode/mcp.json' },
      codex: { kind: 'code', value: '.codex/config.toml' },
      devin: { kind: 'code', value: '.devin/config.json' },
    },
  },
  {
    label: 'User / global config',
    cells: {
      cursor: { kind: 'code', value: '~/.cursor/mcp.json' },
      claude: { kind: 'code', value: '~/.claude.json' },
      copilot: { kind: 'text', value: 'VS Code settings (IDE-specific)' },
      codex: { kind: 'code', value: '~/.codex/config.toml' },
      devin: { kind: 'code', value: '~/.config/devin/config.json' },
    },
  },
];

export const orchestrationMatrixRows: ToolMatrixRow[] = [
  {
    label: 'Define',
    cells: {
      cursor: { kind: 'code', value: '.cursor/agents/*.md' },
      claude: { kind: 'code', value: '.claude/agents/*.md' },
      copilot: { kind: 'code', value: '.github/agents/*.md' },
      codex: { kind: 'code', value: '.codex/agents/*.toml' },
      devin: { kind: 'code', value: '.devin/agents/<name>/AGENT.md' },
    },
  },
  {
    label: 'Delegate',
    cells: {
      cursor: { kind: 'text', value: 'Subagent spawn' },
      claude: { kind: 'text', value: 'Auto-delegate via description' },
      copilot: { kind: 'text', value: 'Handoffs between session types' },
      codex: { kind: 'text', value: 'Subagent tree' },
      devin: { kind: 'text', value: 'ACC / Kanban assign' },
    },
  },
  {
    label: 'Parallelize',
    cells: {
      cursor: { kind: 'text', value: '/multitask, async subagents' },
      claude: { kind: 'text', value: 'Parallel subagent tree' },
      copilot: { kind: 'text', value: 'Cloud + background sessions' },
      codex: { kind: 'text', value: 'agents.max_threads' },
      devin: { kind: 'text', value: 'Parallel local + cloud lanes' },
    },
  },
  {
    label: 'Isolate',
    cells: {
      cursor: { kind: 'text', value: 'Git worktrees' },
      claude: { kind: 'text', value: 'worktree isolation option' },
      copilot: { kind: 'text', value: 'Worktrees where supported' },
      codex: { kind: 'text', value: 'Worktrees' },
      devin: { kind: 'text', value: 'Git worktrees' },
    },
  },
  {
    label: 'Synthesize',
    cells: {
      cursor: { kind: 'text', value: 'Parent chat + human review' },
      claude: { kind: 'text', value: 'Parent summarizes' },
      copilot: { kind: 'text', value: 'PR / session handback' },
      codex: { kind: 'text', value: 'Parent thread merge' },
      devin: { kind: 'text', value: 'ACC review + merge' },
    },
  },
];

export const terminalAgentsMatrixRows: ToolMatrixRow[] = [
  {
    label: 'CLI entry point',
    cells: {
      cursor: { kind: 'code', value: 'cursor agent' },
      claude: { kind: 'code', value: 'claude' },
      copilot: { kind: 'code', value: 'copilot' },
      codex: { kind: 'code', value: 'codex' },
      devin: { kind: 'code', value: 'devin' },
    },
  },
  {
    label: 'Cloud vs local',
    cells: {
      cursor: { kind: 'text', value: 'Local + cloud agents' },
      claude: { kind: 'text', value: 'Local CLI; remote via API' },
      copilot: { kind: 'text', value: 'Local CLI + cloud agent mode' },
      codex: { kind: 'text', value: 'Local + cloud sessions' },
      devin: { kind: 'text', value: 'Local CLI + cloud ACC' },
    },
  },
];

export const teamKnowledgeMatrixRows: ToolMatrixRow[] = [
  {
    label: 'Shared knowledge base',
    cells: {
      cursor: { kind: 'text', value: 'Shared rules repos + AGENTS.md' },
      claude: { kind: 'text', value: 'Shared CLAUDE.md / agents in repo' },
      copilot: { kind: 'text', value: 'Copilot Spaces' },
      codex: { kind: 'text', value: 'Shared AGENTS.md repos' },
      devin: { kind: 'text', value: 'Shared .devin/ config in repo' },
    },
  },
  {
    label: 'Compile / distribute',
    cells: {
      cursor: { kind: 'text', value: 'Git submodule / monorepo rules' },
      claude: { kind: 'text', value: 'Plugin + managed settings' },
      copilot: { kind: 'text', value: 'Org-level agents + Spaces sync' },
      codex: { kind: 'text', value: 'Central AGENTS.md template' },
      devin: { kind: 'text', value: 'APM compile (shared instruction repos)' },
    },
  },
];

export const agentSdksMatrixRows: ToolMatrixRow[] = [
  {
    label: 'Programmatic runtime',
    cells: {
      cursor: { kind: 'text', value: 'Cursor SDK (limited)' },
      claude: { kind: 'text', value: 'Claude Agent SDK' },
      copilot: { kind: 'text', value: 'Copilot SDK (primary)' },
      codex: { kind: 'text', value: 'OpenAI Agents API' },
      devin: { kind: 'text', value: 'Devin API (enterprise)' },
    },
  },
  {
    label: 'Maturity',
    cells: {
      cursor: { kind: 'status', value: 'partial' },
      claude: { kind: 'status', value: 'yes' },
      copilot: { kind: 'status', value: 'partial' },
      codex: { kind: 'status', value: 'yes' },
      devin: { kind: 'status', value: 'partial' },
    },
  },
];
