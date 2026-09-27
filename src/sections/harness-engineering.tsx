import { Wrench } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';
import { SlideType } from './types';

const gofmtHook = `{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{
        "type": "command",
        "command": "jq -r '.tool_input.file_path | select(endswith(\\".go\\"))' | xargs -r gofmt -w"
      }]
    }]
  }
}`;

export const harnessEngineeringSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Wrench className="w-16 h-16 md:w-20 md:h-20 text-amber-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-amber-900 text-center">
          Harness Engineering
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Humans steer. Agents execute.
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
          <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
          <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "What Is a Harness?",
    subtitle: "The layer around the model",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">The Layer Around the Model</h3>
          <p className="text-lg text-gray-700">
            A harness wraps a model and manages its context, tool access, verification, and safety. It decides what the model sees, what it can do, and when it stops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Same Model, Different Product</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• The same Claude model powers chat, Claude Code, and API integrations</li>
              <li>• The harness is the difference</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Why It Matters</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• At 95% success per step, a 20-step task finishes only 36% of the time</li>
              <li>• OpenAI's Codex harness: ~5 months, ~1M lines of code, ~1,500 merged PRs, 3 engineers growing to 7, zero hand-written code</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-100 p-4 rounded-lg">
          <p className="text-sm italic text-amber-900">
            <strong>Key Insight:</strong> When the agent struggles, ask &quot;what capability is missing, and how do we make it both legible and enforceable for the agent?&quot; (OpenAI). Caveat: results depend on investing in the repo's tooling. They don't transfer for free.
          </p>
        </div>

        <p className="text-sm italic text-gray-700">
          <strong>Source:</strong> OpenAI, &quot;Harness engineering&quot; (Feb 2026); <a href="https://harness-engineering.ai" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">harness-engineering.ai</a> guide.
        </p>
      </div>
    )
  },
  {
    title: "Step 1: The Repo Is the System of Record",
    subtitle: "If the agent can't see it, it doesn't exist",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">A Map, Not a Manual</h3>
          <p className="text-lg text-gray-700">
            An AGENTS.md of about 100 lines is a table of contents pointing into <code className="bg-white px-1 rounded text-sm">docs/</code>: design docs, execution plans, product specs, references, and <code className="bg-white px-1 rounded text-sm">ARCHITECTURE.md</code>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Why One Giant AGENTS.md Fails</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• It crowds out the actual task</li>
              <li>• When everything is important, nothing is</li>
              <li>• It goes stale</li>
              <li>• It's hard to verify</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Plans Are Checked-In Artifacts</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Progress and decision logs live in the repo, not in someone's head</li>
              <li>• Slack threads and Google Docs are invisible to the agent</li>
              <li>• If the agent can't see it, it doesn't exist</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-100 p-4 rounded-lg">
          <p className="text-sm italic text-amber-900">
            <strong>Remember:</strong> See the Instructions (Thin-Pointer) and Habitat sections for how to write these files well.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Step 2: Mechanical Enforcement + Feedback Hooks",
    subtitle: "Checks that always run",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Enforce Invariants, Not Implementations</h3>
          <p className="text-lg text-gray-700">
            Custom linters and structural tests check invariants. Write lint error messages as fix instructions: error messages are prompts. Hooks make checks &quot;always happen rather than relying on the LLM to choose to run them&quot; (Claude Code docs).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">After Every Edit</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Claude Code: <code className="bg-gray-100 px-1 rounded text-sm">PostToolUse</code> with matcher <code className="bg-gray-100 px-1 rounded text-sm">Edit|Write</code> runs a formatter/linter</li>
              <li>• Exit code 2 sends stderr back to Claude</li>
              <li>• Copilot's <code className="bg-gray-100 px-1 rounded text-sm">postToolUse</code> can return extra context the model sees</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Don't Stop Until Checks Pass</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Claude Code's <code className="bg-gray-100 px-1 rounded text-sm">Stop</code> hook blocks; Copilot's <code className="bg-gray-100 px-1 rounded text-sm">agentStop</code> &quot;block&quot; decision forces another turn with the reason as the next prompt</li>
              <li>• Both give up after 8 consecutive blocks; check <code className="bg-gray-100 px-1 rounded text-sm">stop_hook_active</code></li>
              <li>• Config: Claude Code <code className="bg-gray-100 px-1 rounded text-sm">.claude/settings.json</code> (commit it); Copilot <code className="bg-gray-100 px-1 rounded text-sm">.github/hooks/*.json</code></li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-100 p-4 rounded-lg">
          <p className="text-sm italic text-amber-900">
            <strong>Also from OpenAI:</strong> make the running app legible to the agent (boot it, inspect the UI, query logs and metrics) and let agents review each other's changes.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Step 3: Safety Gates, Context, Cleanup",
    subtitle: "Block, brief, and keep tidy",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Block Before It Runs</h3>
          <p className="text-lg text-gray-700">
            <code className="bg-white px-1 rounded text-sm">PreToolUse</code> (Claude Code) / <code className="bg-white px-1 rounded text-sm">preToolUse</code> (Copilot) can deny with a reason the agent sees, e.g. <code className="bg-white px-1 rounded text-sm">rm -rf</code>, edits to <code className="bg-white px-1 rounded text-sm">.env</code> or <code className="bg-white px-1 rounded text-sm">.git/</code>. Copilot command hooks fail closed. Not a hard wall: for strict allow/deny, use the permission system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Load Context at Session Start</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <code className="bg-gray-100 px-1 rounded text-sm">SessionStart</code> (Claude Code): plain stdout becomes context, e.g. re-inject conventions after compaction</li>
              <li>• <code className="bg-gray-100 px-1 rounded text-sm">sessionStart</code> (Copilot): via <code className="bg-gray-100 px-1 rounded text-sm">additionalContext</code></li>
              <li>• Static rules stay in AGENTS.md; hooks are for dynamic context</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Garbage Collection (OpenAI)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Encode &quot;golden principles&quot; in the repo</li>
              <li>• Recurring background agents scan for drift and open small refactor PRs</li>
              <li>• Replaced Friday &quot;AI slop&quot; cleanup that took 20% of the week</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-100 p-4 rounded-lg">
          <p className="text-sm italic text-amber-900">
            <strong>Key Insight:</strong> &quot;When documentation falls short, we promote the rule into code.&quot; (OpenAI)
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Demo: oh-my-posh + a Hook from the Docs",
    subtitle: "Signal and reviewer from the repo, hook from the docs (the repo has none yet)",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">Objective Signal</h4>
            <p className="text-sm text-gray-700 mb-2">AGENTS.md's Key Commands, run from <code className="bg-gray-100 px-1 rounded text-xs">src/</code>:</p>
            <code className="block bg-gray-900 text-green-400 text-xs p-2 rounded">go test ./...<br/>golangci-lint run</code>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-2">architecture.agent.md</h4>
            <p className="text-sm text-gray-700">
              A committed review agent checks nesting depth, hot-path I/O, Law-of-Demeter dot chains, and primitive obsession: the same checklist every time, not whatever a reviewer happens to remember.
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-amber-200">
          <h4 className="font-semibold text-amber-900 mb-1">New: a PostToolUse Hook</h4>
          <p className="text-sm text-gray-700 mb-2">
            <code className="bg-gray-100 px-1 rounded text-xs">.claude/settings.json</code>: runs <code className="bg-gray-100 px-1 rounded text-xs">gofmt</code> on the Go file the agent just touched, using the path from the hook's stdin JSON (<code className="bg-gray-100 px-1 rounded text-xs">tool_input.file_path</code>):
          </p>
          <CodeBlock
            code={gofmtHook}
            className="bg-gray-900 p-3 rounded font-mono text-xs text-green-400 overflow-x-auto"
          >
            <pre>{gofmtHook}</pre>
          </CodeBlock>
        </div>

        <div className="bg-amber-100 p-4 rounded-lg">
          <p className="text-sm italic text-amber-900">
            <strong>This is Step 2 wiring:</strong> every edit gets checked without the agent having to remember. Copilot: same idea in <code className="bg-amber-50 px-1 rounded">.github/hooks/*.json</code>.
          </p>
        </div>
      </div>
    )
  }
];
