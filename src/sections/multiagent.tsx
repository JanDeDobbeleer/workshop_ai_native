import { Network } from 'lucide-react';
import { SlideType } from './types';

export const multiagentSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Network className="w-20 h-20 text-purple-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 text-center">
          Multi-Agent
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Orchestrating multiple AI agents
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Multi-Agent Development with Git Worktrees",
    subtitle: "Supercharge your AI-powered workflow with parallel workspaces",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-8">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-8 rounded-lg shadow-xl max-w-3xl">
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-5xl">🔀</div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Parallel Workflows for AI Agents</h3>
              <p className="text-purple-100 text-lg">
                Learn how git worktrees enable multiple AI agents to work simultaneously without conflicts
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl w-full">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-t-4 border-purple-500 text-center">
            <div className="text-4xl mb-3">📁</div>
            <h4 className="font-bold text-gray-900 mb-2">Isolated Workspaces</h4>
            <p className="text-gray-600">Each agent gets its own directory and branch</p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-t-4 border-blue-500 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="font-bold text-gray-900 mb-2">True Parallelism</h4>
            <p className="text-gray-600">Multiple agents work simultaneously on different tasks</p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-t-4 border-green-500 text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h4 className="font-bold text-gray-900 mb-2">Safe Experiments</h4>
            <p className="text-gray-600">Isolated changes that don't affect your main work</p>
          </div>
        </div>

        <div className="bg-purple-50 px-8 py-4 rounded-lg max-w-3xl w-full border border-purple-200">
          <p className="text-center text-purple-900 text-lg">
            <strong>The Challenge:</strong> How do you let AI agents work in parallel without stepping on each other's toes?
            <strong className="ml-2">The Solution:</strong> Git worktrees.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "What are Git Worktrees?",
    subtitle: "Multiple branches, multiple directories, same repository",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">What is a Git Worktree?</h3>
          <p className="text-lg text-gray-700">
            A git worktree allows you to check out multiple branches of the same repository simultaneously, each in its own directory.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-3">Key Concepts:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Multiple folders representing different branches instead of constant switching</span></li>
              <li className="flex"><span className="mr-2">•</span><span>All worktrees share the same Git history (stored in .git)</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Each has its own working directory with its own checked-out branch</span></li>
              <li className="flex"><span className="mr-2">•</span><span>No more stashing changes, WIP commits, or cloning repositories again</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm italic text-purple-900">
            <strong>Key Takeaway:</strong> Work on multiple branches simultaneously without the mental overhead of context switching.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Git Worktrees vs Branches",
    subtitle: "Understanding the structural difference",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {/* Traditional Branches */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg border-l-4 border-gray-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Branches</h3>
            <div className="bg-white p-4 rounded border border-gray-300 font-mono text-sm mb-4">
              <div className="mb-2">📁 my-repo/</div>
              <div className="ml-4 mb-2">📁 .git/ (full repo data)</div>
              <div className="ml-4 mb-1">📄 file1.js</div>
              <div className="ml-4">📄 file2.js</div>
            </div>
            <div className="bg-yellow-50 border border-yellow-300 p-3 rounded">
              <p className="text-sm text-yellow-900">
                ⚠️ Switch branch = files change in same folder
              </p>
            </div>
          </div>

          {/* Git Worktrees */}
          <div className="bg-purple-50 p-4 md:p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Git Worktrees</h3>
            <div className="bg-white p-4 rounded border border-purple-300 font-mono text-sm mb-4 space-y-3">
              <div>
                <div className="mb-1">📁 my-repo/ (main)</div>
                <div className="ml-4 mb-1">📁 .git/ (full repo data)</div>
                <div className="ml-4">📄 files...</div>
              </div>
              <div>
                <div className="mb-1">📁 my-repo-feature/</div>
                <div className="ml-4 text-purple-700">📄 .git → points to main</div>
                <div className="ml-4">📄 files (different version)</div>
              </div>
              <div>
                <div className="mb-1">📁 my-repo-bugfix/</div>
                <div className="ml-4 text-purple-700">📄 .git → points to main</div>
                <div className="ml-4">📄 files (different version)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200 text-center">
            <div className="text-2xl mb-2">📂</div>
            <p className="text-sm font-semibold text-purple-900">Standalone Folders</p>
            <p className="text-xs text-gray-600 mt-1">Each worktree is its own directory</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200 text-center">
            <div className="text-2xl mb-2">🔗</div>
            <p className="text-sm font-semibold text-purple-900">Shared Database</p>
            <p className="text-xs text-gray-600 mt-1">Lightweight and fast</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200 text-center">
            <div className="text-2xl mb-2">🛡️</div>
            <p className="text-sm font-semibold text-purple-900">Conflict Prevention</p>
            <p className="text-xs text-gray-600 mt-1">Can't check out same branch twice</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Why Worktrees Work Perfectly for AI Agents",
    subtitle: "Parallel work without interference",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Multi-Agent Development</h3>
          <p className="text-lg text-gray-700">
            When working with AI agents, they need their own space to work without interfering with your current tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-blue-200">
            <div className="text-3xl mb-3 text-center">🤖</div>
            <h4 className="font-semibold text-blue-900 mb-2">Isolated Agent Workspace:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Each agent gets its own worktree</span></li>
              <li className="flex"><span className="mr-2">•</span><span>No interference with your work</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Safe to delete if agent fails</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-blue-200">
            <div className="text-3xl mb-3 text-center">⚡</div>
            <h4 className="font-semibold text-blue-900 mb-2">Parallel Execution:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>AI agents work while you continue</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Multiple agents on different tasks</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Compare different approaches easily</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Key Benefit:</strong> Spin up a worktree for an agent, let it work in parallel, then review changes without any context switching.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Multi-Agent Workflow Pattern",
    subtitle: "Organize your work with purpose-driven worktrees",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-8">
        <p className="text-xl text-gray-700 max-w-3xl w-full text-center">
          Each worktree serves a specific purpose in your development workflow
        </p>

        <div className="w-full max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-blue-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">🏠</div>
              <div className="text-xl font-bold mb-2">Main Worktree</div>
              <div className="text-sm">Primary work, PR reviews, code browsing</div>
            </div>

            <div className="bg-purple-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">🤖</div>
              <div className="text-xl font-bold mb-2">Agent Worktrees</div>
              <div className="text-sm">On-demand agent tasks, parallel experiments</div>
            </div>

            <div className="bg-green-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">⚡</div>
              <div className="text-xl font-bold mb-2">Quick-Fix Worktrees</div>
              <div className="text-sm">Temporary changes, quick tests, bug fixes</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 px-6 py-4 rounded-lg max-w-3xl w-full">
          <p className="text-center text-gray-900">
            <strong>Clear Organization:</strong> See at a glance what's happening where, with each worktree having a clear, defined purpose.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Key Benefits",
    subtitle: "Why the worktree + agent workflow improves productivity",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div className="bg-green-50 p-4 md:p-5 rounded-lg border-l-4 border-green-500">
            <div className="text-3xl mb-3">💾</div>
            <h4 className="text-lg font-bold text-green-900 mb-2">Context Preservation</h4>
            <p className="text-gray-700">
              Leave your work exactly as it is, chaos and all, and switch to something else without losing your train of thought.
            </p>
          </div>

          <div className="bg-blue-50 p-4 md:p-5 rounded-lg border-l-4 border-blue-500">
            <div className="text-3xl mb-3">✨</div>
            <h4 className="text-lg font-bold text-blue-900 mb-2">No More WIP Commits</h4>
            <p className="text-gray-700">
              Every commit is meaningful. No more "WIP", "temp", or "fix later" commits cluttering your history.
            </p>
          </div>

          <div className="bg-purple-50 p-4 md:p-5 rounded-lg border-l-4 border-purple-500">
            <div className="text-3xl mb-3">🔬</div>
            <h4 className="text-lg font-bold text-purple-900 mb-2">Parallel Experimentation</h4>
            <p className="text-gray-700">
              Have multiple agents trying different approaches to the same problem, then compare the results side-by-side.
            </p>
          </div>

          <div className="bg-orange-50 p-4 md:p-5 rounded-lg border-l-4 border-orange-500">
            <div className="text-3xl mb-3">🧠</div>
            <h4 className="text-lg font-bold text-orange-900 mb-2">Mental Clarity</h4>
            <p className="text-gray-700">
              Each worktree serves a specific purpose, helping you stay organized even when juggling multiple tasks.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-center text-gray-900">
            <strong>The Future of Development:</strong> Parallel workflows for both humans and their AI assistants.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Core Git Worktree Commands",
    subtitle: "Essential commands for managing worktrees",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Git Worktree Basics</h3>
          <p className="text-lg text-gray-700">
            Simple commands to create, manage, and clean up disposable worktrees.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 font-mono text-sm">git worktree add &lt;path&gt; -b &lt;branch&gt;</h4>
            <p className="text-gray-700">Creates new working directory and branch in one step</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 font-mono text-sm">git worktree list</h4>
            <p className="text-gray-700">Shows all active worktrees with paths, commits, and branches</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 font-mono text-sm">git worktree remove &lt;path&gt;</h4>
            <p className="text-gray-700">Removes working directory (branch remains unless deleted separately)</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 font-mono text-sm">git worktree prune</h4>
            <p className="text-gray-700">Cleans up metadata for manually deleted worktrees</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>Typical Flow:</strong> Add disposable worktree → do isolated work or let agent run → remove worktree and optionally delete branch
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Git Worktrees in VS Code",
    subtitle: "Built-in support for managing multiple working directories",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">VS Code Worktree Support</h3>
          <p className="text-lg text-gray-700">
            VS Code has built-in support for Git worktrees, making it easy to manage and work with multiple branches simultaneously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-blue-200">
            <div className="text-3xl mb-3 text-center">➕</div>
            <h4 className="font-semibold text-blue-900 mb-2">Create a Worktree</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">1.</span><span>Open Source Control Repositories view</span></li>
              <li className="flex"><span className="mr-2">2.</span><span>More Actions (...) → Worktrees → Create Worktree</span></li>
              <li className="flex"><span className="mr-2">3.</span><span>Choose branch and location</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-blue-200">
            <div className="text-3xl mb-3 text-center">🔀</div>
            <h4 className="font-semibold text-blue-900 mb-2">Open a Worktree</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Right-click → Open in New/Current Window</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Command: <code className="text-xs bg-gray-200 px-1 rounded">Git: Open Worktree</code></span></li>
              <li className="flex"><span className="mr-2">•</span><span>Or just open the folder directly</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-blue-200">
            <div className="text-3xl mb-3 text-center">🔍</div>
            <h4 className="font-semibold text-blue-900 mb-2">Compare Changes</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Right-click file → Compare with Workspace</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Side-by-side diff view</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Review agent changes easily</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-blue-200">
            <div className="text-3xl mb-3 text-center">📥</div>
            <h4 className="font-semibold text-blue-900 mb-2">Migrate Changes</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Command: <code className="text-xs bg-gray-200 px-1 rounded">Migrate Worktree Changes</code></span></li>
              <li className="flex"><span className="mr-2">•</span><span>Merge all changes to current workspace</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Perfect for bringing in agent work</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Key Benefit:</strong> Each worktree appears as a separate entry in Source Control Repositories view, giving you full visibility of all parallel work.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "GitHub Copilot CLI: /fleet",
    subtitle: "Native multi-agent orchestration — automatically break tasks into parallel subagents",
    content: (
      <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">⚙️ How It Works:</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">1.</span><span>You provide a task or implementation plan</span></li>
              <li className="flex"><span className="mr-2">2.</span><span>Main agent splits it into independent subtasks</span></li>
              <li className="flex"><span className="mr-2">3.</span><span>Subtasks run in parallel via subagents</span></li>
              <li className="flex"><span className="mr-2">4.</span><span>Orchestrator merges results into one outcome</span></li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">vs. Manual Worktrees:</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2 text-green-600">✓</span><span>No manual setup or merging needed</span></li>
              <li className="flex"><span className="mr-2 text-green-600">✓</span><span>Dependency management built in</span></li>
              <li className="flex"><span className="mr-2 text-green-600">✓</span><span>Uses your custom agents for specialization</span></li>
              <li className="flex"><span className="mr-2 text-yellow-500">~</span><span>Less control over individual subtasks</span></li>
              <li className="flex"><span className="mr-2 text-yellow-500">~</span><span>Higher LLM request consumption</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
          <p className="text-gray-400 mb-1"># Interactive</p>
          <p className="text-yellow-300">&gt; /fleet implement the new user auth feature with tests and docs</p>
          <p className="text-gray-400 mt-3 mb-1"># Programmatic</p>
          <p className="text-green-400">copilot -p "/fleet implement the new user auth feature"</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>Mission Control:</strong> GitHub's Agent HQ gives you a unified interface to assign tasks, monitor agents in real time, steer mid-run, and jump straight to resulting pull requests — across GitHub.com, VS Code, and the CLI.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Other Tools That Abstract Worktree Management",
    subtitle: "Simplify your multi-agent workflow with dedicated tools",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-3">Worktree Management Tools</h3>
          <p className="text-lg text-gray-700">
            These tools handle worktree setup and management automatically, letting you focus on development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">⚙️</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">gw (by golbin)</h4>
                <a href="https://github.com/golbin/gw" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm">github.com/golbin/gw</a>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Cross-platform CLI that wraps git worktree for multi-agent/parallel work management
            </p>
            <div className="bg-gray-50 p-3 rounded border border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">Key Features:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex"><span className="mr-2">•</span><span>Commands: <code className="text-xs bg-gray-200 px-1 rounded">gw add</code>, <code className="text-xs bg-gray-200 px-1 rounded">gw status</code>, <code className="text-xs bg-gray-200 px-1 rounded">gw apply</code></span></li>
                <li className="flex"><span className="mr-2">•</span><span>Metadata tracking and locking</span></li>
                <li className="flex"><span className="mr-2">•</span><span>Verification bundles for testing</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">🤖</div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900">Claude Squad</h4>
                <a href="https://smtg-ai.github.io/claude-squad/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm">smtg-ai.github.io/claude-squad</a>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Manage multiple AI agents (Claude Code, Codex, Aider) in one unified interface
            </p>
            <div className="bg-gray-50 p-3 rounded border border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">Key Features:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex"><span className="mr-2">•</span><span>Supervise multiple agents in one UI</span></li>
                <li className="flex"><span className="mr-2">•</span><span>Isolate tasks in git workspaces</span></li>
                <li className="flex"><span className="mr-2">•</span><span>Review work before shipping</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm italic text-purple-900 text-center">
            <strong>Both tools abstract away the complexity</strong> of worktree management, letting you focus on orchestrating AI agents.
          </p>
        </div>
      </div>
    )
  }
];
