import { Puzzle, Repeat } from 'lucide-react';
import { SlideType } from './types';
import { CodeBlock } from '../components/CodeBlock';

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
          Prompt files, custom agents, and agent skills
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
    title: "Stop Repeating Yourself",
    subtitle: "Reusable Prompt Files in VS Code",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-900 mb-2">What are Prompt Files?</h3>
          <p className="text-gray-700">
            Markdown files that define reusable prompts for common development tasks. Run them on-demand in chat to ensure consistent, high-quality AI interactions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">📄 File Structure (.prompt.md)</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Stored in <code className="bg-gray-100 px-1 rounded">.github/prompts</code> folder</li>
              <li>• YAML frontmatter for metadata (description, agent, tools)</li>
              <li>• Markdown body with instructions and guidelines</li>
              <li>• Variables: <code className="bg-gray-100 px-1 rounded">${'${selection}'}</code>, <code className="bg-gray-100 px-1 rounded">${'${file}'}</code>, <code className="bg-gray-100 px-1 rounded">${'${input:name}'}</code></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">🚀 How to Use</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Type <code className="bg-gray-100 px-1 rounded">/prompt-name</code> in chat to run</li>
              <li>• Add extra context after the command</li>
              <li>• Use play button in editor to test prompts</li>
              <li>• Workspace or user-scoped (synced across devices)</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">💡 Example Use Cases</h4>
            <div className="flex justify-around text-sm text-gray-700">
              <div className="text-center"><span className="text-xl">⚛️</span><div>React components</div></div>
              <div className="text-center"><span className="text-xl">🔒</span><div>Security reviews</div></div>
              <div className="text-center"><span className="text-xl">📚</span><div>API docs</div></div>
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg flex items-center">
            <p className="text-sm italic text-green-900">
              <strong>Pro Tip:</strong> Use Markdown links to reference custom instructions rather than duplicating guidelines.
            </p>
          </div>
        </div>
      </div>
    )
  },
    {
    title: "Stop Repeating Yourself",
    subtitle: "Agents",
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
            <h4 className="font-semibold text-purple-900 mb-2">🤖 File Structure (.agent.md)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• YAML frontmatter: name, description, tools, handoffs</li>
              <li>• Markdown body with agent-specific instructions</li>
              <li>• Restrict tools per agent (e.g., read-only for planners)</li>
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
    title: "Agent Skills",
    subtitle: "Teaching Copilot to Perform Specialized Tasks",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">What Are Agent Skills?</h3>
          <p className="text-lg text-gray-700">
            Agent Skills are folders of instructions, scripts, and resources that Copilot can load when relevant to your task.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Key Features:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Open standard hosted at <a href="https://github.com/agentskills/agentskills" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">github.com/agentskills/agentskills</a></li>
              <li>• Works with Copilot coding agent, GitHub Copilot CLI, and VS Code Insiders</li>
              <li>• Create your own or use community skills</li>
              <li>• Find examples at <a href="https://github.com/anthropics/skills" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">anthropics/skills</a> and <a href="https://github.com/github/awesome-copilot" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">github/awesome-copilot</a></li>
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
