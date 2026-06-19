import { Plug } from 'lucide-react';
import { SlideType } from './types';
import { ToolMatrix, STANDARD_TOOL_COLUMNS } from '../components/ToolMatrix';
import { mcpMatrixRows } from '../components/toolMatrixRows';

export const mcpSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Plug className="w-20 h-20 text-teal-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-teal-900 text-center">
          Model Context Protocol
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          The universal standard for connecting AI to external systems
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
          <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "MCP Config by Tool",
    subtitle: "Where to register MCP servers",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-gray-700">
            MCP is tool-agnostic — but each assistant has its own config file path. Project-level configs commit with your repo.
          </p>
        </div>
        <ToolMatrix
          columns={STANDARD_TOOL_COLUMNS}
          rows={mcpMatrixRows}
          footnote={
            <>
              Copilot MCP outside VS Code is IDE-specific — see{' '}
              <a href="https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                GitHub MCP docs
              </a>
              .
            </>
          }
        />
      </div>
    )
  },
  {
    title: "What is MCP?",
    subtitle: "An open standard for AI-to-system connectivity",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-teal-50 p-5 rounded-lg border-l-4 border-teal-500">
          <p className="text-gray-700 text-lg">
            <strong>Model Context Protocol (MCP)</strong> is an open-source standard for connecting AI applications to external systems — data sources, tools, and workflows.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-6xl mb-2">🔌</div>
              <p className="text-sm text-gray-600 font-medium">USB-C Port</p>
            </div>
            <div className="text-3xl text-teal-500">=</div>
            <div className="text-center">
              <div className="text-6xl mb-2">🤖</div>
              <p className="text-sm text-gray-600 font-medium">MCP for AI</p>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-4">
            Just as USB-C provides a standardized way to connect devices, <br />
            MCP provides a standardized way to connect AI applications to external systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-teal-200">
            <h4 className="font-semibold text-teal-900 mb-2">📅 Origin</h4>
            <p className="text-gray-700 text-sm">Introduced November 2024 by <strong>Anthropic</strong> as an open-source protocol</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-teal-200">
            <h4 className="font-semibold text-teal-900 mb-2">🎯 Purpose</h4>
            <p className="text-gray-700 text-sm">Enable LLM applications to integrate with external data sources and tools</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Why MCP Matters",
    subtitle: "Solving the integration complexity problem",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4 text-center">The M×N Problem → M+N Solution</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-red-700 font-bold text-2xl mb-1">M × N</p>
                <p className="text-sm text-red-600">Custom connectors</p>
                <p className="text-xs text-gray-500 mt-2">Each model needs custom<br />integration with each tool</p>
              </div>
            </div>
            <div className="text-3xl text-gray-400">→</div>
            <div className="text-center">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-green-700 font-bold text-2xl mb-1">M + N</p>
                <p className="text-sm text-green-600">Standard protocol</p>
                <p className="text-xs text-gray-500 mt-2">Models and tools both<br />conform to MCP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2 text-center">👩‍💻 For Developers</h4>
            <p className="text-gray-700 text-sm text-center">Reduces development time and complexity when building AI applications</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2 text-center">🤖 For AI Apps</h4>
            <p className="text-gray-700 text-sm text-center">Access to ecosystem of data sources, tools, and apps</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2 text-center">👤 For End Users</h4>
            <p className="text-gray-700 text-sm text-center">More capable AI that can access your data and take actions</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "MCP Architecture",
    subtitle: "The three core components",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Host */}
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300 text-center min-w-[140px]">
              <div className="text-3xl mb-2">🖥️</div>
              <p className="font-bold text-blue-900">MCP Host</p>
              <p className="text-xs text-gray-600 mt-1">Claude, IDE plugins,<br />AI interfaces</p>
            </div>

            <div className="text-2xl text-gray-400 rotate-90 md:rotate-0">↔</div>

            {/* Client */}
            <div className="bg-teal-50 p-4 rounded-lg border-2 border-teal-300 text-center min-w-[140px]">
              <div className="text-3xl mb-2">🔗</div>
              <p className="font-bold text-teal-900">MCP Client</p>
              <p className="text-xs text-gray-600 mt-1">Manages secure<br />connections</p>
            </div>

            <div className="text-2xl text-gray-400 rotate-90 md:rotate-0">↔</div>

            {/* Server */}
            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300 text-center min-w-[140px]">
              <div className="text-3xl mb-2">⚙️</div>
              <p className="font-bold text-purple-900">MCP Server</p>
              <p className="text-xs text-gray-600 mt-1">Tools, data access,<br />prompts</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">🖥️ MCP Host</h4>
            <p className="text-gray-700 text-sm">User-facing AI interface (Claude app, IDE plugin) that connects to multiple MCP servers</p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
            <h4 className="font-semibold text-teal-900 mb-2">🔗 MCP Client</h4>
            <p className="text-gray-700 text-sm">Intermediary managing secure connections. One client per server for isolation. Lives in the host.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">⚙️ MCP Server</h4>
            <p className="text-gray-700 text-sm">External program providing capabilities — connects to Google Drive, Slack, GitHub, databases, etc.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "What Can MCP Connect To?",
    subtitle: "Resources, tools, and prompts",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border-2 border-blue-300">
            <div className="text-center mb-3">
              <span className="text-4xl">📁</span>
            </div>
            <h4 className="font-bold text-blue-900 text-center mb-2">Resources</h4>
            <p className="text-gray-700 text-sm text-center mb-3">Data and content that can be read by clients</p>
            <div className="bg-blue-50 p-2 rounded">
              <p className="text-xs text-blue-700 text-center font-medium">Application-controlled</p>
            </div>
            <ul className="mt-3 space-y-1 text-xs text-gray-600">
              <li>• Files & documents</li>
              <li>• Database records</li>
              <li>• API responses</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border-2 border-teal-300">
            <div className="text-center mb-3">
              <span className="text-4xl">🔧</span>
            </div>
            <h4 className="font-bold text-teal-900 text-center mb-2">Tools</h4>
            <p className="text-gray-700 text-sm text-center mb-3">Executable functions the LLM can invoke</p>
            <div className="bg-teal-50 p-2 rounded">
              <p className="text-xs text-teal-700 text-center font-medium">Model-controlled</p>
            </div>
            <ul className="mt-3 space-y-1 text-xs text-gray-600">
              <li>• Search engines</li>
              <li>• Calculators</li>
              <li>• External actions</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border-2 border-purple-300">
            <div className="text-center mb-3">
              <span className="text-4xl">📝</span>
            </div>
            <h4 className="font-bold text-purple-900 text-center mb-2">Prompts</h4>
            <p className="text-gray-700 text-sm text-center mb-3">Predefined templates for standardized interactions</p>
            <div className="bg-purple-50 p-2 rounded">
              <p className="text-xs text-purple-700 text-center font-medium">User-controlled</p>
            </div>
            <ul className="mt-3 space-y-1 text-xs text-gray-600">
              <li>• Workflow templates</li>
              <li>• Domain prompts</li>
              <li>• Reusable patterns</li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
          <p className="text-gray-700 text-sm">
            <strong>Examples:</strong> Google Calendar, Notion, Figma designs, Blender 3D, GitHub repositories, Slack, databases, web browsers
          </p>
        </div>
      </div>
    )
  },
  {
    title: "MCP Real-World Examples",
    subtitle: "What developers are building with MCP",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🎨</span>
              <h4 className="font-bold text-gray-900">Blender-MCP</h4>
            </div>
            <p className="text-gray-700 text-sm">Claude directly interacts with and controls Blender for prompt-assisted 3D modeling, scene creation, and manipulation.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🏢</span>
              <h4 className="font-bold text-gray-900">Enterprise Chatbots</h4>
            </div>
            <p className="text-gray-700 text-sm">Connect to multiple databases across an organization, empowering users to analyze data using natural language.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">📅</span>
              <h4 className="font-bold text-gray-900">Personal AI Assistants</h4>
            </div>
            <p className="text-gray-700 text-sm">Agents that access Google Calendar and Notion, acting as a more personalized AI assistant.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🎨</span>
              <h4 className="font-bold text-gray-900">Figma → Web Apps</h4>
            </div>
            <p className="text-gray-700 text-sm">Claude Code can generate an entire web application using a Figma design as input.</p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">📚 Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-teal-500">→</span>
              <span className="text-gray-700"><strong>Official Docs:</strong> <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">modelcontextprotocol.io</a></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">→</span>
              <span className="text-gray-700"><strong>MCP Registry:</strong> <a href="https://registry.modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">registry.modelcontextprotocol.io</a></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">→</span>
              <span className="text-gray-700"><strong>Learning:</strong> <a href="https://github.com/microsoft/mcp-for-beginners" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">MCP for Beginners</a> (Microsoft)</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "MCP Apps",
    subtitle: "Interactive UI components in MCP conversations",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-teal-50 p-5 rounded-lg border-l-4 border-teal-500">
          <p className="text-gray-700 text-lg">
            <strong>MCP Apps</strong> extend the Model Context Protocol to allow MCP Servers to display interactive UI elements in conversational MCP clients/chatbots.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4 text-center">Why MCP Apps?</h4>
          <p className="text-gray-700 text-center mb-4">
            MCP tools return text and structured data, but for interactive UI like charts, forms, or video players, MCP Apps provide a standardized way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-sm text-gray-600">Charts & Visualizations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📝</div>
              <p className="text-sm text-gray-600">Forms & Inputs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎥</div>
              <p className="text-sm text-gray-600">Video Players</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">📚 Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-teal-500">→</span>
              <span className="text-gray-700"><strong>MCP Apps API:</strong> <a href="https://modelcontextprotocol.github.io/ext-apps/api/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">modelcontextprotocol.github.io/ext-apps/api/</a></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">→</span>
              <span className="text-gray-700"><strong>VS Code MCP Apps:</strong> <a href="https://code.visualstudio.com/blogs/2026/01/26/mcp-apps-support" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">code.visualstudio.com/blogs/2026/01/26/mcp-apps-support</a></span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "MCP Apps in Action",
    subtitle: "VS Code support and real-world examples",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4 text-center">How It Works</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="text-center">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-blue-900">1. Tool Declaration</p>
                <p className="text-xs text-gray-600">ui:// resource with HTML</p>
              </div>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="text-center">
              <div className="bg-teal-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-teal-900">2. Tool Call</p>
                <p className="text-xs text-gray-600">LLM calls the tool</p>
              </div>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="text-center">
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-purple-900">3. Host Renders</p>
                <p className="text-xs text-gray-600">Sandboxed iframe</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-teal-200">
            <h4 className="font-semibold text-teal-900 mb-2">📋 Interactive List Reordering</h4>
            <p className="text-gray-700 text-sm">Drag-and-drop interface for sorting items visually.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-teal-200">
            <h4 className="font-semibold text-teal-900 mb-2">🔥 Performance Profiler</h4>
            <p className="text-gray-700 text-sm">Interactive flame graph for exploring call stacks.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-teal-200">
            <h4 className="font-semibold text-teal-900 mb-2">🚩 Feature Flag Selector</h4>
            <p className="text-gray-700 text-sm">Searchable picker with environment status.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-teal-200">
            <h4 className="font-semibold text-teal-900 mb-2">🎨 Storybook Integration</h4>
            <p className="text-gray-700 text-sm">Preview Storybook stories directly in VS Code.</p>
          </div>
        </div>
      </div>
    )
  }
];
