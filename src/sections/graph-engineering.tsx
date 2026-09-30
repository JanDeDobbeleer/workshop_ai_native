import { Workflow } from "lucide-react";
import { SlideType } from "./types";

export const graphEngineeringSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Workflow className="w-16 h-16 md:w-20 md:h-20 text-slate-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 text-center">
          Graph Engineering
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Design routing, branches, gates, and synthesis
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
          <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
          <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "From Sequential Loop to Explicit Graph",
    subtitle: "Add structure when one route through the work is not enough",
    content: (
      <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
            <h3 className="font-bold text-cyan-900 mb-2">Simple loop</h3>
            <p className="text-sm text-gray-700 mb-3">Repeat a small sequence until a checkable outcome is reached.</p>
            <code className="block bg-white p-3 rounded text-xs text-center">work → check → retry or finish</code>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
            <h3 className="font-bold text-slate-900 mb-2">Explicit graph</h3>
            <p className="text-sm text-gray-700 mb-3">Model state, nodes, fixed or conditional edges, branches, joins, and gates.</p>
            <code className="block bg-white p-3 rounded text-xs text-center">route → fan out → gate → fan in</code>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-slate-200 text-center">
            <h4 className="font-semibold text-slate-900">Spec</h4>
            <p className="text-xs text-gray-600 mt-1">Intent and ground truth</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-slate-200 text-center">
            <h4 className="font-semibold text-slate-900">Workers and sessions</h4>
            <p className="text-xs text-gray-600 mt-1">Execution capacity</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-slate-200 text-center">
            <h4 className="font-semibold text-slate-900">Graph</h4>
            <p className="text-xs text-gray-600 mt-1">How and when work moves</p>
          </div>
        </div>
        <div className="bg-slate-100 p-3 rounded-lg">
          <p className="text-sm text-gray-700 text-center">Graphs can branch, join, and cycle. Start with a simple loop and make the wider flow explicit only when needed.</p>
        </div>
      </div>
    )
  },
  {
    title: "Safe Fan-Out, Explicit Fan-In",
    subtitle: "Parallel branches need contracts and one integration owner",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs md:text-sm overflow-x-auto text-center">{`route ─┬─▶ branch A ─┐
       ├─▶ branch B ─┼─▶ synthesize ─▶ verify
       └─▶ branch C ─┘`}</pre>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">Bound every branch</h4>
            <p className="text-sm text-gray-600">Define its input, output, ownership, and shared interfaces before it starts.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">Route on evidence</h4>
            <p className="text-sm text-gray-600">Use fixed or conditional edges to run only branches that the current state requires.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">Join under one owner</h4>
            <p className="text-sm text-gray-600">Synthesize centrally, then review and verify the combined result against the spec.</p>
          </div>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border-l-4 border-slate-500">
          <p className="text-sm text-gray-700">Separate contexts, worktrees, or sandboxes protect execution state. They support the graph, but they do not define it.</p>
        </div>
      </div>
    )
  },
  {
    title: "Describe the Graph in Markdown",
    subtitle: "Named phases and handoffs make the flow inspectable",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
          <p className="text-gray-700"><code className="bg-slate-200 px-1 rounded">.agents/skills/code-changes/</code> describes a workflow as named phases. Each handoff carries an artifact, and explicit gates decide whether work may continue.</p>
        </div>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs md:text-sm overflow-x-auto text-center">{`Analyze ─▶ human gate ─▶ Plan ─▶ Delegate
   ▲                                  │
   └── revise ◀── Verify ◀── Supervise
                         │
                      Deliver`}</pre>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-slate-200 text-center">
            <h4 className="font-semibold text-slate-900">Nodes</h4>
            <p className="text-xs text-gray-600 mt-1">Named phases with one purpose</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-slate-200 text-center">
            <h4 className="font-semibold text-slate-900">Edges</h4>
            <p className="text-xs text-gray-600 mt-1">Artifacts passed between phases</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-slate-200 text-center">
            <h4 className="font-semibold text-slate-900">Gates</h4>
            <p className="text-xs text-gray-600 mt-1">Human approval and quality checks</p>
          </div>
        </div>
        <div className="bg-slate-100 p-3 rounded-lg">
          <p className="text-sm text-slate-800 text-center"><strong>No framework is required.</strong> A clear flow in Markdown already makes ownership, handoffs, and stopping points reviewable.</p>
        </div>
      </div>
    )
  },
  {
    title: "Enforce the Same Graph in the Harness",
    subtitle: "Turn guidance into state transitions the model cannot skip",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
          <p className="text-gray-700"><a href="https://github.com/JanDeDobbeleer/pi-graph" target="_blank" rel="noopener noreferrer" className="text-slate-800 font-semibold hover:underline">pi-graph</a> packages the workflow as a <a href="https://pi.dev/" target="_blank" rel="noopener noreferrer" className="text-slate-800 font-semibold hover:underline">pi</a> extension. Markdown still describes each phase; the harness controls when the phase may end.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3">Instructions describe</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• The purpose of each phase</li>
              <li>• The artifact each handoff carries</li>
              <li>• How to respond to failure</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border-2 border-slate-400">
            <h4 className="font-semibold text-slate-900 mb-3">The harness enforces</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Which tools are available now</li>
              <li>• Which artifact must be submitted</li>
              <li>• Which gate unlocks the next phase</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-sm text-slate-800 text-center"><strong>Progression:</strong> Markdown makes the graph understandable. Harness state makes its boundaries reliable.</p>
        </div>
      </div>
    )
  },
  {
    title: "Set a Complexity Budget",
    subtitle: "Every useful edge must earn its cost",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-5 rounded-lg border-l-4 border-slate-500">
          <p className="text-lg text-gray-700">Every branch adds its own context, tool calls, result, failure modes, and review load. A graph may reduce elapsed time while increasing total work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">Add an edge when it prevents</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• A known routing mistake</li>
              <li>• Unsafe or wasteful parallel work</li>
              <li>• A missing review or approval gate</li>
              <li>• Restarting work that could resume</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">Stay with a loop when</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• One route already fits the task</li>
              <li>• Branches need constant coordination</li>
              <li>• Synthesis costs more than it saves</li>
              <li>• The team cannot debug the wider flow</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-center text-gray-700"><strong>Takeaway:</strong> start with a loop. Add graph structure only when you can name the failure it prevents.</p>
        </div>
      </div>
    )
  }
];
