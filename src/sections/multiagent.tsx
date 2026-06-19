import { Network } from 'lucide-react';
import { SlideType } from './types';
import { ToolMatrix, STANDARD_TOOL_COLUMNS } from '../components/ToolMatrix';
import { orchestrationMatrixRows } from '../components/toolMatrixRows';

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
          Parallel orchestration — define, delegate, isolate, synthesize
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
    title: "Agents → Orchestration",
    subtitle: "Where Agents & Skills ends and Multi-Agent begins",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">
            <strong>Agents &amp; Skills</strong> covers file formats, delegation, handoffs, and single-agent patterns.
            <strong> Multi-Agent</strong> covers running multiple agents in parallel with isolation and merge discipline.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Agents &amp; Skills owns</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Agent/skill file paths</li>
              <li>• Delegation triggers &amp; handoffs</li>
              <li>• Approval levels &amp; permissions</li>
              <li>• Single-agent workflows</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Multi-Agent owns</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Parallel execution</li>
              <li>• Git worktrees &amp; isolation</li>
              <li>• Fleet / orchestration UI</li>
              <li>• Synthesis &amp; merge discipline</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The Five-Step Loop",
    subtitle: "define → delegate → parallelize → isolate → synthesize",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">Every multi-agent workflow follows the same loop — tool-specific mechanics differ; the sequence does not.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {[
            { step: 'Define', desc: 'Agent files & roles' },
            { step: 'Delegate', desc: 'Hub assigns subtasks' },
            { step: 'Parallelize', desc: 'Independent lanes' },
            { step: 'Isolate', desc: 'Worktrees / sandboxes' },
            { step: 'Synthesize', desc: 'Human review & merge' },
          ].map((item, i) => (
            <div key={item.step} className="bg-white p-3 rounded-lg shadow border border-purple-200 text-center">
              <div className="text-xs text-purple-500 font-bold mb-1">{i + 1}</div>
              <div className="font-bold text-purple-900 text-sm">{item.step}</div>
              <div className="text-xs text-gray-600 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-sm italic text-purple-900 text-center">
            <strong>Not taught here:</strong> realtime agent-to-agent chat, autonomous merge to main, or &quot;multi-agent fixes bad prompts.&quot;
          </p>
        </div>
      </div>
    )
  },
  {
    title: "When Multi-Agent Helps vs Hurts",
    subtitle: "Use parallelism only when tasks are truly independent",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">✅ Helps when</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Tasks touch different files or modules</li>
              <li>• Research + implementation can run in parallel</li>
              <li>• Each lane has clear acceptance criteria</li>
              <li>• You have merge/review capacity</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-900 mb-2">❌ Hurts when</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Same file, conflicting edits</li>
              <li>• Vague prompts — parallelism amplifies confusion</li>
              <li>• Deep agent trees with no human checkpoint</li>
              <li>• Fire-and-forget with no synthesis step</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-sm text-gray-700 text-center">
            <strong>Independence test:</strong> Could two developers work on these tasks in separate branches without coordinating every minute? If yes, parallelize.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Orchestration by Tool",
    subtitle: "Five-step loop — cross-tool matrix",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <ToolMatrix
          columns={STANDARD_TOOL_COLUMNS}
          rows={orchestrationMatrixRows}
          density="compact"
          footnote="Devin ACP registry may still show ~/.windsurf/acp/ (legacy path) in docs."
        />
      </div>
    )
  },
  {
    title: "Delegate: Hub-and-Spoke",
    subtitle: "One orchestrator assigns isolated subtasks",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">Prefer <strong>hub-and-spoke</strong> delegation — one parent agent assigns work and synthesizes results. Avoid peer-to-peer agent mesh fantasies.</p>
        </div>
        <div className="flex flex-col items-center gap-2 py-4">
          <div className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold">Orchestrator</div>
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="h-8 w-px bg-purple-300" />
              <div className="bg-white border border-purple-200 px-4 py-2 rounded-lg text-sm">Agent A</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-8 w-px bg-purple-300" />
              <div className="bg-white border border-purple-200 px-4 py-2 rounded-lg text-sm">Agent B</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-8 w-px bg-purple-300" />
              <div className="bg-white border border-purple-200 px-4 py-2 rounded-lg text-sm">Agent C</div>
            </div>
          </div>
        </div>
        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-sm italic text-purple-900">Results flow back to the hub — not sideways between agents.</p>
        </div>
      </div>
    )
  },
  {
    title: "Parallelize: Independence Test",
    subtitle: "Only parallelize when lanes won't collide",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-gray-700">Before spawning parallel agents, verify: separate files, separate concerns, separate branches/worktrees.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">Checklist</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex"><span className="mr-2">☐</span><span>Each agent has a bounded file scope</span></li>
            <li className="flex"><span className="mr-2">☐</span><span>Each agent runs in its own worktree or sandbox</span></li>
            <li className="flex"><span className="mr-2">☐</span><span>Shared interfaces (APIs, types) are defined upfront</span></li>
            <li className="flex"><span className="mr-2">☐</span><span>Human review point before merge</span></li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Multi-Agent Development with Git Worktrees",
    subtitle: "The isolate step — parallel workspaces",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-xl max-w-3xl">
          <h3 className="text-2xl font-bold text-white mb-2">Git worktrees = filesystem isolation</h3>
          <p className="text-purple-100">Each agent gets its own directory and branch — no stashing, no WIP commits, no clone spam.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full">
          <div className="bg-white p-4 rounded-lg shadow border-t-4 border-purple-500 text-center">
            <div className="text-3xl mb-2">📁</div>
            <h4 className="font-bold text-gray-900 mb-1">Isolated Workspaces</h4>
            <p className="text-sm text-gray-600">Each agent, own directory</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-t-4 border-blue-500 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-bold text-gray-900 mb-1">True Parallelism</h4>
            <p className="text-sm text-gray-600">Simultaneous tasks</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-t-4 border-green-500 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <h4 className="font-bold text-gray-900 mb-1">Safe Experiments</h4>
            <p className="text-sm text-gray-600">Main branch untouched</p>
          </div>
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
            Check out multiple branches of the same repository simultaneously — each in its own directory, sharing one <code className="bg-purple-100 px-1 rounded">.git</code> database.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
          <ul className="space-y-2 text-gray-700">
            <li className="flex"><span className="mr-2">•</span><span>No stashing or WIP commits to switch context</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Git prevents checking out the same branch twice</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Tool-agnostic — works with Cursor, Copilot, Claude, Devin</span></li>
          </ul>
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
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg border-l-4 border-gray-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Branches</h3>
            <p className="text-sm text-gray-700 mb-3">One folder — switch branch, files change in place.</p>
            <div className="bg-yellow-50 border border-yellow-300 p-3 rounded text-sm text-yellow-900">
              ⚠️ Two agents on one checkout = conflicts
            </div>
          </div>
          <div className="bg-purple-50 p-4 md:p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Git Worktrees</h3>
            <p className="text-sm text-gray-700 mb-3">Multiple folders — each branch has its own working directory.</p>
            <div className="bg-green-50 border border-green-300 p-3 rounded text-sm text-green-900">
              ✓ Agent A in <code>repo-feature/</code>, Agent B in <code>repo-fix/</code>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Multi-Agent Workflow Pattern",
    subtitle: "Purpose-driven worktrees",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg text-center">
            <div className="text-2xl mb-2">🏠</div>
            <div className="font-bold">Main Worktree</div>
            <div className="text-sm opacity-90">Reviews &amp; integration</div>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-lg shadow-lg text-center">
            <div className="text-2xl mb-2">🤖</div>
            <div className="font-bold">Agent Worktrees</div>
            <div className="text-sm opacity-90">Parallel experiments</div>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg text-center">
            <div className="text-2xl mb-2">⚡</div>
            <div className="font-bold">Quick-Fix</div>
            <div className="text-sm opacity-90">Disposable branches</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Core Git Worktree Commands",
    subtitle: "Essential commands for managing worktrees",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <code className="font-mono text-sm font-semibold">git worktree add &lt;path&gt; -b &lt;branch&gt;</code>
            <p className="text-sm text-gray-600 mt-1">Create directory + branch</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <code className="font-mono text-sm font-semibold">git worktree list</code>
            <p className="text-sm text-gray-600 mt-1">Show all active worktrees</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <code className="font-mono text-sm font-semibold">git worktree remove &lt;path&gt;</code>
            <p className="text-sm text-gray-600 mt-1">Clean up when agent finishes</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Synthesize: Merge Discipline",
    subtitle: "Human review before integration",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">Parallel agents produce parallel diffs. <strong>Synthesis</strong> is your review gate — never skip it for production code.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Review checklist</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Diff each worktree against main</li>
              <li>• Run tests before merge</li>
              <li>• Resolve conflicts in main worktree</li>
              <li>• Delete worktree + branch when done</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-red-200">
            <h4 className="font-semibold text-red-900 mb-2">Anti-patterns</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Swarm by default</li>
              <li>• Same-file parallel writers</li>
              <li>• Fire-and-forget delegation</li>
              <li>• Autonomous merge to main</li>
              <li>• Deep agent trees without checkpoints</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Orchestration Surfaces",
    subtitle: "Vendor callouts — fleet management UI",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">Beyond CLI and IDE, some tools offer dedicated orchestration UI for parallel agent fleets.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border-2 border-purple-300">
            <h4 className="font-bold text-purple-900 mb-1">
              GitHub Copilot App <span className="text-xs font-normal text-purple-600">(Copilot callout)</span>
            </h4>
            <p className="text-sm text-gray-700 mb-2">Desktop control center for parallel workstreams, GitHub issues/PRs, and agent lifecycle.</p>
            <a href="https://github.com/github/app" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-600 hover:underline">github.com/github/app</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-2 border-blue-300">
            <h4 className="font-bold text-blue-900 mb-1">
              Devin Command Center <span className="text-xs font-normal text-blue-600">(Devin Desktop callout)</span>
            </h4>
            <p className="text-sm text-gray-700 mb-2">Kanban-style assignment, parallel local + cloud lanes, ACC review workflows.</p>
            <a href="https://docs.devin.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">docs.devin.ai</a>
          </div>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Use orchestration UI when managing 3+ parallel agents — not for every single task.</p>
        </div>
      </div>
    )
  },
];
