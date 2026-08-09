import { HeartHandshake } from 'lucide-react';
import { SlideType } from './types';

export const habitatEngineeringSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <HeartHandshake className="w-16 h-16 md:w-20 md:h-20 text-rose-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-rose-900 text-center">
          Habitat Engineering
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Designing the space where humans and agents work together
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-rose-300 rounded-full"></div>
          <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
          <div className="w-3 h-3 bg-rose-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Beyond Single-Player",
    subtitle: "Most agentic workflows today are built for one.",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
          <h3 className="text-xl font-bold text-rose-900 mb-2">A quiet assumption</h3>
          <p className="text-gray-700">Up to now, most agentic-coding advice—and most of this workshop—has assumed one engineer working solo with an agent. Great for a solo founder. It doesn't scale infinitely once more than one engineer touches the codebase.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">🧍 Single-Player Mode</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>One dev, one agent, one context</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Instructions live in your head</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Works great—until it doesn't</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">👥 Multiplayer Mode</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Multiple humans and agents, same repo</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Shared context has to be designed, not assumed</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Requires deliberate practices, not habits</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-100 p-4 rounded-lg">
          <p className="text-sm italic text-rose-900">
            <strong>Habitat engineering</strong> is the discipline of designing your repo, environment, and team practices for the multiplayer case—both human teammates and agents working in it together.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "What Makes a Good Habitat",
    subtitle: "Amenable to agents = amenable to humans.",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
          <h3 className="text-xl font-bold text-rose-900 mb-2">The investment pays twice</h3>
          <p className="text-gray-700">An environment you design for agents to understand quickly also onboards new human engineers faster. Habitat work isn't extra work—it's the same work, done once, that benefits both.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">🏗️ Document Your Architecture</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>How the pieces fit together</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Why decisions were made, not just what</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">📝 Write Down "The Way You Work"</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Captured as instructions and skills</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Same practices covered earlier this workshop</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">🔍 Adversarial Review Culture</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Agents and humans check each other's work</span></li>
              <li className="flex"><span className="mr-2">•</span><span>No output ships unexamined</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">🚪 Clear Onboarding Docs</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>A path from zero to productive</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Readable by a new hire or a new agent session</span></li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Humans + Agents, Same Rules",
    subtitle: "What helps one helps the other.",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
          <h3 className="text-xl font-bold text-rose-900 mb-2">None of this is required. All of it helps.</h3>
          <p className="text-gray-700">Good naming, modular code, clear docs—an agent doesn't strictly need any of it to work in your codebase. They can grep their way around messy code. But clarity makes every change faster and safer for both the agent and the human reviewing it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">✅ Still Worth Doing</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Good naming and clear module boundaries</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Docs that explain intent, not just mechanics</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Small, reviewable changes</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
            <h4 className="font-semibold text-rose-900 mb-2">⚠️ The Tempting Shortcut</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>"The AI can handle messy code, so why bother?"</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Slower reviews, harder debugging—for humans too</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-100 p-4 rounded-lg">
          <p className="text-sm italic text-rose-900">
            <strong>Bottom line:</strong> code clarity isn't a courtesy you extend to human readers anymore—it's infrastructure that both your teammates and your agents run on.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "A Hidden Gem, Still Early",
    subtitle: "Less hype than harness/loop engineering—for now.",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
          <h3 className="text-xl font-bold text-rose-900 mb-2">Honest framing</h3>
          <p className="text-gray-700">Of all the new terms in this workshop, habitat engineering is the least developed. There isn't much public consensus yet on what "good" looks like. But as teams scale past the solo-engineer-plus-agent setup, it's likely to matter more, not less.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-rose-200">
          <h4 className="font-semibold text-rose-900 mb-2">📖 Where the Term Comes From</h4>
          <p className="text-sm text-gray-700">
            The term is associated with <strong>Russ Miles</strong>, who writes about it as part of his "Sovereign Engineer" / "Sovereign Apprentice" work. Worth reading as further exploration of the idea—though fair warning, the writing style leans heavily AI-generated. The underlying ideas are still worth engaging with.
          </p>
        </div>

        <div className="bg-rose-100 p-4 rounded-lg">
          <p className="text-sm italic text-rose-900">
            <strong>Take it as a starting point, not a spec:</strong> this is a concept to watch and shape, not one to follow blindly.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Habitat Engineering Checklist",
    subtitle: "Start here.",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-white p-5 rounded-lg shadow border border-rose-200">
          <h4 className="font-semibold text-rose-900 mb-3">✅ Checklist</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex"><span className="mr-2">✅</span><span>Architecture documented somewhere agents and humans both read</span></li>
            <li className="flex"><span className="mr-2">✅</span><span>AGENTS.md / custom instructions kept current</span></li>
            <li className="flex"><span className="mr-2">✅</span><span>Skills capture recurring workflows</span></li>
            <li className="flex"><span className="mr-2">✅</span><span>A review process both humans and agents participate in</span></li>
            <li className="flex"><span className="mr-2">✅</span><span>Onboarding docs a new hire—or a new agent session—could actually follow</span></li>
          </ul>
        </div>

        <div className="bg-rose-100 p-4 rounded-lg">
          <p className="text-sm italic text-rose-900">
            <strong>Pro Tip:</strong> Design your habitat for the multiplayer case from day one. The team you build for today is never just you plus one agent for long.
          </p>
        </div>
      </div>
    )
  }
];
