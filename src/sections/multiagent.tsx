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
    title: "GitHub Copilot App",
    subtitle: "A desktop control center for parallel agent-driven development",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-3">What It Is</h3>
          <p className="text-base text-gray-700">
            GitHub Copilot App is a desktop application built for agent-driven development with parallel workstreams, GitHub issue and PR workflows, and lifecycle management in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Why It Fits Multi-Agent Work</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Direct agents across parallel workstreams</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Native GitHub integration for repos, branches, and CI</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Designed to reduce switching between tools</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Practical Notes</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Built on GitHub Copilot CLI</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Public preview availability</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Installers for Windows, macOS, and Linux</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-100 p-3 rounded-lg border border-purple-200">
          <p className="text-sm italic text-purple-900">
            <strong>Source:</strong> github.com/github/app
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Multica.ai",
    subtitle: "Assign issues to agents while execution stays local",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">How It Works</h3>
          <p className="text-base text-gray-700">
            Multica is a collaboration platform where humans and agents share the same workspace: assign an issue to an agent, track progress, and work through comments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Architecture</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Server stores workspaces, issues, and tasks</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Daemon runs on your machine and executes tasks</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Code and API keys stay on your side</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Runtime and Tooling</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Current runtime model: local daemon</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Cloud runtimes are listed as coming soon</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Supports 12 AI coding tools with a capability matrix</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg border border-blue-200">
          <p className="text-sm italic text-blue-900">
            <strong>Source:</strong> multica.ai/docs
          </p>
        </div>
      </div>
    )
  }
];
