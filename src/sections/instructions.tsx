import { ScrollText } from 'lucide-react';
import { SlideType } from './types';
import { CodeBlock } from '../components/CodeBlock';
import { ToolMatrix, STANDARD_TOOL_COLUMNS } from '../components/ToolMatrix';
import { instructionsMatrixRows } from '../components/toolMatrixRows';

export const instructionsSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <ScrollText className="w-20 h-20 text-green-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 text-center">
          Instructions
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Persistent guidance — where to put it in each tool
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Custom Instructions",
      subtitle: "Concept first: persistent guidance for every session",
      content: (
        <div className="flex flex-col items-center md:justify-center md:h-full space-y-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 max-w-2xl">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">📋</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Context That Persists</h3>
                <p className="text-gray-400">Define standards once — every agent session inherits them automatically</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl px-4 md:px-0">
            <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">🎯 Three Concepts (not filenames)</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Project-wide rules</strong> — apply everywhere in the repo</li>
                <li>• <strong>Scoped rules</strong> — only for certain files or folders</li>
                <li>• <strong>Cross-tool convention</strong> — one file multiple tools read</li>
              </ul>
            </div>

            <div className="bg-white p-4 md:p-5 rounded-lg shadow border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">✨ Why They Matter</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Consistent AI responses across sessions</li>
                <li>• No need to repeat context every prompt</li>
                <li>• Team-wide shared understanding</li>
                <li>• Version controlled with your code</li>
                <li>• Works across Cursor, Claude, Copilot, and more</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 px-6 py-4 rounded-lg max-w-2xl">
            <p className="text-center text-blue-900">
              <strong>Next:</strong> The matrix slide maps each concept to the right path in your tool.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Where Do I Put Instructions?",
      subtitle: "Same capability — different paths per tool",
      content: (
        <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-gray-700">
              Rows are <strong>concepts</strong>. Columns are <strong>tools</strong>. Find your column — that is where you put project standards.
            </p>
          </div>
          <ToolMatrix
            columns={STANDARD_TOOL_COLUMNS}
            rows={instructionsMatrixRows}
            footnote={
              <>
                <strong>Callouts:</strong> <code className="bg-gray-200 px-1 rounded">.cursorrules</code> is deprecated → use{' '}
                <code className="bg-gray-200 px-1 rounded">.cursor/rules/</code>. Devin still reads legacy{' '}
                <code className="bg-gray-200 px-1 rounded">.windsurfrules</code> during transition.
              </>
            }
          />
        </div>
      )
    },
    {
      title: "Instruction File Types",
      subtitle: "Copilot-specific filenames (one column in the matrix)",
      content: (
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-5">
            {/* copilot-instructions.md */}
            <div className="bg-white p-5 rounded-lg shadow border-l-4 border-blue-500">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">.github/copilot-instructions.md</code>
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">Global</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">Single file that applies to <strong>all</strong> chat requests in your workspace automatically.</p>
                  <p className="text-gray-500 text-xs">✓ Works in VS Code, Visual Studio, and GitHub.com</p>
                </div>
              </div>
            </div>

            {/* .instructions.md */}
            <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-500">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <code className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">*.instructions.md</code>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Conditional</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">Multiple files with <strong>glob patterns</strong> — apply different rules to different file types.</p>
                  <p className="text-gray-500 text-xs">✓ e.g., applyTo: "**/*.py" for Python-specific guidelines</p>
                </div>
              </div>
            </div>

            {/* AGENTS.md */}
            <div className="bg-white p-5 rounded-lg shadow border-l-4 border-purple-500">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <code className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-mono">AGENTS.md</code>
                    <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded">Multi-Agent</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">Universal format for <strong>multiple AI agents</strong> — Copilot, Claude Code, and others.</p>
                  <p className="text-gray-500 text-xs">✓ Root or subfolders for different project areas (experimental)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 Tip:</strong> All files are combined when sent to the AI. Use <code className="bg-gray-200 px-1 rounded">copilot-instructions.md</code> for project-wide rules, <code className="bg-gray-200 px-1 rounded">.instructions.md</code> for language-specific, and <code className="bg-gray-200 px-1 rounded">AGENTS.md</code> for cross-tool compatibility.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Writing Instructions",
      subtitle: "Anatomy of an Effective Instructions File",
      content: (
        <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {/* Code example */}
            <CodeBlock
              code={`# Project Guidelines

## Code Style
- Use TypeScript for all new code
- Prefer functional components
- Use Tailwind CSS for styling

## Conventions
- File names: kebab-case
- Components: PascalCase
- Functions: camelCase

## Project Structure
- Components in /src/components
- Hooks in /src/hooks
- Types in /src/types

## Testing
- Write tests for all new features
- Use React Testing Library`}
              className="bg-gray-900 p-4 rounded-lg"
            >
              <p className="text-gray-400 text-xs mb-2 font-mono">.github/copilot-instructions.md</p>
              <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
{`# Project Guidelines

## Code Style
- Use TypeScript for all new code
- Prefer functional components
- Use Tailwind CSS for styling

## Conventions
- File names: kebab-case
- Components: PascalCase
- Functions: camelCase

## Project Structure
- Components in /src/components
- Hooks in /src/hooks
- Types in /src/types

## Testing
- Write tests for all new features
- Use React Testing Library`}
              </pre>
            </CodeBlock>

            {/* Tips */}
            <div className="flex flex-col space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">✅ Do</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Keep instructions short & specific</li>
                  <li>• Use natural language</li>
                  <li>• Organize with Markdown headers</li>
                  <li>• Include examples when helpful</li>
                  <li>• Version control your instructions</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">❌ Don't</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Write essays — be concise</li>
                  <li>• Include sensitive information</li>
                  <li>• Contradict yourself</li>
                  <li>• Expect 100% compliance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-sm italic text-blue-900">
              <strong>Pro Tip:</strong> VS Code can generate instructions automatically! Use <strong>Configure Chat → Generate Chat Instructions</strong> to create a starting point based on your codebase.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Stop Repeating Yourself",
      subtitle: "Reusable Prompt Files in VS Code",
      content: (
        <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
          <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
            <h3 className="text-sm font-bold text-green-900 mb-1">What are Prompt Files?</h3>
            <p className="text-sm text-gray-700">
              Markdown files that define reusable prompts for common development tasks. Run them on-demand in chat to ensure consistent, high-quality AI interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-sm text-green-900 mb-2">📄 File Structure (.prompt.md)</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Conventionally stored in <code className="bg-gray-100 px-1 rounded">.github/prompts/</code></li>
                <li>• YAML frontmatter for metadata (description, agent, tools)</li>
                <li>• Markdown body with instructions and guidelines</li>
                <li>• Variables: <code className="bg-gray-100 px-1 rounded">{'${selection}'}</code>, <code className="bg-gray-100 px-1 rounded">{'${file}'}</code>, <code className="bg-gray-100 px-1 rounded">{'${input:name}'}</code></li>
              </ul>
            </div>

            <div className="bg-white p-3 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-sm text-green-900 mb-2">🚀 How to Use</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Type <code className="bg-gray-100 px-1 rounded">/prompt-name</code> in chat to run</li>
                <li>• Add extra context after the command</li>
                <li>• Use play button in editor to test prompts</li>
                <li>• Workspace or user-scoped (synced across devices)</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-sm text-green-900 mb-2">💡 Example Use Cases</h4>
              <div className="flex justify-around text-sm text-gray-700">
                <div className="text-center"><span className="text-xl">⚛️</span><div>React components</div></div>
                <div className="text-center"><span className="text-xl">🔒</span><div>Security reviews</div></div>
                <div className="text-center"><span className="text-xl">📚</span><div>API docs</div></div>
              </div>
            </div>

            <div className="bg-green-100 p-3 rounded-lg flex items-center">
              <p className="text-sm italic text-green-900">
                <strong>Pro Tip:</strong> Use Markdown links to reference custom instructions rather than duplicating guidelines.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Conditional Instructions",
      subtitle: "Apply Different Rules to Different Files",
      content: (
        <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-gray-700">
              Use <code className="bg-green-100 px-1 rounded">.instructions.md</code> files with YAML frontmatter to apply instructions only when working with specific file types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Python example */}
            <CodeBlock
              code={`---
applyTo: "**/*.py"
description: "Python coding standards"
---
# Python Guidelines

- Follow PEP 8 style guide
- Use type hints for all functions
- Docstrings for public methods
- Use pytest for testing
- Prefer pathlib over os.path`}
              className="bg-gray-900 p-4 rounded-lg"
            >
              <p className="text-green-400 text-xs mb-2 font-mono">python-standards.instructions.md</p>
              <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
{`---
applyTo: "**/*.py"
description: "Python coding standards"
---
# Python Guidelines

- Follow PEP 8 style guide
- Use type hints for all functions
- Docstrings for public methods
- Use pytest for testing
- Prefer pathlib over os.path`}
              </pre>
            </CodeBlock>

            {/* React example */}
            <CodeBlock
              code={`---
applyTo: "src/components/**/*.tsx"
description: "React component standards"
---
# React Components

- Use functional components only
- Props interface above component
- Destructure props in signature
- Use custom hooks for logic
- Memoize expensive calculations`}
              className="bg-gray-900 p-4 rounded-lg"
            >
              <p className="text-blue-400 text-xs mb-2 font-mono">react-components.instructions.md</p>
              <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
{`---
applyTo: "src/components/**/*.tsx"
description: "React component standards"
---
# React Components

- Use functional components only
- Props interface above component
- Destructure props in signature
- Use custom hooks for logic
- Memoize expensive calculations`}
              </pre>
            </CodeBlock>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">📁 Storage Locations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-700">Workspace (project-specific):</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block mt-1">.github/instructions/</code>
              </div>
              <div>
                <p className="font-medium text-gray-700">User profile (all projects):</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block mt-1">~/.vscode/instructions/</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AGENTS.md",
      subtitle: "Universal Instructions for Multiple AI Tools",
      content: (
        <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <p className="text-gray-700">
              <code className="bg-purple-100 px-1 rounded font-mono">AGENTS.md</code> is a convention that works across multiple AI coding assistants — GitHub Copilot, Claude Code, Cursor, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <CodeBlock
              code={`# AI Agent Instructions

## Project Overview
This is a React + TypeScript app
for workshop presentations.

## Architecture
- Single-page application
- Tailwind CSS for styling
- No external UI libraries

## Code Generation Rules
- Always use TypeScript
- Prefer const over let
- Use descriptive variable names
- Include error handling

## File Structure
- slides.tsx contains all slides
- Each slide is an object in array`}
              className="bg-gray-900 p-4 rounded-lg"
            >
              <p className="text-purple-400 text-xs mb-2 font-mono">AGENTS.md (root)</p>
              <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
{`# AI Agent Instructions

## Project Overview
This is a React + TypeScript app
for workshop presentations.

## Architecture
- Single-page application
- Tailwind CSS for styling
- No external UI libraries

## Code Generation Rules
- Always use TypeScript
- Prefer const over let
- Use descriptive variable names
- Include error handling

## File Structure
- slides.tsx contains all slides
- Each slide is an object in array`}
              </pre>
            </CodeBlock>

            <div className="flex flex-col space-y-4">
              <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">🔄 Cross-Tool Benefits</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Same file works in VS Code & Claude</li>
                  <li>• Team consistency across tools</li>
                  <li>• Easy migration between AI assistants</li>
                  <li>• One source of truth</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">📂 Nested Files (Experimental)</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <code className="bg-gray-100 px-1 rounded">/frontend/AGENTS.md</code></li>
                  <li>• <code className="bg-gray-100 px-1 rounded">/backend/AGENTS.md</code></li>
                  <li>• <code className="bg-gray-100 px-1 rounded">/tests/AGENTS.md</code></li>
                  <li className="text-gray-500 text-xs mt-1">Enable: chat.useNestedAgentsMdFiles</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="text-sm italic text-orange-900">
              <strong>Recommendation:</strong> Use <code className="bg-orange-200 px-1 rounded">AGENTS.md</code> for broad project context and AI-agnostic rules, <code className="bg-orange-200 px-1 rounded">copilot-instructions.md</code> for Copilot-specific features.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Getting Started with Instructions",
      subtitle: "Building Your Foundation",
      content: (
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Start with Best Practices</h3>
            <p className="text-lg text-gray-700">
              Begin with widely available best-practice instructions as your baseline. You don't need to start from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Key Principles:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Use markdown headers for emphasis and agent guidance</li>
                <li>• Keep instructions concise and to the point</li>
                <li>• Establish a baseline to understand prompting techniques</li>
                <li>• Focus on clarity over comprehensiveness</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Helpful Resources:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 🌟 <a href="https://github.com/github/awesome-copilot/tree/main/instructions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Awesome Copilot Instructions</a> - Community examples</li>
                <li>• 🤖 <strong>VS Code built-in:</strong> "Generate Workspace Instructions File"</li>
                <li>• 📖 Learn from examples in open source projects</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-sm italic text-blue-900">
              <strong>Goal:</strong> Establish a baseline and understand prompting techniques before customizing for your specific needs.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Generating Instructions with AI",
      subtitle: "Let AI help write your instructions",
      content: (
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-900 mb-4">AI-Generated Instructions</h3>
            <p className="text-lg text-gray-700">
              Use AI to generate and refine your custom instructions based on your repository's existing patterns and style.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">🤖 VS Code Built-in Generator:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Command: <strong>Configure Chat → Generate Chat Instructions</strong></li>
              <li>• Analyzes your codebase automatically</li>
              <li>• Creates starting point based on detected patterns</li>
              <li>• Review and customize the generated instructions</li>
            </ul>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <p className="text-center text-indigo-900">
              <strong>📖 See the Prompting section</strong> for meta prompting techniques, continuous improvement strategies, and advanced prompt refinement methods.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Continuous Improvement",
      subtitle: "Iterating on Your Instructions",
      content: (
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-900 mb-2">Build a Feedback Loop</h3>
            <p className="text-gray-700">
              After generating output, ask the model to explain deviations and adjust instructions for future tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">🔄 The Process:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Review outputs for deviations</li>
                <li>• Ask model to analyze issues</li>
                <li>• Update instructions iteratively</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">✨ Achieves:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Instructions evolve with needs</li>
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
            <p className="text-orange-400 text-xs mb-2 font-mono">Example Feedback Prompt:</p>
            <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
{`Go through our conversation and iterations we
made and implement/adjust instructions to avoid
these mistakes in the future.`}
            </pre>
          </CodeBlock>

          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="text-sm italic text-orange-900">
              <strong>Remember:</strong> Good instructions are living documents that improve through real-world usage and feedback.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "",
      subtitle: "",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-center space-y-4">
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-900">
              Live Demo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
              Explore real-world examples of instructions in action
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 max-w-3xl">
            <h3 className="text-2xl font-bold text-green-900 mb-4">📂 Example Repositories</h3>
            <p className="text-lg text-gray-700 mb-4">
              Let's explore how instructions are structured in production codebases:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">🎓 This Workshop Repository</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Instructions for building and maintaining this presentation app
                </p>
                <a
                  href="https://github.com/JanDeDobbeleer/workshop_ai_native/tree/main/.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline font-mono text-sm"
                >
                  github.com/JanDeDobbeleer/workshop_ai_native/.github →
                </a>
              </div>

              <div className="bg-white p-4 rounded-lg shadow border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">⭐ Oh My Posh</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Advanced multi-language project with comprehensive agent instructions
                </p>
                <a
                  href="https://github.com/JanDeDobbeleer/oh-my-posh/tree/main/.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline font-mono text-sm"
                >
                  github.com/JanDeDobbeleer/oh-my-posh/.github →
                </a>
              </div>
            </div>
          </div>

          <div className="flex space-x-2 mt-4">
            <div className="w-3 h-3 bg-green-300 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-300 rounded-full"></div>
          </div>
        </div>
      )
    }
];
