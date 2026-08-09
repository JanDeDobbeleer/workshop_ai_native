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
          Addendum: when one loop isn't enough — and the price you pay for it.
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
    title: "Loops Are Graphs With One Path",
    subtitle: "Removing the single-path constraint",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            From loops to graphs
          </h3>
          <p className="text-lg text-gray-700">
            The loop engineering pattern — agent, adversarial, and scheduled
            loops — always has exactly one path through the work: step after
            step, in a single line. Graph engineering is the logical
            extension. Let that sequence branch instead of staying linear.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              What a loop gives you
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• One agent, one path, one step at a time</li>
              <li>• Predictable, easy to reason about</li>
              <li>• Covered already in the Loop Engineering section</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              What a graph adds
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Parallel subagents researching independently</li>
              <li>• Results merging back before implementation starts</li>
              <li>• Conditional paths based on what's found</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-center text-gray-700">
            <strong>Takeaway:</strong> a graph is just a loop that's allowed
            to branch — and merge back together.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Example: Dynamic Workflows",
    subtitle: "Agents that write their own orchestration",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Agents building their own graph
          </h3>
          <p className="text-lg text-gray-700">
            Modern coding agent tools, like Claude Code, can analyze a prompt
            and build a sequence of steps from it on the fly — including
            parallel research subagents. Once that research completes, the
            results hand off to an implementation agent to do the work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              How it plays out
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Prompt is decomposed into independent research tasks</li>
              <li>• Subagents run those tasks simultaneously</li>
              <li>• Findings merge before any code is written</li>
              <li>• An implementation agent takes over from there</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              🧪 Cutting edge
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                • Some tools literally generate code (e.g. TypeScript) to
                define and execute the workflow graph in real time
              </li>
              <li>• Worth knowing about, not something to build yourself yet</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The Catch: Cost",
    subtitle: "Running 70 agents is not running 1 agent",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            ⚠️ Every branch has its own context window
          </h3>
          <p className="text-lg text-gray-700">
            Each parallel branch of a graph runs its own agent with its own
            full context window. Tokens add up fast. Running dozens of agents
            to explore a graph can be dramatically more expensive than a
            single sequential loop — and today that cost usually isn't
            justified by the result.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              Where the cost comes from
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Every branch = its own full context window</li>
              <li>• Parallelism multiplies token spend, not just wall time</li>
              <li>• Merging results still needs a pass over everything</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              What that means in practice
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Not ready for daily production use for most teams</li>
              <li>• Reserve it for problems where breadth genuinely pays off</li>
              <li>• A single loop is still the default</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Play, Don't Productionize",
    subtitle: "Worth experimenting with, not worth betting on — yet",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            An exploration budget, not a foundation
          </h3>
          <p className="text-lg text-gray-700">
            Graph engineering is real, active, and people are already getting
            genuine value from it in narrow cases. But until costs come down
            and the tooling matures, treat it as something to experiment
            with — not something to build critical workflows on top of.
          </p>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-center text-gray-700">
            <strong>Takeaway:</strong> spend a little curiosity here, not your
            production budget.
          </p>
        </div>
      </div>
    )
  }
];
