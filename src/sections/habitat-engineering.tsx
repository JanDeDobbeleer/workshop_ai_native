import { HeartHandshake } from 'lucide-react';
import { SlideType } from './types';

export const habitatEngineeringSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <HeartHandshake className="w-16 h-16 md:w-20 md:h-20 text-rose-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-rose-900 text-center">
          Habitat Engineering
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Designing the space where humans and agents work together
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-rose-300 rounded-full"></div>
          <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
          <div className="w-3 h-3 bg-rose-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Beyond Single-Player",
    subtitle: "Most agentic workflows today are built for one.",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
          <h3 className="text-xl font-bold text-rose-900 mb-2">A quiet assumption</h3>
          <p className="text-gray-700">Up to now, most agentic-coding advice—and most of this workshop—has assumed one engineer working solo with an agent. Great for a solo founder. It doesn't scale infinitely once more than one engineer touches the codebase.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">🧍 Single-Player Mode</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>One dev, one agent, one context</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Instructions live in your head</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Works great—until it doesn't</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">👥 Multiplayer Mode</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Multiple humans and agents, same repo</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Shared context has to be designed, not assumed</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Requires deliberate practices, not habits</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-100 p-4 rounded-lg">
          <p className="text-sm italic text-rose-900">
            <strong>Habitat engineering</strong> is the discipline of designing your repo, environment, and team practices for the multiplayer case—both human teammates and agents working in it together.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "What Makes a Good Habitat",
    subtitle: "Amenable to agents = amenable to humans.",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
          <h3 className="text-xl font-bold text-rose-900 mb-2">The investment pays twice</h3>
          <p className="text-gray-700">An environment you design for agents to understand quickly also onboards new human engineers faster. Habitat work isn't extra work—it's the same work, done once, that benefits both.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">🏗️ Document Your Architecture</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>How the pieces fit together</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Why decisions were made, not just what</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">📝 Write Down "The Way You Work"</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Captured as instructions and skills</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Same practices covered earlier this workshop</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">🔍 Adversarial Review Culture</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Agents and humans check each other's work</span></li>
              <li className="flex"><span className="mr-2">•</span><span>No output ships unexamined</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">🚪 Clear Onboarding Docs</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>A path from zero to productive</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Readable by a new hire or a new agent session</span></li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Humans + Agents, Same Rules",
    subtitle: "What helps one helps the other.",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
          <h3 className="text-xl font-bold text-rose-900 mb-2">None of this is required. All of it helps.</h3>
          <p className="text-gray-700">Good naming, modular code, clear docs—an agent doesn't strictly need any of it to work in your codebase. They can grep their way around messy code. But clarity makes every change faster and safer for both the agent and the human reviewing it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">✅ Still Worth Doing</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Good naming and clear module boundaries</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Docs that explain intent, not just mechanics</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Small, reviewable changes</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">⚠️ The Tempting Shortcut</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>"The AI can handle messy code, so why bother?"</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Slower reviews, harder debugging—for humans too</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-100 p-4 rounded-lg">
          <p className="text-sm italic text-rose-900">
            <strong>Bottom line:</strong> code clarity isn't a courtesy you extend to human readers anymore—it's infrastructure that both your teammates and your agents run on.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "The Config Drift Problem",
    subtitle: "Habitat rules that only live in your head don't scale.",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
          <h3 className="text-xl font-bold text-rose-900 mb-2">Sound familiar?</h3>
          <p className="text-gray-700">Teams adopt AI tools individually—each developer configures their own instructions, prompts, and skills from scratch. The habitat you designed exists in one person's setup, not the team's.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">😤 Common Pain Points</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Each dev configs AI tools from scratch</span></li>
              <li className="flex"><span className="mr-2">•</span><span>No shared prompts or instructions</span></li>
              <li className="flex"><span className="mr-2">•</span><span>New hires spend hours on AI setup</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Best practices never get shared</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">🎯 What a Habitat Needs</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Shared, versioned AI configuration</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Consistent context across the team</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Reproducible, auditable setups</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Easy onboarding for new members</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-100 p-4 rounded-lg">
          <p className="text-sm italic text-rose-900">
            <strong>The Analogy:</strong> Just as teams use package managers for code dependencies, they need a way to manage AI configuration as a shared, version-controlled artifact.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "APM: Agent Package Manager",
    subtitle: "npm for AI agent configuration—one way to build the habitat",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
          <h3 className="text-xl font-bold text-rose-900 mb-2">What is APM?</h3>
          <p className="text-gray-700">APM treats AI agent configuration as a managed dependency. Declare your team's instructions, skills, prompts, and MCP servers in <code className="bg-rose-100 px-1 rounded">apm.yml</code>—then install them reproducibly anywhere. It's a concrete tool for habitat engineering: the habitat's rules become code, not tribal knowledge.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">📦 7 Config Primitives</h4>
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
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">🔑 Key Benefits</h4>
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

        <div className="bg-rose-100 p-4 rounded-lg">
          <p className="text-sm italic text-rose-900">
            <strong>Guiding principle:</strong> "Collaboration over isolation — prompts as shared, version-controlled artifacts." — <a href="https://github.com/microsoft/apm" target="_blank" rel="noopener noreferrer" className="text-rose-700 hover:underline">github.com/microsoft/apm</a>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "APM + Copilot Coding Agent",
    subtitle: "Auto-initialize your team's habitat in the agent environment",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
          <h3 className="text-xl font-bold text-rose-900 mb-2">The Problem</h3>
          <p className="text-gray-700">When Copilot coding agent spins up an ephemeral environment to work on a task, it starts fresh — with none of your team's APM-managed instructions, skills, or MCP servers installed. The habitat doesn't travel with it by default.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">🛠️ The Solution</h4>
            <p className="text-sm text-gray-700 mb-2">Create a <strong>Copilot setup steps</strong> file to run <code className="bg-gray-100 px-1 rounded text-xs">apm install</code> before the agent starts work.</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Runs in GitHub Actions before Copilot starts</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Deterministic — no trial-and-error installs</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Agent gets full team habitat every time</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">📂 File Location</h4>
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

        <div className="bg-rose-100 p-4 rounded-lg">
          <p className="text-sm italic text-rose-900">
            <strong>Docs:</strong> <a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment" target="_blank" rel="noopener noreferrer" className="text-rose-700 hover:underline">Customize the Copilot coding agent environment</a>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "A Hidden Gem, Still Early",
    subtitle: "Less hype than harness/loop engineering—for now.",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
          <h3 className="text-xl font-bold text-rose-900 mb-2">Honest framing</h3>
          <p className="text-gray-700">Of all the new terms in this workshop, habitat engineering is the least developed. There isn't much public consensus yet on what "good" looks like. But as teams scale past the solo-engineer-plus-agent setup, it's likely to matter more, not less.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
          <h4 className="font-semibold text-rose-900 mb-2">📖 Where the Term Comes From</h4>
          <p className="text-sm text-gray-700">
            The term is associated with <strong>Russ Miles</strong>, who writes about it as part of his "Sovereign Engineer" / "Sovereign Apprentice" work. Worth reading as further exploration of the idea—though fair warning, the writing style leans heavily AI-generated. The underlying ideas are still worth engaging with.
          </p>
        </div>

        <div className="bg-rose-100 p-4 rounded-lg">
          <p className="text-sm italic text-rose-900">
            <strong>Take it as a starting point, not a spec:</strong> this is a concept to watch and shape, not one to follow blindly.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Habitat Engineering Checklist",
    subtitle: "Start here.",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-white p-5 rounded-lg shadow border border-rose-200">
          <h4 className="font-semibold text-rose-900 mb-3">✅ Checklist</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex"><span className="mr-2">✅</span><span>Architecture documented somewhere agents and humans both read</span></li>
            <li className="flex"><span className="mr-2">✅</span><span>AGENTS.md / custom instructions kept current</span></li>
            <li className="flex"><span className="mr-2">✅</span><span>Skills capture recurring workflows</span></li>
            <li className="flex"><span className="mr-2">✅</span><span>Config packaged &amp; versioned (e.g. APM) so it travels with the repo</span></li>
            <li className="flex"><span className="mr-2">✅</span><span>A review process both humans and agents participate in</span></li>
            <li className="flex"><span className="mr-2">✅</span><span>Onboarding docs a new hire—or a new agent session—could actually follow</span></li>
          </ul>
        </div>

        <div className="bg-rose-100 p-4 rounded-lg">
          <p className="text-sm italic text-rose-900">
            <strong>Pro Tip:</strong> Design your habitat for the multiplayer case from day one. The team you build for today is never just you plus one agent for long.
          </p>
        </div>
      </div>
    )
  }
];
