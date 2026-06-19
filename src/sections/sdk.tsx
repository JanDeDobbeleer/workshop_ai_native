import { Code } from 'lucide-react';
import { SlideType } from './types';
import { CodeBlock } from '../components/CodeBlock';
import { ToolMatrix, STANDARD_TOOL_COLUMNS } from '../components/ToolMatrix';
import { agentSdksMatrixRows } from '../components/toolMatrixRows';

export const sdkSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Code className="w-20 h-20 text-indigo-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 text-center">
          Agent SDKs
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Programmatic agent runtimes for your applications
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
    title: "Agent SDKs by Tool",
    subtitle: "Programmatic runtimes — maturity varies",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-gray-700">
            SDKs embed the same agent loop (plan → tools → iterate) in your app. Copilot SDK is the most integrated with GitHub; others use their vendor APIs.
          </p>
        </div>
        <ToolMatrix columns={STANDARD_TOOL_COLUMNS} rows={agentSdksMatrixRows} />
      </div>
    )
  },
  {
    title: "GitHub Copilot SDK",
    subtitle: "Primary SDK deep dive (Copilot callout)",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-3">What is it</h3>
          <p className="text-lg text-gray-700 mb-4">
            Multi-platform SDK for integrating GitHub Copilot Agent into apps and services
          </p>
          <p className="text-gray-700">
            <strong>Agents for every app.</strong> Embed Copilot's agentic workflows in your application—now available in <span className="font-semibold">Technical Preview</span> as a programmable SDK for Python, TypeScript, Go, and .NET.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-3">🎯 Core Value</h4>
            <p className="text-gray-700">
              Uses the same <strong>production-tested agent runtime</strong> behind Copilot CLI
            </p>
            <p className="text-sm text-gray-600 mt-2">
              No need to build your own orchestration
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-3">⚡ What It Handles</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Planning</li>
              <li>• Tool invocation</li>
              <li>• File edits</li>
              <li>• And more...</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-900">
            <strong>⚠️ Technical Preview:</strong> Currently in Technical Preview. While functional for development and testing, it may not yet be suitable for production use.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Available SDKs & Architecture",
    subtitle: "Multi-language support with unified JSON-RPC communication",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Supported Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded border border-gray-200">
              <div className="font-mono text-sm text-indigo-600 mb-1">Node.js / TypeScript</div>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded block">npm install @github/copilot-sdk</code>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <div className="font-mono text-sm text-indigo-600 mb-1">Python</div>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded block">pip install github-copilot-sdk</code>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <div className="font-mono text-sm text-indigo-600 mb-1">Go</div>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded block">go get github.com/github/copilot-sdk/go</code>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <div className="font-mono text-sm text-indigo-600 mb-1">.NET</div>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded block">dotnet add package GitHub.Copilot.SDK</code>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">Architecture</h3>
          <p className="text-gray-700 mb-3">All SDKs communicate with Copilot CLI server via <strong>JSON-RPC</strong></p>

          <div className="bg-white p-4 rounded-lg border border-indigo-200 font-mono text-sm">
            <div className="text-center space-y-2">
              <div className="bg-indigo-100 px-4 py-2 rounded">Your Application</div>
              <div className="text-indigo-600">↓</div>
              <div className="bg-indigo-200 px-4 py-2 rounded">SDK Client</div>
              <div className="text-indigo-600">↓ JSON-RPC</div>
              <div className="bg-indigo-300 px-4 py-2 rounded">Copilot CLI (server mode)</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>💡 Lifecycle Management:</strong> The SDK manages the CLI process lifecycle automatically. You can also connect to an external CLI server.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Basic Usage Example",
    subtitle: "About 5 lines of code to get started",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-900 mb-2">Simplest Implementation</h3>
          <p className="text-gray-700">
            Get started with just <strong>~5 lines of code</strong>
          </p>
        </div>

        <CodeBlock
          code={`import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({
  model: "gpt-4.1"
});

const response = await session.sendAndWait({
  prompt: "What is 2 + 2?"
});

console.log(response?.data.content);`}
          className="bg-gray-900 p-6 rounded-lg text-white"
        >
          <h4 className="text-sm text-gray-400 mb-3">TypeScript Example</h4>
          <pre className="text-sm leading-relaxed">
            <code className="text-green-400">{`import`}</code>{` { CopilotClient } `}<code className="text-green-400">{`from`}</code>{` `}<code className="text-yellow-400">{`"@github/copilot-sdk"`}</code>{`;

`}<code className="text-purple-400">{`const`}</code>{` client = `}<code className="text-purple-400">{`new`}</code>{` `}<code className="text-blue-400">{`CopilotClient`}</code>{`();
`}<code className="text-purple-400">{`const`}</code>{` session = `}<code className="text-purple-400">{`await`}</code>{` client.`}<code className="text-blue-400">{`createSession`}</code>{`({
  model: `}<code className="text-yellow-400">{`"gpt-4.1"`}</code>{`
});

`}<code className="text-purple-400">{`const`}</code>{` response = `}<code className="text-purple-400">{`await`}</code>{` session.`}<code className="text-blue-400">{`sendAndWait`}</code>{`({
  prompt: `}<code className="text-yellow-400">{`"What is 2 + 2?"`}</code>{`
});

console.`}<code className="text-blue-400">{`log`}</code>{`(response?.data.content);`}
          </pre>
        </CodeBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border-t-4 border-indigo-500 text-center">
            <div className="text-3xl mb-2">1️⃣</div>
            <h4 className="font-bold text-gray-900 mb-1">Create Client</h4>
            <p className="text-sm text-gray-600">Initialize the SDK client</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-t-4 border-indigo-500 text-center">
            <div className="text-3xl mb-2">2️⃣</div>
            <h4 className="font-bold text-gray-900 mb-1">Create Session</h4>
            <p className="text-sm text-gray-600">Start a conversation</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-t-4 border-indigo-500 text-center">
            <div className="text-3xl mb-2">3️⃣</div>
            <h4 className="font-bold text-gray-900 mb-1">Send Prompt</h4>
            <p className="text-sm text-gray-600">Get AI response</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Custom Tools",
    subtitle: "Give Copilot the ability to call your code",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-900 mb-3">What Are Custom Tools?</h3>
          <p className="text-lg text-gray-700">
            Define functions that Copilot can automatically call based on user questions
          </p>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">Tool Definition Components</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white p-4 rounded border-l-4 border-blue-400">
              <div className="font-bold text-blue-900 mb-1">Description</div>
              <p className="text-sm text-gray-600">What the tool does</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-green-400">
              <div className="font-bold text-green-900 mb-1">Parameters</div>
              <p className="text-sm text-gray-600">Schema for inputs</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-purple-400">
              <div className="font-bold text-purple-900 mb-1">Handler</div>
              <p className="text-sm text-gray-600">Your code to run</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">How It Works</h4>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
              <div>
                <p className="text-gray-700">Copilot <strong>decides</strong> when to call your tool based on the user's question</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
              <div>
                <p className="text-gray-700">Copilot sends a <strong>tool call request</strong> with the parameters</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
              <div>
                <p className="text-gray-700">The SDK <strong>runs your handler</strong> function</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
              <div>
                <p className="text-gray-700">The result is sent back to Copilot, which <strong>incorporates it</strong> into the response</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>💡 Example Use Case:</strong> Weather lookup tool that returns city temperature and conditions when Copilot detects weather-related questions
          </p>
        </div>
      </div>
    )
  },
  {
    title: "MCP Server Integration",
    subtitle: "Connect to external tools and data sources",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
          <h3 className="text-2xl font-bold text-teal-900 mb-3">Model Context Protocol (MCP)</h3>
          <p className="text-lg text-gray-700">
            <strong>Open standard</strong> for connecting AI assistants to external tools and data sources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">🔌 Capabilities</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Execute code or scripts</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Query databases</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Access file systems</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Call external APIs</span></li>
              <li className="flex"><span className="mr-2">•</span><span>And much more</span></li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">📦 Two Server Types</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded">
                <div className="font-bold text-blue-900 mb-1">Local/Stdio</div>
                <p className="text-sm text-gray-700">Runs as subprocess, communicates via stdin/stdout</p>
                <p className="text-xs text-gray-600 mt-1">→ Local tools, file access, custom scripts</p>
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <div className="font-bold text-purple-900 mb-1">HTTP/SSE</div>
                <p className="text-sm text-gray-700">Remote server accessed via HTTP</p>
                <p className="text-xs text-gray-600 mt-1">→ Shared services, cloud-hosted tools</p>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          code={`const session = await client.createSession({
  mcpServers: {
    "my-server": {
      type: "local",
      command: "node",
      args: ["./mcp-server.js"],
      tools: ["*"]
    }
  }
});`}
          className="bg-gray-900 p-5 rounded-lg text-white"
        >
          <h4 className="text-sm text-gray-400 mb-3">Configuration Example</h4>
          <pre className="text-xs leading-relaxed overflow-x-auto">
            <code className="text-purple-400">{`const`}</code>{` session = `}<code className="text-purple-400">{`await`}</code>{` client.`}<code className="text-blue-400">{`createSession`}</code>{`({
  mcpServers: {
    `}<code className="text-yellow-400">{`"my-server"`}</code>{`: {
      type: `}<code className="text-yellow-400">{`"local"`}</code>{`,
      command: `}<code className="text-yellow-400">{`"node"`}</code>{`,
      args: [`}<code className="text-yellow-400">{`"./mcp-server.js"`}</code>{`],
      tools: [`}<code className="text-yellow-400">{`"*"`}</code>{`]
    }
  }
});`}
          </pre>
        </CodeBlock>
      </div>
    )
  }
];
