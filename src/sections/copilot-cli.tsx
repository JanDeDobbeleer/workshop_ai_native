import { Terminal } from 'lucide-react';
import { SlideType } from './types';
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
          Coding agents that work where your repository and shell do
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
    title: "What Is a Terminal Agent?",
    subtitle: "An agentic coding loop launched from the shell",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-500">
          <p className="text-lg text-gray-700">
            A terminal agent is launched from the shell and can inspect the current repository, edit files, run commands and checks, and maintain a multi-turn session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Familiar agent loop</h3>
            <p className="text-gray-700">
              Like an IDE agent, it gathers context, proposes or makes changes, checks the result, and responds to feedback.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">A natural shell fit</h3>
            <p className="text-gray-700">
              Terminal use works well in remote or headless environments and composes with existing shell workflows.
            </p>
          </div>
        </div>

        <ToolMatrix
          columns={STANDARD_TOOL_COLUMNS.filter((c) => c.id !== 'cursor' && c.id !== 'devin')}
          rows={terminalAgentsMatrixRows}
        />
      </div>
    )
  },
  {
    title: "How to Use One",
    subtitle: "A portable loop for terminal coding agents",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <ol className="bg-white p-5 rounded-lg shadow border border-gray-200 space-y-2 text-gray-700">
          <li className="flex"><span className="font-semibold text-gray-900 mr-3">1.</span><span>Open the target repository.</span></li>
          <li className="flex"><span className="font-semibold text-gray-900 mr-3">2.</span><span>Launch the terminal agent you want to use.</span></li>
          <li className="flex"><span className="font-semibold text-gray-900 mr-3">3.</span><span>State a bounded outcome with relevant context and constraints.</span></li>
          <li className="flex"><span className="font-semibold text-gray-900 mr-3">4.</span><span>Review requested actions, then let the agent edit files and run checks.</span></li>
          <li className="flex"><span className="font-semibold text-gray-900 mr-3">5.</span><span>Inspect the diff and results, then iterate until the outcome is complete.</span></li>
        </ol>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Interactive</h3>
            <p className="text-gray-700">Use a multi-turn session when the task benefits from review, clarification, and iteration.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">One-shot or scripted</h3>
            <p className="text-gray-700">Use a single bounded request for repeatable, non-interactive shell workflows.</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-500">
          <p className="text-gray-800">
            <strong>Start safely:</strong> Begin with per-action approval and restricted permissions, inspect changes, and grant broader autonomy only in isolated environments or trusted automation.
          </p>
        </div>
      </div>
    )
  },
];
