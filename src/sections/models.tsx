import { Box } from 'lucide-react';
import { SlideType } from "./types";

export const modelsSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Box className="w-20 h-20 text-purple-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 text-center">
          Models
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Choosing the right model for the job
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
    title: "AI Models for Software Engineering",
    subtitle: "Choosing the Right AI Coding Assistant",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-8">
        <div className="text-center mb-6">
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Understanding model capabilities helps you delegate effectively and
            set realistic expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl w-full">
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-4 md:p-6 rounded-lg shadow-lg">
            <div className="text-xl md:text-2xl font-bold mb-2">🎯 SWE-bench</div>
            <div className="text-sm">
              Real-world GitHub issue resolution: the gold standard for
              practical coding ability
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 md:p-6 rounded-lg shadow-lg">
            <div className="text-xl md:text-2xl font-bold mb-2">🧮 HumanEval</div>
            <div className="text-sm">
              Algorithmic problem-solving: measures fundamental coding
              capabilities
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-4 md:p-6 rounded-lg shadow-lg">
            <div className="text-xl md:text-2xl font-bold mb-2">📊 Context Window</div>
            <div className="text-sm">
              How much code the model can "see" at once: critical for large
              codebases
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-4 md:p-6 rounded-lg shadow-lg">
            <div className="text-xl md:text-2xl font-bold mb-2">⚡ Use Case Fit</div>
            <div className="text-sm">
              Different models excel at different tasks: match the tool to the
              job
            </div>
          </div>
        </div>

        <div className="bg-gray-100 px-6 py-3 rounded-lg mt-4 max-w-3xl w-full">
          <p className="text-sm text-gray-600 italic">
            Sources:{" "}
            <a href="https://www.swebench.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">SWE-bench Leaderboard</a>
            {" "}·{" "}
            <a href="https://benchlm.ai/benchmarks/humaneval" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">BenchLM HumanEval</a>
            {" "}(March 2026)
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Real-World Coding Performance",
    subtitle: "SWE-bench Verified Scores (March 2026)",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-lg text-gray-700">
            <strong>SWE-bench</strong> measures ability to resolve actual GitHub
            issues: real bugs from production codebases that require understanding
            of complex systems.
          </p>
        </div>

        <div className="space-y-4">
          {/* Claude 4.5 Opus */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">
              Claude 4.5 Opus
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full flex items-center justify-end pr-3"
                style={{ width: "76.8%" }}
              >
                <span className="text-white font-bold text-sm">76.8%</span>
              </div>
            </div>
          </div>

          {/* Gemini 3 Flash */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">
              Gemini 3 Flash
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full flex items-center justify-end pr-3"
                style={{ width: "75.8%" }}
              >
                <span className="text-white font-bold text-sm">75.8%</span>
              </div>
            </div>
          </div>

          {/* GPT-5-2 */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">
              GPT-5-2
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full flex items-center justify-end pr-3"
                style={{ width: "72.8%" }}
              >
                <span className="text-white font-bold text-sm">72.8%</span>
              </div>
            </div>
          </div>

          {/* Claude 4.5 Sonnet */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">
              Claude 4.5 Sonnet
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-full rounded-full flex items-center justify-end pr-3"
                style={{ width: "71.4%" }}
              >
                <span className="text-white font-bold text-sm">71.4%</span>
              </div>
            </div>
          </div>

          {/* DeepSeek V3.2 */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">
              DeepSeek V3.2
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-full rounded-full flex items-center justify-end pr-3"
                style={{ width: "70.0%" }}
              >
                <span className="text-white font-bold text-sm">70.0%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm italic text-purple-900">
            <strong>Key Insight:</strong> Top models now resolve ~3 out of 4 real GitHub issues autonomously. The field is rapidly improving and converging. All top 5 sit within 7 points of each other.
          </p>
        </div>

        <div className="bg-gray-100 px-4 py-3 rounded-lg">
          <p className="text-sm text-gray-600 italic">
            Source:{" "}
            <a href="https://www.swebench.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">SWE-bench Verified Leaderboard</a>
            {" "}(evaluated with mini-SWE-agent, March 2026)
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Algorithmic Problem Solving",
    subtitle: "HumanEval Benchmark Results (March 2026)",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-lg text-gray-700">
            <strong>HumanEval</strong> measures fundamental coding ability on
            well-defined algorithmic challenges: syntax, data structures, and
            clean implementations.
          </p>
        </div>

        <div className="space-y-4">
          {/* GPT-5.4 Pro */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">
              GPT-5.4 Pro
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full flex items-center justify-end pr-3"
                style={{ width: "95%" }}
              >
                <span className="text-white font-bold text-sm">95%</span>
              </div>
            </div>
          </div>

          {/* GPT-5.1-Codex-Max */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">
              GPT-5.1-Codex-Max
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full flex items-center justify-end pr-3"
                style={{ width: "94%" }}
              >
                <span className="text-white font-bold text-sm">94%</span>
              </div>
            </div>
          </div>

          {/* Claude Sonnet 4.6 */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">
              Claude Sonnet 4.6
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full flex items-center justify-end pr-3"
                style={{ width: "93%" }}
              >
                <span className="text-white font-bold text-sm">93%</span>
              </div>
            </div>
          </div>

          {/* GPT-5.2 Pro */}
          <div className="flex items-center space-x-4">
            <div className="w-40 text-right font-semibold text-gray-800">
              GPT-5.2 Pro
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-teal-500 to-teal-600 h-full rounded-full flex items-center justify-end pr-3"
                style={{ width: "93%" }}
              >
                <span className="text-white font-bold text-sm">93%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Notice:</strong> HumanEval is near-saturated. The top 7 models all score 93–95%, a gap of just 2 points. This benchmark no longer meaningfully differentiates frontier models. SWE-bench Verified tells the more useful story.
          </p>
        </div>

        <div className="bg-gray-100 px-4 py-3 rounded-lg">
          <p className="text-sm text-gray-600 italic">
            Source:{" "}
            <a href="https://benchlm.ai/benchmarks/humaneval" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BenchLM HumanEval Leaderboard</a>
            {" "}(March 2026, 114 models evaluated)
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Choosing the Right Model",
    subtitle: "Match the Model to Your Needs",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
          <p className="text-lg text-gray-700">
            No single model optimizes every dimension. Selection depends on your
            specific requirements, constraints, and risk tolerance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500 flex items-center">
            <div className="w-48 font-semibold text-purple-900">
              High-Stakes Development
            </div>
            <div className="flex-1 text-gray-700">
              Critical systems, complex refactoring, security-sensitive code
            </div>
            <div className="bg-purple-100 px-3 py-1 rounded-full text-purple-800 font-semibold text-sm">
              Claude 4.5 Opus
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500 flex items-center">
            <div className="w-48 font-semibold text-green-900">
              Best Value / Speed
            </div>
            <div className="flex-1 text-gray-700">
              High accuracy at low cost: 75.8% SWE-bench at $0.36/1M tokens
            </div>
            <div className="bg-green-100 px-3 py-1 rounded-full text-green-800 font-semibold text-sm">
              Gemini 3 Flash
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500 flex items-center">
            <div className="w-48 font-semibold text-blue-900">
              Enterprise GCP Users
            </div>
            <div className="flex-1 text-gray-700">
              Cloud-native workflows, compliance requirements
            </div>
            <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 font-semibold text-sm">
              Gemini 3 Pro
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-cyan-500 flex items-center">
            <div className="w-48 font-semibold text-cyan-900">
              Data Sovereignty
            </div>
            <div className="flex-1 text-gray-700">
              Self-hosted, IP protection critical, air-gapped environments
            </div>
            <div className="bg-cyan-100 px-3 py-1 rounded-full text-cyan-800 font-semibold text-sm">
              DeepSeek V3.2
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500 flex items-center">
            <div className="w-48 font-semibold text-orange-900">
              Open Source Preference
            </div>
            <div className="flex-1 text-gray-700">
              Vendor independence, customization, learning environments
            </div>
            <div className="bg-orange-100 px-3 py-1 rounded-full text-orange-800 font-semibold text-sm">
              Llama 4 405B
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm italic text-gray-700">
            <strong>Delegation Tip:</strong> Start with leading models for
            critical tasks, then experiment with alternatives for routine work
            where the performance gap matters less.
          </p>
        </div>
      </div>
    ),
  },
    {
    title: "Environmental Impact",
    subtitle: "Energy, Carbon, and Water Footprint per 1M Tokens",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
          <p className="text-lg text-gray-700">
            <strong>Inference costs matter:</strong> the environmental footprint of AI varies dramatically between models and infrastructure choices.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-800">Model</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-800">⚡ Energy (kWh)</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-800">🌫️ CO₂ (g)</th>
                <th className="px-4 py-3 text-right font-semibold text-gray-800">💧 Water (mL)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-green-50">
                <td className="px-4 py-3 font-semibold text-green-800">GPT-4o (Mar '25)</td>
                <td className="px-4 py-3 text-right text-green-700">0.42</td>
                <td className="px-4 py-3 text-right text-green-700">1.22</td>
                <td className="px-4 py-3 text-right text-green-700">2.88</td>
              </tr>
              <tr className="bg-cyan-50">
                <td className="px-4 py-3 font-semibold text-cyan-800">DeepSeek-V3 (Azure)</td>
                <td className="px-4 py-3 text-right text-cyan-700">0.74</td>
                <td className="px-4 py-3 text-right text-cyan-700">2.17</td>
                <td className="px-4 py-3 text-right text-cyan-700">3.70</td>
              </tr>
              <tr className="bg-purple-50">
                <td className="px-4 py-3 font-semibold text-purple-800">Claude 3.7 Sonnet</td>
                <td className="px-4 py-3 text-right text-purple-700">0.95</td>
                <td className="px-4 py-3 text-right text-purple-700">2.99</td>
                <td className="px-4 py-3 text-right text-purple-700">5.67</td>
              </tr>
              <tr className="bg-orange-50">
                <td className="px-4 py-3 font-semibold text-orange-800">LLaMA-3.1-405B</td>
                <td className="px-4 py-3 text-right text-orange-700">2.23</td>
                <td className="px-4 py-3 text-right text-orange-700">9.04</td>
                <td className="px-4 py-3 text-right text-orange-700">25.20</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <p className="text-sm text-gray-700"><strong>🏢 Infrastructure matters:</strong> Same model on Azure vs. original servers can differ by ~70%</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <p className="text-sm text-gray-700"><strong>📊 Size correlates:</strong> 405B parameter models consume ~5× more than optimized smaller models</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm italic text-gray-700">
            <strong>Source:</strong> <a href="https://arxiv.org/abs/2505.09598" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">arXiv:2505.09598</a>, "How Hungry is AI?" (May 2025)
          </p>
        </div>
      </div>
    ),
  }
];
