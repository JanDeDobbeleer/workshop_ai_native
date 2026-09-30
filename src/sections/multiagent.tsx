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
          Multiple conversations, each with a clear scope
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
    title: "Workers, Capacity, and Flow",
    subtitle: "Three related decisions, not competing definitions",
    content: (
      <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border-t-4 border-green-500">
            <h3 className="text-lg font-bold text-green-900 mb-2">Agents define workers</h3>
            <p className="text-sm text-gray-700">A reusable role packages instructions, tools, and permissions for a kind of work.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border-t-4 border-purple-500">
            <h3 className="text-lg font-bold text-purple-900 mb-2">Sessions add capacity</h3>
            <p className="text-sm text-gray-700">Several conversations can own separate outcomes at the same time.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border-t-4 border-slate-500">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Graphs define flow</h3>
            <p className="text-sm text-gray-700">Nodes and edges decide what runs, when it runs, and where results meet.</p>
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700 text-center">These choices work together. A graph may coordinate several agents and sessions, while a person still owns the outcome.</p>
        </div>
      </div>
    )
  },
  {
    title: "One Session, One Outcome",
    subtitle: "Separate the work before you multiply it",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">1. Bound the outcome</h4>
            <p className="text-sm text-gray-700">Give the conversation one deliverable and clear acceptance criteria.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">2. Separate the context</h4>
            <p className="text-sm text-gray-700">Each session gets only the files, decisions, and history needed for its task.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">3. Isolate code writers</h4>
            <p className="text-sm text-gray-700">Use a worktree or sandbox when a session edits code. Research sessions may only need separate context.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">4. Make handback reviewable</h4>
            <p className="text-sm text-gray-700">Return a focused branch, diff, or pull request with a concise summary.</p>
          </div>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-sm text-gray-700 text-center">Agents &amp; Skills covers session types and tool mechanics. Here, the concern is safe concurrent ownership.</p>
        </div>
      </div>
    )
  },
  {
    title: "Worktrees in Active Use",
    subtitle: "A captured example from the oh-my-posh repository",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">Three independent conversations used three isolated checkouts. Each could edit and test without changing the files beneath another session.</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg">
          <pre className="text-green-400 text-xs overflow-x-auto">{`.claude/worktrees/
  git-status-performance-d68c3d/
  heuristic-robinson-e44709/
  oh-my-posh-statusline-cleanup-1990e0/`}</pre>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Shared repository</h4>
            <p className="text-sm text-gray-700">The worktrees share Git history and objects, so they avoid clone-per-session overhead.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Separate working state</h4>
            <p className="text-sm text-gray-700">Each directory has its own checked-out branch, files, and in-progress changes.</p>
          </div>
        </div>
        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-sm text-purple-900 text-center"><strong>Worktrees prevent live workspace collisions.</strong> Clear ownership still prevents merge conflicts.</p>
        </div>
      </div>
    )
  },
  {
    title: "Can You Absorb the Parallel Work?",
    subtitle: "Capacity only helps when ownership and review stay clear",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Run another conversation when</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• It owns a clear, separate deliverable</li>
              <li>• Its code scope does not overlap another writer</li>
              <li>• You can review its result independently</li>
              <li>• Waiting would leave useful capacity idle</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-900 mb-2">Stay focused when</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Ownership is vague or shared</li>
              <li>• Sessions need constant coordination</li>
              <li>• Results will create one large review queue</li>
              <li>• You cannot verify every handback</li>
            </ul>
          </div>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-center text-purple-900"><strong>Takeaway:</strong> parallel sessions increase output only when human review capacity grows with them.</p>
        </div>
      </div>
    )
  },
];
