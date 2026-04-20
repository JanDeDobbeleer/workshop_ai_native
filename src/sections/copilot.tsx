import { Code } from "lucide-react";
import { SlideType } from "./types";

export const copilotSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Code className="w-20 h-20 text-gray-700" />
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center">
          GitHub Copilot
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Your AI pair programmer
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
    title: "GitHub Copilot",
    subtitle: "Your AI-Powered Development Partner",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-8">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 max-w-2xl w-full">
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-4xl">🤖</div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Not a Model — An Abstraction
              </h3>
              <p className="text-gray-400">
                GitHub Copilot is an AI-powered coding assistant that sits
                between you and multiple AI models
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl w-full">
          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-gray-200 text-center">
            <div className="text-3xl mb-3">💻</div>
            <h4 className="font-bold text-gray-900 mb-2">IDE Integration</h4>
            <p className="text-gray-600">
              Works directly in VS Code, Visual Studio, JetBrains, Neovim, and
              more
            </p>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-gray-200 text-center">
            <div className="text-3xl mb-3">⌨️</div>
            <h4 className="font-bold text-gray-900 mb-2">CLI Support</h4>
            <p className="text-gray-600">
              GitHub CLI extension brings AI assistance to your terminal
            </p>
          </div>

          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-gray-200 text-center">
            <div className="text-3xl mb-3">🔄</div>
            <h4 className="font-bold text-gray-900 mb-2">Model Agnostic</h4>
            <p className="text-gray-600">
              Leverages Claude, GPT, Gemini and other models under the hood
            </p>
          </div>
        </div>

        <div className="bg-blue-50 px-6 py-4 rounded-lg max-w-2xl w-full">
          <p className="text-center text-blue-900">
            <strong>Key Benefit:</strong> You focus on your code while Copilot
            handles the complexity of model selection, context management, and
            prompt engineering.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Ghost Text Suggestions",
    subtitle: "Real-time coding assistance as you type",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            What are Ghost Text Suggestions?
          </h3>
          <p className="text-gray-700">
            Copilot offers coding suggestions as you type, including
            understanding natural language comments to suggest code that
            accomplishes your described goal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">How It Works:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Provides suggestions while you type code</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Appears as gray "ghost" text inline</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Press Tab to accept, Esc to dismiss</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">
              Natural Language Support:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Write comments describing what you want</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Copilot suggests code to accomplish the goal</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Works across multiple programming languages</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Key Benefit:</strong> Get real-time suggestions without
            leaving your code editor, accelerating development flow.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Next Edit Suggestions",
    subtitle: "Predictive editing based on your current changes",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Next Edit Suggestions{" "}
            <span className="text-sm font-normal text-blue-700">
              (Public Preview)
            </span>
          </h3>
          <p className="text-gray-700">
            Based on the edits you're making, Copilot predicts the location of
            your next edit and suggests a completion for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">How It Works:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Analyzes your current code changes</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Predicts where you'll edit next</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Proactively suggests the change</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">
              Suggestion Scope:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Single symbol completions</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Entire line suggestions</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Multiple lines (depending on change scope)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Configuration:</strong> Enable in your{" "}
            <a
              href="https://docs.github.com/en/copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-your-environment#enabling-next-edit-suggestions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Copilot settings
            </a>
            .
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Language Support",
    subtitle: "Comprehensive coverage across programming languages",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Supported Languages & Frameworks
          </h3>
          <p className="text-gray-700">
            Copilot provides suggestions for over 30 programming languages, with
            optimized support for the most popular languages and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">
              Works Best With:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Python, JavaScript, TypeScript</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Ruby, Go, C#, C++</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>30+ languages total</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">
              Additional Capabilities:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Database query generation</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>API and framework suggestions</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Infrastructure as code development</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Full Language List:</strong> View the complete list of{" "}
            <a
              href="https://docs.github.com/en/copilot/concepts/completions/code-suggestions#programming-languages-included-in-the-default-model"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              supported programming languages
            </a>
            .
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Code Referencing & Public Code Matching",
    subtitle: "How Copilot handles matches with public code",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Public Code Matching
          </h3>
          <p className="text-gray-700">
            GitHub Copilot checks each suggestion for matches with publicly
            available code to help maintain code originality and provide
            attribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">How It Works:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Checks suggestions against public code</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Happens automatically in real-time</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Controlled by account/organization settings</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">
              Handling Matches:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Matches can be discarded automatically</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Or suggested with code reference</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Policy-based control for compliance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Learn More:</strong>{" "}
            <a
              href="https://docs.github.com/en/copilot/concepts/completions/code-referencing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Copilot code referencing
            </a>{" "}
            documentation.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Copilot Chat Modes",
    subtitle: "Three Ways to Interact with AI in Your Workflow",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <p className="text-xl text-gray-700 max-w-2xl text-center mb-4">
          Copilot offers different interaction modes — each optimized for
          specific tasks and levels of AI autonomy
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full">
          {/* Ask Mode */}
          <div className="flex flex-col bg-gradient-to-b from-blue-500 to-blue-700 text-white p-4 md:p-5 rounded-lg shadow-lg">
            <div className="text-center mb-3">
              <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                Ask Mode
              </div>
              <div className="text-3xl mb-2">💬</div>
            </div>
            <ul className="space-y-1 opacity-90 mb-4">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Chat-based Q&A interface</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Explore ideas and concepts</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Get explanations of code</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>No direct file changes</span>
              </li>
            </ul>
            <div className="mt-auto pt-3 border-t border-white/20 text-center opacity-75">
              <strong>Best for:</strong> Learning, exploring
            </div>
          </div>

          {/* Plan Mode */}
          <div className="flex flex-col bg-gradient-to-b from-orange-500 to-orange-700 text-white p-4 md:p-5 rounded-lg shadow-lg">
            <div className="text-center mb-3">
              <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                Plan Mode
              </div>
              <div className="text-3xl mb-2">📋</div>
            </div>
            <ul className="space-y-1 opacity-90 mb-4">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Generate step-by-step plans</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Review before execution</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Iterate on the approach</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Then execute with Agent</span>
              </li>
            </ul>
            <div className="mt-auto pt-3 border-t border-white/20 text-center opacity-75">
              <strong>Best for:</strong> Complex planning
            </div>
          </div>

          {/* Agent Mode */}
          <div className="flex flex-col bg-gradient-to-b from-purple-500 to-purple-700 text-white p-4 md:p-5 rounded-lg shadow-lg">
            <div className="text-center mb-3">
              <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                Agent Mode
              </div>
              <div className="text-3xl mb-2">🤖</div>
            </div>
            <ul className="space-y-1 opacity-90 mb-4">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Autonomous task execution</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Multi-file operations</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Runs terminal commands</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Iterates until complete</span>
              </li>
            </ul>
            <div className="mt-auto pt-3 border-t border-white/20 text-center opacity-75">
              <strong>Best for:</strong> Complex tasks
            </div>
          </div>
        </div>

        <div className="bg-gray-100 px-6 py-3 rounded-lg mt-2">
          <p className="text-gray-600 italic text-center">
            Each mode represents a different balance between human control and
            AI autonomy
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Ask Mode",
    subtitle: "Chat, Learn, and Explore",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">
            What is Ask Mode?
          </h3>
          <p className="text-lg text-gray-700">
            A conversational interface for asking questions about your code,
            exploring ideas, and getting explanations — without making any
            changes to your files.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">✅ Great For:</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Understanding unfamiliar code</li>
              <li>• Exploring architecture decisions</li>
              <li>• Learning new frameworks or APIs</li>
              <li>• Brainstorming approaches</li>
              <li>• Getting code explanations</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">
              💡 Key Features:
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Workspace-aware context</li>
              <li>• References your open files</li>
              <li>• Suggests code snippets (copy/paste)</li>
              <li>• No automatic file modifications</li>
              <li>• Safe for exploration</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-green-400 font-mono text-sm mb-2">
            Example prompts:
          </p>
          <div className="space-y-2 text-gray-300 font-mono text-sm">
            <p>"How does the authentication flow work in this project?"</p>
            <p>"What's the best way to handle errors in this function?"</p>
            <p>"Explain what this regex does"</p>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>4D Connection:</strong> Ask mode supports{" "}
            <strong>Delegation</strong> (deciding approach) and{" "}
            <strong>Description</strong> (refining your requirements through
            conversation).
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Plan Mode",
    subtitle: "Think Before You Build",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-2xl font-bold text-orange-900 mb-2">
            What is Plan Mode?
          </h3>
          <p className="text-lg text-gray-700">
            Plan mode generates a detailed, step-by-step implementation plan
            before any code changes. You review and refine the approach, then
            execute it — separating planning from doing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-3">
              ✅ Great For:
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Complex features requiring thought</li>
              <li>• Architectural decisions</li>
              <li>• Tasks where approach matters</li>
              <li>• Learning by seeing the plan first</li>
              <li>• When you want control over strategy</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-3">
              💡 How It Works:
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• AI analyzes your request</li>
              <li>• Generates detailed step-by-step plan</li>
              <li>• You review and adjust the plan</li>
              <li>• Execute plan with Agent mode</li>
              <li>• Iterate on plan if needed</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-green-400 font-mono text-sm mb-2">
            Example workflow:
          </p>
          <div className="space-y-2 text-gray-300 font-mono text-sm">
            <p>
              1. <span className="text-orange-400">Plan:</span> "How should I
              implement user authentication?"
            </p>
            <p>
              2. <span className="text-gray-400">Review:</span> AI proposes JWT
              tokens, middleware, route guards...
            </p>
            <p>
              3. <span className="text-purple-400">Agent:</span> Execute the
              approved plan
            </p>
          </div>
        </div>

        <div className="bg-orange-100 p-4 rounded-lg">
          <p className="text-sm italic text-orange-900">
            <strong>4D Connection:</strong> Plan mode is pure{" "}
            <strong>Delegation</strong> — you're strategizing the approach
            before any execution, maximizing your control over the AI's
            direction.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Agent Mode",
    subtitle: "Autonomous Multi-Step Task Execution",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-2">
            What is Agent Mode?
          </h3>
          <p className="text-lg text-gray-700">
            The most autonomous mode — Copilot independently plans and executes
            multi-step tasks, creating files, running commands, and iterating
            until the goal is achieved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-3">
              ✅ Great For:
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Building new features end-to-end</li>
              <li>• Scaffolding projects or components</li>
              <li>• Complex multi-file refactoring</li>
              <li>• Implementing from specs or issues</li>
              <li>• Tasks you'd delegate to a junior dev</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-3">
              💡 Key Features:
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Creates and modifies multiple files</li>
              <li>• Runs terminal commands</li>
              <li>• Self-corrects on errors</li>
              <li>• Iterates until task complete</li>
              <li>• Shows reasoning and progress</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-green-400 font-mono text-sm mb-2">
            Example prompts:
          </p>
          <div className="space-y-2 text-gray-300 font-mono text-sm">
            <p>
              "Create a REST API endpoint for user authentication with tests"
            </p>
            <p>"Add dark mode support throughout the application"</p>
            <p>"Set up CI/CD pipeline with GitHub Actions"</p>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm italic text-purple-900">
            <strong>4D Connection:</strong> Agent mode requires strong{" "}
            <strong>Delegation</strong> skills (clear goals) and heightened{" "}
            <strong>Discernment</strong> (reviewing autonomous work).
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Choosing the Right Mode",
    subtitle: "Match the Mode to Your Task",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl w-full mx-auto">
        {/* Visual comparison */}
        <div className="relative w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">
              More Human Control
            </span>
            <span className="text-sm font-semibold text-gray-600">
              More AI Autonomy
            </span>
          </div>
          <div className="h-4 bg-gradient-to-r from-blue-500 via-orange-500 to-purple-500 rounded-full"></div>
          <div className="flex justify-between mt-2">
            <div className="text-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-1"></div>
              <span className="text-xs font-semibold text-blue-700">Ask</span>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-1"></div>
              <span className="text-xs font-semibold text-orange-700">
                Plan
              </span>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-1"></div>
              <span className="text-xs font-semibold text-purple-700">
                Agent
              </span>
            </div>
          </div>
        </div>

        {/* Decision guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 w-full">
          <div className="bg-blue-50 p-2 md:p-3 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-2 text-center text-sm">
              Use Ask When...
            </h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Need to understand code</li>
              <li>• Exploring approaches</li>
              <li>• Learning something new</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-2 md:p-3 rounded-lg border border-orange-200">
            <h4 className="font-bold text-orange-900 mb-2 text-center text-sm">
              Use Plan When...
            </h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Complex implementation</li>
              <li>• Want to review approach</li>
              <li>• Architectural decisions</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-2 md:p-3 rounded-lg border border-purple-200">
            <h4 className="font-bold text-purple-900 mb-2 text-center text-sm">
              Use Agent When...
            </h4>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Multi-file tasks</li>
              <li>• Building something new</li>
              <li>• Clear, defined goals</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg w-full">
          <p className="text-sm italic text-gray-700">
            <strong>Pro Tip:</strong> Start with{" "}
            <span className="text-blue-600 font-semibold">Ask</span> to explore
            → <span className="text-orange-600 font-semibold">Plan</span> for
            strategy →{" "}
            <span className="text-purple-600 font-semibold">Agent</span> to
            execute. Switch modes anytime!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Agent Approval Levels",
    subtitle: "How Much Should Your Agent Do On Its Own?",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">
            VS Code 1.111 adds a <strong>permissions picker</strong> in Copilot
            Chat to control agent autonomy. Three levels, each trading oversight
            for speed — accessible from the bottom of the Chat prompt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="flex flex-col bg-white p-4 rounded-lg shadow border-2 border-gray-300">
            <div className="text-2xl mb-2 text-center">🛡️</div>
            <h4 className="font-bold text-gray-900 mb-1 text-center text-sm">
              Default Approvals
            </h4>
            <p className="text-xs text-gray-500 text-center mb-3">
              Manual supervision
            </p>
            <ul className="space-y-1 text-xs text-gray-700 flex-1">
              <li className="flex">
                <span className="mr-1">•</span>
                <span>Shows confirmation dialogs before every tool call</span>
              </li>
              <li className="flex">
                <span className="mr-1">•</span>
                <span>Stops for user input on decisions</span>
              </li>
              <li className="flex">
                <span className="mr-1">•</span>
                <span>Expect 9–13 manual stops per complex task</span>
              </li>
            </ul>
            <div className="mt-3 pt-2 border-t border-gray-200 text-xs text-center text-gray-500">
              Maximum oversight
            </div>
          </div>

          <div className="flex flex-col bg-white p-4 rounded-lg shadow border-2 border-yellow-400">
            <div className="text-2xl mb-2 text-center">⚡</div>
            <h4 className="font-bold text-gray-900 mb-1 text-center text-sm">
              Bypass Approvals
            </h4>
            <p className="text-xs text-gray-500 text-center mb-3">
              Semi-autonomous
            </p>
            <ul className="space-y-1 text-xs text-gray-700 flex-1">
              <li className="flex">
                <span className="mr-1">•</span>
                <span>Auto-approves tool calls and retries on errors</span>
              </li>
              <li className="flex">
                <span className="mr-1">•</span>
                <span>Still stops when it hits an ambiguous decision</span>
              </li>
              <li className="flex">
                <span className="mr-1">•</span>
                <span>A "mute button" for security dialogs</span>
              </li>
            </ul>
            <div className="mt-3 pt-2 border-t border-yellow-200 text-xs text-center text-yellow-700">
              No dialogs, but pauses on decisions
            </div>
          </div>

          <div className="flex flex-col bg-white p-4 rounded-lg shadow border-2 border-purple-400">
            <div className="text-2xl mb-2 text-center">🤖</div>
            <h4 className="font-bold text-gray-900 mb-1 text-center text-sm">
              Autopilot <span className="text-purple-500">(Preview)</span>
            </h4>
            <p className="text-xs text-gray-500 text-center mb-3">
              Fully autonomous
            </p>
            <ul className="space-y-1 text-xs text-gray-700 flex-1">
              <li className="flex">
                <span className="mr-1">•</span>
                <span>Auto-approves all tools and retries on errors</span>
              </li>
              <li className="flex">
                <span className="mr-1">•</span>
                <span>Auto-responds to blocking questions</span>
              </li>
              <li className="flex">
                <span className="mr-1">•</span>
                <span>Iterates until the task is complete</span>
              </li>
            </ul>
            <div className="mt-3 pt-2 border-t border-purple-200 text-xs text-center text-purple-700">
              Enable:{" "}
              <code className="bg-purple-50 px-1 rounded">
                chat.autopilot.enabled
              </code>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm italic text-gray-700 text-center">
            Default = you supervise every step &nbsp;·&nbsp; Bypass = no
            dialogs, still pauses on decisions &nbsp;·&nbsp; Autopilot = it
            drives until done
          </p>
        </div>
      </div>
    )
  },
    {
    title: "Agent Handoff",
    subtitle: "Pass tasks between agent types to play to their strengths",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500 max-w-3xl w-full">
          <p className="text-lg text-gray-700">
            Hand off an existing task from one agent to another — VS Code
            carries over the full conversation history and context. The original
            session is archived after handoff.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-3xl w-full">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg text-center min-w-[160px]">
            <div className="text-3xl mb-2">💬</div>
            <div className="font-bold">Local Agent</div>
            <div className="text-sm text-blue-100 mt-1">Create a plan</div>
            <div className="text-xs text-blue-200 mt-2 border-t border-blue-400 pt-2">Interactive, uses your workspace</div>
          </div>

          <div className="text-2xl text-purple-400 font-bold select-none">
            →
          </div>

          <div className="bg-purple-500 text-white p-4 rounded-lg shadow-lg text-center min-w-[160px]">
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-bold">Copilot CLI</div>
            <div className="text-sm text-purple-100 mt-1">Proof of concept</div>
            <div className="text-xs text-purple-200 mt-2 border-t border-purple-400 pt-2">Runs in an isolated git worktree</div>
          </div>

          <div className="text-2xl text-purple-400 font-bold select-none">
            →
          </div>

          <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg text-center min-w-[160px]">
            <div className="text-3xl mb-2">☁️</div>
            <div className="font-bold">Cloud Agent</div>
            <div className="text-sm text-green-100 mt-1">Submit a PR</div>
            <div className="text-xs text-green-200 mt-2 border-t border-green-400 pt-2">Runs remotely, opens a Pull Request</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full">
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-bold text-purple-900 mb-2">
              Local → CLI or Cloud
            </h4>
            <p className="text-gray-700 text-sm">
              Select a different agent type from the session type dropdown in
              the chat input box
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-bold text-purple-900 mb-2">CLI → Cloud</h4>
            <p className="text-gray-700 text-sm">
              Use the{" "}
              <code className="bg-gray-100 px-1 rounded text-xs">
                /delegate
              </code>{" "}
              command in the chat input — add extra instructions after the
              command
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Context-Isolated Subagents",
    subtitle: "Delegate Tasks to Autonomous Agents Within Your Chat",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            What are Subagents?
          </h3>
          <p className="text-gray-700">
            Subagents let you delegate tasks to an isolated, autonomous agent
            within your chat session. They have their own context window and
            return only the final result — keeping your main conversation
            focused.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">
              Key Characteristics:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Operate independently with own context window</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Run autonomously without pausing for feedback</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Return only final result to main session</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Use same tools & model as main session</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Great For:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Research tasks that need deep exploration</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Complex multi-step analysis</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Keeping main context window clean</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Parallel conceptual work streams</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-green-400 font-mono text-sm mb-2">
            Example prompts:
          </p>
          <div className="space-y-2 text-gray-300 font-mono text-sm">
            <p>
              "Use a subagent to research the best auth methods. Summarize
              findings."
            </p>
            <p>
              "Run #runSubagent to research comprehensively, stop at 80%
              confidence."
            </p>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>How to Use:</strong> Enable the{" "}
            <code className="bg-blue-200 px-1 rounded">runSubagent</code> tool
            in the tool picker, then ask the AI to use a subagent for your task.{" "}
            <a
              href="https://code.visualstudio.com/docs/copilot/chat/chat-sessions#_contextisolated-subagents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Learn more
            </a>
            .
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Workspace Indexing & Implicit Context",
    subtitle: "How Copilot Understands Your Project Automatically",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-gray-700">
            VS Code works behind the scenes to give Copilot context about your
            project — indexing your codebase for search and automatically
            including relevant information based on your current activity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Workspace Indexing */}
          <div className="bg-white p-4 rounded-lg shadow border border-cyan-200">
            <h4 className="font-semibold text-cyan-900 mb-3">
              🗂️ Workspace Indexing
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              VS Code indexes your codebase for quick, accurate code search:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  <strong>Remote:</strong> GitHub-hosted repos with fast search
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  <strong>Local:</strong> Semantic index on your machine
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  <strong>Basic:</strong> Minimal indexing mode that uses simple
                  file/path heuristics for very large repos
                </span>
              </li>
            </ul>
          </div>

          {/* Implicit Context */}
          <div className="bg-white p-4 rounded-lg shadow border border-cyan-200">
            <h4 className="font-semibold text-cyan-900 mb-3">
              🔍 Implicit Context
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Automatically included in every chat:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Currently selected text in editor</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Active file/notebook name</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  <strong>Ask:</strong> Active file auto-included
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  <strong>Agent:</strong> Decides autonomously
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-cyan-100 p-4 rounded-lg">
          <p className="text-sm italic text-cyan-900">
            <strong>Key Insight:</strong> You don't always need to manually add
            context — Copilot already sees your current selection, active file,
            and can search your indexed codebase automatically.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Explicit Context",
    subtitle: "Help AI Understand Your Code Better",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-cyan-50 p-5 rounded-lg border-l-4 border-cyan-500">
          <p className="text-gray-700">
            Better context = better responses. VS Code provides multiple ways to
            give Copilot the information it needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* #-mentions */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <span className="bg-cyan-500 text-white px-2 py-0.5 rounded text-sm font-mono mr-2">
                #
              </span>
              Mentions
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                  #file
                </code>
                <span className="text-gray-600">Reference specific files</span>
              </div>
              <div className="flex items-start space-x-2">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                  #folder
                </code>
                <span className="text-gray-600">Include entire folders</span>
              </div>
              <div className="flex items-start space-x-2">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                  #symbol
                </code>
                <span className="text-gray-600">
                  Functions, classes, variables
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                  #codebase
                </code>
                <span className="text-gray-600">
                  Search your entire project
                </span>
              </div>
            </div>
          </div>

          {/* Web & External */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <span className="bg-purple-500 text-white px-2 py-0.5 rounded text-sm mr-2">
                🌐
              </span>
              Web & External
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                  #fetch URL
                </code>
                <span className="text-gray-600">Fetch web page content</span>
              </div>
              <div className="flex items-start space-x-2">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                  #githubRepo
                </code>
                <span className="text-gray-600">Search GitHub repos</span>
              </div>
              <div className="flex items-start space-x-2">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                  #terminalSelection
                </code>
                <span className="text-gray-600">Terminal output</span>
              </div>
              <div className="flex items-start space-x-2">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                  #changes
                </code>
                <span className="text-gray-600">Git changes / diffs</span>
              </div>
            </div>
          </div>

          {/* @-mentions */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <span className="bg-green-500 text-white px-2 py-0.5 rounded text-sm font-mono mr-2">
                @
              </span>
              Participants
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                  @workspace
                </code>
                <span className="text-gray-600">Workspace-aware answers</span>
              </div>
              <div className="flex items-start space-x-2">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                  @vscode
                </code>
                <span className="text-gray-600">
                  VS Code settings & features
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                  @terminal
                </code>
                <span className="text-gray-600">Terminal commands</span>
              </div>
            </div>
          </div>

          {/* Other methods */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-sm mr-2">
                📎
              </span>
              Other Methods
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                • <strong>Drag & drop</strong> files onto chat
              </p>
              <p>
                • <strong>Images</strong> for vision queries
              </p>
              <p>
                • <strong>Selected text</strong> auto-included
              </p>
              <p>
                • <strong>Active file</strong> in Ask mode
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-3 rounded-lg">
          <p className="text-green-400 font-mono text-sm mb-1">
            Example prompts:
          </p>
          <div className="text-gray-300 font-mono text-xs space-y-1">
            <p>"Explain how auth works #codebase"</p>
            <p>"Update this to match #fetch https://api-docs.example.com"</p>
            <p>"@terminal what's causing this error?"</p>
          </div>
        </div>
      </div>
    )
  }
];
