import { Terminal } from 'lucide-react';
import { SlideType } from './types';
import { CodeBlock } from '../components/CodeBlock';
import { ToolMatrix, STANDARD_TOOL_COLUMNS } from '../components/ToolMatrix';
import { terminalAgentsMatrixRows } from '../components/toolMatrixRows';

export const copilotCliSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Terminal className="w-20 h-20 text-gray-700" />
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center">
          Terminal Agents
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          CLI entry points for agentic coding across tools
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Terminal Agents by Tool",
    subtitle: "CLI entry points and cloud vs local",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
          <p className="text-gray-700">
            Terminal agents share the same capabilities as IDE agents — often with richer scripting, CI integration, and cloud delegation.
          </p>
        </div>
        <ToolMatrix columns={STANDARD_TOOL_COLUMNS} rows={terminalAgentsMatrixRows} />
      </div>
    )
  },
  {
    title: "GitHub Copilot CLI",
    subtitle: "One terminal agent — deep dive (Copilot callout)",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What is GitHub Copilot CLI?</h3>
          <p className="text-lg text-gray-700">
            Command-line interface for GitHub Copilot that lets you use AI directly from your terminal to answer questions, write and debug code, and interact with GitHub.com — including creating pull requests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">📋 Current Status:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Public preview with data protection</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Subject to change</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Actively being developed</span></li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">💻 Platform Support:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Linux</span></li>
              <li className="flex"><span className="mr-2">•</span><span>macOS</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Windows</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm italic text-gray-900">
            <strong>Installation:</strong> See the <a href="https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Installing GitHub Copilot CLI</a> guide for setup instructions.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Modes & Approval Flags",
    subtitle: "Interactive, programmatic, and safety controls",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-900 mb-3">🔄 Interactive Mode</h4>
            <p className="text-gray-700 mb-2">Start a multi-turn session:</p>
            <CodeBlock
              code="copilot"
              className="bg-gray-900 text-green-400 px-3 py-1 rounded text-sm block"
            >
              <code className="bg-gray-900 text-green-400 px-3 py-1 rounded text-sm block">copilot</code>
            </CodeBlock>
            <ul className="space-y-1 text-gray-700 text-sm mt-3">
              <li>• Multi-turn conversations</li>
              <li>• Slash commands available</li>
              <li>• React to responses in session</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-900 mb-3">⚡ Programmatic Mode</h4>
            <p className="text-gray-700 mb-2">Single prompt execution:</p>
            <CodeBlock
              code='copilot -p "prompt"'
              className="bg-gray-900 text-green-400 px-3 py-1 rounded text-sm block"
            >
              <code className="bg-gray-900 text-green-400 px-3 py-1 rounded text-sm block">copilot -p "prompt"</code>
            </CodeBlock>
            <ul className="space-y-1 text-gray-700 text-sm mt-3">
              <li>• Use <code className="bg-gray-200 px-1 rounded">-p</code> or <code className="bg-gray-200 px-1 rounded">--prompt</code></li>
              <li>• Pipe options from scripts</li>
              <li>• Combine with approval flags</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-xl font-bold text-orange-900 mb-3">🔐 Approval Flags</h3>
          <div className="space-y-3">
            <div>
              <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-sm">--allow-all-tools</code>
              <p className="text-gray-700 text-sm mt-1">Allow Copilot to use any tool without approval</p>
            </div>
            <div>
              <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-sm">--allow-tool 'shell(git)'</code>
              <p className="text-gray-700 text-sm mt-1">Allow specific tools or commands</p>
            </div>
            <div>
              <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-sm">--deny-tool 'shell(rm)'</code>
              <p className="text-gray-700 text-sm mt-1">Deny specific dangerous commands</p>
            </div>
            <div>
              <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-sm">--yolo</code>
              <p className="text-gray-700 text-sm mt-1">Maximum autonomy mode (use with caution!)</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <p className="text-sm text-red-900">
            <strong>⚠️ Security Warning:</strong> Automatic approvals let Copilot run commands and modify files without per-command review. This can be destructive. Use in restricted environments (VM/container) when possible.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Customization & Extensibility",
    subtitle: "Tailor Copilot CLI to your workflow",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Extend Copilot CLI</h3>
          <p className="text-lg text-gray-700">
            Customize GitHub Copilot CLI to fit your team's practices, data sources, and specialized workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">📝 Custom Instructions</h4>
            <p className="text-gray-700 text-sm">
              Provide additional context on your project — how to build, test, and validate changes.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">🔌 MCP Servers</h4>
            <p className="text-gray-700 text-sm">
              Give Copilot access to different data sources and tools via Model Context Protocol.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-3">🤖 Custom Agents</h4>
            <p className="text-gray-700 text-sm">
              Create specialized versions of Copilot for different tasks (e.g., frontend expert following team guidelines).
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-3">🪝 Hooks & Skills</h4>
            <p className="text-gray-700 text-sm">
              Execute shell commands at key points (hooks) or add specialized task instructions (skills).
            </p>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Learn More:</strong> <a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Using GitHub Copilot CLI</a> documentation.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Hooks",
    subtitle: "Automate and secure agent workflows",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
          <h3 className="text-xl font-bold text-gray-900 mb-2">What are Hooks?</h3>
          <p className="text-gray-700">
            Execute custom shell commands at strategic points in an agent's workflow. Stored in <code className="bg-gray-200 px-1 rounded">.github/hooks/*.json</code> in your repository.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">🎯 Hook Types:</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span><strong>sessionStart/End</strong> — Initialize/cleanup</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>userPromptSubmitted</strong> — Log requests</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>preToolUse</strong> — Approve/deny tools</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>postToolUse</strong> — Log execution results</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>errorOccurred</strong> — Handle failures</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">💡 Use Cases:</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Block dangerous commands</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Run security checks (secret scanning)</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Enforce coding standards</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Generate audit trails & logs</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Send notifications on completion</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-900">
            <strong>⚡ Performance:</strong> Hooks run synchronously and block agent execution. Keep execution time under 5 seconds. Use async logging and background tasks for heavy operations.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm italic text-gray-900">
            <strong>Learn More:</strong> <a href="https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/use-hooks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Using hooks with GitHub Copilot agents</a>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Fleet",
    subtitle: "Run tasks in parallel with subagents — faster completion of complex requests",
    content: (
      <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">⚙️ How It Works:</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">1.</span><span>Main agent analyzes the prompt for parallelizable subtasks</span></li>
              <li className="flex"><span className="mr-2">2.</span><span>Acts as orchestrator, managing workflow and dependencies</span></li>
              <li className="flex"><span className="mr-2">3.</span><span>Independent subtasks run in parallel via subagents</span></li>
              <li className="flex"><span className="mr-2">4.</span><span>Each subagent has its own context window and can use custom agents</span></li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">✅ When to Use:</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2 text-green-600">✓</span><span>Large or complex multi-step tasks (e.g. refactoring, test suites)</span></li>
              <li className="flex"><span className="mr-2 text-green-600">✓</span><span>Parallelizable work with independent subtasks</span></li>
              <li className="flex"><span className="mr-2 text-green-600">✓</span><span>Automated workflows in autopilot mode</span></li>
              <li className="flex"><span className="mr-2 text-yellow-500">~</span><span>Sequential tasks won't benefit from parallelization</span></li>
              <li className="flex"><span className="mr-2 text-yellow-500">~</span><span>May consume more premium requests than single-agent</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
          <p className="text-gray-400 mb-1"># Use plan mode first (Shift+Tab), then hand off to fleet</p>
          <p className="text-yellow-300">&gt; /fleet implement the new user auth feature with tests and docs</p>
          <p className="text-gray-400 mt-3 mb-1"># Reference a custom agent for a specific subtask</p>
          <p className="text-green-400">Use @test-writer to create comprehensive unit tests for the auth module</p>
        </div>
      </div>
    )
  },
];
