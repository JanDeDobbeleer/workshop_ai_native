# Deck knowledge base

Curated Markdown that gives the **deck AI assistant** background, definitions, and source
links that are truncated, hidden inside component props, or only present as `href` attributes
on the slides themselves. The assistant searches these files with its `lookupKnowledge` tool
(see `src/agent/navigationTools.ts`) and can also surface them through `findSlides`.

Nothing here is rendered in the slideshow. It is agent-only data, loaded at build time via
Vite `import.meta.glob('../knowledge/**/*.md', { query: '?raw', ... })` in
`src/utils/knowledgeBase.ts`.

## Layout

```
src/knowledge/<section-slug>/
  _section.md            # one per section: overview + every external link in the section
  <NN>-<slide-slug>.md   # optional per-slide files (seed sections only)
```

- **Section slug** = the section `name` from `src/slides/deck.ts` `sections[]`, lowercased,
  with `&` → `and`, spaces → `-`, and any other punctuation stripped.
  Examples: `MCP` → `mcp`, `Agents & Skills` → `agents-and-skills`, `LLM Basics` → `llm-basics`,
  `Spec Kit` → `spec-kit`, `4D Fluency` → `4d-fluency`, `Terminal Agents` → `terminal-agents`,
  `Multi-Agent` → `multi-agent`, `Agent SDKs` → `agent-sdks`.
- **NN** = the 1-based ordinal of the slide within its section's array (count **every** slide
  object, including empty-title divider slides), zero-padded to two digits.
- **slide-slug** = the slide title lowercased and hyphenated, or `divider` for an empty-title
  slide that is still worth a file (e.g. it carries source links).

## File format

Every file begins with a front-matter block fenced by a line containing exactly `---`, then
`key: value` lines, then a closing line containing exactly `---`, then the Markdown body:

```
---
section: MCP
scope: slide
slide: 3
title: What is MCP?
tags: mcp, protocol, anthropic, usb-c
sources: https://modelcontextprotocol.io, https://registry.modelcontextprotocol.io
---
Body prose. Explain the concept in plain language, add the background/detail that is not
already visible on the slide, and describe what each source link covers.
```

Front-matter keys the loader understands:

| Key       | Required            | Meaning |
|-----------|---------------------|---------|
| `section` | yes                 | Exact section name string from `deck.ts` (used to resolve the slide). |
| `scope`   | no (default `slide`)| `slide` maps to one slide; `section` maps to the section's title slide / whole section. |
| `slide`   | when `scope: slide` | 1-based ordinal within the section. |
| `title`   | no                  | Human title; also weighted higher in search. |
| `tags`    | no                  | Comma-separated keywords. |
| `sources` | no                  | Comma-separated URLs (harvested from the slide's links + relevant references). |

`tags` and `sources` are comma-separated on a single line. Unknown keys are ignored. A file
with no front-matter fence is treated as a pure body (still searchable, but not mapped to a
slide).

## How the mapping resolves

The loader builds a `name → section` map from `sectionData` in `src/slides/deck.ts`:

- `scope: section` → the section's `startIndex` (its title slide).
- `scope: slide` → `startIndex + (slide - 1)`, provided it stays within the section.
- An unknown section name or an out-of-range `slide` leaves the entry unmapped
  (`slideIndex: -1`); it stays searchable and logs a `console.warn` in dev so you can fix the
  ordinal.

## Adding more

1. Create `src/knowledge/<section-slug>/` if it does not exist.
2. Add `_section.md` (`scope: section`) with a short overview and the section's links.
3. For per-slide depth, read the matching `src/sections/<file>.tsx`, count slide objects to get
   the ordinal, and add `<NN>-<slide-slug>.md`.
4. Run `npm run dev` and watch the console for unresolved-mapping warnings.

Seeded so far: `_section.md` for every section, plus per-slide files for the three densest
sections — **MCP**, **Context**, and **Instructions**. Extend the rest the same way.
