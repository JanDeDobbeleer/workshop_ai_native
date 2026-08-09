import { MessageSquare } from "lucide-react";
import { SlideType } from "./types";
import { CodeBlock } from "../components/CodeBlock";

export const promptingSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <MessageSquare className="w-20 h-20 text-blue-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 text-center">
          Prompting
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          The art of communicating with AI effectively
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
    title: "Is Prompt Engineering Still Relevant?",
    subtitle: "A Term in Decline",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            It Had Its Moment
          </h3>
          <p className="text-lg text-gray-700">
            Techniques like few-shot examples and chain-of-thought earned their keep with older, less capable models that needed heavy structure to perform well.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">📉 Then</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Carefully structured, templated prompts</li>
              <li>• Few-shot examples to steer behavior</li>
              <li>• Explicit chain-of-thought scaffolding</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">📈 Now</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Modern coding agents handle loose, conversational input well</li>
              <li>• Long, rambling voice-transcribed asks work about as well as a polished prompt</li>
              <li>• What matters more: good context and a harness that lets the agent check its own work</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Meta Prompting",
    subtitle: "Model-Driven Refinement",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            Let AI Refine Your Prompts
          </h3>
          <p className="text-lg text-gray-700">
            Use AI to generate and refine prompts based on your repository's
            context. The model can help remove ambiguity and keep prompts
            concise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">
              🎯 The Technique:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                • Ask the model to generate prompts based on your existing code
                patterns
              </li>
              <li>• Request removal of ambiguity and verbosity</li>
              <li>• Have AI validate prompts for clarity and consistency</li>
            </ul>
          </div>

          <CodeBlock
            code={`Generate instructions for my blog post
content based on the style you find in the current
posts inside /content/post*.md. Validate for
ambiguity and keep the instructions concise.`}
            className="bg-gray-900 p-4 rounded-lg"
          >
            <p className="text-green-400 text-xs mb-2 font-mono">
              Example Meta Prompt:
            </p>
            <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
              {`Generate instructions for my blog post
content based on the style you find in the current
posts inside /content/post*.md. Validate for
ambiguity and keep the instructions concise.`}
            </pre>
          </CodeBlock>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-sm italic text-green-900">
            <strong>Key Benefit:</strong> Generate prompts that speak the
            model's language and are optimized for AI understanding.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Continuous Improvement",
    subtitle: "Self-Analysis & Future Adjustment",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-xl font-bold text-orange-900 mb-2">
            Build a Feedback Loop
          </h3>
          <p className="text-gray-700">
            After generating output, ask the model to explain deviations and
            adjust prompts for future tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-2">
              🔄 The Process:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Review outputs for deviations</li>
              <li>• Ask model to analyze issues</li>
              <li>• Update instructions iteratively</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-2">✨ Achieves:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Prompts evolve with needs</li>
              <li>• Reduced code review friction</li>
              <li>• Consistent AI outputs</li>
            </ul>
          </div>
        </div>

        <CodeBlock
          code={`Go through our conversation and iterations we
made and implement/adjust instructions to avoid
these mistakes in the future.`}
          className="bg-gray-900 p-4 rounded-lg"
        >
          <p className="text-orange-400 text-xs mb-2 font-mono">
            Example Feedback Prompt:
          </p>
          <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
            {`Go through our conversation and iterations we
made and implement/adjust instructions to avoid
these mistakes in the future.`}
          </pre>
        </CodeBlock>

        <div className="bg-orange-100 p-4 rounded-lg">
          <p className="text-sm italic text-orange-900">
            <strong>Remember:</strong> Good prompts are living tools that
            improve through real-world usage and feedback.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "The Core Loop",
    subtitle: "Human-in-the-Loop Workflow",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">
            What is the Core Loop?
          </h3>
          <p className="text-lg text-gray-700">
            A tight <strong>human-in-the-loop workflow</strong> that is faster
            and safer than skipping planning. AI coding power isn't in
            automation — it's in an efficient feedback loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">
              🔁 Essential Pattern:
            </h4>
            <ol className="space-y-2 text-gray-700">
              <li>
                <strong>1.</strong> Clean context
              </li>
              <li>
                <strong>2.</strong> Plan (read-only mode)
              </li>
              <li>
                <strong>3.</strong> Review & ask questions
              </li>
              <li>
                <strong>4.</strong> Approve
              </li>
              <li>
                <strong>5.</strong> Execute
              </li>
              <li>
                <strong>6.</strong> Verify
              </li>
              <li>
                <strong>7.</strong> Document learnings
              </li>
            </ol>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">
              ✨ Why It Matters:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Catch mistakes before writing code</li>
              <li>• Surface flawed approaches early</li>
              <li>• Reduce iteration cost significantly</li>
              <li>• Build confidence in AI suggestions</li>
              <li>• Make the loop compound over time</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>Key Insight:</strong> Developers who master this loop ship
            consistently. Those who skip planning spend more time fixing
            mistakes.
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Source:{" "}
            <a
              href="https://paddo.dev/blog/stop-speedrunning-claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Stop Speedrunning Claude Code (paddo.dev)
            </a>
          </p>
        </div>
      </div>
    )
  }
];
