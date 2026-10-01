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
          Humans steer. Agents execute.
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
    title: "What Is a Harness?",
    subtitle: "The flow around the model",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Everything between request and result</h3>
          <p className="text-lg text-gray-700">
            A harness is the layer around the model. It decides what the agent sees, what it can do, what checks run, and whether it may finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Same model, different result</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Chat, coding agents, and app integrations can use the same model</li>
              <li>• The harness is what makes them behave differently</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Why it matters</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Multi-step work compounds errors</li>
              <li>• At 95% success per step, a 20-step task finishes only 36% of the time</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-100 p-4 rounded-lg">
          <p className="text-sm italic text-amber-900">
            <strong>Simple version:</strong> the model generates options. The harness controls the workflow.
          </p>
        </div>

        <p className="text-sm italic text-gray-700">
          <strong>Source:</strong> OpenAI, &quot;Harness engineering&quot; (Feb 2026); <a href="https://harness-engineering.ai" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">harness-engineering.ai</a> guide.
        </p>
      </div>
    )
  },
  {
    title: "The Harness Is the Flow",
    subtitle: "Everything between request and result",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <pre className="bg-amber-900 text-amber-50 p-4 rounded-lg text-sm md:text-base overflow-x-auto text-center">{`request → load context → use tools → run checks → finish or retry`}</pre>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Context</h4>
            <p className="text-sm text-gray-700">Give the agent the right files, rules, and task details.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Tools</h4>
            <p className="text-sm text-gray-700">Let it read, edit, search, run commands, or call systems.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Checks</h4>
            <p className="text-sm text-gray-700">Run tests, linters, or other rules that catch bad work early.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Stopping</h4>
            <p className="text-sm text-gray-700">Decide whether the agent may finish or must keep working.</p>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
          <p className="text-gray-700">
            If you remember one thing, remember this: a harness is not just prompt text. It is the flow that guides, checks, and bounds the agent.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "What the Harness Does",
    subtitle: "Before work · during work · before finish",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-3">Before work</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Load the right context</li>
              <li>• Set the rules</li>
              <li>• Make the task legible</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-3">During work</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Limit tool access</li>
              <li>• Block unsafe actions</li>
              <li>• Feed back useful errors</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-3">Before finish</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Run checks</li>
              <li>• Reject bad output</li>
              <li>• Allow finish only when it passes</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-100 p-4 rounded-lg">
          <p className="text-sm italic text-amber-900">
            <strong>Good harness design:</strong> make the work easy for the agent to see, and easy for the system to enforce.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Example: Agent Tries to Stop",
    subtitle: "Checks decide whether it may finish",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
          <p className="text-gray-700">
            In oh-my-posh, the problem was simple: the agent would stop, CI would fail later, and the work came back for rework.
          </p>
        </div>

        <pre className="bg-amber-900 text-amber-50 p-4 rounded-lg text-sm md:text-base overflow-x-auto text-center">{`agent says "done"
        ↓
harness runs checks
        ↓
fail → send errors back → keep working
pass → allow finish`}</pre>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">What changed</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Checks moved earlier</li>
              <li>• Failures became immediate feedback</li>
              <li>• The agent could fix its own mistakes in the same flow</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">What to remember</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• The exact tool does not matter most</li>
              <li>• The key is that checks always run</li>
              <li>• The harness decides whether the agent may stop</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-100 p-4 rounded-lg">
          <p className="text-sm italic text-amber-900">
            Hooks, scripts, tests, and gates are all just ways to implement the same idea: control the flow.
          </p>
        </div>
      </div>
    )
  }
];
