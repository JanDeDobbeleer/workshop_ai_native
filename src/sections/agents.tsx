import { Puzzle, Repeat } from 'lucide-react';
import { SlideType } from './types';
import { CodeBlock } from '../components/CodeBlock';
import { ToolMatrix, STANDARD_TOOL_COLUMNS } from '../components/ToolMatrix';
import { agentsMatrixRows } from '../components/toolMatrixRows';

export const agentsSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <div className="flex items-center gap-6">
          <Repeat className="w-16 h-16 md:w-20 md:h-20 text-green-500" />
          <Puzzle className="w-16 h-16 md:w-20 md:h-20 text-purple-500" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 text-center">
          Agents &amp; Skills
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Custom agents, skills, delegation, and permissions
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Two Portable Layers",
    subtitle: "AGENTS.md for instructions · .agents/skills/ for skills",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">
            Two conventions travel across tools. Everything else stays in <strong>tool-native folders</strong>.
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500 border border-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-green-700 shrink-0">1</span>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  <code className="bg-gray-100 px-1 rounded font-mono text-sm">AGENTS.md</code> — instructions
                </h4>
                <p className="text-sm text-gray-700">Root markdown file for persistent project guidance. Read by Cursor, Copilot, Claude Code, Codex, and more.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500 border border-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-purple-700 shrink-0">2</span>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  <code className="bg-gray-100 px-1 rounded font-mono text-sm">.agents/skills/</code> — portable skills
                </h4>
                <p className="text-sm text-gray-700">Open-standard <code className="bg-gray-100 px-1 rounded text-xs">SKILL.md</code> bundles. Shared discovery path for Cursor, Copilot, Codex, and Devin (Claude uses native path — see matrix).</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-gray-400 border border-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-gray-600 shrink-0">3</span>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Tool-native folders — agents, rules, MCP</h4>
                <p className="text-sm text-gray-700">
                  <code className="bg-gray-100 px-1 rounded text-xs">.cursor/</code>{' '}
                  <code className="bg-gray-100 px-1 rounded text-xs">.claude/</code>{' '}
                  <code className="bg-gray-100 px-1 rounded text-xs">.github/</code>{' '}
                  <code className="bg-gray-100 px-1 rounded text-xs">.codex/</code>{' '}
                  <code className="bg-gray-100 px-1 rounded text-xs">.devin/</code> — still required for custom agents, scoped rules, and MCP config.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-500">
          <p className="text-sm text-amber-900">
            <strong>Anti-pattern:</strong> Don&apos;t put instructions in <code className="bg-amber-100 px-1 rounded">.agents/</code> — use <code className="bg-amber-100 px-1 rounded">AGENTS.md</code>.
          </p>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg">
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Install community skills: <code className="bg-white px-1 rounded font-mono text-xs">npx skills add &lt;owner/repo&gt;</code></li>
            <li>• For portable <strong>instructions</strong>, see <strong>Instructions → AGENTS.md</strong></li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Agents & Skills by Tool",
    subtitle: "Where to define agents, skills, and permissions",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">
            Custom agents are <strong>files</strong> in most tools. Copilot <strong>subagents</strong> are runtime-only — no file path.
          </p>
        </div>
        <ToolMatrix
          columns={STANDARD_TOOL_COLUMNS}
          rows={agentsMatrixRows}
          footnote={
            <>
              <code className="bg-gray-200 px-1 rounded">npx skills</code> installs to{' '}
              <code className="bg-gray-200 px-1 rounded">.agents/skills/</code> for Copilot/Cursor/Codex; Claude gets{' '}
              <code className="bg-gray-200 px-1 rounded">.claude/skills/</code> copy/symlink. Portable paths as of mid-2026.
            </>
          }
        />
      </div>
    )
  },
  {
    title: "Agent Modes",
    subtitle: "Ask, Plan, Agent — universal interaction levels",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">
            Every major IDE assistant offers modes from <strong>read-only Q&amp;A</strong> to <strong>autonomous execution</strong>. Names differ; the spectrum is the same.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-2 text-center">Ask</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Explore and explain</li>
              <li>• No file changes</li>
              <li>• Safe for learning</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h4 className="font-bold text-orange-900 mb-2 text-center">Plan</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Step-by-step strategy</li>
              <li>• Review before execution</li>
              <li>• Complex features</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-bold text-purple-900 mb-2 text-center">Agent</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Multi-file edits</li>
              <li>• Terminal commands</li>
              <li>• Iterates until done</li>
            </ul>
          </div>
        </div>

        <div className="relative w-full">
          <div className="flex items-center justify-between mb-1 text-xs text-gray-500">
            <span>More human control</span>
            <span>More AI autonomy</span>
          </div>
          <div className="h-3 bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500 rounded-full" />
        </div>

        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-sm italic text-gray-700 text-center">
            <strong>Pro tip:</strong> Ask → Plan → Agent. Switch modes anytime in Copilot, Cursor, and Claude Code.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Agent Approval Levels",
    subtitle: "How much autonomy to grant (Copilot callout)",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">
            <strong>Copilot (VS Code):</strong> permissions picker — Default (confirm each tool), Bypass (auto-approve tools), Autopilot preview (fully autonomous).
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-gray-300">
            <h4 className="font-bold text-gray-900 text-sm mb-1">Default</h4>
            <p className="text-xs text-gray-600">Confirm every tool call — maximum oversight</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-yellow-400">
            <h4 className="font-bold text-gray-900 text-sm mb-1">Bypass</h4>
            <p className="text-xs text-gray-600">Auto-approve tools; still pauses on ambiguous decisions</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-purple-400">
            <h4 className="font-bold text-gray-900 text-sm mb-1">Autopilot</h4>
            <p className="text-xs text-gray-600">Runs until complete — use only with clear, scoped tasks</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg border border-purple-200">
          <p className="text-sm text-gray-700">
            <strong>Other tools:</strong> Claude Code uses <code className="bg-gray-100 px-1 rounded">permissionMode</code> in agent frontmatter; Cursor offers auto-run and sandbox settings.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Agent Handoffs",
    subtitle: "Pass tasks between session types",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">
            Hand off a task between agents or session types — conversation history carries over. Plan locally, implement in cloud, review in IDE.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <div className="bg-blue-500 text-white p-3 rounded-lg text-center min-w-[120px]">
            <div className="font-bold text-sm">Local</div>
            <div className="text-xs text-blue-100">Plan &amp; explore</div>
          </div>
          <div className="text-purple-400 font-bold">→</div>
          <div className="bg-gray-600 text-white p-3 rounded-lg text-center min-w-[120px]">
            <div className="font-bold text-sm">CLI / Background</div>
            <div className="text-xs text-gray-200">Isolated worktree</div>
          </div>
          <div className="text-purple-400 font-bold">→</div>
          <div className="bg-green-500 text-white p-3 rounded-lg text-center min-w-[120px]">
            <div className="font-bold text-sm">Cloud</div>
            <div className="text-xs text-green-100">PR when done</div>
          </div>
        </div>
        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-sm italic text-purple-900">
            <strong>Copilot:</strong> session type dropdown or <code className="bg-white px-1 rounded">/delegate</code> in CLI. Pattern applies across tools with different UI.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Stop Repeating Yourself",
    subtitle: "Custom agent files",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">What are Custom Agents?</h3>
          <p className="text-lg text-gray-700">
            Specialized AI personas tailored to specific development roles. Each agent has its own behavior, available tools, and instructions for consistent task execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">🤖 Agent file format</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• YAML frontmatter: name, description, tools, handoffs</li>
              <li>• Markdown body with agent-specific instructions</li>
              <li>• Copilot: <code className="bg-gray-100 px-1 rounded">.github/agents/AGENT-NAME.md</code></li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">🔄 Handoffs Between Agents</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Create guided workflows between agents</li>
              <li>• Handoff buttons appear after responses complete</li>
              <li>• Example: Planner → Implementation → Review</li>
              <li>• Pre-filled prompts with relevant context</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2">💡 Example Agents</h4>
          <div className="flex justify-around text-gray-700">
            <div className="text-center"><span className="text-xl">📋</span><div>Planner</div><div className="text-xs text-gray-500">Read-only</div></div>
            <div className="text-center"><span className="text-xl">🔍</span><div>Reviewer</div><div className="text-xs text-gray-500">Security</div></div>
            <div className="text-center"><span className="text-xl">🏗️</span><div>Implementer</div><div className="text-xs text-gray-500">Full access</div></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Agents",
    subtitle: "Where to Store Agent Files",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Where you put the file determines who can use it</h3>
          <p className="text-lg text-gray-700">
            Both GitHub Copilot and Claude Code scope agents to project, user, or organization level.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-300">
              <h4 className="font-semibold text-purple-900 mb-2">🟣 GitHub Copilot</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex"><span className="mr-2">📁</span><span><strong>Repo:</strong> <code className="bg-gray-100 px-1 rounded">.github/agents/name.md</code></span></li>
                <li className="flex"><span className="mr-2">🏢</span><span><strong>Org/Enterprise:</strong> <code className="bg-gray-100 px-1 rounded">/agents/name.md</code> in your <code className="bg-gray-100 px-1 rounded">.github-private</code> repo</span></li>
              </ul>
            </div>
            <a href="https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-custom-agents" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600 hover:underline">docs.github.com → Copilot → Custom Agents</a>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-300">
              <h4 className="font-semibold text-blue-900 mb-2">🔵 Claude Code</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex"><span className="mr-2">📁</span><span><strong>Project:</strong> <code className="bg-gray-100 px-1 rounded">.claude/agents/name.md</code></span></li>
                <li className="flex"><span className="mr-2">👤</span><span><strong>User:</strong> <code className="bg-gray-100 px-1 rounded">~/.claude/agents/name.md</code></span></li>
                <li className="flex"><span className="mr-2">🏢</span><span><strong>Org:</strong> Managed settings (admin console)</span></li>
              </ul>
            </div>
            <a href="https://code.claude.com/docs/en/sub-agents" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">code.claude.com/docs → Sub-agents</a>
          </div>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-sm italic text-green-900">
            <strong>Pro Tip:</strong> Commit <code className="bg-white px-1 rounded">.github/agents/</code> (Copilot) or <code className="bg-white px-1 rounded">.claude/agents/</code> (Claude Code) to version control — your whole team shares the same agents.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Agents",
    subtitle: "Frontmatter",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Subagent files: <code className="bg-white px-1 rounded">.claude/agents/name.md</code>
          </h3>
          <p className="text-lg text-gray-700">
            YAML frontmatter configures the agent; the markdown body becomes its system prompt. Only <code className="bg-white px-1 rounded">name</code> and <code className="bg-white px-1 rounded">description</code> are required.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg text-xs font-mono leading-relaxed">
            <p className="text-gray-400">---</p>
            <p><span className="text-yellow-300">name</span><span className="text-white">: code-reviewer</span></p>
            <p><span className="text-yellow-300">description</span><span className="text-white">: Reviews code quality</span></p>
            <p><span className="text-yellow-300">tools</span><span className="text-white">: Read, Grep, Glob</span></p>
            <p><span className="text-yellow-300">model</span><span className="text-white">: haiku</span></p>
            <p><span className="text-yellow-300">permissionMode</span><span className="text-white">: plan</span></p>
            <p><span className="text-yellow-300">color</span><span className="text-white">: blue</span></p>
            <p className="text-gray-400">---</p>
            <p className="text-green-300 mt-1">You are a code reviewer...</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">🔧 Tools &amp; Permissions</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-1 rounded">tools</code> — allowlist (inherits all if omitted)</li>
                <li>• <code className="bg-gray-100 px-1 rounded">disallowedTools</code> — denylist</li>
                <li>• <code className="bg-gray-100 px-1 rounded">permissionMode</code> — default / acceptEdits / auto / bypassPermissions / plan</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">⚙️ Behavior</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-1 rounded">model</code> — sonnet / opus / haiku / inherit</li>
                <li>• <code className="bg-gray-100 px-1 rounded">maxTurns</code> — cap on agentic turns</li>
                <li>• <code className="bg-gray-100 px-1 rounded">isolation</code> — <code className="bg-gray-100 px-1 rounded">worktree</code> for git isolation</li>
                <li>• <code className="bg-gray-100 px-1 rounded">memory</code> — user / project / local</li>
                <li>• <code className="bg-gray-100 px-1 rounded">color</code> — task list display color</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Learn More:</strong>{' '}
            <a href="https://code.claude.com/docs/en/sub-agents" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              code.claude.com/docs/en/sub-agents
            </a>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Agents",
    subtitle: "Scope & Usage",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">How Copilot/Claude decides to delegate</h3>
          <p className="text-lg text-gray-700">
            Copilot/Claude reads each subagent's <code className="bg-white px-1 rounded">description</code> and automatically delegates when a task matches. Write clear, specific descriptions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">📂 Storage Scope (by priority)</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex"><span className="mr-2 font-bold">1.</span><span>Managed settings — org-wide</span></li>
              <li className="flex"><span className="mr-2 font-bold">2.</span><span><code className="bg-gray-100 px-1 rounded">--agents</code> CLI flag — session only</span></li>
              <li className="flex"><span className="mr-2 font-bold">3.</span><span><code className="bg-gray-100 px-1 rounded">.claude/agents/</code> — current project ✅</span></li>
              <li className="flex"><span className="mr-2 font-bold">4.</span><span><code className="bg-gray-100 px-1 rounded">~/.claude/agents/</code> — all your projects</span></li>
              <li className="flex"><span className="mr-2 font-bold">5.</span><span>Plugin <code className="bg-gray-100 px-1 rounded">agents/</code> — where plugin is enabled</span></li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">🛠️ Managing Subagents</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <code className="bg-gray-100 px-1 rounded">/agents</code> — interactive UI to create/edit/delete</li>
              <li>• <code className="bg-gray-100 px-1 rounded">claude agents</code> — list all from CLI</li>
              <li>• <strong>Running</strong> tab: view live agents, stop them</li>
              <li>• <strong>Library</strong> tab: browse built-in + custom</li>
            </ul>
            <h4 className="font-semibold text-blue-900 mb-2 mt-3">🏗️ Built-in Subagents</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Explore</strong> — Haiku, read-only codebase search</li>
              <li>• <strong>Plan</strong> — inherited model, read-only planning</li>
              <li>• <strong>General Purpose</strong> — all tools, complex tasks</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Pro Tip:</strong>Commit <code className="bg-white px-1 rounded">.claude/agents/</code> to version control — your whole team shares and improves the same subagents.
          </p>
        </div>
      </div>
    )
  },

  {
    title: "Three Agent Session Types",
    subtitle: "Choose the right environment for every task",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">VS Code 1.109 unified local, background, and cloud agents into one seamless orchestration layer — switch or hand off between them mid-session.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <div className="text-2xl mb-2 text-center">🖥️</div>
            <h4 className="font-bold text-blue-900 mb-2 text-center">Local Agent</h4>
            <ul className="space-y-1 text-gray-700">
              <li className="flex"><span className="mr-1">•</span><span>Full VS Code IDE integration</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Interactive approval flow</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Best for exploratory work</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <div className="text-2xl mb-2 text-center">⚙️</div>
            <h4 className="font-bold text-purple-900 mb-2 text-center">Background Agent</h4>
            <ul className="space-y-1 text-gray-700">
              <li className="flex"><span className="mr-1">•</span><span>Isolated git worktree per session</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Auto-commits each turn</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Run while you keep working</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-green-200">
            <div className="text-2xl mb-2 text-center">☁️</div>
            <h4 className="font-bold text-green-900 mb-2 text-center">Cloud Agent</h4>
            <ul className="space-y-1 text-gray-700">
              <li className="flex"><span className="mr-1">•</span><span>GitHub-hosted (Copilot CLI)</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Claude &amp; Codex as providers</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Creates a PR when done</span></li>
            </ul>
          </div>
        </div>
        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-sm italic text-purple-900 text-center">
            <strong>New:</strong> A session type picker lets you delegate or hand off work between types mid-conversation — plan locally, implement in the cloud.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Background Agents",
    subtitle: "Delegate work and keep coding — no interruptions",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">Background agents run in an <strong>isolated git worktree</strong>, auto-committing each turn. You stay in your main branch while the agent builds a feature independently — then review the PR when it's done.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">New in 1.109:</h4>
            <ul className="space-y-1 text-gray-700">
              <li className="flex"><span className="mr-1">•</span><span>Custom agent selection at launch</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Attach images as context</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Multi-root workspace support</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Rename sessions for easy tracking</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Slash commands (skills, hooks, prompts)</span></li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Workflow:</h4>
            <ol className="space-y-1 text-gray-700">
              <li className="flex"><span className="mr-1 font-bold text-purple-600">1.</span><span>Pick session type → Background</span></li>
              <li className="flex"><span className="mr-1 font-bold text-purple-600">2.</span><span>Choose agent &amp; model</span></li>
              <li className="flex"><span className="mr-1 font-bold text-purple-600">3.</span><span>Describe the task &amp; send</span></li>
              <li className="flex"><span className="mr-1 font-bold text-purple-600">4.</span><span>Agent works in isolated worktree</span></li>
              <li className="flex"><span className="mr-1 font-bold text-purple-600">5.</span><span>Review diff &amp; merge PR</span></li>
            </ol>
          </div>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-sm italic text-gray-900 text-center">
            <strong>Agent status indicator</strong> in the VS Code command center shows which sessions need your attention — green (running), yellow (input needed), or done.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Cloud Agents: Claude & Codex",
    subtitle: "Third-party agents via GitHub Copilot subscription",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-gray-700">As of February 2026, <strong>Claude (Anthropic)</strong> and <strong>Codex (OpenAI)</strong> are available as cloud agent providers directly inside VS Code — no separate subscriptions or tools required if you have GitHub Copilot.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Claude compatibility:</h4>
            <ul className="space-y-1 text-gray-700">
              <li className="flex"><span className="mr-1">•</span><span>VS Code reads <code className="bg-gray-100 px-1 rounded">CLAUDE.md</code> natively</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Agents, skills &amp; hooks shared across both</span></li>
              <li className="flex"><span className="mr-1">•</span><span>No duplicate configuration needed</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Thinking tokens visible in chat</span></li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Cloud agent launch options:</h4>
            <ul className="space-y-1 text-gray-700">
              <li className="flex"><span className="mr-1">•</span><span>Choose model (Claude / Codex / Copilot)</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Select a custom agent from <code className="bg-gray-100 px-1 rounded">.github/agents/</code></span></li>
              <li className="flex"><span className="mr-1">•</span><span>Pick folder for multi-root workspaces</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Checkout result via PR extension</span></li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-1">Agent orchestration via <code className="bg-gray-100 px-1 rounded">.github/agents/AGENT-NAME.md</code>:</h4>
          <div className="font-mono text-xs text-gray-700 space-y-0.5">
            <div className="text-purple-700">---</div>
            <div>name: Planner</div>
            <div>model: <span className="text-green-700">'Claude Sonnet 4.5 (copilot)'</span></div>
            <div>tools: [<span className="text-green-700">'agent'</span>]</div>
            <div>agents: [<span className="text-green-700">'Coder'</span>, <span className="text-green-700">'Reviewer'</span>]</div>
            <div className="text-purple-700">---</div>
            <div className="text-gray-500"># Delegates to Coder &amp; Reviewer subagents</div>
          </div>
        </div>
        <div className="bg-green-100 p-3 rounded-lg">
          <p className="text-sm italic text-green-900 text-center">
            <strong>Source:</strong> <a href="https://code.visualstudio.com/updates/v1_109" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">VS Code 1.109 release notes</a> · <a href="https://visualstudiomagazine.com/articles/2026/02/09/hands-on-with-new-multi-agent-orchestration-in-vs-code.aspx" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">VS Magazine Feb 2026</a>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Agent Skills",
    subtitle: "Teaching agents specialized tasks",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">What Are Agent Skills?</h3>
          <p className="text-lg text-gray-700">
            Agent Skills are folders of instructions, scripts, and resources that agents load when relevant to your task.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Key Features:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Open standard hosted at <a href="https://github.com/agentskills/agentskills" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">github.com/agentskills/agentskills</a></li>
              <li>• Works with Copilot coding agent, GitHub Copilot CLI, and VS Code Insiders</li>
              <li>• Create your own or use community skills</li>
              <li>• Find examples at <a href="https://github.com/anthropics/skills" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">anthropics/skills</a>, <a href="https://github.com/github/awesome-copilot" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">github/awesome-copilot</a>, and <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">obra/superpowers</a></li>
              <li>• Browse and discover skills at <a href="https://skillsmp.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">skillsmp.com</a></li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <span className="text-amber-600 text-lg">⚠️</span>
            <div>
              <p className="text-amber-800 font-medium text-sm">Enable Agent Skills in VS Code settings:</p>
              <code className="text-xs bg-amber-100 px-2 py-1 rounded mt-1 inline-block text-amber-900">"chat.useAgentSkills": true</code>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm italic text-purple-900">
            <strong>Key Takeaway:</strong> Skills are reusable, shareable expertise that Copilot activates automatically when needed.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Skills vs Custom Instructions",
    subtitle: "When to Use Each Approach",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-8">
        <div className="w-full max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-green-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-xl md:text-2xl font-bold mb-2">📝 Custom Instructions</div>
              <div className="text-sm mb-3">Simple guidelines for every task</div>
              <div className="text-xs space-y-1 opacity-90">
                <div>• Coding standards</div>
                <div>• Style preferences</div>
                <div>• General conventions</div>
              </div>
            </div>

            <div className="bg-purple-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-xl md:text-2xl font-bold mb-2">🎯 Agent Skills</div>
              <div className="text-sm mb-3">Detailed context when relevant</div>
              <div className="text-xs space-y-1 opacity-90">
                <div>• Testing workflows</div>
                <div>• Deployment procedures</div>
                <div>• Debugging guides</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 px-6 py-3 rounded-lg max-w-3xl w-full">
          <div className="font-semibold text-gray-800 mb-2 text-center">Working Together</div>
          <div className="text-sm text-gray-600 space-y-1 text-center">
            <div>• Skills are currently repository-level only</div>
            <div>• Both teach Copilot how to work in your codebase</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Creating an Agent Skill",
    subtitle: "The SKILL.md File Structure",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl w-full mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">Skill Directory Structure</h3>
          <CodeBlock
            code=".github/skills/webapp-testing/\n  SKILL.md\n  example_test.js\n  debug_script.sh"
            className="bg-gray-900 p-4 rounded font-mono text-sm text-green-400"
          >
            <pre>
{`.github/skills/webapp-testing/
  SKILL.md
  example_test.js
  debug_script.sh`}
            </pre>
          </CodeBlock>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Location & Naming:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Store in <code className="bg-gray-100 px-2 py-1 rounded text-sm">.github/skills</code> directory</li>
              <li>• Each skill needs its own subdirectory</li>
              <li>• Use lowercase names with hyphens (e.g., webapp-testing)</li>
              <li>• Must contain a <code className="bg-gray-100 px-2 py-1 rounded text-sm">SKILL.md</code> file</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Optional Additions:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Include scripts, examples, or other resources</li>
              <li>• Add test files or configuration templates</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm italic text-purple-900">
            <strong>Note:</strong> Also supports <code className="bg-white px-2 py-1 rounded">.claude/skills</code> directory.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "SKILL.md File Format",
    subtitle: "Anatomy of a Skill Definition",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">SKILL.md Components</h3>
          <p className="text-lg text-gray-700">
            Two parts: YAML frontmatter (required metadata) and Markdown body (instructions).
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">YAML Frontmatter (Required):</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>name:</strong> lowercase identifier with hyphens</li>
              <li>• <strong>description:</strong> what it does and when to use it</li>
              <li>• <strong>license:</strong> optional license information</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Markdown Body:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Detailed instructions and guidelines</li>
              <li>• Code examples and best practices</li>
              <li>• Step-by-step procedures</li>
            </ul>
          </div>
        </div>

        <CodeBlock
          code="---\nname: webapp-testing\ndescription: Testing guide...\n---\n# Instructions here..."
          className="bg-gray-900 p-4 rounded-lg font-mono text-xs"
        >
          <div className="text-blue-400 mb-2">---</div>
          <div className="text-blue-400">name: webapp-testing</div>
          <div className="text-blue-400">description: Testing guide...</div>
          <div className="text-blue-400 mb-2">---</div>
          <div className="text-green-400"># Instructions here...</div>
        </CodeBlock>
      </div>
    )
  },
  {
    title: "How Copilot/Claude uses Skills",
    subtitle: "Automatic Skill Selection and Injection",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">Automatic Activation</h3>
          <p className="text-lg text-gray-700">
            Copilot decides when to use skills based on your prompt and the skill's description.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Selection Process:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Copilot analyzes your prompt</li>
              <li>• Matches it against skill descriptions</li>
              <li>• Injects SKILL.md into the agent's context</li>
              <li>• Agent follows instructions and uses resources</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Best Practice:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Descriptions should explain what the skill does</li>
              <li>• Descriptions should explain when to use it</li>
              <li>• Clear descriptions enable smart automation</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm italic text-purple-900">
            <strong>Remember:</strong> Well-written descriptions are the key to automatic skill activation.
          </p>
        </div>
      </div>
    )
  }
];
