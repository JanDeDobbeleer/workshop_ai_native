import { FileCode } from 'lucide-react';
import { SlideType } from './types';
import { CodeBlock } from '../components/CodeBlock';

export const speckitSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <FileCode className="w-20 h-20 text-teal-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-teal-900 text-center">
          Spec Driven Development
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Making technical decisions explicit, reviewable, and executable
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
          <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "What is Spec-Driven Development?",
    subtitle: "Version control for your thinking: specifications become executable",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">📋</div>
            <div>
              <h3 className="text-2xl font-bold text-teal-900 mb-2">SDD makes technical decisions explicit, reviewable, and evolvable</h3>
              <p className="text-gray-700">Instead of trapping architectural decisions in email threads or someone's head, capture the "why" behind your technical choices in a format that grows with your project.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">🎯 What SDD Solves</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex"><span className="mr-2">•</span><span>Eliminates failures caused by divergent team/agent assumptions</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Surfaces assumptions early</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Avoids costly rewrites</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Aligns teams before coding</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Documents the "why" not just "what"</span></li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">✨ Key Benefits</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex"><span className="mr-2">•</span><span>Living docs that evolve with code</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Guides AI agents to the right solution</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Enables multi-variant implementations</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Natural as refactoring code</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Unlocks parallel exploration</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 px-6 py-4 rounded-lg">
          <p className="text-center text-blue-900">
            <strong>Core Idea:</strong> Treat specs as first-class, versioned artifacts that steer implementation choices, rather than dusty documents written once and forgotten.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "SDD Implementations: Three Approaches",
    subtitle: "Different tools, same philosophy: choose what works for your workflow",
    content: (
      <div className="flex flex-col space-y-3 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 rounded-lg text-white">
          <p className="text-center text-sm">All three provide <strong>plan and execute</strong> capabilities to go from spec to working code</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border-2 border-teal-500">
            <div className="flex items-center space-x-2 mb-3">
              <div className="text-2xl">🌱</div>
              <h3 className="text-lg font-bold text-gray-900">GitHub Spec Kit</h3>
            </div>
            <p className="text-xs text-gray-700 mb-3">CLI-based, template-driven approach with slash commands for AI agents</p>

            <div className="space-y-2">
              <div className="bg-teal-50 p-2 rounded">
                <h4 className="text-xs font-bold text-gray-900 mb-1">Key Features</h4>
                <ul className="text-xs text-gray-700 space-y-0.5">
                  <li className="flex"><span className="mr-1">•</span><span>Specify CLI for bootstrapping</span></li>
                  <li className="flex"><span className="mr-1">•</span><span>Sequential workflow: spec → plan → tasks</span></li>
                  <li className="flex"><span className="mr-1">•</span><span>Template-based scaffolding</span></li>
                  <li className="flex"><span className="mr-1">•</span><span>Cross-agent compatibility</span></li>
                </ul>
              </div>

              <div className="bg-blue-50 p-2 rounded">
                <h4 className="text-xs font-bold text-gray-900 mb-1">Plan & Execute</h4>
                <p className="text-xs text-gray-700"><code className="bg-blue-100 px-1 rounded">/speckit.plan</code> generates technical plans, <code className="bg-blue-100 px-1 rounded">/speckit.tasks</code> breaks them down, <code className="bg-blue-100 px-1 rounded">/speckit.implement</code> executes</p>
              </div>
            </div>

            <div className="mt-3 text-xs text-center">
              <code className="bg-gray-100 px-2 py-0.5 rounded">github.com/github/spec-kit</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-2 border-purple-500">
            <div className="flex items-center space-x-2 mb-3">
              <div className="text-2xl">🔧</div>
              <h3 className="text-lg font-bold text-gray-900">Compound Engineering</h3>
            </div>
            <p className="text-xs text-gray-700 mb-3">Claude Code plugin with CLI converter for 10+ AI coding assistants</p>

            <div className="space-y-2">
              <div className="bg-purple-50 p-2 rounded">
                <h4 className="text-xs font-bold text-gray-900 mb-1">Key Features</h4>
                <ul className="text-xs text-gray-700 space-y-0.5">
                  <li className="flex"><span className="mr-1">•</span><span>Plugin for Claude Code (primary)</span></li>
                  <li className="flex"><span className="mr-1">•</span><span>Converter for Copilot, Cursor, Gemini, etc.</span></li>
                  <li className="flex"><span className="mr-1">•</span><span>Compound workflow philosophy</span></li>
                  <li className="flex"><span className="mr-1">•</span><span>80% planning/review, 20% execution</span></li>
                </ul>
              </div>

              <div className="bg-blue-50 p-2 rounded">
                <h4 className="text-xs font-bold text-gray-900 mb-1">Plan & Execute</h4>
                <p className="text-xs text-gray-700"><code className="bg-blue-100 px-1 rounded">/ce:plan</code> creates detailed plans, <code className="bg-blue-100 px-1 rounded">/ce:work</code> executes with tracking, <code className="bg-blue-100 px-1 rounded">/ce:review</code> validates & compounds learnings</p>
              </div>
            </div>

            <div className="mt-3 text-xs text-center">
              <code className="bg-gray-100 px-2 py-0.5 rounded">github.com/EveryInc/compound-engineering-plugin</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-2 border-emerald-500">
            <div className="flex items-center space-x-2 mb-3">
              <div className="text-2xl">🦸</div>
              <h3 className="text-lg font-bold text-gray-900">Superpowers</h3>
            </div>
            <p className="text-xs text-gray-700 mb-3">Skill-triggered methodology: activates automatically, no slash commands to remember</p>

            <div className="space-y-2">
              <div className="bg-emerald-50 p-2 rounded">
                <h4 className="text-xs font-bold text-gray-900 mb-1">Key Features</h4>
                <ul className="text-xs text-gray-700 space-y-0.5">
                  <li className="flex"><span className="mr-1">•</span><span>7 chained Agent Skills, not commands</span></li>
                  <li className="flex"><span className="mr-1">•</span><span>Mandatory TDD: red, green, refactor</span></li>
                  <li className="flex"><span className="mr-1">•</span><span>Auto worktree per feature branch</span></li>
                  <li className="flex"><span className="mr-1">•</span><span>Works across 15+ agents (Claude, Codex, Cursor, Gemini, and more)</span></li>
                </ul>
              </div>

              <div className="bg-blue-50 p-2 rounded">
                <h4 className="text-xs font-bold text-gray-900 mb-1">Plan & Execute</h4>
                <p className="text-xs text-gray-700"><code className="bg-blue-100 px-1 rounded">brainstorming</code> drafts the spec, <code className="bg-blue-100 px-1 rounded">writing-plans</code> breaks it into tasks, <code className="bg-blue-100 px-1 rounded">subagent-driven-development</code> executes and reviews each one</p>
              </div>
            </div>

            <div className="mt-3 text-xs text-center">
              <code className="bg-gray-100 px-2 py-0.5 rounded">github.com/obra/superpowers</code>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 px-4 py-3 rounded-lg border border-orange-200">
          <p className="text-center text-orange-900 text-xs">
            <strong>Choose Based On:</strong> Spec Kit for AI-agnostic templates; Compound Engineering for Claude Code with cross-tool support; Superpowers for a mandatory, skill-driven TDD process
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Spec Kit: Plan & Execute",
    subtitle: "CLI-based, template-driven: install once, run the same commands everywhere",
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 rounded-lg text-white">
          <h3 className="text-xl font-bold mb-1">The Spec Kit Workflow</h3>
          <p className="text-teal-50 text-sm"><strong>Bootstrap → Constitution → Specify → Plan → Tasks → Implement</strong></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-teal-500">
            <h4 className="font-bold text-gray-900 text-sm mb-2">🔄 The Workflow</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li className="flex"><span className="mr-2">1.</span><span><code className="bg-gray-100 px-1 rounded">specify init</code>: scaffolds .specify/ and prompts</span></li>
              <li className="flex"><span className="mr-2">2.</span><span><code className="bg-gray-100 px-1 rounded">/speckit.constitution</code>: define principles & rules</span></li>
              <li className="flex"><span className="mr-2">3.</span><span><code className="bg-gray-100 px-1 rounded">/speckit.specify</code>: describe what & why</span></li>
              <li className="flex"><span className="mr-2">4.</span><span><code className="bg-gray-100 px-1 rounded">/speckit.plan</code>: tech stack & how to build</span></li>
              <li className="flex"><span className="mr-2">5.</span><span><code className="bg-gray-100 px-1 rounded">/speckit.tasks</code>: actionable task list with deps</span></li>
              <li className="flex"><span className="mr-2">6.</span><span><code className="bg-gray-100 px-1 rounded">/speckit.implement</code>: validates & executes tasks</span></li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 text-sm mb-2">💡 Key Features</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li className="flex"><span className="mr-2">•</span><span><strong>AI-agnostic:</strong> works the same across agents</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Template-based scaffolding, not free-form prompts</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Explicit command per step: no guessing what's next</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Detailed initial prompts pay off: more detail now, less tweaking later</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
          <h4 className="font-bold text-teal-900 text-sm mb-2">Installation</h4>
          <CodeBlock
            code="uv tool install specify-cli --from git+https://github.com/github/spec-kit.git"
            className="bg-gray-900 p-2 rounded"
          >
            <code className="text-green-400 text-xs font-mono">
              uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
            </code>
          </CodeBlock>
          <p className="text-xs text-gray-700 mt-2">Then <code className="bg-white px-1 rounded">specify init my-project --ai copilot</code>. No install? Run it once via <code className="bg-white px-1 rounded">uvx --from git+... specify init</code> instead.</p>
        </div>

        <div className="bg-blue-50 px-4 py-2 rounded-lg">
          <p className="text-center text-blue-900 text-xs">
            <strong>Best For:</strong> Teams wanting an AI-agnostic, template-driven workflow with an explicit command at every step
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Compound Engineering: Plan & Execute",
    subtitle: "Plugin-based approach emphasizing planning, review, and knowledge compounding",
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-lg text-white">
          <h3 className="text-xl font-bold mb-1">The Compound Engineering Workflow</h3>
          <p className="text-purple-50 text-sm"><strong>Ideate → Brainstorm → Plan → Work → Review → Compound → Repeat</strong></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 text-sm mb-2">🔄 The Workflow</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li className="flex"><span className="mr-2">1.</span><span><code className="bg-gray-100 px-1 rounded">/ce:ideate</code>: Discover high-impact improvements</span></li>
              <li className="flex"><span className="mr-2">2.</span><span><code className="bg-gray-100 px-1 rounded">/ce:brainstorm</code>: Explore requirements & approaches</span></li>
              <li className="flex"><span className="mr-2">3.</span><span><code className="bg-gray-100 px-1 rounded">/ce:plan</code>: Turn ideas into detailed plans</span></li>
              <li className="flex"><span className="mr-2">4.</span><span><code className="bg-gray-100 px-1 rounded">/ce:work</code>: Execute with worktrees & task tracking</span></li>
              <li className="flex"><span className="mr-2">5.</span><span><code className="bg-gray-100 px-1 rounded">/ce:review</code>: Multi-agent code review</span></li>
              <li className="flex"><span className="mr-2">6.</span><span><code className="bg-gray-100 px-1 rounded">/ce:compound</code>: Document learnings for next cycle</span></li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-indigo-500">
            <h4 className="font-bold text-gray-900 text-sm mb-2">💡 Philosophy</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li className="flex"><span className="mr-2">•</span><span><strong>80% planning & review, 20% execution</strong></span></li>
              <li className="flex"><span className="mr-2">•</span><span>Each unit of work makes the next easier</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Plans inform future plans, reviews catch more</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Document and reuse patterns</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Quality stays high so changes stay easy</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
          <h4 className="font-bold text-purple-900 text-sm mb-2">Installation & Setup</h4>
          <div className="space-y-2">
            <div className="bg-white p-2 rounded">
              <p className="text-xs text-gray-700 mb-1"><strong>Claude Code (primary):</strong></p>
              <CodeBlock
                code="/plugin marketplace add EveryInc/compound-engineering-plugin"
                className="bg-gray-900 p-2 rounded"
              >
                <code className="text-green-400 text-xs font-mono">
                  /plugin marketplace add EveryInc/compound-engineering-plugin
                </code>
              </CodeBlock>
            </div>
            <div className="bg-white p-2 rounded">
              <p className="text-xs text-gray-700"><strong>Other tools (Copilot, Cursor, Gemini, etc.):</strong> Use CLI converter: <code className="bg-gray-100 px-1 rounded">bunx @every-env/compound-plugin install compound-engineering --to [tool]</code></p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 px-4 py-2 rounded-lg">
          <p className="text-center text-blue-900 text-xs">
            <strong>Best For:</strong> Teams wanting structured compound workflows where each cycle makes future work easier
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Superpowers: Skill-Triggered Workflow",
    subtitle: "No slash commands: the methodology activates itself",
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-lg text-white">
          <h3 className="text-xl font-bold mb-1">The Basic Workflow</h3>
          <p className="text-emerald-50 text-sm"><strong>Brainstorm → Worktree → Plan → Implement (TDD) → Review → Finish</strong></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-emerald-500">
            <h4 className="font-bold text-gray-900 text-sm mb-2">🔄 The 7 Skills</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li className="flex"><span className="mr-2">1.</span><span><code className="bg-gray-100 px-1 rounded">brainstorming</code>: questions, alternatives, a design doc</span></li>
              <li className="flex"><span className="mr-2">2.</span><span><code className="bg-gray-100 px-1 rounded">using-git-worktrees</code>: isolated branch, clean baseline</span></li>
              <li className="flex"><span className="mr-2">3.</span><span><code className="bg-gray-100 px-1 rounded">writing-plans</code>: 2-5 minute tasks, exact file paths</span></li>
              <li className="flex"><span className="mr-2">4.</span><span><code className="bg-gray-100 px-1 rounded">subagent-driven-development</code>: fresh subagent per task</span></li>
              <li className="flex"><span className="mr-2">5.</span><span><code className="bg-gray-100 px-1 rounded">test-driven-development</code>: red, green, refactor</span></li>
              <li className="flex"><span className="mr-2">6.</span><span><code className="bg-gray-100 px-1 rounded">requesting-code-review</code>: severity-ranked, blocks on critical</span></li>
              <li className="flex"><span className="mr-2">7.</span><span><code className="bg-gray-100 px-1 rounded">finishing-a-development-branch</code>: merge, PR, or discard</span></li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-teal-500">
            <h4 className="font-bold text-gray-900 text-sm mb-2">💡 Philosophy</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li className="flex"><span className="mr-2">•</span><span><strong>Mandatory workflows, not suggestions</strong></span></li>
              <li className="flex"><span className="mr-2">•</span><span>The agent checks for relevant skills before any task</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Deletes code written before its test existed</span></li>
              <li className="flex"><span className="mr-2">•</span><span>YAGNI and DRY enforced during planning, not after</span></li>
              <li className="flex"><span className="mr-2">•</span><span>A subagent can work autonomously for hours without drifting from the plan</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
          <h4 className="font-bold text-emerald-900 text-sm mb-2">Installation (Claude Code)</h4>
          <CodeBlock
            code="/plugin install superpowers@claude-plugins-official"
            className="bg-gray-900 p-2 rounded"
          >
            <code className="text-green-400 text-xs font-mono">
              /plugin install superpowers@claude-plugins-official
            </code>
          </CodeBlock>
          <p className="text-xs text-gray-700 mt-2">Also installs separately for Codex, Cursor, Gemini CLI, Copilot CLI, and 10+ other agents: see the repo for each harness's steps.</p>
        </div>

        <div className="bg-blue-50 px-4 py-2 rounded-lg">
          <p className="text-center text-blue-900 text-xs">
            <strong>Best For:</strong> Teams who want the process enforced automatically instead of remembering which slash command to run next
          </p>
        </div>
      </div>
    )
  }
];
