import { Brain } from 'lucide-react';
import { SlideType } from './types';
import { ToolMatrix, STANDARD_TOOL_COLUMNS } from '../components/ToolMatrix';
import { contextMatrixRows } from '../components/toolMatrixRows';

export const contextSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Brain className="w-20 h-20 text-indigo-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 text-center">
          Context
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          What the model sees — implicit, explicit, and attached
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
    title: "What is Context Engineering?",
    subtitle: "The discipline of managing what the AI needs to know",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-xl font-bold text-indigo-900 mb-2">The Discipline</h3>
          <p className="text-gray-700 italic text-lg">
            "Context engineering is the delicate art and science of filling the context window with just the right information for the next step."
          </p>
          <p className="text-sm text-indigo-700 mt-2">— <a href="https://twitter.com/karpathy/status/1937902205765607626" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Andrej Karpathy</a> (June 2025)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">Beyond "Prompt Engineering"</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Prompt engineering focused narrowly on wording</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Context engineering is broader: <strong>everything the model sees</strong></span></li>
              <li className="flex"><span className="mr-2">•</span><span>Instructions, history, tools, retrieved docs, images</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">Why It Matters</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Model quality is fixed — context quality is in your control</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Garbage in → garbage out (at any model size)</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Right context = dramatically better results</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-100 p-4 rounded-lg">
          <p className="text-sm italic text-indigo-900">
            <strong>Key Insight:</strong> You can't change the model's weights, but you can engineer exactly what it sees. That's where your leverage is.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Context by Tool",
    subtitle: "Attach files and indexing — cross-tool paths",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-gray-700">
            Every tool combines <strong>implicit context</strong> (open files, index) with <strong>explicit attachments</strong> you add per prompt.
          </p>
        </div>
        <ToolMatrix columns={STANDARD_TOOL_COLUMNS} rows={contextMatrixRows} />
      </div>
    )
  },
  {
    title: "Explicit Context",
    subtitle: "Attach what the model needs — tool-specific syntax",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-gray-700">
            Better context = better responses. Use your tool&apos;s attach syntax — don&apos;t paste entire files when a mention works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">Copilot (VS Code)</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><code className="bg-gray-100 px-1 rounded">#file</code>, <code className="bg-gray-100 px-1 rounded">#folder</code>, <code className="bg-gray-100 px-1 rounded">#codebase</code></li>
              <li><code className="bg-gray-100 px-1 rounded">@workspace</code>, <code className="bg-gray-100 px-1 rounded">@terminal</code></li>
              <li>Drag-and-drop files; selection auto-included</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">Cursor / Claude / others</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><code className="bg-gray-100 px-1 rounded">@file</code>, <code className="bg-gray-100 px-1 rounded">@folder</code> (Cursor)</li>
              <li><code className="bg-gray-100 px-1 rounded">/add-dir</code> (Claude Code)</li>
              <li>Images, terminal output, git diffs where supported</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-cyan-200">
          <h4 className="font-semibold text-cyan-900 mb-2">Implicit context (all tools)</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Workspace indexing — semantic search over your codebase</li>
            <li>• Active file and editor selection included automatically</li>
            <li>• Agent mode may fetch additional files autonomously</li>
          </ul>
        </div>

        <div className="bg-indigo-100 p-3 rounded-lg">
          <p className="text-sm italic text-indigo-900">
            <strong>Key Insight:</strong> You don&apos;t always need to manually attach — but when you do, use the right symbol for your tool.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Context Window",
    subtitle: "Understanding the model's working memory",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl w-full mx-auto items-center md:justify-center md:h-full">
        <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500 w-full">
          <p className="text-gray-700 italic">The maximum amount of text (measured in tokens) an LLM can process at once - includes both your input and the model's response</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">📏 Practical Limit</h4>
            <p className="text-gray-700 text-sm">Determines how much conversation history, documents, or code the model can "see" and work with simultaneously</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">📊 Size Varies</h4>
            <p className="text-gray-700 text-sm">Ranges from a few thousand tokens (early models) to millions of tokens (modern models like Claude 4.5 or GPT-5.2)</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">↔️ Input vs. Output</h4>
            <p className="text-gray-700 text-sm">Input windows are far larger than output limits — models can read a 500-page book but won't recite it back</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">🚫 Beyond the Window</h4>
            <p className="text-gray-700 text-sm">Information outside the context window is effectively "forgotten" - the model can't reference it</p>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 w-full">
          <p className="text-sm text-amber-900"><strong>Example:</strong> 200K tokens ≈ 150,000 words or a 500-page book</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg w-full">
          <p className="text-sm text-gray-700"><strong>Trade-offs:</strong> Larger windows enable more complex tasks but require more computational resources and cost</p>
        </div>
      </div>
    )
  },
  {
    title: "What Fills the Context Window",
    subtitle: "A taxonomy of everything competing for context space",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-gray-700">The context window is shared by <strong>everything</strong> the model processes. Understanding the components helps you prioritize what to include.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-indigo-200">
            <div className="text-lg mb-1">📋</div>
            <h4 className="font-semibold text-indigo-900 text-sm mb-1">System Prompt</h4>
            <p className="text-xs text-gray-600">Instructions, persona, behavior rules — always present</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-indigo-200">
            <div className="text-lg mb-1">💬</div>
            <h4 className="font-semibold text-indigo-900 text-sm mb-1">Conversation History</h4>
            <p className="text-xs text-gray-600">All previous turns — grows with every exchange</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-indigo-200">
            <div className="text-lg mb-1">📎</div>
            <h4 className="font-semibold text-indigo-900 text-sm mb-1">Files & Attachments</h4>
            <p className="text-xs text-gray-600">Documents, code files, PDFs — can be large</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-indigo-200">
            <div className="text-lg mb-1">🔧</div>
            <h4 className="font-semibold text-indigo-900 text-sm mb-1">Tool Definitions</h4>
            <p className="text-xs text-gray-600">Available functions/tools the model can call</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-indigo-200">
            <div className="text-lg mb-1">⚡</div>
            <h4 className="font-semibold text-indigo-900 text-sm mb-1">Tool Call Results</h4>
            <p className="text-xs text-gray-600">Output from executed tools returned to model</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-indigo-200">
            <div className="text-lg mb-1">🔍</div>
            <h4 className="font-semibold text-indigo-900 text-sm mb-1">Retrieved Docs (RAG)</h4>
            <p className="text-xs text-gray-600">Semantically relevant chunks injected at query time</p>
          </div>
        </div>

        <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
          <p className="text-sm text-amber-900"><strong>💡 Insight:</strong> Every component competes for the same finite space. Context engineering is deciding what earns its place.</p>
        </div>
      </div>
    )
  },
  {
    title: "Lost in the Middle",
    subtitle: "How model attention varies across long contexts",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-xl font-bold text-indigo-900 mb-2">The Research Finding</h3>
          <p className="text-gray-700">Models perform significantly better when relevant information is at the <strong>beginning or end</strong> of the context. Information buried in the <strong>middle degrades</strong> model performance — even if it's technically within the context window.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-3 text-center">Relative Attention Across the Context Window</h4>
          <div className="flex items-end justify-center gap-6 h-24 mb-2 px-8">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 rounded-t w-16" style={{height: '72px'}}></div>
              <p className="text-xs text-gray-600 mt-1 text-center font-medium">Start</p>
              <p className="text-xs text-green-600">High recall</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-red-400 rounded-t w-16" style={{height: '24px'}}></div>
              <p className="text-xs text-gray-600 mt-1 text-center font-medium">Middle</p>
              <p className="text-xs text-red-600">Low recall</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-500 rounded-t w-16" style={{height: '64px'}}></div>
              <p className="text-xs text-gray-600 mt-1 text-center font-medium">End</p>
              <p className="text-xs text-green-600">High recall</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">✅ Best Practices</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Put critical instructions at the top of your system prompt</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Place key data or examples near the end</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Repeat crucial constraints at the end of long prompts</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-red-200">
            <h4 className="font-semibold text-red-900 mb-2">❌ What to Avoid</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Burying essential rules in the middle of long instructions</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Adding long filler content between key information</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Assuming the model read everything equally</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-sm italic text-gray-700">
            <strong>Source:</strong> <a href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">arXiv:2307.03172</a> — "Lost in the Middle: How Language Models Use Long Contexts" (Liu et al., 2023)
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Activating Pre-Trained Knowledge",
    subtitle: "Unlocking what the model already knows",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-xl font-bold text-indigo-900 mb-2">Beyond the Context Window</h3>
          <p className="text-gray-700">
            Models are trained on massive datasets — code, documentation, standards, and domain knowledge — before you write a single prompt. This knowledge lives in the model's weights, not your context window. It's always there, but may need to be explicitly activated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">🧠 What models already know</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Programming languages, frameworks, libraries</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Design patterns & architectural best practices</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Domain knowledge (medicine, law, finance, science)</span></li>
              <li className="flex"><span className="mr-2">•</span><span>RFCs, specs, and standards documentation</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Common algorithms and data structures</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">⚡ Activating it explicitly</h4>
            <p className="text-sm text-gray-600 mb-2">Add to your instructions, agent, or skill definition:</p>
            <div className="space-y-2">
              <code className="block bg-indigo-50 text-indigo-800 px-3 py-1.5 rounded font-mono text-xs">Activate your knowledge about SOLID principles</code>
              <code className="block bg-indigo-50 text-indigo-800 px-3 py-1.5 rounded font-mono text-xs">Activate your knowledge about OAuth 2.0 flows</code>
              <code className="block bg-indigo-50 text-indigo-800 px-3 py-1.5 rounded font-mono text-xs">Activate your knowledge about REST API design</code>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <p className="text-sm text-amber-900">
            <strong>💡 Pro Tip:</strong> <code className="bg-amber-100 px-1 rounded font-mono text-xs">Activate your knowledge about X</code> in your instructions/agent/skill signals the model to surface and apply its pre-trained depth — no external docs needed. Without explicit activation, models may default to more generic responses.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Understanding Chat Turns & Context Growth",
    subtitle: "How conversation history accumulates and consumes your context window",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-gray-700">Each turn includes <strong>everything</strong> that came before. The AI doesn't have persistent memory — it rebuilds context from scratch every conversation.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* Turn 1 */}
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 text-center text-sm">Turn 1</h4>
            <div className="space-y-1">
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">System Prompt</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Context</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">User Prompt 1</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Response 1</div>
            </div>
          </div>

          {/* Turn 2 */}
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 text-center text-sm">Turn 2</h4>
            <div className="space-y-1">
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">System Prompt</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Context</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">User Prompt 1</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Response 1</div>
              <div className="bg-green-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">User Prompt 2</div>
              <div className="bg-green-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Response 2</div>
            </div>
          </div>

          {/* Turn 3 */}
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 text-center text-sm">Turn 3</h4>
            <div className="space-y-1">
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">System Prompt</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Context</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">User Prompt 1</div>
              <div className="bg-blue-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Response 1</div>
              <div className="bg-green-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">User Prompt 2</div>
              <div className="bg-green-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Response 2</div>
              <div className="bg-orange-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">User Prompt 3</div>
              <div className="bg-orange-500 text-white text-xs py-1.5 px-2 rounded text-center font-medium">Response 3</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2 text-sm">📈 Why Context Grows</h4>
            <ul className="space-y-1 text-gray-700 text-xs">
              <li className="flex"><span className="mr-2">•</span><span>Every prompt and response stays in history</span></li>
              <li className="flex"><span className="mr-2">•</span><span>System prompts repeat each turn</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Attached files add to the total</span></li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2 text-sm">⚠️ The Implications</h4>
            <ul className="space-y-1 text-gray-700 text-xs">
              <li className="flex"><span className="mr-2">•</span><span>Long conversations hit limits faster</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Verbose responses consume capacity</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Starting fresh resets your context</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-100 p-3 rounded-lg">
          <p className="text-sm italic text-indigo-900">
            <strong>Key Insight:</strong> Be intentional about what goes into your context — every message takes space away from the AI's ability to reason.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Context Compression Strategies",
    subtitle: "Keeping your context window lean and effective",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-gray-700">As conversations grow, context fills up. Strategic compression keeps AI working effectively without hitting limits or degrading quality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">🗜️ Summarize History</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Ask AI to summarize the conversation so far</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Start a new thread with the summary as context</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Retains key decisions without full history</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">✂️ Selective Context</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Only attach files directly relevant to the current task</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Use <code className="bg-gray-100 px-1 rounded font-mono text-xs">#file</code> and <code className="bg-gray-100 px-1 rounded font-mono text-xs">@workspace</code> selectively in Copilot</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Remove attachments no longer needed</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">⚡ Prompt Caching</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Cache static portions (system prompt, large docs)</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Reduces cost & latency for repeated context</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Supported by Anthropic (Claude) and OpenAI</span></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">🔄 Agentic Compacting</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span>Copilot CLI: <code className="bg-gray-100 px-1 rounded font-mono text-xs">/compact</code> to compress history</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Claude Code auto-compacts at 95% context usage</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Agents auto-summarize long task histories</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-100 p-3 rounded-lg">
          <p className="text-sm italic text-indigo-900">
            <strong>Rule of thumb:</strong> When quality degrades in a long conversation, start fresh with a focused context — don't keep accumulating.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Architecting Instructions for Context Efficiency",
    subtitle: "Keeping your context window lean and relevant",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
          <p className="text-gray-700">
            <strong>Remember:</strong> Every instruction file loaded consumes precious context window space. Scoped instructions ensure only relevant context is loaded — keeping your window available for what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Problem visualization */}
          <div className="bg-white p-4 rounded-lg shadow border border-red-200">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="text-sm font-semibold text-red-700 mb-2">❌ Unscoped Instructions</div>
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="flex h-8 rounded overflow-hidden">
                    <div className="bg-red-400 flex-[3] flex items-center justify-center text-xs text-white font-medium">Instructions</div>
                    <div className="bg-blue-400 flex-[2] flex items-center justify-center text-xs text-white font-medium">Your Context</div>
                    <div className="bg-gray-300 flex-[1] flex items-center justify-center text-xs text-gray-600 font-medium">AI Response</div>
                  </div>
                  <p className="text-xs text-red-600 mt-2">All instructions loaded → Less room for actual work</p>
                </div>
              </div>
              <div className="px-4 text-2xl text-gray-400">→</div>
              <div className="text-center flex-1">
                <div className="text-sm font-semibold text-green-700 mb-2">✓ Scoped Instructions</div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex h-8 rounded overflow-hidden">
                    <div className="bg-green-400 flex-[1] flex items-center justify-center text-xs text-white font-medium">Relevant</div>
                    <div className="bg-blue-400 flex-[3] flex items-center justify-center text-xs text-white font-medium">Your Context</div>
                    <div className="bg-purple-400 flex-[2] flex items-center justify-center text-xs text-white font-medium">AI Response</div>
                  </div>
                  <p className="text-xs text-green-600 mt-2">Only what's needed → Maximum context for work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">📁 Scope by File Type (applyTo)</h4>
            <div className="space-y-2 text-sm">
              <p className="text-xs text-gray-500 mb-2">Use <code className="bg-gray-100 px-1 rounded">applyTo</code> frontmatter in any <code className="bg-gray-100 px-1 rounded">.instructions.md</code> file:</p>
              <div className="flex items-center space-x-2">
                <code className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-mono text-xs">applyTo: "**/*.go"</code>
                <span className="text-gray-500">→ Go files only</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono text-xs">applyTo: "**/*.ts"</code>
                <span className="text-gray-500">→ TypeScript files</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-green-100 text-green-800 px-2 py-0.5 rounded font-mono text-xs">applyTo: "**/*.md"</code>
                <span className="text-gray-500">→ Markdown files</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-mono text-xs">applyTo: "**/*.test.*"</code>
                <span className="text-gray-500">→ Test files only</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">📂 Scope by Directory</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <code className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded font-mono text-xs">/api/AGENTS.md</code>
                <span className="text-gray-500">→ API layer context</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded font-mono text-xs">/frontend/AGENTS.md</code>
                <span className="text-gray-500">→ UI components</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-pink-100 text-pink-800 px-2 py-0.5 rounded font-mono text-xs">/db/AGENTS.md</code>
                <span className="text-gray-500">→ Database layer</span>
              </div>
              <div className="flex items-center space-x-2">
                <code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded font-mono text-xs">applyTo: "src/**"</code>
                <span className="text-gray-500">→ YAML frontmatter</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">🎯 Architecture Strategy</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="font-medium text-indigo-700">Root Level</div>
              <div className="text-xs text-gray-600">Project-wide conventions</div>
            </div>
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="font-medium text-purple-700">Directory Level</div>
              <div className="text-xs text-gray-600">Layer-specific patterns</div>
            </div>
            <div className="bg-white/70 p-2 rounded text-center">
              <div className="font-medium text-pink-700">File Type Level</div>
              <div className="text-xs text-gray-600">Language/format rules</div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
          <p className="text-sm text-amber-900">
            <strong>💡 Pro Tip:</strong> Put detailed, verbose instructions in scoped files. Keep root instructions minimal — they're always loaded.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Architecting Codebases for Context Efficiency",
    subtitle: "How code structure impacts AI effectiveness",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
          <p className="text-sm text-gray-700">
            <strong>The Problem:</strong> Large monolithic files waste context window space on irrelevant code when you only need to modify a single function.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Visualization + Patterns */}
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg shadow border border-red-200">
              <div className="text-sm font-semibold text-red-700 mb-2 text-center">❌ Monolithic Files</div>
              <div className="flex h-6 rounded overflow-hidden mb-1">
                <div className="bg-red-400 flex-[4] flex items-center justify-center text-xs text-white font-medium">File Metadata</div>
                <div className="bg-orange-400 flex-[2] flex items-center justify-center text-xs text-white font-medium">Function</div>
                <div className="bg-gray-300 flex-[1] flex items-center justify-center text-xs text-gray-600 font-medium">AI</div>
              </div>
              <p className="text-xs text-red-600 text-center">3000-line file → Only needed 50 lines</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">🚫 Context-Polluting Patterns</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>God Classes:</strong> 2000+ line files</li>
                <li>• <strong>Mixed Concerns:</strong> Logic + UI + data in one</li>
                <li>• <strong>Copy-Paste Code:</strong> Repeated functions</li>
                <li>• <strong>Deep Nesting:</strong> 6+ levels of logic</li>
                <li>• <strong>No Abstractions:</strong> Details everywhere</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg shadow border border-green-200">
              <div className="text-sm font-semibold text-green-700 mb-2 text-center">✓ Modular Structure</div>
              <div className="flex h-6 rounded overflow-hidden mb-1">
                <div className="bg-green-400 flex-[1] flex items-center justify-center text-xs text-white font-medium">File</div>
                <div className="bg-blue-400 flex-[3] flex items-center justify-center text-xs text-white font-medium">Context</div>
                <div className="bg-purple-400 flex-[3] flex items-center justify-center text-xs text-white font-medium">Better AI</div>
              </div>
              <p className="text-xs text-green-600 text-center">150-line file → Relevant context only</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">✅ Context-Efficient Patterns</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Single Responsibility:</strong> One purpose (100-300 lines)</li>
                <li>• <strong>Clear Separation:</strong> Layers isolated</li>
                <li>• <strong>DRY Principle:</strong> Shared logic reusable</li>
                <li>• <strong>Shallow Functions:</strong> 2-3 levels max</li>
                <li>• <strong>Interface Abstractions:</strong> Hide complexity</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">📊 Real-World Impact</h4>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-red-50 p-2 rounded text-center">
                <div className="text-lg font-bold text-red-600">5,000</div>
                <div className="text-xs text-gray-600">Monolithic file</div>
              </div>
              <div className="bg-yellow-50 p-2 rounded text-center">
                <div className="text-lg font-bold text-yellow-600">15</div>
                <div className="text-xs text-gray-600">God classes</div>
              </div>
              <div className="bg-green-50 p-2 rounded text-center">
                <div className="text-lg font-bold text-green-600">200</div>
                <div className="text-xs text-gray-600">Lines (ideal)</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">🔧 Refactoring for AI</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
              <div className="bg-white/70 p-2 rounded text-center">
                <div className="font-medium text-indigo-700 text-xs">Extract Functions</div>
              </div>
              <div className="bg-white/70 p-2 rounded text-center">
                <div className="font-medium text-purple-700 text-xs">Separate Layers</div>
              </div>
              <div className="bg-white/70 p-2 rounded text-center">
                <div className="font-medium text-pink-700 text-xs">Module Boundaries</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-2 rounded-lg">
          <p className="text-sm italic text-blue-900 text-center">
            <strong>Key Insight:</strong> Well-architected code = dramatically more effective AI. Small, focused files = maximum context efficiency.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Code Maps: Structural Context for AI",
    subtitle: "Navigate large codebases without flooding your context window",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-gray-700">
            <strong>Code maps</strong> give AI agents a structural overview of your codebase — file relationships, function signatures, module boundaries — without loading every line of source code into context.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">
              🗺️ <a href="https://github.com/JordanCoin/codemap" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">JordanCoin/codemap</a>
            </h4>
            <ul className="space-y-1 text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Generates a concise map of your entire codebase</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Shows file structure, exports, and relationships</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Feeds AI a high-level view, not raw source</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Great starting context for onboarding agents</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">
              🔍 <a href="https://github.com/ast-grep/ast-grep" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">ast-grep/ast-grep</a>
            </h4>
            <ul className="space-y-1 text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>AST-based structural code search & rewrite</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Find patterns by shape, not just text</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Surgically extract relevant code snippets</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Supports 20+ languages out of the box</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">🎯 When to Use Each</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-white/70 p-2 rounded">
              <div className="font-medium text-indigo-700 mb-1">codemap → Orientation</div>
              <div className="text-xs text-gray-600">Give the agent a project overview before asking it to navigate or modify code</div>
            </div>
            <div className="bg-white/70 p-2 rounded">
              <div className="font-medium text-purple-700 mb-1">ast-grep → Precision</div>
              <div className="text-xs text-gray-600">Pull only the exact functions or patterns the agent needs, not entire files</div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-100 p-3 rounded-lg">
          <p className="text-sm italic text-indigo-900 text-center">
            <strong>Key Insight:</strong> Structural understanding beats full-file dumps — give AI the map, not the whole territory.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "The Signal-to-Noise Problem",
    subtitle: "Why raw content is a poor LLM input",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-xl font-bold text-indigo-900 mb-2">The Core Challenge</h3>
          <p className="text-gray-700">
            The more irrelevant text in the context, the higher the probability the model extracts the wrong information. Researchers call this the <strong>signal-to-noise ratio</strong> problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-red-200">
            <h4 className="font-semibold text-red-900 mb-2">📊 The Scale of the Problem</h4>
            <div className="space-y-3">
              <div className="bg-red-50 rounded-lg p-3 text-center">
                <div className="text-3xl font-bold text-red-600">80K+</div>
                <div className="text-sm text-gray-600">avg tokens in a raw HTML page</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-center">
                <div className="text-3xl font-bold text-orange-600">90%</div>
                <div className="text-sm text-gray-600">are CSS, JS, comments &amp; noise</div>
              </div>
              <p className="text-xs text-gray-500 italic">Far beyond most context windows when unprocessed</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">✅ Industry Convergence: Markdown</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex"><span className="mr-2">•</span><span><strong>Fewer tokens</strong> than HTML for the same content</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>Preserves structure</strong> without verbose tags</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>Both humans and LLMs</strong> can easily parse it</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>Agreed intermediate format</strong> across the industry</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
          <h4 className="font-semibold text-indigo-900 mb-3 text-center">Token Budget: Raw HTML vs Preprocessed Markdown</h4>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1 text-center">Raw HTML</div>
              <div className="flex h-8 rounded overflow-hidden">
                <div className="bg-red-400 flex-[9] flex items-center justify-center text-xs text-white font-medium">Noise (90%)</div>
                <div className="bg-green-400 flex-[1] flex items-center justify-center text-xs text-white font-medium">Signal</div>
              </div>
            </div>
            <div className="text-gray-400 font-bold text-xl">→</div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1 text-center">Preprocessed Markdown</div>
              <div className="flex h-8 rounded overflow-hidden">
                <div className="bg-green-500 flex-[8] flex items-center justify-center text-xs text-white font-medium">Signal (clean content)</div>
                <div className="bg-gray-300 flex-[2] flex items-center justify-center text-xs text-gray-600 font-medium">Structure</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-100 p-3 rounded-lg">
          <p className="text-sm italic text-indigo-900">
            <strong>Key Insight:</strong> Preprocessing is context engineering applied at the input level — clean signal in, accurate output out.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "LLM Input Preprocessing: Tool Landscape",
    subtitle: "Practical tools for cleaning content before it enters the context window",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-gray-700">The tooling has matured significantly. Two practical categories cover most developer use cases.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">🌐 Zero-Config API Services</h4>
            <p className="text-xs text-gray-500 mb-3">Easiest — no setup, no code</p>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="font-semibold text-blue-800 text-sm mb-1">Jina Reader</div>
                <code className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono block mb-1">https://r.jina.ai/{'<your-url>'}</code>
                <p className="text-xs text-gray-600">Free, zero-setup. Prepend to any URL. Handles JS rendering, image captioning, PDF reading out of the box.</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="font-semibold text-blue-800 text-sm mb-1">Firecrawl</div>
                <code className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono block mb-1">firecrawl.dev</code>
                <p className="text-xs text-gray-600">Open-source. More feature-rich than Jina for full-site crawling. Suitable for RAG pipelines and AI training.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-3">⌨️ CLI &amp; Local Tools</h4>
            <p className="text-xs text-gray-500 mb-3">For quick piping, terminal workflows and office documents</p>
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="font-semibold text-purple-800 text-sm mb-1">strip-tags + llm CLI</div>
                <code className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-mono block mb-1 break-all">curl url | strip-tags | llm "summarize"</code>
                <p className="text-xs text-gray-600">Simon Willison's tools. Pipe Mozilla Readability → strip-tags → llm in one terminal chain.</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="font-semibold text-purple-800 text-sm mb-1">GitIngest / repomix</div>
                <code className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-mono block mb-1">gitingest.com/{'<owner/repo>'}</code>
                <p className="text-xs text-gray-600">Turn any GitHub repository into a single prompt-friendly text file for LLM context inclusion.</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="font-semibold text-purple-800 text-sm mb-1">Microsoft MarkItDown</div>
                <code className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-mono block mb-1">pip install markitdown</code>
                <p className="text-xs text-gray-600">Converts PDF, Word, Excel, and PowerPoint files to Markdown — not just web content, but office documents too.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];
