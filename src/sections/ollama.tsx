import { Cpu } from "lucide-react";
import { SlideType } from "./types";

export const ollamaSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Cpu className="w-16 h-16 md:w-20 md:h-20 text-blue-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 text-center">
          Ollama
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Run Large Language Models Locally and Privately
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Introduction to Ollama",
    subtitle: "Democratizing access to large language models",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            What is Ollama?
          </h3>
          <p className="text-lg text-gray-700">
            Ollama is a platform that lets users run large language models
            (LLMs) locally on their own machines, giving them access to AI
            with privacy. It offers a user-friendly interface and integrates
            easily with a range of applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-semibold text-blue-800 mb-2">Key Features</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                • Local Execution: Run LLMs privately without cloud dependency
              </li>
              <li>
                • Extensive Model Library: Access pre-trained models like Llama
                3, Phi-3, Mistral
              </li>
              <li>
                • Easy Integration: Works with Python, LangChain, LlamaIndex
              </li>
              <li>• Customization: Fine-tune models for specific needs</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-semibold text-blue-800 mb-2">Quick Start</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Download from ollama.com</li>
              <li>
                • Pull a model:{" "}
                <code className="bg-gray-100 px-1 rounded">
                  ollama pull gemma
                </code>
              </li>
              <li>
                • Run:{" "}
                <code className="bg-gray-100 px-1 rounded">
                  ollama run &lt;model_name&gt;
                </code>
              </li>
              <li>• Integrate via Python or CLI</li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-center text-gray-700">
            <strong>Takeaway:</strong> Ollama makes powerful AI accessible
            locally, combining privacy, speed, and flexibility for developers
            and organizations.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Installing & Running Models",
    subtitle: "Getting started with Ollama CLI locally",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Local Installation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h4 className="font-semibold text-blue-800 mb-2">
                Download & Install
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  • Visit <strong>ollama.com</strong>
                </li>
                <li>• Download for your OS (Linux/macOS/Windows)</li>
                <li>• Run installer or follow setup instructions</li>
                <li>• No complex dependencies required</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h4 className="font-semibold text-blue-800 mb-2">
                Verify Installation
              </h4>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                <div>$ ollama --version</div>
                <div className="text-gray-500 mt-1">ollama version 0.1.x</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-semibold text-blue-800 mb-2">
              Download Models
            </h4>
            <div className="space-y-2">
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                <div>$ ollama pull codellama:7b-instruct</div>
                <div className="text-gray-500">For coding tasks</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-semibold text-blue-800 mb-2">
              Run Interactively
            </h4>
            <div className="space-y-2">
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                <div>$ ollama run llama3:8b</div>
                <div className="text-gray-500">
                  &gt;&gt;&gt; Hello! How can I help?
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Type your questions, use /bye to exit
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h4 className="font-semibold text-blue-800 mb-2">
            Model Management Commands
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="bg-gray-50 p-3 rounded">
              <div className="font-mono text-blue-600">$ ollama list</div>
              <div className="text-gray-600">Show installed models</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="font-mono text-blue-600">$ ollama ps</div>
              <div className="text-gray-600">Show running models</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="font-mono text-blue-600">$ ollama rm model</div>
              <div className="text-gray-600">Remove a model</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Understanding Model Tags",
    subtitle: "Bits per weight and quantization explained",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            What are Model Tags?
          </h3>
          <p className="text-lg text-gray-700">
            Model tags in Ollama show how quantization compressed the model,
            trading some accuracy for smaller size and faster performance.
            Each weight is typically a 16-bit float at full precision;
            quantization maps these to integers (e.g., 4-bit), cutting memory
            use at the cost of rounding precision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-semibold text-blue-800 mb-2">
              Bits Per Weight (Q#)
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                • <strong>Q8:</strong> 8 bits per weight (high quality, larger
                size)
              </li>
              <li>
                • <strong>Q5:</strong> 5 bits per weight (balanced
                quality/speed)
              </li>
              <li>
                • <strong>Q4:</strong> 4 bits per weight (good compression)
              </li>
              <li>
                • <strong>Q3/Q2:</strong> 3/2 bits (maximum compression, lower
                quality)
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-semibold text-blue-800 mb-2">
              K-Quant Methods (_K)
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Advanced quantization technique</li>
              <li>• Better accuracy than legacy methods</li>
              <li>• Uses larger "superblocks" for smarter compression</li>
              <li>• Always preferred over _0, _1 variants</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <h5 className="font-semibold text-blue-800 mb-1">_S</h5>
            <p className="text-sm text-gray-600">Small: more compression</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <h5 className="font-semibold text-blue-800 mb-1">_M</h5>
            <p className="text-sm text-gray-600">Medium: best balance</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border text-center">
            <h5 className="font-semibold text-blue-800 mb-1">_L</h5>
            <p className="text-sm text-gray-600">Large: higher quality</p>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-center text-gray-700">
            <strong>Recommendation:</strong> Start with{" "}
            <code className="bg-blue-100 px-2 py-1 rounded text-sm">
              q5_k_m
            </code>{" "}
            or{" "}
            <code className="bg-blue-100 px-2 py-1 rounded text-sm">
              q4_k_m
            </code>{" "}
            for the best quality-to-performance ratio.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Model Selection Framework",
    subtitle: "Choosing the right Ollama model for your projects",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            4-Step Selection Process
          </h3>
          <ol className="text-lg text-gray-700 space-y-2">
            <li>
              <strong>1. Hardware Check:</strong> Assess your VRAM capacity
            </li>
            <li>
              <strong>2. Quantization Choice:</strong> Select appropriate
              compression
            </li>
            <li>
              <strong>3. Use Case Analysis:</strong> Chat vs. completion tasks
            </li>
            <li>
              <strong>4. Model Selection:</strong> Pick from top performers
            </li>
          </ol>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-semibold text-blue-800 mb-2">
              Hardware Guidelines
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                • <strong>8GB VRAM:</strong> 3-7B parameter models
              </li>
              <li>
                • <strong>16GB VRAM:</strong> 13-14B parameter models
              </li>
              <li>
                • <strong>32GB VRAM:</strong> 32-34B parameter models
              </li>
              <li>
                • <strong>48GB+ VRAM:</strong> 70B+ parameter models
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h4 className="font-semibold text-blue-800 mb-2">
              Top 2025 Models
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                • <strong>DeepSeek-Coder-V2:</strong> Dominant, fast MoE model
              </li>
              <li>
                • <strong>Qwen-Coder 2.5/3:</strong> Strong all-rounder
              </li>
              <li>
                • <strong>CodeLlama:</strong> Versatile (:instruct for chat)
              </li>
              <li>
                • <strong>Yi-Coder:</strong> Excellent for web development
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-center text-gray-700">
            <strong>Key Insight:</strong> A larger model at lower quantization
            often outperforms a smaller model at higher precision. Experiment
            with deepseek-coder-v2 or qwen-coder for coding tasks.
          </p>
        </div>
      </div>
    )
  }
];
