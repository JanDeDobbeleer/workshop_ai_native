import {
  Sparkles,
  BookOpen,
  Code2,
  Github,
  Newspaper,
  MessagesSquare,
  FileQuestion,
  Layers,
  Cpu,
  MessageSquare,
  RefreshCw,
  Server,
  CheckCircle2,
} from 'lucide-react';
import { SlideType } from './types';

function ConceptHeader({ badge }: { badge: string }) {
  return (
    <div className="mb-6">
      <span className="inline-block px-4 py-1.5 rounded-full border border-gray-300 text-xs font-bold tracking-wide text-gray-700 bg-white">
        {badge}
      </span>
    </div>
  );
}

function LayerBox({ label }: { label: string }) {
  return (
    <div className="w-72 md:w-96 rounded-lg border border-indigo-300 bg-white shadow-sm p-2 flex items-center space-x-2">
      <span className="text-xs font-bold text-gray-500 w-16 shrink-0">{label}</span>
      <div className="flex-1 grid grid-cols-2 gap-2">
        <div className="bg-indigo-100 text-indigo-800 text-[10px] font-semibold rounded py-1 text-center">Attention</div>
        <div className="bg-purple-100 text-purple-800 text-[10px] font-semibold rounded py-1 text-center">Feed-Forward</div>
      </div>
    </div>
  );
}

function TokenChip({ children, dim }: { children: string; dim?: boolean }) {
  return (
    <span
      className={`inline-block px-2.5 py-1.5 rounded-md border font-mono text-sm md:text-base ${
        dim ? 'bg-white border-gray-200 text-gray-500' : 'bg-indigo-50 border-indigo-300 text-indigo-900'
      }`}
    >
      {children}
    </span>
  );
}

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
          Nobody programmed an LLM to write code. It emerged from one simple objective, repeated at enormous scale.
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
    title: "What is an LLM?",
    subtitle: "Large language models & the transformer",
    content: (
      <div className="flex flex-col space-y-4 md:space-y-6 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-4 md:p-5 rounded-lg border-l-4 border-indigo-500">
          <h4 className="font-bold text-indigo-900 mb-2 text-sm md:text-base">Large Language Models (LLMs)</h4>
          <ul className="text-gray-700 space-y-2 text-sm md:text-base">
            <li className="flex"><span className="mr-2">•</span><span>AI systems trained on huge amounts of text to understand and generate human-like language</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Learn patterns, grammar, facts, and reasoning abilities from their training data</span></li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-4 md:p-5 rounded-lg border-l-4 border-indigo-500">
          <h4 className="font-bold text-indigo-900 mb-2 text-sm md:text-base">The Transformer</h4>
          <ul className="text-gray-700 space-y-2 text-sm md:text-base">
            <li className="flex"><span className="mr-2">•</span><span>GPT: Generative Pre-trained Transformer, introduced in 2017</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Uses "attention" to weigh which surrounding words matter for understanding each word</span></li>
            <li className="flex"><span className="mr-2">•</span><span>Processes entire sequences in parallel, not word by word</span></li>
          </ul>
        </div>

        <div className="bg-indigo-100 px-4 md:px-6 py-3 md:py-4 rounded-lg">
          <p className="text-center text-indigo-900 text-sm md:text-base">
            <strong>What's next:</strong> six steps turn raw text into a model that talks back.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "It's really a long pipeline.",
    subtitle: "Data → Tokens → Transformer → Pre-training → Post-training → Serving",
    content: (
      <div className="max-w-2xl mx-auto">
        <ConceptHeader badge="THE QUESTION" />
        <div className="relative pl-10 mt-2">
          <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gray-200" />
          {[
            { n: 1, icon: <FileQuestion className="w-4 h-4" />, label: 'DATA', sub: 'collect & clean text' },
            { n: 2, icon: <Code2 className="w-4 h-4" />, label: 'TOKENS', sub: 'text becomes numbers' },
            { n: 3, icon: <Layers className="w-4 h-4" />, label: 'TRANSFORMER', sub: 'the model itself' },
            { n: 4, icon: <RefreshCw className="w-4 h-4" />, label: 'PRE-TRAINING', sub: 'predict the next token' },
            { n: 5, icon: <MessageSquare className="w-4 h-4" />, label: 'POST-TRAINING', sub: 'learn to be an assistant' },
            { n: 6, icon: <Server className="w-4 h-4" />, label: 'SERVING', sub: 'run it for millions' },
          ].map((step) => (
            <div key={step.n} className="relative mb-3">
              <div
                className={`absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step.n === 1 ? 'bg-indigo-600 text-white' : 'bg-white border-2 border-gray-200 text-gray-500'
                }`}
              >
                {step.n}
              </div>
              <div
                className={`flex items-center space-x-3 p-4 rounded-lg border ${
                  step.n === 1 ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 bg-white'
                }`}
              >
                <span className="text-gray-600">{step.icon}</span>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{step.label}</div>
                  <div className="text-xs text-gray-500">{step.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Books, web pages, code, forums...",
    subtitle: "Raw material for pre-training",
    content: (
      <div className="max-w-3xl mx-auto">
        <ConceptHeader badge="DATA" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
          {[
            { icon: <BookOpen className="w-5 h-5" />, label: 'Books', ex: '"Chapter 1. The river ran high that spring..."' },
            { icon: <Newspaper className="w-5 h-5" />, label: 'Web pages', ex: '"How to fix a slow laptop: 1. Restart it..."' },
            { icon: <Github className="w-5 h-5" />, label: 'Code', ex: 'def add(a, b): return a + b' },
            { icon: <Newspaper className="w-5 h-5" />, label: 'Articles', ex: '"We map the ocean floor in more detail..."' },
            { icon: <MessagesSquare className="w-5 h-5" />, label: 'Forums', ex: 'Q: Why won\'t my loop end? A: You never increment i.' },
          ].map((c) => (
            <div key={c.label} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <div className="flex items-center space-x-2 text-gray-800 mb-2">
                {c.icon}
                <span className="font-bold">{c.label}</span>
              </div>
              <p className="text-xs text-gray-500 font-mono">{c.ex}</p>
            </div>
          ))}
          <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4">
            <span className="text-gray-400 font-semibold text-sm">+ Reference</span>
          </div>
        </div>
        <div className="mt-4 bg-indigo-100 px-4 py-3 rounded-lg text-center text-sm text-indigo-900">
          <strong>FineWeb</strong>, one open dataset, holds about 15 trillion tokens of web text.
        </div>
      </div>
    )
  },
  {
    title: "Filter out low-quality content.",
    subtitle: "Duplicates, spam, and garbage get cut",
    content: (
      <div className="max-w-3xl mx-auto">
        <ConceptHeader badge="DATA" />
        <div className="space-y-2 mt-2">
          <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-700 text-sm">The Nile is the longest river in Africa.</div>
          <div className="bg-white p-3 rounded-lg border border-gray-200 font-mono text-sm text-gray-700">def add(a, b): return a + b</div>
          <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-700 text-sm">Paris is the capital of France.</div>
          <div className="bg-gray-100 p-3 rounded-lg border border-gray-200 flex items-center justify-between">
            <span className="text-gray-400 line-through text-sm">The Nile is the longest river in Africa.</span>
            <span className="text-xs font-bold text-red-600 border border-red-400 rounded px-2 py-0.5 bg-white">DUPLICATE</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200">
            <span className="text-gray-400 line-through text-sm">BUY NOW!!! best price click here click here</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200 font-mono text-xs text-gray-400">
            {"</div></div>&nbsp;&nbsp; \\x00\\x00 ???"}
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-700 text-sm">Water boils at 100 degrees at sea level.</div>
        </div>
      </div>
    )
  },
  {
    title: "A sentence gets broken into tokens.",
    subtitle: "LLMs don't read text the way humans do.",
    content: (
      <div className="max-w-3xl mx-auto">
        <ConceptHeader badge="TOKENS" />
        <div className="flex flex-wrap gap-2 mb-6 mt-2">
          {['LL', 'Ms', '·don', "'t", '·read', '·text', '·the', '·way', '·humans', '·do', '.'].map((t, i) => (
            <TokenChip key={i} dim={![2, 4].includes(i)}>{t}</TokenChip>
          ))}
        </div>
        <div className="text-5xl font-bold text-indigo-600 mb-2">11 tokens</div>
        <div className="inline-block bg-gray-100 px-3 py-1.5 rounded text-xs text-gray-600 font-mono">
          GPT-2's real tokenizer · a leading space is part of the token (shown as ·)
        </div>
      </div>
    )
  },
  {
    title: "Each id becomes a vector: an embedding.",
    subtitle: "From ids to vectors of numbers",
    content: (
      <div className="max-w-3xl mx-auto">
        <ConceptHeader badge="TOKENS" />
        <div className="grid grid-cols-5 gap-3 mt-2">
          {[
            { t: '·read', id: 1100, on: false },
            { t: '·text', id: 2420, on: true },
            { t: '·the', id: 262, on: false },
            { t: '·way', id: 835, on: true },
            { t: '·humans', id: 5384, on: false },
          ].map((c) => (
            <div key={c.id} className="flex flex-col items-center w-full">
              <TokenChip dim={!c.on}>{c.t}</TokenChip>
              <div className="text-indigo-700 font-bold text-sm mt-2">{c.id}</div>
              <div className="w-full h-32 border border-dashed border-gray-300 rounded-lg mt-2 p-1.5 flex flex-col justify-evenly">
                {Array.from({ length: 8 }).map((_, j) => (
                  <div
                    key={j}
                    className={`h-1.5 rounded-full ${c.on ? 'bg-indigo-300' : 'bg-gray-200'}`}
                    style={{ width: `${30 + ((c.id + j * 37) % 60)}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Each id maps to a vector of hundreds of numbers (a few shown here). Similar meanings end up as nearby vectors: that's what the network actually works with.
        </p>
      </div>
    )
  },
  {
    title: "What does \"it\" point to?",
    subtitle: "GPT-2 layer 7, head 1 — real weights",
    content: (
      <div className="max-w-3xl mx-auto">
        <ConceptHeader badge="TRANSFORMER" />
        <p className="text-lg text-gray-700 italic mb-8 mt-2">"The programmer fixed the server because it crashed."</p>
        <div className="relative mt-10">
          <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="absolute left-0 right-0 -top-6 w-full h-6 overflow-visible">
            <path d="M81.25,24 Q68.75,-4 56.25,24" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
          </svg>
          <div className="grid grid-cols-8 gap-1 text-center border-b border-gray-300 pb-2">
            {[
              { t: 'The' }, { t: 'programmer' }, { t: 'fixed' }, { t: 'the' },
              { t: 'server' }, { t: 'because' }, { t: 'it', self: true }, { t: 'crashed' },
            ].map((w) => (
              <div key={w.t} className={`text-[10px] font-mono truncate ${w.self ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{w.t}</div>
            ))}
          </div>
          <div className="grid grid-cols-8 gap-1 text-center pt-1">
            {[
              { t: 'The', p: 10 }, { t: 'programmer', p: 2 }, { t: 'fixed', p: 16 }, { t: 'the', p: 3 },
              { t: 'server', p: 54 }, { t: 'because', p: 11 }, { t: 'it', p: 0, self: true }, { t: 'crashed', p: 4 },
            ].map((w) => (
              <div key={w.t} className="flex flex-col items-center">
                {!w.self ? (
                  <>
                    <div
                      className={`w-2/3 rounded-b ${w.p >= 40 ? 'bg-indigo-600' : w.p >= 10 ? 'bg-indigo-300' : 'bg-indigo-100'}`}
                      style={{ height: `${Math.max(w.p, 8) * 0.9}px` }}
                    />
                    <div className={`text-[10px] font-bold mt-1 ${w.p >= 40 ? 'text-indigo-700' : 'text-gray-400'}`}>{w.p}%</div>
                  </>
                ) : (
                  <div className="text-[10px] font-bold text-gray-800 mt-1">current token</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-6">54% of the attention for "it" goes to "server": that's how the model resolves what a pronoun refers to.</p>
      </div>
    )
  },
  {
    title: "Stack the same layer, over and over.",
    subtitle: "The same layer, repeated 12 times",
    content: (
      <div className="max-w-3xl mx-auto">
        <ConceptHeader badge="TRANSFORMER" />
        <div className="flex flex-col items-center space-y-1.5 mt-2">
          <div className="text-xs font-mono text-gray-400">output: next-token probabilities</div>
          <div className="text-gray-300 text-lg">↑</div>
          <LayerBox label="Layer 12" />
          <div className="text-gray-300 text-xl">⋮</div>
          <LayerBox label="Layer 2" />
          <div className="text-gray-300 text-lg">↑</div>
          <LayerBox label="Layer 1" />
          <div className="text-gray-300 text-lg">↑</div>
          <div className="text-xs font-mono text-gray-400">input: token embeddings</div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Every layer runs the same two steps: attention mixes in context from other tokens, then a feed-forward network processes each position. GPT-2 stacks 12 of these; larger models stack more.
        </p>
      </div>
    )
  },
  {
    title: "PREDICT THE NEXT TOKEN",
    subtitle: "At the start the weights are random and the model knows nothing.",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full text-center max-w-2xl mx-auto">
        <div className="w-full text-left">
          <ConceptHeader badge="PRE-TRAINING" />
        </div>
        <p className="text-gray-600 text-lg mb-10">That one task, repeated trillions of times, is pre-training.</p>
        <div className="flex items-center justify-center flex-wrap gap-3">
          <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 font-mono text-sm text-gray-700 shadow-sm">
            "The capital of Japan is"
          </div>
          <span className="text-gray-300 text-2xl">→</span>
          <div className="bg-indigo-600 text-white rounded-lg px-4 py-3 font-bold text-sm shadow">model</div>
          <span className="text-gray-300 text-2xl">→</span>
          <div className="bg-white border-2 border-dashed border-indigo-300 rounded-lg px-5 py-3 font-mono text-lg text-indigo-400">?</div>
        </div>
      </div>
    )
  },
  {
    title: "A loss function measures how wrong.",
    subtitle: "\"The capital of Japan is...\" → the model says London",
    content: (
      <div className="max-w-3xl mx-auto">
        <ConceptHeader badge="PRE-TRAINING" />
        <div className="bg-white p-5 rounded-lg shadow border border-gray-200 grid grid-cols-3 gap-6 items-center mt-2">
          <div className="col-span-2 space-y-3">
            <div className="text-xs font-bold text-gray-400">WHAT IT GUESSED NEXT</div>
            {[
              { w: 'London', p: 38, color: 'bg-red-500', text: 'text-red-600' },
              { w: 'Paris', p: 21, color: 'bg-gray-400', text: 'text-gray-600' },
              { w: 'the', p: 12, color: 'bg-gray-300', text: 'text-gray-600' },
              { w: 'Tokyo', p: 4, color: 'bg-green-500', text: 'text-green-600' },
            ].map((r) => (
              <div key={r.w} className="flex items-center space-x-3">
                <span className="w-16 text-sm text-gray-700">·{r.w}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-3">
                  <div className={`h-3 rounded-full ${r.color}`} style={{ width: `${r.p * 2}%` }} />
                </div>
                <span className={`text-sm font-bold w-10 text-right ${r.text}`}>{r.p}%</span>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <div className="text-xs font-bold text-red-700">LOSS</div>
            <div className="text-4xl font-extrabold text-red-700">3.2</div>
            <div className="text-xs text-red-500 mt-1">-log p(Tokyo)</div>
            <div className="text-[10px] text-gray-400 mt-1">0 = certain & right</div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">The model says London. The right answer, Tokyo, is correct: the loss is how confidently wrong the guess was.</p>
      </div>
    )
  },
  {
    title: "Which weights caused the error, and how do we fix them?",
    subtitle: "Nudging billions of weights, one step at a time",
    content: (
      <div className="max-w-3xl mx-auto">
        <ConceptHeader badge="PRE-TRAINING" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">🔻 Backpropagation</h4>
            <p className="text-sm text-gray-700 mb-3">The error flows backward through every layer, assigning one gradient to each weight: one gradient per weight, 124M of them in GPT-2.</p>
            <div className="flex flex-col items-center space-y-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className={`w-40 h-3 rounded border ${i >= 3 ? 'bg-red-100 border-red-300' : 'bg-gray-100 border-gray-200'}`} />
              ))}
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">⛰️ Gradient Descent</h4>
            <p className="text-sm text-gray-700 mb-3">Each weight gets nudged a little downhill on the loss surface: a small step toward less wrong, not a full correction.</p>
            <svg viewBox="0 0 160 60" className="w-full h-16">
              <path d="M0,10 Q80,70 160,10" fill="none" stroke="#c7d2fe" strokeWidth="4" />
              <circle cx="55" cy="38" r="5" fill="#4f46e5" />
            </svg>
          </div>
        </div>
        <div className="bg-indigo-100 p-4 rounded-lg mt-4 text-sm text-indigo-900 text-center">
          Repeat trillions of times, on thousands of GPUs, for weeks or months.
        </div>
      </div>
    )
  },
  {
    title: "On thousands of GPUs, for weeks or months.",
    subtitle: "Why GPUs are non-negotiable",
    content: (
      <div className="max-w-3xl mx-auto relative">
        <ConceptHeader badge="PRE-TRAINING" />
        <div className="grid grid-cols-8 gap-1.5 mb-6 mt-2 opacity-60">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className={`h-6 rounded-sm ${i % 5 === 0 ? 'bg-indigo-300' : 'bg-gray-200'}`} />
          ))}
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex items-center space-x-4">
          <Cpu className="w-8 h-8 text-green-600 shrink-0" />
          <div>
            <div className="font-bold text-gray-900">Llama 3 405B: up to 16,000 H100 GPUs</div>
            <div className="text-sm text-gray-500">15.6 trillion tokens · 30.84M GPU-hours (Meta, 2024)</div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          GPUs run thousands of matrix multiplications in parallel, exactly what embeddings, attention, and layer processing need: without them, training billion-parameter models would be impractical.
        </p>
      </div>
    )
  },
  {
    title: "So next comes post-training.",
    subtitle: "A powerful autocomplete becomes an assistant",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full text-center max-w-2xl mx-auto">
        <div className="w-full text-left">
          <ConceptHeader badge="POST-TRAINING" />
        </div>
        <MessageSquare className="w-14 h-14 text-indigo-600 mb-4" />
        <p className="text-gray-600 text-lg">A pre-trained model is a very powerful autocomplete. It doesn't yet behave like a helpful assistant.</p>
      </div>
    )
  },
  {
    title: "People, or carefully generated data, write the examples.",
    subtitle: "Curated question → answer pairs",
    content: (
      <div className="max-w-3xl mx-auto">
        <ConceptHeader badge="POST-TRAINING" />
        <div className="flex space-x-3 mb-6 mt-2">
          {['people', 'people', 'people', 'generated'].map((label, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 text-xl">
                {label === 'generated' ? '🤖' : '🧑'}
              </div>
              <span className="text-xs text-gray-500 mt-1">{label}</span>
            </div>
          ))}
        </div>
        <div className="bg-white p-5 rounded-lg shadow border border-gray-200 max-w-md">
          <div className="text-xs font-bold text-gray-400 mb-1">QUESTION</div>
          <div className="text-gray-900 mb-3">How do I reset my password?</div>
          <div className="text-xs font-bold text-indigo-500 mb-1">IDEAL ANSWER</div>
          <div className="text-indigo-700">Go to Settings, then Security, and...</div>
        </div>
        <p className="text-sm text-gray-500 mt-4">Curated question → ideal-answer pairs teach the model what a good response looks like: this is supervised fine-tuning (SFT).</p>
      </div>
    )
  },
  {
    title: "Then: reinforcement learning.",
    subtitle: "From human preference to verifiable rewards",
    content: (
      <div className="max-w-3xl mx-auto">
        <ConceptHeader badge="POST-TRAINING" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="flex items-center space-x-2 mb-2">
              <RefreshCw className="w-5 h-5 text-green-600" />
              <h4 className="font-bold text-gray-900">From Human Feedback</h4>
            </div>
            <p className="text-sm text-gray-700">Humans or automated systems compare outputs and reward the better one: more useful, accurate, and safe.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h4 className="font-bold text-gray-900">With Verifiable Rewards</h4>
            </div>
            <p className="text-sm text-gray-700">Used by reasoning models. Did the answer match? Did the tests pass? Did the agent finish the task?</p>
          </div>
        </div>
        <div className="space-y-2 mt-4">
          <div className="bg-white border border-green-200 rounded-lg p-3 flex items-center justify-between">
            <div><span className="text-xs font-bold text-gray-400">MATH</span> <span className="font-mono ml-2">17 × 24 = ?</span></div>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-300 rounded-full px-2 py-1">✓ MATCH</span>
          </div>
          <div className="bg-white border border-green-200 rounded-lg p-3 flex items-center justify-between">
            <div><span className="text-xs font-bold text-gray-400">CODE</span> <span className="font-mono ml-2">reverse([1, 2, 3])</span></div>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-300 rounded-full px-2 py-1">✓ PASSED</span>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-between">
            <div><span className="text-xs font-bold text-gray-400">AGENT</span> <span className="font-mono ml-2">book a table for two</span></div>
            <span className="text-xs text-gray-500">reservation confirmed</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "A trained model still has to run, at scale.",
    subtitle: "The last engineering problem",
    content: (
      <div className="max-w-3xl mx-auto">
        <ConceptHeader badge="SERVING" />
        <div className="grid grid-cols-2 gap-3 mb-6 mt-2">
          {[
            { t: 'Split', d: 'Spread the model across many GPUs' },
            { t: 'Quantize', d: 'Shrink weights to use less memory' },
            { t: 'Batch', d: 'Group requests together' },
            { t: 'Schedule', d: 'Serve thousands of users on the same hardware' },
          ].map((c) => (
            <div key={c.t} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <div className="flex items-center space-x-2 mb-1">
                <Server className="w-4 h-4 text-indigo-600" />
                <span className="font-bold text-gray-900 text-sm">{c.t}</span>
              </div>
              <p className="text-xs text-gray-500">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">A 405B-parameter model needs about 810 GB for its weights alone. One GPU holds 80 GB.</div>
          <div className="flex items-end space-x-3 h-16">
            <div className="flex flex-col items-center justify-end h-full">
              <div className="w-10 bg-indigo-600 rounded-t" style={{ height: '100%' }} />
              <span className="text-xs text-gray-500 mt-1">810 GB</span>
            </div>
            <div className="flex flex-col items-center justify-end h-full">
              <div className="w-10 bg-gray-300 rounded-t" style={{ height: '10%' }} />
              <span className="text-xs text-gray-500 mt-1">80 GB / GPU</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Emergence",
    subtitle: "One objective, repeated at enormous scale",
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-900 mb-2">Nobody wrote the code for this</h3>
          <p className="text-gray-700">
            Nobody programmed the ability to write Python, explain physics, or translate French. Predict what comes next, and get slightly less wrong every time: that objective, repeated at enormous scale, is where those abilities come from.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-900 mb-2 text-sm">✅ Strengths</h4>
            <ul className="text-gray-700 space-y-1.5 text-sm">
              <li>• Versatile across writing, coding, analysis, translation</li>
              <li>• Strong pattern recognition across huge context</li>
              <li>• Learns new tasks from a few examples in the prompt</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-900 mb-2 text-sm">⚠️ Weaknesses</h4>
            <ul className="text-gray-700 space-y-1.5 text-sm">
              <li>• Predicts plausible text, not guaranteed truth: hallucinations happen</li>
              <li>• Pattern matching, not genuine understanding</li>
              <li>• Training cutoffs, no persistent memory, expensive to run</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
];
