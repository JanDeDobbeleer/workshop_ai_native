import { Users } from 'lucide-react';
import { SlideType } from './types';
import { ToolMatrix, STANDARD_TOOL_COLUMNS } from '../components/ToolMatrix';
import { teamKnowledgeMatrixRows } from '../components/toolMatrixRows';

export const spacesSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Users className="w-16 h-16 md:w-20 md:h-20 text-blue-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 text-center">
          Team Knowledge
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Shared knowledge bases and team-wide AI configuration
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Team Knowledge by Tool",
    subtitle: "Shared bases — Spaces, APM, and shared repos",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-gray-700">
            Team knowledge = versioned instructions, agents, and curated context everyone shares — not per-developer prompt hacks.
          </p>
        </div>
        <ToolMatrix columns={STANDARD_TOOL_COLUMNS} rows={teamKnowledgeMatrixRows} />
      </div>
    )
  },
  {
    title: "The Challenge",
    subtitle: "AI Configuration Is the New Dependency Problem",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Sound familiar?</h3>
          <p className="text-gray-700">Teams adopt AI tools individually—each developer configures their own instructions, prompts, and skills from scratch. The result is inconsistency, drift, and wasted effort.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">😤 Common Pain Points</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Each dev configs AI tools from scratch</span></li>
              <li className="flex"><span className="mr-2">•</span><span>No shared prompts or instructions</span></li>
              <li className="flex"><span className="mr-2">•</span><span>New hires spend hours on AI setup</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Best practices never get shared</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">🎯 What Teams Need</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Shared, versioned AI configuration</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Consistent context across the team</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Reproducible, auditable setups</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Easy onboarding for new members</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>The Analogy:</strong> Just as teams use package managers for code dependencies, they need a way to manage AI configuration as a shared, version-controlled artifact.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Two Approaches",
    subtitle: "Complementary Solutions for Team AI Sharing",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-900 mb-2">🌐 Copilot Spaces <span className="text-xs font-normal text-blue-600">(Copilot column)</span></h3>
            <p className="text-sm text-gray-700 mb-3">Curated, shareable knowledge base — instructions, repos, docs — that grounds Copilot in team context.</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">✓</span><span>Share context &amp; knowledge</span></li>
              <li className="flex"><span className="mr-2">✓</span><span>GitHub-native, no setup</span></li>
              <li className="flex"><span className="mr-2">✓</span><span>Auto-synced sources</span></li>
              <li className="flex"><span className="mr-2">✓</span><span>Org-level access control</span></li>
            </ul>
            <p className="text-xs text-blue-700 mt-3">
              <a href="https://github.com/copilot/spaces" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/copilot/spaces</a>
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-bold text-green-900 mb-2">📦 APM</h3>
            <p className="text-sm text-gray-700 mb-3">Agent Package Manager — "npm for AI agent config". Manages instructions, skills, prompts, and MCP servers as versioned, reproducible packages.</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">✓</span><span>Version-controlled config</span></li>
              <li className="flex"><span className="mr-2">✓</span><span>One-command team setup</span></li>
              <li className="flex"><span className="mr-2">✓</span><span>Multi-tool output</span></li>
              <li className="flex"><span className="mr-2">✓</span><span>Zero vendor lock-in</span></li>
            </ul>
            <p className="text-xs text-green-700 mt-3">
              <a href="https://github.com/microsoft/apm" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">github.com/microsoft/apm</a>
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">💡 How They Complement Each Other</h4>
          <p className="text-sm text-gray-700">
            <strong>Spaces</strong> excels at sharing knowledge and context within GitHub's ecosystem. <strong>APM</strong> excels at distributing standardized agent configuration across tools and teams as code—think of them as <em>wiki vs. package manager</em>.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Copilot Spaces",
    subtitle: "Persistent, Shareable Context for Your Team",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-900 mb-2">What Goes in a Space?</h3>
          <p className="text-gray-700">A space bundles <strong>instructions</strong> (what Copilot should focus on) and <strong>sources</strong> (files, repos, PRs, docs) into a single reusable context that's always up to date.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">📋 Instructions</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Areas of expertise to focus on</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Task types to help with</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Guardrails and boundaries</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">📁 Sources</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Files &amp; entire repositories</span></li>
              <li className="flex"><span className="mr-2">•</span><span>PRs, issues, GitHub links</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Uploaded docs &amp; plain text</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">🏢 Sharing &amp; Access Control</h4>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-medium mb-1">Organization-owned:</p>
              <ul className="space-y-1">
                <li>• Admin / Editor / Viewer roles</li>
                <li>• Visible to all org members</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-1">Individual-owned:</p>
              <ul className="space-y-1">
                <li>• Public, specific users, or private</li>
                <li>• Viewers see only their accessible sources</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Availability:</strong> Anyone with a Copilot license (including Copilot Free) can create and use Spaces at <a href="https://github.com/copilot/spaces" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">github.com/copilot/spaces</a>.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Spaces in Practice",
    subtitle: "Use Your Space in GitHub Web and Your IDE",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-900 mb-2">🌐 GitHub Web</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Chat grounded in the space's context</span></li>
              <li className="flex"><span className="mr-2">•</span><span>View team conversations in the Conversations tab</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Change the LLM model per space</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Star favorite spaces for quick access</span></li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-bold text-purple-900 mb-2">💻 Your IDE</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Access via GitHub MCP server (agent mode)</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Enable <code className="bg-purple-100 px-1 rounded text-xs">copilot_spaces</code> toolset</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Reference the space by name in your prompt</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Works in any IDE with Copilot + MCP</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-2">💡 Example IDE Prompt</h4>
          <code className="block bg-gray-100 p-3 rounded text-gray-800 text-sm">
            Using the Copilot space 'Checkout Flow Redesign' owned by myorg, summarize the implementation plan.
          </code>
        </div>

        <div className="bg-orange-100 p-4 rounded-lg">
          <p className="text-sm italic text-orange-900">
            <strong>Note:</strong> When using Spaces in your IDE, repository content is not supported—only instructions and uploaded sources from the space.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "APM: Agent Package Manager",
    subtitle: "npm for AI Agent Configuration",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-900 mb-2">What is APM?</h3>
          <p className="text-gray-700">APM treats AI agent configuration as a managed dependency. Declare your team's instructions, skills, prompts, and MCP servers in <code className="bg-green-100 px-1 rounded">apm.yml</code>—then install them reproducibly anywhere.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">📦 7 Config Primitives</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span><strong>Instructions</strong> — coding standards</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>Skills</strong> — reusable AI capabilities</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>Prompts</strong> — slash command workflows</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>Agents</strong> — specialized AI personas</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>Context</strong> — project knowledge</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>Hooks</strong> — lifecycle event handlers</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>MCP Servers</strong> — tool integrations</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">🔑 Key Benefits</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">✓</span><span>Reproducible via <code className="bg-gray-100 px-1 rounded text-xs">apm.lock</code></span></li>
              <li className="flex"><span className="mr-2">✓</span><span>Install from any git host</span></li>
              <li className="flex"><span className="mr-2">✓</span><span>Compile for Copilot, Claude, Cursor</span></li>
              <li className="flex"><span className="mr-2">✓</span><span>Transitive dependency resolution</span></li>
              <li className="flex"><span className="mr-2">✓</span><span>Version control &amp; auditable</span></li>
              <li className="flex"><span className="mr-2">✓</span><span>CI/CD integration via GitHub Actions</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-sm italic text-green-900">
            <strong>Guiding principle:</strong> "Collaboration over isolation — prompts as shared, version-controlled artifacts." — <a href="https://github.com/microsoft/apm" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">github.com/microsoft/apm</a>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "APM + Copilot Coding Agent",
    subtitle: "Auto-initialize your team's AI config in the agent environment",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-900 mb-2">The Problem</h3>
          <p className="text-gray-700">When Copilot coding agent spins up an ephemeral environment to work on a task, it starts fresh — with none of your team's APM-managed instructions, skills, or MCP servers installed.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">🛠️ The Solution</h4>
            <p className="text-sm text-gray-700 mb-2">Create a <strong>Copilot setup steps</strong> file to run <code className="bg-gray-100 px-1 rounded text-xs">apm install</code> before the agent starts work.</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Runs in GitHub Actions before Copilot starts</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Deterministic — no trial-and-error installs</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Agent gets full team config every time</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">📂 File Location</h4>
            <code className="block bg-gray-100 p-2 rounded text-xs text-gray-800 mb-2">.github/workflows/<br/>copilot-setup-steps.yml</code>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Must be on your default branch</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Job must be named <code className="bg-gray-100 px-1 rounded text-xs">copilot-setup-steps</code></span></li>
              <li className="flex"><span className="mr-2">•</span><span>Auto-runs on push to validate</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg">
          <pre className="text-green-400 text-xs overflow-x-auto">{`jobs:
  copilot-setup-steps:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v5
      - name: Install APM config
        run: npx apm install`}</pre>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Docs:</strong> <a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Customize the Copilot coding agent environment</a>
          </p>
        </div>
      </div>
    )
  }
];
