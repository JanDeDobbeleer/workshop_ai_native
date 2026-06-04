import { ShieldAlert } from 'lucide-react';
import { SlideType } from './types';

export const securitySlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <ShieldAlert className="w-20 h-20 text-red-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-red-900 text-center">
          Security
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Understanding risks and best practices for secure AI coding
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-red-300 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-red-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Agent Flow + Lifecycle",
    subtitle: "End-to-end view from prompt and context through tools, filters, and user output",
    content: (
      <div className="w-full h-full px-1 md:px-3">
        <div className="relative mx-auto h-full max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-3 shadow-sm md:p-4">
          <div className="pointer-events-none absolute -top-12 -right-14 h-36 w-36 rounded-full bg-amber-200/30 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-14 -left-10 h-36 w-36 rounded-full bg-blue-300/20 blur-2xl" />

          <div className="relative flex h-full flex-col gap-3">
            <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
              <div className="flex min-h-[86px] flex-col justify-center rounded-lg border border-blue-200 bg-blue-50 p-2.5 text-center md:min-h-[92px]">
                <p className="text-sm font-bold text-blue-900">Client + User</p>
                <p className="text-xs text-blue-700 md:text-sm">Prompt + workspace context</p>
              </div>
              <span className="hidden text-2xl font-black text-slate-400 md:block">→</span>
              <span className="text-center text-2xl font-black text-slate-400 md:hidden">↓</span>

              <div className="flex min-h-[86px] flex-col justify-center rounded-lg border border-indigo-200 bg-indigo-50 p-2.5 text-center md:min-h-[92px]">
                <p className="text-sm font-bold text-indigo-900">Pre-Model Filters</p>
                <p className="text-xs text-indigo-700 md:text-sm">Toxicity, relevance, anti-injection</p>
              </div>
              <span className="hidden text-2xl font-black text-slate-400 md:block">→</span>
              <span className="text-center text-2xl font-black text-slate-400 md:hidden">↓</span>

              <div className="flex min-h-[86px] flex-col justify-center rounded-lg border border-amber-300 bg-amber-50 p-2.5 text-center md:min-h-[92px]">
                <p className="text-sm font-bold text-amber-900">LLM + Tool Loop</p>
                <p className="text-xs text-amber-800 md:text-sm">Reason, call tools, update context</p>
              </div>
              <span className="hidden text-2xl font-black text-slate-400 md:block">→</span>
              <span className="text-center text-2xl font-black text-slate-400 md:hidden">↓</span>

              <div className="flex min-h-[86px] flex-col justify-center rounded-lg border border-emerald-200 bg-emerald-50 p-2.5 text-center md:min-h-[92px]">
                <p className="text-sm font-bold text-emerald-900">Post-Model Filters</p>
                <p className="text-xs text-emerald-700 md:text-sm">Policy and output validation</p>
              </div>
              <span className="hidden text-2xl font-black text-slate-400 md:block">→</span>
              <span className="text-center text-2xl font-black text-slate-400 md:hidden">↓</span>

              <div className="flex min-h-[86px] flex-col justify-center rounded-lg border border-blue-200 bg-blue-50 p-2.5 text-center md:min-h-[92px]">
                <p className="text-sm font-bold text-blue-900">User Output</p>
                <p className="text-xs text-blue-700 md:text-sm">Streamed response in client</p>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-3 lg:grid-cols-12">
              <div className="space-y-2.5 rounded-xl border border-slate-200 bg-white/90 p-3 lg:col-span-7">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 md:text-sm">Execution flow</span>
                  <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600 md:text-sm">Agentic cycle</span>
                </div>

                <div className="space-y-2">
                  <div className="grid grid-cols-[auto_1fr] gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2.5">
                    <span className="text-sm font-bold text-slate-500">1</span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-slate-800">Machine + user context enters Copilot</p>
                      <p className="text-xs text-slate-600 md:text-sm">System context and user intent are assembled into a single payload.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] gap-2 rounded-lg border border-amber-200 bg-amber-50 p-2.5">
                    <span className="text-sm font-bold text-amber-700">2</span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-amber-900">LLM reasons, then responds or calls tools</p>
                      <p className="text-xs text-amber-800 md:text-sm">Each tool result refreshes context and feeds the next LLM iteration.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] gap-2 rounded-lg border border-blue-200 bg-blue-50 p-2.5">
                    <span className="text-sm font-bold text-blue-700">3</span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-blue-900">Validated output is streamed back to the user</p>
                      <p className="text-xs text-blue-800 md:text-sm">Post-model checks run before final output reaches the client.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1.5 md:grid-cols-4">
                  <div className="rounded-full border border-blue-500 bg-white px-2 py-1.5 text-center text-xs font-bold text-blue-700 md:text-sm">read_file</div>
                  <div className="rounded-full border border-blue-500 bg-white px-2 py-1.5 text-center text-xs font-bold text-blue-700 md:text-sm">edit_file</div>
                  <div className="rounded-full border border-blue-500 bg-white px-2 py-1.5 text-center text-xs font-bold text-blue-700 md:text-sm">run_in_terminal</div>
                  <div className="rounded-full border border-blue-400 border-dashed bg-white px-2 py-1.5 text-center text-xs font-bold text-blue-500 md:text-sm">...</div>
                </div>
              </div>

              <div className="space-y-2.5 rounded-xl border border-slate-200 bg-white/90 p-3 lg:col-span-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 md:text-sm">Safety lifecycle detail</div>

                <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-2.5">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-indigo-800 md:text-sm">Pre-model checks</p>
                  <ul className="list-disc space-y-0.5 pl-4 text-xs text-indigo-900 md:text-sm">
                    <li>Toxic language screening</li>
                    <li>Relevance checks for chat</li>
                    <li>Prompt-hacking protections</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-2.5">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-emerald-800 md:text-sm">Post-model checks</p>
                  <ul className="list-disc space-y-0.5 pl-4 text-xs text-emerald-900 md:text-sm">
                    <li>Code quality and policy checks</li>
                    <li>Sensitive identifier redaction (PII, tokens, IDs)</li>
                    <li>Public-code match filtering</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-amber-200 bg-amber-50 p-2.5">
                  <p className="text-xs font-medium text-amber-900 md:text-sm">
                    Data remains encrypted in transit and processed in memory.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  },
  {
    title: "Notable Security Incidents",
    subtitle: "Real-world vulnerabilities discovered in AI coding assistants",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-white p-5 rounded-lg shadow border border-red-200">
          <div className="flex items-start mb-3">
            <span className="text-2xl mr-3">👻</span>
            <h4 className="font-bold text-red-900 text-lg">Invisible Unicode Attack</h4>
          </div>
          <div className="space-y-2 text-gray-700 text-sm">
            <p>Invisible characters can be embedded in code that <strong>hide harmful instructions</strong> from developers while affecting code behavior.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Bad actors inject invisible characters into open-source repositories</li>
              <li>These become part of Copilot's context when building prompts</li>
              <li>Compromised code suggestions can spread undetected across many files</li>
              <li>By the time detected, damage may be widespread</li>
            </ul>
            <div className="mt-2 text-xs text-gray-500">
              Source: <a href="https://idanhabler.medium.com/hiding-in-plain-sight-weaponizing-invisible-unicode-to-attack-llms-f9033865ec10" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Hiding in Plain Sight — Weaponizing Invisible Unicode to Attack LLMs</a>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-orange-200">
          <div className="flex items-start mb-3">
            <span className="text-2xl mr-3">🔑</span>
            <h4 className="font-bold text-orange-900 text-lg">Secret Leakage Vulnerability</h4>
          </div>
          <div className="space-y-2 text-gray-700 text-sm">
            <p>Researchers at CUHK discovered that attackers can <strong>induce Copilot to reveal secrets</strong> it was unintentionally trained on.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Hardcoded API keys in public repos become part of training data</li>
              <li>Crafted prompts can extract these credentials from the model</li>
              <li>Removing secrets from GitHub doesn't remove them from the model</li>
              <li>The original developer may never know their key was exposed</li>
            </ul>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            Source: <a href="https://arxiv.org/pdf/2309.07639" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">arXiv:2309.07639</a>
          </div>
        </div>

        <div className="bg-red-100 p-3 rounded-lg">
          <p className="text-sm text-red-900 text-center">
            <strong>Takeaway:</strong> Never hardcode secrets. Always review AI-generated code before accepting.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Best Practices to Mitigate Risks",
    subtitle: "Developer and organization actions for secure AI coding",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-900 mb-2">Defense in Depth</h3>
          <p className="text-gray-700">GenAI security must guard against malicious code in real time — both inputs and outputs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-blue-500 mr-2">🔒</span> Mask & Anonymize Data
            </h4>
            <p className="text-gray-600 text-sm">Prevent sensitive data from becoming inputs to Copilot in the first place.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-green-500 mr-2">📋</span> Enforce Privacy Policies
            </h4>
            <p className="text-gray-600 text-sm">Support organizational data governance and compliance requirements.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-purple-500 mr-2">🔍</span> Review API Calls
            </h4>
            <p className="text-gray-600 text-sm">Check Copilot suggestions for compliance with best practices and industry standards.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-orange-500 mr-2">⚡</span> Real-Time Screening
            </h4>
            <p className="text-gray-600 text-sm">Guard against malicious code at every stage — not just periodic scans.</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center">
            <span className="text-red-500 mr-2">🛡️</span> Maintain Codebase Security
          </h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Keep open-source dependencies clean and up-to-date</li>
            <li>• Use secrets scanning and prevent hardcoded credentials</li>
            <li>• Always review AI-generated code before committing</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-900 text-center">
            <strong>Source:</strong> <a href="https://prompt.security/blog/securing-enterprise-data-in-the-face-of-github-copilot-vulnerabilities" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Prompt Security — Securing Enterprise Data</a>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Content Exclusion for GitHub Copilot",
    subtitle: "Prevent Copilot from accessing sensitive files",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h3 className="text-xl font-bold text-red-900 mb-2">Exclude Sensitive Content</h3>
          <p className="text-gray-700">Repository admins, org owners, and enterprise owners can configure content exclusion for <strong>Business</strong> and <strong>Enterprise</strong> plans.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">Repository-Level Examples</h4>
            <div className="space-y-2 text-sm font-mono bg-gray-50 p-3 rounded">
              <p><span className="text-green-600"># Specific file</span></p>
              <p className="text-gray-800">- "/src/config/secrets.json"</p>
              <p><span className="text-green-600"># Pattern match</span></p>
              <p className="text-gray-800">- "*.env"</p>
              <p className="text-gray-800">- "secret*"</p>
              <p><span className="text-green-600"># Directory</span></p>
              <p className="text-gray-800">- "/scripts/**"</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">Organization-Level Examples</h4>
            <div className="space-y-2 text-sm font-mono bg-gray-50 p-3 rounded">
              <p><span className="text-green-600"># All repos: .env files</span></p>
              <p className="text-gray-800">"*": ["**/.env"]</p>
              <p><span className="text-green-600"># Specific repo</span></p>
              <p className="text-gray-800">octo-repo:</p>
              <p className="text-gray-800 ml-2">- "/config/**"</p>
              <p><span className="text-green-600"># Any security folder</span></p>
              <p className="text-gray-800">- "**/security/**"</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
          <p className="text-sm text-orange-900">
            <strong>⚠️ Limitation:</strong> Agent mode, Copilot coding agent, and Copilot CLI do <strong>not</strong> support content exclusion. Changes take up to 30 minutes to propagate.
          </p>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-900 text-center">
            <strong>Source:</strong> <a href="https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Docs — Excluding content from GitHub Copilot</a>
          </p>
        </div>
      </div>
    )
  }
];
