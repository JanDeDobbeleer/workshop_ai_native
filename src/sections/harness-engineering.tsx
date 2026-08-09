import { Wrench } from 'lucide-react';
import { SlideType } from './types';

export const harnessEngineeringSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Wrench className="w-16 h-16 md:w-20 md:h-20 text-amber-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-amber-900 text-center">
          Harness Engineering
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Giving agents eyes, hands, and ways to check their own work.
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
          <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
          <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "From Prompting to Harnessing",
    subtitle: "The next layer up",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">The Terminology Keeps Evolving</h3>
          <p className="text-lg text-gray-700">
            Prompt engineering → context engineering → harness engineering. Each layer doesn't replace the last — it builds on it and subsumes it. Better words don't help if the agent has no way to run them, check its own output, or iterate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">🔧 What It Means</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Building the surrounding feedback loop — not just the words you type</li>
              <li>• The scaffolding that lets an agent act, observe, and correct itself</li>
              <li>• A discipline, not a single prompt or tool setting</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">✅ What It Buys You</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Agents that iterate longer without babysitting</li>
              <li>• Fewer "check every step" interruptions</li>
              <li>• Meaningful work done between check-ins, not just typing speed</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-100 p-4 rounded-lg">
          <p className="text-sm italic text-amber-900">
            <strong>Key Insight:</strong> A great prompt into a harness with no feedback loop still produces an agent that guesses and hopes. The harness is what turns guessing into iterating.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Inner Harness vs Outer Harness",
    subtitle: "Two very different jobs",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Who Builds What</h3>
          <p className="text-lg text-gray-700">
            A framing popularized in recent harness-engineering writing splits the work into two layers with very different owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">⚙️ Inner Harness</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Built by tool vendors — Anthropic, OpenAI, GitHub</li>
              <li>• The agent loop, the tool-calling runtime</li>
              <li>• The CLI/IDE product itself (Claude Code, Copilot CLI)</li>
              <li>• Worth understanding, but you don't need to rebuild it</li>
              <li>• Trying a minimalist open-source harness once is genuinely educational</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">🔧 Outer Harness</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Built by you, around the tool</li>
              <li>• Specs, AGENTS.md / custom instructions, rules</li>
              <li>• Feedback signals that tell the agent if it's on track</li>
              <li>• The part every team should actively invest in</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-100 p-4 rounded-lg">
          <p className="text-sm italic text-amber-900">
            <strong>Pro Tip:</strong> You don't control the inner harness, but you fully control the outer one — that's where your leverage as an engineering team actually lives.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Feedback Signals (Back-Pressure)",
    subtitle: "How agents check their own work",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Wire Up Back-Pressure</h3>
          <p className="text-lg text-gray-700">
            An outer harness needs ways for the agent to verify itself instead of asserting it's done. This builds directly on what the Security section already covers — linters, security scanners, and static analysis aren't just review-time gates, they're feedback signals an agent can run itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">🔍 Static Signals</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Linters</li>
              <li>• Security scanners</li>
              <li>• Static analysis</li>
              <li>• Type checkers</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">✅ Dynamic Signals</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Test suites</li>
              <li>• Build and CI checks</li>
              <li>• Anything that turns "I think it's done" into a pass/fail signal</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-100 p-4 rounded-lg">
          <p className="text-sm italic text-amber-900">
            <strong>Key Insight:</strong> These signals are what let an agent run unattended for hours instead of needing a human to check every step.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Hill-Climbing: Give Agents an Objective",
    subtitle: "A metric they can climb toward",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Verifiable Goals, Round After Round</h3>
          <p className="text-lg text-gray-700">
            Give the agent an objectively checkable goal so it can verify its own progress and keep climbing toward the target, round after round — the agent doesn't need you to grade each attempt.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
          <h4 className="font-semibold text-amber-900 mb-2">✅ Choosing the Metric</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Pick a metric that reflects the actual outcome you want</li>
            <li>• Correctness and behavior parity, not just a single number</li>
            <li>• A naive target like "90% test coverage" can backfire — the agent games the number instead of improving real quality</li>
          </ul>
        </div>

        <div className="bg-amber-100 p-4 rounded-lg">
          <p className="text-sm italic text-amber-900">
            <strong>See Loop Engineering</strong> for where this pattern came from — the Ralph loop.
          </p>
        </div>
      </div>
    )
  }
];
