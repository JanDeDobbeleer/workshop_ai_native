import { TrendingUp } from 'lucide-react';
import { SlideType } from './types';

export const evolutionSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <TrendingUp className="w-20 h-20 text-indigo-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 text-center">
          Evolution of the Programmer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          The 8 stages from traditional developer to AI-native engineer
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
          <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "The 8 Stages of Dev Evolution to AI",
    subtitle: "From code completions to orchestrating 30+ agents",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-4 px-4">
        {/* Stage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl w-full">
          {/* Stage 1 */}
          <div className="border-4 border-teal-400 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 shadow-xl">
            <div className="text-white text-xs font-bold mb-2 bg-teal-500 px-2 py-1 rounded">Stage 1</div>
            <div className="bg-gray-900 rounded p-3 mb-2 h-32 flex flex-col justify-between">
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 bg-gray-700 rounded"></div>
                <div className="flex-1 space-y-1">
                  <div className="h-1 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 bg-green-400 rounded-full w-full opacity-60"></div>
                <div className="h-1.5 bg-green-400 rounded-full w-2/3 opacity-60"></div>
                <div className="h-1.5 bg-green-400 rounded-full w-5/6 opacity-60"></div>
              </div>
            </div>
            <p className="text-xs text-gray-300 text-center leading-tight">Zero or Near-Zero AI: occasional code completions and chat questions</p>
          </div>

          {/* Stage 2 */}
          <div className="border-4 border-teal-400 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 shadow-xl">
            <div className="text-white text-xs font-bold mb-2 bg-teal-500 px-2 py-1 rounded">Stage 2</div>
            <div className="bg-gray-900 rounded p-3 mb-2 h-32 flex">
              <div className="flex-1 space-y-1 pr-2">
                <div className="h-1 bg-gray-700 rounded"></div>
                <div className="h-1 bg-gray-700 rounded w-3/4"></div>
                <div className="h-1 bg-green-400 rounded-full opacity-60"></div>
                <div className="h-1 bg-green-400 rounded-full w-2/3 opacity-60"></div>
              </div>
              <div className="w-16 bg-gray-800 rounded p-2 flex flex-col items-center justify-center space-y-1">
                <div className="text-xs text-blue-400 font-bold">Coding Agent</div>
                <div className="bg-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded">Y/N?</div>
              </div>
            </div>
            <p className="text-xs text-gray-300 text-center leading-tight">Coding agent in IDE, permissions on. A narrow sidebar agent asks before running tools.</p>
          </div>

          {/* Stage 3 */}
          <div className="border-4 border-teal-400 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 shadow-xl">
            <div className="text-white text-xs font-bold mb-2 bg-teal-500 px-2 py-1 rounded">Stage 3</div>
            <div className="bg-gray-900 rounded p-3 mb-2 h-32 flex">
              <div className="flex-1 space-y-1 pr-2">
                <div className="h-1 bg-gray-700 rounded"></div>
                <div className="h-1 bg-gray-700 rounded w-3/4"></div>
                <div className="h-1 bg-green-400 rounded-full opacity-60"></div>
                <div className="h-1 bg-green-400 rounded-full w-2/3 opacity-60"></div>
              </div>
              <div className="flex-1 bg-gray-800 rounded p-2 flex flex-col items-center justify-center">
                <div className="text-xs text-blue-400 font-bold mb-1">Coding Agent</div>
                <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded">YOLO</div>
              </div>
            </div>
            <p className="text-xs text-gray-300 text-center leading-tight">Agent in IDE, YOLO mode: trust rises as you turn off permissions, and the agent widens.</p>
          </div>

          {/* Stage 4 */}
          <div className="border-4 border-teal-400 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 shadow-xl">
            <div className="text-white text-xs font-bold mb-2 bg-teal-500 px-2 py-1 rounded">Stage 4</div>
            <div className="bg-gray-900 rounded p-3 mb-2 h-32 flex">
              <div className="w-8 space-y-1 pr-1">
                <div className="h-1 bg-gray-700 rounded"></div>
                <div className="h-1 bg-gray-700 rounded"></div>
                <div className="h-1 bg-gray-700 rounded"></div>
              </div>
              <div className="flex-1 bg-gray-800 rounded p-2 flex flex-col">
                <div className="text-xs text-blue-400 font-bold mb-2">Coding Agent</div>
                <div className="flex-1 space-y-1">
                  <div className="h-1 bg-gray-600 rounded"></div>
                  <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-600 rounded"></div>
                  <div className="h-1 bg-gray-600 rounded w-2/3"></div>
                </div>
                <div className="bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded self-end">YOLO</div>
              </div>
              <div className="w-6 space-y-1 pl-1 flex flex-col justify-end">
                <div className="h-1 bg-green-400 rounded-full opacity-60"></div>
                <div className="h-1 bg-green-400 rounded-full opacity-60"></div>
              </div>
            </div>
            <p className="text-xs text-gray-300 text-center leading-tight">In IDE, wide agent: the agent gradually fills the screen, and code becomes just diffs.</p>
          </div>

          {/* Stage 5 */}
          <div className="border-4 border-teal-400 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 shadow-xl">
            <div className="text-white text-xs font-bold mb-2 bg-teal-500 px-2 py-1 rounded">Stage 5</div>
            <div className="bg-black rounded p-3 mb-2 h-32">
              <div className="text-green-400 text-[10px] font-mono mb-2">$ copilot run_task</div>
              <div className="bg-gray-900 rounded p-2 mb-1">
                <div className="text-blue-400 text-xs font-bold mb-1">Copilot</div>
                <div className="space-y-1">
                  <div className="h-0.5 bg-gray-700 rounded"></div>
                  <div className="h-0.5 bg-gray-700 rounded w-4/5"></div>
                  <div className="h-0.5 bg-gray-700 rounded w-3/5"></div>
                </div>
              </div>
              <div className="text-green-400 text-[8px] font-mono">█</div>
            </div>
            <p className="text-xs text-gray-300 text-center leading-tight">CLI, single agent: diffs scroll by, and you may or may not review them.</p>
          </div>

          {/* Stage 6 */}
          <div className="border-4 border-teal-400 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 shadow-xl">
            <div className="text-white text-xs font-bold mb-2 bg-teal-500 px-2 py-1 rounded">Stage 6</div>
            <div className="bg-black rounded p-2 mb-2 h-32 grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-900 rounded p-1.5 border border-blue-500">
                  <div className="text-blue-400 text-[8px] font-bold mb-0.5">Copilot</div>
                  <div className="space-y-0.5">
                    <div className="h-0.5 bg-gray-700 rounded"></div>
                    <div className="h-0.5 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-0.5 bg-gray-700 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-300 text-center leading-tight">CLI, multi-agent: you regularly run 3 to 5 parallel instances.</p>
          </div>

          {/* Stage 7 */}
          <div className="border-4 border-teal-400 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 shadow-xl">
            <div className="text-white text-xs font-bold mb-2 bg-teal-500 px-2 py-1 rounded">Stage 7</div>
            <div className="bg-black rounded p-2 mb-2 h-32">
              <div className="grid grid-cols-3 gap-1 mb-1">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-gray-900 rounded p-1 border border-yellow-500">
                    <div className="text-yellow-400 text-[6px] font-bold">Copilot</div>
                    <div className="h-0.5 bg-gray-700 rounded mt-0.5"></div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-900 rounded p-1 border border-yellow-500">
                    <div className="text-yellow-400 text-[6px] font-bold">Copilot</div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-300 text-center leading-tight">10+ agents, hand-managed: you're starting to push the limits of hand-management.</p>
          </div>

          {/* Stage 8 */}
          <div className="border-4 border-teal-400 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 shadow-xl">
            <div className="text-white text-xs font-bold mb-2 bg-teal-500 px-2 py-1 rounded">Stage 8</div>
            <div className="bg-black rounded p-2 mb-2 h-32 flex flex-col">
              <div className="bg-purple-900 border-2 border-purple-500 rounded p-1 mb-2">
                <div className="text-purple-300 text-[9px] font-bold text-center">Orchestrator</div>
              </div>
              <div className="grid grid-cols-4 gap-1 flex-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                  <div key={i} className="bg-gray-900 rounded border border-green-500 flex items-center justify-center">
                    <div className="text-green-400 text-[5px] font-bold">Copilot</div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-300 text-center leading-tight">Building/working with an agent orchestrator to manage your 10+ agents.</p>
          </div>
        </div>

        {/* Source */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 max-w-7xl w-full">
          <p className="text-yellow-800 text-xs">
            <strong>Source:</strong> Steve Yegge, <a href="https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04" target="_blank" rel="noopener noreferrer" className="text-yellow-900 hover:underline">"Welcome to Gas Town"</a> (January 2026)
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Stages 1-2: First Steps with AI",
    subtitle: "From code completions to permission-based agents",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Stage 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-xl border-l-4 border-blue-500">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-4xl font-bold text-blue-600">1</div>
              <h3 className="text-2xl font-bold text-blue-900">Zero or Near-Zero AI</h3>
            </div>
            <p className="text-blue-800 italic mb-4">
              "Maybe code completions, sometimes ask Chat questions"
            </p>
            <ul className="space-y-2 text-blue-900">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Traditional development with minimal AI assistance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Occasional AI chat for questions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Optional code completions</span>
              </li>
            </ul>
          </div>

          {/* Stage 2 */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-lg shadow-xl border-l-4 border-indigo-500">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-4xl font-bold text-indigo-600">2</div>
              <h3 className="text-2xl font-bold text-indigo-900">Coding Agent in IDE</h3>
            </div>
            <p className="text-indigo-800 italic mb-4">
              "A narrow coding agent in a sidebar asks your permission to run tools"
            </p>
            <ul className="space-y-2 text-indigo-900">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>AI agent integrated into IDE</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>"Y/N?" prompts before actions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Narrow scope, sidebar-based</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>User maintains tight control</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What's needed */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 max-w-6xl w-full rounded-lg">
          <h4 className="font-bold text-green-900 mb-2 flex items-center">
            <span className="mr-2">🔑</span>
            What's needed to evolve
          </h4>
          <p className="text-green-800">
            Learn to get high-quality output from AI tools, and grow comfortable and efficient using them
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Stages 3-4: Building Trust",
    subtitle: "YOLO mode and wide agents take over the IDE",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Stage 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-xl border-l-4 border-purple-500">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-4xl font-bold text-purple-600">3</div>
              <h3 className="text-2xl font-bold text-purple-900">Agent in IDE (YOLO)</h3>
            </div>
            <p className="text-purple-800 italic mb-4">
              "Trust goes up. You turn off permissions, agent gets wider"
            </p>
            <ul className="space-y-2 text-purple-900">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Permissions disabled</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Agent operates with more autonomy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Wider scope of operations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Trust rises sharply</span>
              </li>
            </ul>
          </div>

          {/* Stage 4 */}
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-lg shadow-xl border-l-4 border-pink-500">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-4xl font-bold text-pink-600">4</div>
              <h3 className="text-2xl font-bold text-pink-900">In IDE, Wide Agent</h3>
            </div>
            <p className="text-pink-800 italic mb-4">
              "Your agent gradually grows to fill the screen. Code is just for diffs"
            </p>
            <ul className="space-y-2 text-pink-900">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Agent takes most of the IDE screen</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Code becomes secondary to diffs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>High automation within IDE</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Agent handles most coding tasks</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What's needed */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 max-w-6xl w-full rounded-lg">
          <h4 className="font-bold text-green-900 mb-2 flex items-center">
            <span className="mr-2">🔑</span>
            What's needed to evolve
          </h4>
          <p className="text-green-800">
            Build trust in the agent's judgment, and let it operate with more autonomy
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Stages 5-6: CLI and Multi-Agent",
    subtitle: "Terminal workflows with parallel agents",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Stage 5 */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-lg shadow-xl border-l-4 border-cyan-500">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-4xl font-bold text-cyan-600">5</div>
              <h3 className="text-2xl font-bold text-cyan-900">CLI, Single Agent</h3>
            </div>
            <p className="text-cyan-800 italic mb-4">
              "Diffs scroll by. You may or may not look at them"
            </p>
            <ul className="space-y-2 text-cyan-900">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Command-line interface primary workflow</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Single Copilot instance (or equivalent)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Diffs stream past rapidly</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Optional code review</span>
              </li>
            </ul>
          </div>

          {/* Stage 6 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg shadow-xl border-l-4 border-teal-500">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-4xl font-bold text-teal-600">6</div>
              <h3 className="text-2xl font-bold text-teal-900">CLI, Multi-Agent</h3>
            </div>
            <p className="text-teal-800 italic mb-4">
              "You regularly use 3 to 5 parallel instances. You are very fast"
            </p>
            <ul className="space-y-2 text-teal-900">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Multiple parallel CLI agent instances</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>3-5 concurrent coding agents</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>High velocity development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Manual agent coordination</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What's needed */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 max-w-6xl w-full rounded-lg">
          <h4 className="font-bold text-green-900 mb-2 flex items-center">
            <span className="mr-2">🔑</span>
            What's needed to evolve
          </h4>
          <p className="text-green-800">
            Shift from IDE to CLI; embrace terminal-based workflows for faster iteration
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Stages 7-8: Orchestration Era",
    subtitle: "From hand-management to automated orchestration",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Stage 7 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg shadow-xl border-l-4 border-orange-500">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-4xl font-bold text-orange-600">7</div>
              <h3 className="text-2xl font-bold text-orange-900">10+ Agents, Hand-Managed</h3>
            </div>
            <p className="text-orange-800 italic mb-4">
              "You are starting to push the limits of hand-management"
            </p>
            <ul className="space-y-2 text-orange-900">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>10 or more concurrent agents</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Manual orchestration grows difficult</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>High cognitive load</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Growing need for automation</span>
              </li>
            </ul>
          </div>

          {/* Stage 8 */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg shadow-xl border-l-4 border-red-500">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-4xl font-bold text-red-600">8</div>
              <h3 className="text-2xl font-bold text-red-900">Building Orchestrator</h3>
            </div>
            <p className="text-red-800 italic mb-4">
              "Building/working with an agent orchestrator to manage your 10+ agents"
            </p>
            <ul className="space-y-2 text-red-900">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Agent orchestration system (e.g., Gas Town)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>20-30+ agents running in parallel</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You become a Product Manager for AI agents</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>"Vibe coding": throughput over perfection</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 max-w-6xl w-full rounded-lg">
          <h4 className="font-bold text-yellow-900 mb-2 flex items-center">
            <span className="mr-2">⚠️</span>
            Prerequisites for Stage 8
          </h4>
          <p className="text-yellow-800">
            Reach Stage 6-7 before using orchestration tools • Embrace the "vibe coding" mentality • Get comfortable with nondeterministic workflows
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Key Insights: The Evolution Path",
    subtitle: "Five insights on the transformation",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-8 px-8">
        <div className="grid grid-cols-1 gap-6 max-w-5xl w-full">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-lg shadow-xl">
            <h4 className="font-bold text-white text-xl mb-2 flex items-center">
              <span className="mr-3 text-3xl">🔐</span>
              Trust is the Unlock
            </h4>
            <p className="text-blue-50">
              Each stage requires more trust in AI agents. The progression is about learning to let go of control.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-lg shadow-xl">
            <h4 className="font-bold text-white text-xl mb-2 flex items-center">
              <span className="mr-3 text-3xl">🚀</span>
              Velocity Accelerates Exponentially
            </h4>
            <p className="text-purple-50">
              From individual code completions to managing 30+ parallel agents. Each stage multiplies your development capacity.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-xl">
            <h4 className="font-bold text-white text-xl mb-2 flex items-center">
              <span className="mr-3 text-3xl">🎭</span>
              Role Transformation
            </h4>
            <p className="text-pink-50">
              Developer → AI orchestrator → Product Manager. You evolve from writing code to designing systems to managing ideas.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg shadow-xl">
            <h4 className="font-bold text-white text-xl mb-2 flex items-center">
              <span className="mr-3 text-3xl">📊</span>
              Current State (Early 2026)
            </h4>
            <p className="text-orange-50">
              Most developers are still at Stage 1-3. Orchestration tools only make sense at Stage 6+. You can't skip stages.
            </p>
          </div>

          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6 rounded-lg shadow-xl">
            <h4 className="font-bold text-white text-xl mb-2 flex items-center">
              <span className="mr-3 text-3xl">🏗️</span>
              Tools Follow Needs
            </h4>
            <p className="text-teal-50">
              Don't try to use Stage 8 tools at Stage 3. Let your pain points guide you. Tool needs emerge naturally at each stage.
            </p>
          </div>
        </div>
      </div>
    )
  }
];
