import { RefreshCw } from 'lucide-react';
import { SlideType } from './types';

export const loopEngineeringSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <RefreshCw className="w-16 h-16 md:w-20 md:h-20 text-cyan-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-900 text-center">
          Loop Engineering
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          From a single while-loop to production automation
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-cyan-300 rounded-full"></div>
          <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
          <div className="w-3 h-3 bg-cyan-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Origins: The Ralph Loop",
    subtitle: "One year old, deceptively simple",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
          <h3 className="text-2xl font-bold text-cyan-900 mb-4">Where the pattern comes from</h3>
          <p className="text-lg text-gray-700">
            Geoffrey Huntley coined the <strong>"Ralph loop"</strong> (also called Ralph Wiggum) roughly a year ago. The genius is its simplicity: just a <code className="bg-white px-1 rounded">while</code> loop around an agent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-cyan-200">
            <h4 className="font-semibold text-cyan-900 mb-2">🔁 How It Works</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Let an agent work until it hits the context window's "dump zone"</li>
              <li>• Throw the context away, start a fresh agent</li>
              <li>• Keep steady progress via a hill-climbing signal</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-cyan-200">
            <h4 className="font-semibold text-cyan-900 mb-2">🎯 Example Use Cases</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Porting a codebase from one language to another</li>
              <li>• Driving toward a test-coverage target</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <span className="text-amber-600 text-lg">⚠️</span>
            <p className="text-amber-800 text-sm">
              <strong>Caution:</strong> Pointing a Ralph loop at a blind metric — "hit 90% coverage" — backfires. The agent optimizes for the number, not the outcome, and will game the test suite rather than deliver real quality.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The Loop Ladder",
    subtitle: "Each level builds on the one below it",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-gray-700">Loop engineering isn't one pattern — it's a ladder of scope, from a single agent's inner loop up to fully triggered automation.</p>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-white p-4 rounded-lg shadow border border-cyan-200">
            <h4 className="font-semibold text-cyan-900 mb-2">1️⃣ Agent Loop</h4>
            <p className="text-gray-700">Simon Willison's informal definition: an agent is an LLM, given some tools, put in a loop, with a goal — <em>"while goal not fulfilled..."</em>. This is the Ralph pattern at its smallest.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-cyan-200">
            <h4 className="font-semibold text-cyan-900 mb-2">2️⃣ Adversarial Loop</h4>
            <p className="text-gray-700">One agent does the work, a second agent reviews it (LLM-as-judge / code-review agent). The first agent fixes the feedback, and both iterate until reaching a stable, fixed point.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-cyan-200">
            <h4 className="font-semibold text-cyan-900 mb-2">3️⃣ Scheduled / Triggered Loop</h4>
            <p className="text-gray-700">The loop is hooked to an external trigger — a cron job, a new pull request, a new issue being filed. This is what most people mean today when they say "loop engineering" out loud, and it's the on-ramp to "software factories."</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Where Loops Pay Off Today",
    subtitle: "Small, scoped automations — not the whole SDLC",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-gray-700">Teams don't need to reinvent the SDLC to get value from loops. Start with narrow, well-bounded jobs that already have a clear trigger and a clear done-state.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-cyan-200">
            <h4 className="font-semibold text-cyan-900 mb-2">🐛 First-Pass Bug Triage</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Triggered by a new bug ticket with a correlation ID</li>
              <li>• Agent fetches logs from observability/error tracking (e.g. Sentry)</li>
              <li>• Produces an initial triage before a human looks at it</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-cyan-200">
            <h4 className="font-semibold text-cyan-900 mb-2">📝 Release Notes Drafting</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Nightly or weekly scheduled job</li>
              <li>• Drafts release notes from recent commits and PRs</li>
              <li>• Human reviews and ships, agent does the first draft</li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <span className="text-amber-600 text-lg">⚠️</span>
            <p className="text-amber-800 text-sm">
              <strong>Caution:</strong> Don't try to automate the entire software development life cycle yet. Scope loops narrowly, to jobs with a clear trigger and a checkable outcome.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The Infrastructure Gap",
    subtitle: "The hard part isn't the loop",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
          <h3 className="text-2xl font-bold text-cyan-900 mb-4">Access, not orchestration, is the bottleneck</h3>
          <p className="text-lg text-gray-700">
            For most teams — especially enterprise ones — writing the loop itself is easy. The hard part is giving agents secure, scoped access to the systems they need: code, logs, issue trackers, in an environment actually built for that.
          </p>
        </div>

        <div className="bg-cyan-100 p-4 rounded-lg">
          <p className="text-sm italic text-cyan-900">
            <strong>Where things stand:</strong> This infrastructure layer is still maturing. Expect a lot more of it — secure agent-to-system access, scoped credentials, audit trails — to land in the coming months.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Further Reading",
    subtitle: "Where the term is still being defined",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
          <h3 className="text-2xl font-bold text-cyan-900 mb-4">Loop engineering is a moving target</h3>
          <p className="text-lg text-gray-700">
            No settled definition yet — these are the people and sources actively shaping the term.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-cyan-200">
          <ul className="space-y-2 text-gray-700">
            <li>• Geoffrey Huntley's writing on the Ralph loop / Ralph Wiggum pattern</li>
            <li>• LangChain's engineering blog</li>
            <li>• Swyx / AI Engineer's "loop crafting" articles</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Key Takeaway",
    subtitle: "Loops before graphs",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-8">
        <div className="bg-cyan-100 px-8 py-6 rounded-lg max-w-3xl w-full border border-cyan-300">
          <p className="text-center text-cyan-900 text-lg">
            Master the loop ladder — <strong>agent → adversarial → scheduled</strong> — before reaching for full graph-based orchestration. It's cheaper, easier to reason about, and covers most real team needs today.
          </p>
        </div>
      </div>
    )
  }
];
