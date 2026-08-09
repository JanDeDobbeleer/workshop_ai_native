import { Factory } from 'lucide-react';
import { SlideType } from './types';

export const softwareFactoriesSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Factory className="w-16 h-16 md:w-20 md:h-20 text-slate-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 text-center">
          Software Factories
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Addendum: automating the software development life cycle — and where that idea breaks
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
    title: "The Spectrum: Automation to Dark Factory",
    subtitle: "How far do you take it?",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            What is a Software Factory?
          </h3>
          <p className="text-lg text-gray-700">
            A software factory uses loops, graphs, and whatever else works to
            automate as much of the SDLC as possible — planning, coding,
            review, testing, shipping. It's a spectrum, not a switch.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              🏭 The Extreme End: Dark Factory
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Full automation, "lights off"</li>
              <li>• You never intervene, inspect, or debug agents</li>
              <li>• It just keeps running while you're not watching</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              ⚠️ Why That's Risky Today
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• AI-generated code tends to degrade in design quality over time</li>
              <li>• No amount of guardrails fully stops this drift</li>
              <li>• Full "lights off" bets likely need periodic full rewrites just to keep evolving</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-center text-gray-700">
            <strong>Takeaway:</strong> Automating large parts of the SDLC is a
            reasonable goal. Full "lights off" automation is not — at least
            not yet.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "The Primitives You Need",
    subtitle: "What a software factory is actually built from.",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Two Building Blocks
          </h3>
          <p className="text-lg text-gray-700">
            Strip away the hype and a software factory rests on a small set
            of primitives — most of them still rough around the edges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">
              📋 Work as a First-Class Citizen
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• A real board/tracker — Linear, Jira, GitHub Issues</li>
              <li>• Tracks work items and dependencies between them</li>
              <li>• Tracks which agent — not just which human — is assigned to what</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">
              ⚡ Parallel Execution
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Multiple agents working the same codebase at once</li>
              <li>• Git worktrees for single-machine parallelism — covered in the Multi-Agent section</li>
              <li>• Containers/sandboxes (e.g. Docker) for stronger isolation</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-center text-gray-700">
            <strong>Honest caveat:</strong> spinning up a full dev container
            per agent — especially with a database or test suite — is still
            slow. This primitive mostly works, but it isn't fast yet.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "The Unsolved Piece: Identity & Access Control",
    subtitle: "Nobody's really doing this well yet.",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Agents Are Borrowing Your Identity
          </h3>
          <p className="text-lg text-gray-700">
            Today, most people running agents authenticate them under their
            own personal accounts — there's no dedicated service identity for
            an agent. That doesn't hold up once agents need to talk to source
            control, issue trackers, and other internal systems at scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              🔐 The Gap
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• No service accounts built for agents yet</li>
              <li>• Not viable for serious enterprise use as-is</li>
              <li>• Vendors are actively working on it</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              🛡️ On Risk, Measured
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Prompt injection and data exfiltration are real, still possible in theory</li>
              <li>• Genuinely hard to pull off with basic guardrails: no public internet access, internal-only issue trackers/data sources</li>
              <li>• With those guardrails, residual risk is generally acceptable</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-center text-gray-700">
            <strong>Takeaway:</strong> Identity and access control — not raw
            security risk — is the bigger open problem in software factories
            today.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Too Early to Buy, Too Early to Build",
    subtitle: "...unless you're Uber or Netflix.",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Hold Off on Both
          </h3>
          <p className="text-lg text-gray-700">
            If you're evaluating whether to buy a software-factory product,
            or build your own, for a typical enterprise — it's too soon on
            both counts. The primitives above aren't well-understood or
            standardized yet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              🏗️ The Exception
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Hyperscale engineering orgs — Uber, Netflix, Stripe — are already building internal software factories</li>
              <li>• Some of their primitives are starting to look similar across companies</li>
              <li>• Worth watching, not yet worth copying wholesale</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              📺 Worth Looking Up
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Steve Yagge (Yegge)'s "Gas Town" talks and interviews</li>
              <li>• A good place to see what these primitives look like in practice</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-center text-gray-700">
            <strong>Takeaway:</strong> watch what the hyperscalers converge
            on — don't buy or build a factory around it yet.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Your First Software Factory",
    subtitle: "The 2026 challenge.",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Low Bar to Start Experimenting
          </h3>
          <p className="text-lg text-gray-700">
            You don't need much: a GitHub account for an issue tracker/board,
            plus whatever coding-agent subscriptions you already have —
            Copilot, Claude, ChatGPT.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              🎯 The Challenge
            </h4>
            <p className="text-sm text-gray-600">
              Build a small, narrowly-scoped software factory this year —
              purely to learn what these agents can do that a plain script
              by yourself couldn't.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">
              🪜 One Level Up From Last Year
            </h4>
            <p className="text-sm text-gray-600">
              Last year's challenge was building your own coding harness, to
              understand inference and context windows. This year's is a
              level above that.
            </p>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg">
          <p className="text-center text-gray-700">
            <strong>Go build one:</strong> small, scoped, and yours — the
            point is what you learn, not what you ship.
          </p>
        </div>
      </div>
    )
  }
];
