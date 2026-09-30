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
          Addendum: when one loop isn't enough (and the price you pay for it).
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
            The loop engineering pattern (agent, adversarial, and scheduled
            loops) always has exactly one path through the work: step after
            step, in a single line. Graph engineering wires several of those
            loops together: nodes (each its own loop, agent, or plain script),
            edges (handoffs and routing), and shared state. The model brings
            judgment inside each node; the graph brings structure everywhere
            else.
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
              <li>• Parallel branches that fan out and merge back</li>
              <li>• Conditional routing based on what's found</li>
              <li>• Reviewers with a fresh context, unbiased by the draft</li>
              <li>• Checkpoints: resume a branch instead of starting over</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-center text-gray-700">
            <strong>Takeaway:</strong> graphs don't replace loops, they
            contain them. Start with a loop; move to a graph when the
            "if this, then that" gets hard to follow.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "A Bit of Everything",
    subtitle: "Where graphs sit next to specs, multi-agent, and loops",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Not a new trick, a new layer
          </h3>
          <p className="text-lg text-gray-700">
            Graph engineering doesn't replace what came before: it's the layer
            that wires it together. Specs, agents, and graphs each answer a
            different question.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              Spec: the what
            </h4>
            <p className="text-sm text-gray-600">
              Spec-driven development defines intent. In a graph, the spec is
              the input for every node and the anchor verifiers check
              against. Spec Kit's tasks list is already a hand-written graph.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              Multi-agent: the who
            </h4>
            <p className="text-sm text-gray-600">
              Several specialized agents. Without an explicit graph, that's
              agents chatting; with one, it's an organization you can
              design, test, and debug.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              Graph: the how
            </h4>
            <p className="text-sm text-gray-600">
              The wiring: which loop runs when, who hands off to whom, who
              can veto, and where the ground truth (tests, specs) lives.
            </p>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-center text-gray-700">
            <strong>Takeaway:</strong> loops make agent behavior programmable;
            graphs make agent organizations programmable.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Demo: A Graph Written in Markdown",
    subtitle: "oh-my-posh: the code-changes skill",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
          <p className="text-gray-700">
            <code className="bg-slate-200 px-1 rounded">.agents/skills/code-changes/</code>: six phases as nodes, and <code className="bg-slate-200 px-1 rounded">references/artifacts.md</code> literally says <em>"each phase boundary is an edge in the flow, and every edge carries one named artifact."</em> No framework, no runtime: just a skill the agent follows.
          </p>
        </div>

        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs md:text-sm overflow-x-auto">{`Analyze ─▶ stop gate (human) ─▶ Plan ─▶ Delegate ─┬─▶ task A (worktree) ─┐
   ▲                                              └─▶ task B (worktree) ─┤
   │                                                                     ▼
   │                                     Supervise (merge) ◀── gate failure ──┐
   │                                             │                            │
   │                                             ▼                            │
   └──────────── wrong root cause ────────── Verify ──────────────────────────┘
                                                 │  └─ 2nd failure ─▶ Escalate
                                                 ▼
                                              Deliver`}</pre>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">Graph features, all present</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Typed edges: analysis report, task list, reviewed diff, evidence</li>
              <li>• Fan-out/fan-in: parallel worktrees, one merge, Verify once</li>
              <li>• Conditional routing: failure type picks the way back</li>
              <li>• Human node: stop gate before any code is written</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">Stop conditions and anchors</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Retry cap: second failure escalates, third stops and asks the user</li>
              <li>• Escalation is a side-call, never a new owner</li>
              <li>• Pinned spec and quality gates as ground truth</li>
              <li>• Model tier chosen per node, not per task</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-sm italic text-slate-800">
            <strong>Why it matters:</strong> you don't need LangGraph to do graph engineering. Explicit nodes, named handoffs, and stop conditions in plain Markdown already get you most of the way.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Demo: The Same Graph, Enforced in Code",
    subtitle: "pi-graph: the code-changes skill as a pi extension",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
          <p className="text-gray-700">
            <a href="https://github.com/JanDeDobbeleer/pi-graph" target="_blank" rel="noopener noreferrer" className="text-slate-800 font-semibold hover:underline">github.com/JanDeDobbeleer/pi-graph</a> packages the same skill for <a href="https://pi.dev/" target="_blank" rel="noopener noreferrer" className="text-slate-800 font-semibold hover:underline">pi</a>. The Markdown still says <em>what</em> each phase does; the extension decides <em>when</em> a phase may end. The model can't talk its way past an edge anymore.
          </p>
        </div>

        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs md:text-sm overflow-x-auto">{`/change <task>   (or: triage <issue>, review <pr>)

Analyze    read-only tools         ─▶ submit_analysis
  gate     human: approve | edit | revise | stop
Plan       read-only tools         ─▶ submit_plan ─▶ gate
Delegate   worktrees, child pi     ─▶ run_delegation
Supervise  squash-merge, review    ─▶ submit_review
Verify     run_gates + Stop hooks  ─▶ submit_verification
Deliver    conventional commits    ─▶ submit_delivery ─▶ CI watched`}</pre>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">Edges become tools</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Each artifact is a typed tool call; incomplete input is rejected</li>
              <li>• Only the current phase's tools are active</li>
              <li>• Edits blocked until a human approves the analysis</li>
              <li>• Delivery commits checked against conventional-commit grammar</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">Stop conditions become state</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• "Pass" refused unless recorded gates and Stop hooks are green</li>
              <li>• Failure counter in state: 2nd escalates, 3rd stops</li>
              <li>• Red CI routes the run back to Verify</li>
              <li>• State persisted, survives resume and fork</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-sm italic text-slate-800">
            <strong>Why it matters:</strong> Markdown is a graph the model <em>follows</em>; a harness extension is a graph the model <em>can't skip</em>. Same skill, still usable standalone in Claude Code or Copilot. Install once with <code className="bg-slate-200 px-1 rounded not-italic">pi install git:github.com/JanDeDobbeleer/pi-graph@v1</code>.
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
            and build a sequence of steps on the fly, including parallel
            research subagents. Once that research completes, an
            implementation agent picks up the results and does the work.
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
              🧪 Experimental
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
    subtitle: "Running 70 agents costs far more than running 1",
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
            single sequential loop, and today the cost usually outweighs the
            benefit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              Where the cost comes from
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Every branch = its own full context window</li>
              <li>• Anthropic measured ~4× chat tokens for one agent, ~15× for multi-agent</li>
              <li>• Merging results still needs a pass over everything</li>
              <li>• Same model, same context: agents can agree on the same mistake</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              What that means in practice
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Still too early for daily production use on most teams</li>
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
    subtitle: "Worth experimenting with, not worth betting on yet",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            An exploration budget, not a foundation
          </h3>
          <p className="text-lg text-gray-700">
            Graph engineering is real and active: people are already getting
            genuine value from it in narrow cases. But until costs come down
            and the tooling matures, treat it as something to experiment
            with, not something to build critical workflows on top of.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
          <p className="text-sm text-gray-600">
            The name is new (it caught on after a July 2026 tweet by Peter
            Steinberger), but the idea isn't: LangGraph, CrewAI, and the
            OpenAI Agents SDK have modeled agents as nodes and edges for
            years. The label doesn't change your architecture.
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
