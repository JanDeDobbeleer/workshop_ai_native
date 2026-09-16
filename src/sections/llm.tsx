import { Sparkles } from 'lucide-react';
import { SlideType } from './types';

export const llmSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Sparkles className="w-20 h-20 text-indigo-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 text-center">
          LLMs
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          How large language models actually work
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
    title: "Understanding LLMs",
    subtitle: "The Technology Powering AI Coding Assistants",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-4 md:space-y-8">
        <div className="text-center mb-2 md:mb-4">
          <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
            Before we can effectively delegate to AI, we need to understand how these systems actually work
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl w-full">
          <div className="bg-indigo-500 text-white p-4 md:p-6 rounded-lg shadow-lg text-center">
            <div className="text-2xl md:text-3xl mb-2 md:mb-3">🧠</div>
            <div className="text-lg md:text-xl font-bold mb-1 md:mb-2">Architecture</div>
            <div className="text-xs md:text-sm opacity-90">How transformers process and generate text</div>
          </div>

          <div className="bg-indigo-600 text-white p-4 md:p-6 rounded-lg shadow-lg text-center">
            <div className="text-2xl md:text-3xl mb-2 md:mb-3">📈</div>
            <div className="text-lg md:text-xl font-bold mb-1 md:mb-2">Evolution</div>
            <div className="text-xs md:text-sm opacity-90">From simple models to emergent reasoning</div>
          </div>

          <div className="bg-indigo-700 text-white p-4 md:p-6 rounded-lg shadow-lg text-center">
            <div className="text-2xl md:text-3xl mb-2 md:mb-3">⚖️</div>
            <div className="text-lg md:text-xl font-bold mb-1 md:mb-2">Limitations</div>
            <div className="text-xs md:text-sm opacity-90">What LLMs can and cannot do</div>
          </div>
        </div>

        <div className="bg-indigo-100 px-4 md:px-6 py-3 md:py-4 rounded-lg max-w-2xl w-full mt-2 md:mt-4">
          <p className="text-center text-indigo-900 text-sm md:text-base">
            <strong>Why This Matters:</strong> Understanding the technology helps you set realistic expectations and use AI more effectively.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "What is an LLM?",
    subtitle: "Large Language Models & Transformer Architecture",
    content: (
      <div className="flex flex-col space-y-4 md:space-y-6 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 md:p-5 rounded-lg border-l-4 border-indigo-500">
          <h4 className="font-bold text-indigo-900 mb-2 text-sm md:text-base">Large Language Models (LLMs)</h4>
          <ul className="text-gray-700 space-y-2 text-sm md:text-base">
            <li className="flex"><span className="mr-2">•</span><span>AI systems trained on huge amounts of text to understand and generate human-like language</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Learn patterns, grammar, facts, and reasoning abilities from their training data</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Can perform tasks like writing, answering questions, coding, and analysis</span></li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-4 md:p-5 rounded-lg border-l-4 border-indigo-500">
          <h4 className="font-bold text-indigo-900 mb-2 text-sm md:text-base">Transformer Architecture</h4>
          <ul className="text-gray-700 space-y-2 text-sm md:text-base">
            <li className="flex"><span className="mr-2">•</span><span>GPT: Generative Pre-trained Transformer</span></li>
            <li className="flex"><span className="mr-2">•</span><span>The core technology that powers modern LLMs, introduced in 2017</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Uses "attention mechanisms" to understand relationships between words in context</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Processes entire sequences of text in parallel rather than word-by-word</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Enables models to understand meaning across entire documents</span></li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "How Transformers Work",
    subtitle: "From input to output: a visual flow",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full">
        <div className="w-full max-w-5xl">
          {/* Mobile: Vertical flow */}
          <div className="flex md:hidden flex-col items-center space-y-2">
            <div className="bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg">
              <p className="text-xs font-mono">"How are you?"</p>
            </div>
            <div className="text-gray-400">↓</div>
            <div className="bg-amber-100 border border-amber-300 px-2 py-1.5 rounded-lg">
              <div className="flex space-x-1">
                <span className="bg-amber-200 px-1.5 py-0.5 rounded text-xs font-mono">How</span>
                <span className="bg-amber-200 px-1.5 py-0.5 rounded text-xs font-mono">are</span>
                <span className="bg-amber-200 px-1.5 py-0.5 rounded text-xs font-mono">you</span>
                <span className="bg-amber-200 px-1.5 py-0.5 rounded text-xs font-mono">?</span>
              </div>
            </div>
            <div className="text-gray-400">↓</div>
            <div className="flex space-x-2">
              <div className="bg-blue-100 border border-blue-300 px-2 py-1.5 rounded-lg">
                <p className="text-xs font-mono text-blue-800">[0.2, -0.5...]</p>
              </div>
              <div className="bg-purple-100 border border-purple-300 px-2 py-1.5 rounded-lg">
                <div className="grid grid-cols-3 gap-0.5">
                  <div className="w-2 h-2 bg-purple-400 rounded"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded"></div>
                  <div className="w-2 h-2 bg-purple-300 rounded"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded"></div>
                  <div className="w-2 h-2 bg-purple-300 rounded"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded"></div>
                </div>
              </div>
            </div>
            <div className="text-gray-400">↓</div>
            <div className="bg-green-600 text-white px-3 py-2 rounded-lg shadow-lg">
              <p className="text-xs font-mono">"I'm doing well!"</p>
            </div>
          </div>

          {/* Desktop: Horizontal flow */}
          <div className="hidden md:flex items-center justify-between">
            {/* Input */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg">
                <p className="text-sm font-mono">"How are you?"</p>
              </div>
              <p className="text-xs text-gray-600 mt-2 font-semibold">Input</p>
            </div>

            <div className="text-gray-400 text-2xl">→</div>

            {/* Tokenization */}
            <div className="flex flex-col items-center">
              <div className="bg-amber-100 border border-amber-300 px-3 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <span className="bg-amber-200 px-2 py-1 rounded text-xs font-mono">How</span>
                  <span className="bg-amber-200 px-2 py-1 rounded text-xs font-mono">are</span>
                  <span className="bg-amber-200 px-2 py-1 rounded text-xs font-mono">you</span>
                  <span className="bg-amber-200 px-2 py-1 rounded text-xs font-mono">?</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2 font-semibold">Tokenization</p>
            </div>

            <div className="text-gray-400 text-2xl">→</div>

            {/* Embedding */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 border border-blue-300 px-3 py-2 rounded-lg">
                <div className="flex flex-col space-y-1 text-xs font-mono text-blue-800">
                  <span>[0.2, -0.5, 0.8...]</span>
                  <span>[0.7, 0.1, -0.3...]</span>
                  <span>[0.4, 0.9, 0.2...]</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2 font-semibold">Embedding</p>
            </div>

            <div className="text-gray-400 text-2xl">→</div>

            {/* Attention */}
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 border border-purple-300 px-3 py-2 rounded-lg">
                <div className="grid grid-cols-3 gap-1">
                  <div className="w-4 h-4 bg-purple-300 rounded"></div>
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <div className="w-4 h-4 bg-purple-200 rounded"></div>
                  <div className="w-4 h-4 bg-purple-600 rounded"></div>
                  <div className="w-4 h-4 bg-purple-300 rounded"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded"></div>
                  <div className="w-4 h-4 bg-purple-200 rounded"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded"></div>
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2 font-semibold">Attention</p>
            </div>

            <div className="text-gray-400 text-2xl">→</div>

            {/* Layers */}
            <div className="flex flex-col items-center">
              <div className="flex flex-col space-y-1">
                <div className="bg-green-200 border border-green-400 px-4 py-1 rounded text-xs">Layer N</div>
                <div className="bg-green-300 border border-green-400 px-4 py-1 rounded text-xs">...</div>
                <div className="bg-green-400 border border-green-500 px-4 py-1 rounded text-xs">Layer 1</div>
              </div>
              <p className="text-xs text-gray-600 mt-2 font-semibold">Processing</p>
            </div>

            <div className="text-gray-400 text-2xl">→</div>

            {/* Output */}
            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg">
                <p className="text-sm font-mono">"I'm doing well!"</p>
              </div>
              <p className="text-xs text-gray-600 mt-2 font-semibold">Output</p>
            </div>
          </div>

          <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-800 text-sm md:text-base">Tokenization</p>
              <p className="text-gray-600 text-xs md:text-base">The model splits text into smaller units (tokens) it can process</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-800 text-sm md:text-base">Embedding & Attention</p>
              <p className="text-gray-600 text-xs md:text-base">Tokens become number vectors; attention weighs how relevant each token is to others</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-gray-800 text-sm md:text-base">Layer Processing</p>
              <p className="text-gray-600 text-xs md:text-base">Multiple layers refine understanding and generate the response</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Evolution Through Scale",
    subtitle: "2017 → Now: How LLMs gained reasoning abilities",
    content: (
      <div className="flex flex-col space-y-4 md:space-y-6 max-w-3xl mx-auto items-center md:justify-center md:h-full">
        <div className="bg-indigo-50 p-3 md:p-4 rounded-lg border-l-4 border-indigo-500">
          <h4 className="font-bold text-indigo-900 mb-2 text-sm md:text-base">What are Parameters?</h4>
          <p className="text-gray-700 text-sm md:text-base">Parameters are the internal weights and connections the model learns during training. Think of them as the model's stored knowledge: more parameters means more capacity to learn patterns.</p>
        </div>

        <p className="text-center text-base md:text-lg text-gray-700">LLMs gained reasoning abilities through scaling in several key ways:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-white p-3 md:p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-2 text-sm md:text-base">More Parameters = More Pattern Recognition</h4>
            <ul className="text-gray-700 space-y-2 text-sm md:text-base">
              <li className="flex"><span className="mr-2">•</span><span>Larger models store vastly more patterns</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Recognize complex multi-step patterns</span></li>
            </ul>
          </div>

          <div className="bg-white p-3 md:p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-2 text-sm md:text-base">Emergent Abilities</h4>
            <ul className="text-gray-700 space-y-2 text-sm md:text-base">
              <li className="flex"><span className="mr-2">•</span><span>At certain scales, models develop new capabilities</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Multi-step reasoning emerged in larger models</span></li>
              <li className="flex"><span className="mr-2">•</span><span>These abilities appear only above a specific threshold</span></li>
            </ul>
          </div>

          <div className="bg-white p-3 md:p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-2 text-sm md:text-base">More Context = Better Reasoning</h4>
            <ul className="text-gray-700 space-y-2 text-sm md:text-base">
              <li className="flex"><span className="mr-2">•</span><span>Process longer context windows</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Hold more information simultaneously</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Connect ideas across longer distances</span></li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Role of GPUs",
    subtitle: "The hardware that made the AI revolution possible",
    content: (
      <div className="flex flex-col space-y-3 md:space-y-4 max-w-4xl mx-auto items-center md:justify-center md:h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full">
          <div className="bg-white p-3 md:p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">⚡ Parallel Processing</h4>
            <p className="text-gray-700 text-sm md:text-base">Thousands of cores perform calculations simultaneously, perfect for transformer architecture that processes all tokens at once</p>
          </div>

          <div className="bg-white p-3 md:p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">🚀 Massive Speed-Up</h4>
            <p className="text-gray-700 text-sm md:text-base">What takes years on CPUs takes weeks on GPU clusters; modern LLM training uses thousands of GPUs together</p>
          </div>

          <div className="bg-white p-3 md:p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">🔢 Optimized for Matrix Math</h4>
            <p className="text-gray-700 text-sm md:text-base">Transformers rely on matrix multiplication for embeddings, attention, and layers; GPUs excel at exactly this operation</p>
          </div>

          <div className="bg-white p-3 md:p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">💾 High Memory Bandwidth</h4>
            <p className="text-gray-700 text-sm md:text-base">Fast access to massive arrays of weights and activations that LLMs constantly need</p>
          </div>
        </div>

        <div className="bg-white p-3 md:p-4 rounded-lg shadow border border-gray-200 w-full">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">💰 Economic Viability</h4>
          <p className="text-gray-700 text-sm md:text-base">Without GPUs, training billion-parameter models would be practically and financially impossible</p>
        </div>

        <div className="bg-indigo-100 p-3 md:p-4 rounded-lg w-full">
          <p className="text-xs md:text-sm font-semibold text-indigo-900 text-center">
            Bottom Line: GPUs made the modern AI revolution possible
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Key Strengths & Weaknesses",
    subtitle: "Understanding what LLMs can and cannot do",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
        <div className="bg-green-50 p-4 md:p-5 rounded-lg border-l-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-2 md:mb-3 text-sm md:text-base">✅ Strengths</h4>
          <ul className="text-gray-700 space-y-2 text-sm md:text-base">
            <li className="flex"><span className="mr-2">•</span><span><strong>Versatility</strong>: Handle diverse tasks (writing, coding, analysis, translation) without task-specific training</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Pattern Recognition</strong>: Excel at identifying complex patterns and relationships in data</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Natural Language</strong>: Generate human-like text and understand context and nuance</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Knowledge Breadth</strong>: Trained on vast amounts of information across countless domains</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Few-Shot Learning</strong>: Learn new tasks from just a few examples in the prompt</span></li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 md:p-5 rounded-lg border-l-4 border-red-500">
          <h4 className="font-bold text-red-900 mb-2 md:mb-3 text-sm md:text-base">⚠️ Weaknesses</h4>
          <ul className="text-gray-700 space-y-2 text-sm md:text-base">
            <li className="flex"><span className="mr-2">•</span><span><strong>Hallucinations</strong>: Predict plausible-sounding text rather than compute or reason; can confidently generate false information</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>No True Understanding</strong>: Pattern matching, not genuine comprehension</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Knowledge & Memory Limitations</strong>: Training data cutoffs and no persistent memory</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Bias & Accuracy</strong>: Reflects training data biases and can struggle with precise calculations</span></li>
            <li className="flex"><span className="mr-2">•</span><span><strong>Computational Cost</strong>: Expensive to train and run at scale</span></li>
          </ul>
        </div>
      </div>
    )
  }
];
