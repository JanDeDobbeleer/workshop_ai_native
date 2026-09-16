import { Target } from 'lucide-react';
import { SlideType } from './types';

export const fluencySlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Target className="w-20 h-20 text-blue-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 text-center">
          AI Fluency
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          The 4D framework for AI collaboration
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
    title: "The 4D AI Fluency Framework",
    subtitle: "Process Flow",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-8">
        <div className="text-center mb-6">
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Four interconnected competencies for effective, efficient, ethical, and safe AI interaction
          </p>
        </div>

        <div className="relative w-full max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            <div className="bg-blue-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-xl md:text-2xl font-bold mb-2">1. Delegation</div>
              <div className="text-sm">Setting goals & deciding when to engage with AI</div>
            </div>

            <div className="bg-green-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-xl md:text-2xl font-bold mb-2">2. Description</div>
              <div className="text-sm">Effectively describing goals to prompt useful AI behaviors</div>
            </div>

            <div className="bg-purple-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-xl md:text-2xl font-bold mb-2">3. Discernment</div>
              <div className="text-sm">Accurately assessing usefulness of AI outputs</div>
            </div>

            <div className="bg-orange-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-xl md:text-2xl font-bold mb-2">4. Diligence</div>
              <div className="text-sm">Taking responsibility for what we do with AI</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-gray-100 px-6 py-3 rounded-lg">
              <div className="font-semibold text-gray-800 mb-2">Three Modes of AI Interaction:</div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>• Augmentation: Humans & AI collaborate</div>
                <div>• Automation: AI executes specific tasks</div>
                <div>• Agency: AI performs future tasks independently</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "1. Delegation",
    subtitle: "Setting Goals & Deciding When to Engage",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 md:p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">What is Delegation?</h3>
          <p className="text-lg text-gray-700">
            Delegation means setting goals and deciding whether, when, and how to engage AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Key Questions:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Should I use AI for this task?</li>
              <li>• Which mode is most appropriate? (Automation, Augmentation, or Agency)</li>
              <li>• What are the risks and benefits?</li>
              <li>• How much human oversight does it need?</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Best Practices:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Start with clear objectives before engaging AI</li>
              <li>• Consider AI capabilities and limitations</li>
              <li>• Match the task to the appropriate AI interaction mode</li>
              <li>• Plan for human involvement throughout the process</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Remember:</strong> Delegation means being intentional with AI. Not every task needs AI, and not every AI task needs the same approach.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "2. Description",
    subtitle: "Effectively Prompting AI Systems",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-green-50 p-4 md:p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl md:text-2xl font-bold text-green-900 mb-4">What is Description?</h3>
          <p className="text-lg text-gray-700">
            Description means clearly communicating your goals, context, and requirements to AI systems to prompt useful behavior and output.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Essential Elements:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Clear and specific instructions</li>
              <li>• Relevant context and background information</li>
              <li>• Desired format and structure of outputs</li>
              <li>• Examples when needed (few-shot prompting)</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Prompting Techniques:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Be explicit about your expertise level</li>
              <li>• Provide constraints and requirements</li>
              <li>• Use iterative refinement to improve outputs</li>
              <li>• Specify tone, style, and audience</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-sm italic text-green-900">
            <strong>Key Insight:</strong> Better descriptions produce better outputs. Subject-matter expertise helps you write effective prompts.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "3. Discernment",
    subtitle: "Assessing AI Outputs & Behaviors",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 md:p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl md:text-2xl font-bold text-purple-900 mb-4">What is Discernment?</h3>
          <p className="text-lg text-gray-700">
            Discernment means accurately evaluating the quality, accuracy, and usefulness of AI outputs and behavior.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Critical Evaluation Skills:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Fact-checking and verifying AI outputs</li>
              <li>• Recognizing potential biases or limitations</li>
              <li>• Identifying hallucinations or fabricated information</li>
              <li>• Assessing relevance and quality for your specific needs</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">What to Watch For:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Overconfident or unsupported claims</li>
              <li>• Missing context or nuance</li>
              <li>• Outdated information (knowledge cutoffs)</li>
              <li>• Misalignment with your actual goals</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-sm italic text-purple-900">
            <strong>Critical Point:</strong> Treat AI outputs as drafts that need human review. Your expertise is essential for evaluating them properly.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "4. Diligence",
    subtitle: "Taking Responsibility for AI Use",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-orange-50 p-4 md:p-6 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-xl md:text-2xl font-bold text-orange-900 mb-4">What is Diligence?</h3>
          <p className="text-lg text-gray-700">
            Diligence means taking responsibility for what we do with AI, how we use it, and the impacts of our AI-assisted work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-2">Ethical Responsibilities:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Transparency about AI use when appropriate</li>
              <li>• Respecting privacy, copyright, and data security</li>
              <li>• Considering societal and environmental impacts</li>
              <li>• Being accountable for AI-generated outputs</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-2">Practical Actions:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Document your AI workflows and decisions</li>
              <li>• Maintain human oversight and accountability</li>
              <li>• Stay informed about organizational AI policies</li>
              <li>• Consider long-term implications of AI use</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-100 p-4 rounded-lg">
          <p className="text-sm italic text-orange-900">
            <strong>Remember:</strong> You remain accountable for the work you do with AI assistance. Diligence keeps AI use responsible, ethical, and safe.
          </p>
        </div>
      </div>
    )
  },
];
