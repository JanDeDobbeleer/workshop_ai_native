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
    subtitle: "Version control for your thinking — specifications become executable",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">📋</div>
            <div>
              <h3 className="text-2xl font-bold text-teal-900 mb-2">SDD makes technical decisions explicit, reviewable, and evolvable</h3>
              <p className="text-gray-700">Instead of having crucial architectural decisions trapped in email threads or someone's head, capture the "why" behind your technical choices in a format that grows with your project.</p>
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
              <li className="flex"><span className="mr-2">•</span><span>Guides AI agents to right solution</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Enables multi-variant implementations</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Natural as refactoring code</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Unlocks parallel exploration</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 px-6 py-4 rounded-lg">
          <p className="text-center text-blue-900">
            <strong>Core Idea:</strong> Treat specs as first-class, versioned artifacts that steer implementation choices — not dusty documents written once and forgotten.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "SDD Implementations: Two Approaches",
    subtitle: "Different tools, same philosophy — choose what works for your workflow",
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 rounded-lg text-white">
          <p className="text-center text-sm">Both implementations provide <strong>plan and execute</strong> capabilities to go from spec to working code</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

        <div className="bg-orange-50 px-4 py-3 rounded-lg border border-orange-200">
          <p className="text-center text-orange-900 text-xs">
            <strong>Choose Based On:</strong> Spec Kit for AI-agnostic templates; Compound Engineering for Claude Code with cross-tool support
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Using Spec Kit",
    subtitle: "CLI-based approach: install once, use everywhere",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Prerequisites</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Python 3.11+</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Git</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>uv (package manager)</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Supported AI agent</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-500">
            <h4 className="font-bold text-gray-900 mb-3">Option 1: Persistent Install (Recommended)</h4>
            <p className="text-sm text-gray-700 mb-3">Install once, use everywhere — tool stays in PATH and available via <code className="bg-gray-100 px-2 py-1 rounded text-xs">specify</code> command.</p>
            <CodeBlock
              code="uv tool install specify-cli --from git+https://github.com/github/spec-kit.git"
              className="bg-gray-900 p-4 rounded overflow-x-auto"
            >
              <code className="text-green-400 text-sm font-mono">
                uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
              </code>
            </CodeBlock>
            <p className="text-sm text-gray-700 mt-3 mb-2">Then use directly:</p>
            <CodeBlock
              code="specify init my-project --ai copilot"
              className="bg-gray-900 p-4 rounded overflow-x-auto"
            >
              <code className="text-blue-400 text-sm font-mono">
                specify init my-project --ai copilot
              </code>
            </CodeBlock>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-3">Option 2: One-Time Usage</h4>
            <p className="text-sm text-gray-700 mb-3">Run directly without installing — good for trying it out.</p>
            <CodeBlock
              code="uvx --from git+https://github.com/github/spec-kit.git \\\n  specify init my-project --ai copilot"
              className="bg-gray-900 p-4 rounded overflow-x-auto"
            >
              <code className="text-green-400 text-sm font-mono">
                uvx --from git+https://github.com/github/spec-kit.git specify init my-project --ai copilot
              </code>
            </CodeBlock>
          </div>
        </div>

        <div className="bg-blue-50 px-6 py-4 rounded-lg">
          <p className="text-center text-blue-900 text-sm">
            <strong>Upgrade:</strong> <code className="bg-blue-100 px-2 py-1 rounded text-xs">uv tool install specify-cli --force --from git+...</code>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Spec Kit: Plan & Execute Workflow",
    subtitle: "Structured commands take you from requirements to running code",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 rounded-lg text-white">
          <h3 className="text-xl font-bold mb-1">The Spec Kit Process</h3>
          <p className="text-teal-50 text-sm">Bootstrap → constitution → spec → <strong>plan → tasks → implement</strong></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow">
            <div className="flex-shrink-0 w-7 h-7 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Bootstrap Project</h4>
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded block mb-1">specify init --ai copilot</code>
              <p className="text-xs text-gray-600">Scaffolds .specify/ and prompts</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow">
            <div className="flex-shrink-0 w-7 h-7 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Constitution</h4>
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded block mb-1">/speckit.constitution</code>
              <p className="text-xs text-gray-600">Define principles & rules</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow">
            <div className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Specify Requirements</h4>
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded block mb-1">/speckit.specify</code>
              <p className="text-xs text-gray-600">Describe <strong>what</strong> & <strong>why</strong></p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow">
            <div className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Technical Plan</h4>
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded block mb-1">/speckit.plan</code>
              <p className="text-xs text-gray-600">Tech stack & <strong>how</strong> to build</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow">
            <div className="flex-shrink-0 w-7 h-7 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Break Into Tasks</h4>
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded block mb-1">/speckit.tasks</code>
              <p className="text-xs text-gray-600">Actionable task list with deps</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow">
            <div className="flex-shrink-0 w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">6</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Execute</h4>
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded block mb-1">/speckit.implement</code>
              <p className="text-xs text-gray-600">Validates & executes tasks</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 px-4 py-3 rounded-lg border border-orange-200">
          <p className="text-center text-orange-900 text-xs">
            <strong>Pro Tip:</strong> Provide detailed initial prompts for higher quality specs. More detail = less tweaking later.
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
              <li className="flex"><span className="mr-2">1.</span><span><code className="bg-gray-100 px-1 rounded">/ce:ideate</code> — Discover high-impact improvements</span></li>
              <li className="flex"><span className="mr-2">2.</span><span><code className="bg-gray-100 px-1 rounded">/ce:brainstorm</code> — Explore requirements & approaches</span></li>
              <li className="flex"><span className="mr-2">3.</span><span><code className="bg-gray-100 px-1 rounded">/ce:plan</code> — Turn ideas into detailed plans</span></li>
              <li className="flex"><span className="mr-2">4.</span><span><code className="bg-gray-100 px-1 rounded">/ce:work</code> — Execute with worktrees & task tracking</span></li>
              <li className="flex"><span className="mr-2">5.</span><span><code className="bg-gray-100 px-1 rounded">/ce:review</code> — Multi-agent code review</span></li>
              <li className="flex"><span className="mr-2">6.</span><span><code className="bg-gray-100 px-1 rounded">/ce:compound</code> — Document learnings for next cycle</span></li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-indigo-500">
            <h4 className="font-bold text-gray-900 text-sm mb-2">💡 Philosophy</h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li className="flex"><span className="mr-2">•</span><span><strong>80% planning & review, 20% execution</strong></span></li>
              <li className="flex"><span className="mr-2">•</span><span>Each unit of work makes the next easier</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Plans inform future plans, reviews catch more</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Patterns get documented & reused</span></li>
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
  }
];
