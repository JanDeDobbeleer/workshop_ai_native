---
title: "refactor: Capability-first workshop structure"
type: refactor
status: active
date: 2026-06-19
origin: docs/brainstorms/2026-06-19-capability-first-tool-structure-requirements.md
deepened: 2026-06-19
---

# refactor: Capability-first workshop structure

## Enhancement Summary

**Deepened on:** 2026-06-19  
**Research agents used:** repo-research-analyst, learnings-researcher, spec-flow-analyzer, framework-docs-researcher, best-practices-researcher, multi-agent architecture research

### Key Improvements

1. **Verified cross-tool paths** for all matrix rows (Instructions, Agents, Skills, MCP, Multi-Agent) — Devin Desktop uses `.devin/rules/` + `AGENTS.md`, not TBD
2. **`ToolMatrix` component spec** — hybrid row-cards on mobile, semantic table on desktop, max 6 rows per slide
3. **Multi-Agent teaching model** — five-step loop (define → delegate → parallelize → isolate → synthesize) with anti-patterns slide and expanded slide sequence (~12–14 slides)
4. **Content fix flagged:** `agents.tsx` references `.agent.md`; GitHub docs use `.github/agents/AGENT-NAME.md`

### New Considerations Discovered

- Copilot **subagents** are runtime, not file-based — matrix must distinguish custom agents (files) vs subagents (runtime)
- Global CSS hides scrollbars — matrix slides need gradient fade affordance for horizontal scroll
- `public/llms-full.txt` over-promises "agent communication" — reframe to delegation + shared workspace during implementation

## Overview

Restructure the AI Native Developer Workshop slideshow from Copilot-centric sections to a **capability-first** curriculum. Teach what to configure (instructions, agents, skills, context, MCP, orchestration) once, then show where each tool implements it via comparison matrices. Dissolve the 16-slide `copilot.tsx` section, reframe CLI/Spaces/SDK sections, and expand Multi-Agent coverage for Cursor, Codex, and Devin Desktop.

**Origin document:** [docs/brainstorms/2026-06-19-capability-first-tool-structure-requirements.md](../brainstorms/2026-06-19-capability-first-tool-structure-requirements.md)

**Key decisions carried forward (see origin):**
- Organizing axis: capability-first with tool matrices (see origin: Key Decisions)
- Dissolve Copilot section entirely; evolve in place, not full rewrite (see origin: R1, Recommended Approach)
- Instructions primary for persistent guidance; Cursor Rules / CLAUDE.md as filenames (see origin: R3)
- Matrix tools: Cursor, Claude Code, Copilot primary; Codex, Devin Desktop secondary (see origin: R4)
- Multi-agent expansion with R6a orchestration rows (see origin: R6a)
- Label **Devin Desktop** only — not Windsurf; OpenAI did not acquire it (see origin: Scope Boundaries)

## Problem Statement / Motivation

Attendees use multiple AI coding assistants with similar configuration surfaces (`AGENTS.md`, `.cursor/rules`, `.github/agents/`, etc.) but the workshop currently anchors on GitHub Copilot: a 16-slide dedicated section plus Copilot-branded CLI, SDK, and Spaces sections. Cross-tool content exists in `instructions.tsx` and `agents.tsx` but is inconsistent and Copilot-first. The curriculum should answer **"where do I put X?"** before **"which product logo?"**

## Proposed Solution

**Evolve in place:** extend existing section files with matrix slides, migrate content from `copilot.tsx`, update navigation in `main.tsx`, reframe section titles. Target **net-neutral or shorter** slide count.

### Target main-path section order

Remove Copilot block between Models and Prompting. Lock this order in `main.tsx`:

```
Introduction → Evolution → LLM Basics → 4D Fluency → Models
→ Prompting → Instructions → Agents & Skills → Context
→ Spec Kit → Security → MCP → Team Knowledge → Terminal Agents
→ Multi-Agent → Closing
[Addendum divider] → Ollama → Agent SDKs
```

### Sidebar renames (locked for implementation)

| Current name | New name | File |
|---|---|---|
| Copilot | *(removed)* | `copilot.tsx` → empty/delete |
| Team Sharing | **Team Knowledge** | `spaces.tsx` |
| Copilot CLI | **Terminal Agents** | `copilot-cli.tsx` |
| Copilot SDK | **Agent SDKs** | `sdk.tsx` |

Icons: reuse `Users`, `Terminal`, `Code`; freed `Code` icon from dissolved Copilot section.

### Agents vs Multi-Agent boundary

| Section | Owns |
|---|---|
| **Agents & Skills** | Agent/skill file formats, delegation, handoffs, approval levels, skills, single-agent patterns |
| **Multi-Agent** | Parallel execution, git worktrees, orchestration UI, cross-tool fleet management |

Copilot App slide in `multiagent.tsx` becomes one **labeled callout** row in the orchestration matrix, not a standalone vendor section.

## Technical Considerations

- **No matrix component exists today** — comparisons are inline JSX. Build reusable `ToolMatrix` in `src/components/ToolMatrix.tsx` (see spec below).
- **Slide URL breakage:** Removing 16 slides shifts all `?slide=N` indices after Models. Document old→new section start indices in PR description; no runtime redirects.
- **Viewport fit:** Matrix slides are dense — primary cell floor `text-sm` (14px); split at >6 rows per slide.
- **Section wiring:** Every change touches up to 5 files per `.github/instructions/section.instructions.md` — `*.tsx`, `index.ts`, `main.tsx` (import + `sections[]` + `slides[]`), title slide, README.
- **Spacing conflict:** Prioritize viewport fit on matrix slides over default `space-y-6` from section instructions.
- **Hidden scrollbars:** `index.css` hides scrollbars — add right-edge gradient fade on horizontally scrollable matrix tables.

### ToolMatrix Component Spec

**File:** `src/components/ToolMatrix.tsx`

**Responsive pattern:**
- **Mobile (`< md`):** Row-as-card — capability label as card header, tool values stacked inside; primary tools full contrast, secondary under "Also" divider (`text-xs text-gray-500`)
- **Desktop (`md+`):** Semantic `<table>` with sticky row-label column; secondary columns muted (`bg-gray-50/50`)

**Props:** `columns[]` (id, label, tier: primary|secondary), `rows[]` (label, group?, cells), `density`, `footnote`

**Limits:** Max 6 rows per slide; max 3 row groups; split slides by group if exceeded

**Cell kinds:** `text`, `code` (monospace), `link`, `status` (yes/no/partial/na)

**Example usage:** One `ToolMatrix` per capability aspect; replace stacked file-type cards in `instructions.tsx`

### Research Insights (ToolMatrix UX)

- Do not shrink 5 columns to `text-xs` on mobile — use row cards instead
- Vendor-first mobile cards invert capability-first narrative — row-first cards only
- Match existing deck patterns: `models.tsx` table styling, `security.tsx` mobile reflow

## Copilot Dissolution Worksheet

Audit of `src/sections/copilot.tsx` (16 slides, ~1,240 lines):

| # | Slide topic | Action | Destination | Net Δ |
|---|---|---|---|---|
| 1 | Section title "GitHub Copilot" | **Cut** | — | −1 |
| 2 | Copilot overview / abstraction | **Cut** | Universal IDE-assistant idea already in Models/Evolution | −1 |
| 3 | Ghost Text Suggestions | **Callout-only** | One bullet in Prompting or cut | −1 |
| 4 | Next Edit Suggestions | **Callout-only** | Copilot-only callout or cut | −1 |
| 5 | Language Support | **Cut** | Copilot marketing | −1 |
| 6 | Code Referencing | **Callout-only** | Security or Agents callout | −1 |
| 7 | Copilot Chat Modes (overview) | **Reframe** | `agents.tsx` — universal Ask/Plan/Agent + matrix | 0 |
| 8–10 | Ask / Plan / Agent Mode detail | **Condense** | Merge into 1 slide in `agents.tsx` | −2 |
| 11 | Choosing the Right Mode | **Migrate** | `agents.tsx` | 0 |
| 12 | Agent Approval Levels | **Migrate** | `agents.tsx` matrix row | 0 |
| 13 | Agent Handoff | **Migrate** | `agents.tsx` | 0 |
| 14 | Context-Isolated Subagents | **Cut/merge** | Dedupe with `agents.tsx` L273–316 | −1 |
| 15 | Workspace Indexing & Implicit Context | **Migrate** | `context.tsx` (dedupe existing) | 0 |
| 16 | Explicit Context | **Migrate** | `context.tsx` | 0 |

**Estimated net from copilot.tsx:** −9 slides before matrix additions.

## Matrix Slide Scope

Each matrix slide: **rows = capability concepts**, **columns = tools**.

### Primary columns (full detail)
Cursor · Claude Code · GitHub Copilot

### Secondary columns (lighter — path + brief note or "—")
Codex · Devin Desktop

### Sections requiring ≥1 matrix slide

| Section | Matrix rows (minimum) |
|---|---|
| **Instructions** | Project-wide rules path; scoped rules path; team-shared conventions |
| **Agents & Skills** | Custom agent path; delegation trigger; skills path; approval/permissions |
| **Context** | Attach context (#file, @ symbols); indexing / implicit context |
| **MCP** | MCP server config path; tool discovery |
| **Team Knowledge** | Shared knowledge base (Spaces, APM compile, shared instruction repos) |
| **Terminal Agents** | CLI entry point; cloud vs local agent |
| **Multi-Agent** | Define agents; delegate; parallel execution; isolation (worktrees) |
| **Agent SDKs** | Programmatic agent runtime (Copilot SDK primary; note gaps) |

### Instructions matrix row content (R3) — verified paths

| Concept | Cursor | Claude Code | Copilot | Codex | Devin Desktop |
|---|---|---|---|---|---|
| Project-wide rules | `.cursor/rules/*.mdc` or `AGENTS.md` | `CLAUDE.md`, `AGENTS.md` | `.github/copilot-instructions.md` | `AGENTS.md` (+ `~/.codex/AGENTS.md`) | `.devin/rules/*.md` or root `AGENTS.md` |
| Scoped / conditional | `.cursor/rules/*.mdc` (globs) | `.claude/rules/*.md` | `.github/instructions/*.instructions.md` | Nested `AGENTS.md` per directory | `.devin/rules/` (globs) or subdir `AGENTS.md` |
| Cross-tool convention | `AGENTS.md` | `AGENTS.md` | `AGENTS.md` | `AGENTS.md` | `AGENTS.md` |

**Facilitator callouts:** `.cursorrules` deprecated → `.cursor/rules/`; Devin still reads legacy `.windsurfrules` during transition.

### Agents & Skills matrix — verified paths

| Concept | Cursor | Claude Code | Copilot | Codex | Devin Desktop |
|---|---|---|---|---|---|
| Custom agents | `.cursor/agents/*.md` | `.claude/agents/*.md` | `.github/agents/*.md` | `.codex/agents/*.toml` | `.devin/agents/<name>/AGENT.md` |
| Skills | `.cursor/skills/*/SKILL.md` | `.claude/skills/*/SKILL.md` | `.github/skills/*/SKILL.md` | `.agents/skills/*/SKILL.md` | `.devin/skills/*/SKILL.md` |
| Subagents | Built-in + custom files | Built-in + custom files | Runtime subagents (no file) | TOML + `spawn_agents_on_csv` | Devin Local subagents |

**Fix during Phase 3:** Correct `agents.tsx` references from `.agent.md` to `.github/agents/AGENT-NAME.md`.

### MCP matrix — verified paths

| Concept | Cursor | Claude Code | Copilot (VS Code) | Codex | Devin Desktop |
|---|---|---|---|---|---|
| MCP config | `.cursor/mcp.json` | `.mcp.json` | `.vscode/mcp.json` | `.codex/config.toml` | `.devin/config.json` |
| User/global | `~/.cursor/mcp.json` | `~/.claude.json` | VS Code settings | `~/.codex/config.toml` | `~/.config/devin/config.json` |

### Multi-Agent orchestration matrix (R6a) — verified + teaching model

**Five-step loop (section thesis slide):** define → delegate → parallelize → isolate → synthesize

| Step | Cursor | Claude Code | Copilot | Codex | Devin Desktop |
|---|---|---|---|---|---|
| Define | `.cursor/agents/*.md` | `.claude/agents/*.md` | `.github/agents/*.md` | `.codex/agents/*.toml` | `.devin/agents/<name>/AGENT.md` |
| Delegate | Subagent spawn | Auto-delegate via `description` | Handoffs | Subagent tree | ACC / Kanban assign |
| Parallelize | `/multitask`, async subagents | Parallel subagent tree | Cloud + background sessions | `agents.max_threads` | Parallel local + cloud lanes |
| Isolate | Git worktrees | — (no official worktree doc) | Worktrees where supported | Worktrees | Git worktrees |
| Synthesize | Parent chat + human review | Parent summarizes | PR / session handback | Parent thread merge | ACC review + merge |

**Anti-patterns slide (add):** swarm by default, peer mesh fantasy, same-file parallel writers, fire-and-forget delegation, deep agent trees, replacing human review.

**Do NOT teach:** realtime agent-to-agent chat, autonomous merge to main, feature parity where unverified, "multi-agent fixes bad prompts."

**Expanded `multiagent.tsx` sequence (~12–14 slides):**
1. Title (reframe tagline)
2. Prerequisite: Agents → Orchestration (boundary slide)
3. Five-step loop
4. When multi-agent helps vs hurts
5. Cross-tool orchestration matrix (R6a)
6. Delegate: hub-and-spoke
7. Parallelize: independence test
8–12. Existing worktree slides (keep)
13. Synthesize: merge discipline
14. Orchestration surfaces (Copilot App + Devin ACC as callout rows; trim Multica if redundant)

**Secondary column caveats:** Devin ACP registry still at `~/.windsurf/acp/registry.json` in docs (legacy path); Copilot MCP outside VS Code is IDE-specific — link to GitHub MCP doc.

## Implementation Phases

### Phase 1: Foundation (no content migration yet)

- [ ] Create `ToolMatrix` component — `src/components/ToolMatrix.tsx` (required per deepen research)
- [ ] Document matrix pattern in `.github/instructions/section.instructions.md`
- [ ] Remove Copilot from `main.tsx` sidebar + slides spread (leave `copilot.tsx` file temporarily)
- [ ] Rename sidebar entries: Team Knowledge, Terminal Agents, Agent SDKs
- [ ] Update title slides in `spaces.tsx`, `copilot-cli.tsx`, `sdk.tsx`
- [ ] Verify `npm run build` passes

### Phase 2: Instructions + Context

- [ ] Add Instructions matrix slide (after "Instruction File Types" or replace it) — include `CLAUDE.md`, `.cursor/rules`
- [ ] Reframe `instructions.tsx` narrative: concept first, filenames second
- [ ] Migrate context slides from `copilot.tsx` (#15, #16) into `context.tsx`; dedupe with existing content
- [ ] Add Context matrix slide (attach context, indexing)

### Phase 3: Agents & Skills

- [ ] Add Agents matrix slide at section start
- [ ] Migrate condensed chat modes, approval levels, handoffs from `copilot.tsx`
- [ ] Dedupe subagents slide (cut copilot #14)
- [ ] Reframe Copilot/Claude dual-column blocks as matrix rows where possible
- [ ] Keep strong dual-tool detail inside matrix cells, not as separate vendor sections

### Phase 4: MCP + Reframed sections

- [ ] Add MCP support matrix slide to `mcp.tsx`
- [ ] Reframe `spaces.tsx` — Team Knowledge narrative; Spaces as one column, APM as another
- [ ] Reframe `copilot-cli.tsx` — Terminal Agents; add Claude Code CLI, Cursor agent CLI columns
- [ ] Reframe `sdk.tsx` — Agent SDKs; Copilot SDK primary, gaps for others as callouts

### Phase 5: Multi-Agent expansion

- [ ] Add prerequisite boundary slide (Agents vs Multi-Agent)
- [ ] Add five-step loop + "when it helps vs hurts" slides
- [ ] Add orchestration matrix slide per R6a (use `ToolMatrix`)
- [ ] Add anti-patterns slide + synthesize/merge discipline slide
- [ ] Reframe Copilot App slide → callout row in orchestration surfaces slide
- [ ] Keep git worktree slides (tool-agnostic **isolate** lesson)
- [ ] Trim Multica.ai if redundant with Devin Desktop ACC story
- [ ] Fix `public/llms-full.txt` "agent communication" wording

### Phase 6: Cleanup + docs

- [ ] Delete or empty `copilot.tsx`; remove from `index.ts`
- [ ] Update `README.md` section table to match `main.tsx`
- [ ] Publish slide index map (old vs new section start indices) in PR
- [ ] Spot-check deep links `?slide=N` for major sections
- [ ] Final slide count audit — target ≤122 main-path slides (was ~124, minus ~9 from copilot, plus ~6–8 matrices)

## System-Wide Impact

- **Navigation indices:** All section `startIndex` values after Models shift left by 16 when Copilot removed.
- **Addendum unchanged:** `__addendum__` sentinel before Ollama preserved; forward nav still stops at Closing.
- **Login page:** "GitHub Copilot" marketing copy unchanged unless explicitly requested (see origin: Scope Boundaries).
- **No API/backend changes:** Static React app only.

## Acceptance Criteria

### Structural (R1, R2, R8)

- [ ] No sidebar section named Copilot, Claude, or Cursor in main path
- [ ] `copilot.tsx` removed from exports and deleted or empty
- [ ] Sidebar labels: Team Knowledge, Terminal Agents, Agent SDKs
- [ ] Main-path order matches plan (Models → Prompting → Instructions → … → Multi-Agent → Closing)

### Content (R3–R7, R6a)

- [ ] Instructions section answers "where do I put project-wide standards?" for Cursor, Claude Code, and Copilot without prior tool knowledge
- [ ] Instructions matrix includes `AGENTS.md`, `.github/copilot-instructions.md`, `CLAUDE.md`, `.cursor/rules`, `*.instructions.md`
- [ ] Each capability section listed in Matrix Slide Scope has ≥1 matrix slide with primary three columns
- [ ] Multi-Agent section includes five-step loop, anti-patterns slide, and orchestration matrix covering define / delegate / parallelize / isolate / synthesize for primary three columns (+ secondary where verified)
- [ ] `agents.tsx` uses correct Copilot agent path `.github/agents/AGENT-NAME.md` (not `.agent.md`)
- [ ] Copilot-only features (ghost text, next edit, code referencing, language support) appear only as labeled callouts, not section framing
- [ ] Agents & Skills owns agent definition/delegation; Multi-Agent owns parallel orchestration — no duplicate subagent slides

### Quality

- [ ] Main-path slide count net-neutral or shorter vs baseline (~124)
- [ ] `npm run build` succeeds
- [ ] Matrix slides readable on mobile (horizontal scroll or split)
- [ ] README section table matches live navigation
- [ ] PR includes old→new section start index map for facilitators

## Success Metrics

- Facilitator dry-run: attendee can locate their tool's config path from Instructions matrix in <30 seconds
- No vendor-named sections in main path
- Slide count ≤122 on main path (stretch: ≤120)

## Dependencies & Risks

| Risk | Mitigation |
|---|---|
| Wrong secondary-column paths | Verified in deepen research; flag legacy paths (ACP registry, Cascade MCP) with callouts |
| Matrix slides unreadable on mobile | `ToolMatrix` + split slides |
| Slide bloat from migration | Copilot worksheet net −9; cap +1 matrix per section |
| Facilitator bookmark breakage | Index map in PR |
| Content duplication | Dedup map enforced before JSX writes |

## Deferred from brainstorm (resolved in this plan)

| Question | Decision |
|---|---|
| Sidebar names | Terminal Agents, Team Knowledge, Agent SDKs |
| Multi-Agent vs Agents merge | Keep Multi-Agent standalone; boundary defined above |
| Post-Copilot order | Models → Prompting immediately (no bridge slide) |
| Devin Desktop naming | Devin Desktop only |
| Cascade agent | Omit; Devin Local + Command Center only |

## Still deferred to implementation

- [ ] Devin ACP registry path may still show `~/.windsurf/acp/` — add facilitator footnote during Phase 5
- [ ] Copilot MCP config for non-VS Code IDEs — link out rather than matrix cell detail
- [ ] Whether Multica.ai slide stays or is cut (compare to Devin ACC during Phase 5)

## Sources & References

### Origin

- [docs/brainstorms/2026-06-19-capability-first-tool-structure-requirements.md](../brainstorms/2026-06-19-capability-first-tool-structure-requirements.md)

### Internal References

- Section wiring: `src/main.tsx:20-41`, `src/main.tsx:79-98`
- Largest migration source: `src/sections/copilot.tsx` (16 slides)
- Cross-tool precedents: `src/sections/instructions.tsx:74-125`, `src/sections/agents.tsx:85-107`
- Authoring conventions: `.github/instructions/section.instructions.md`
- Section creation checklist: `.github/skills/create-section/SKILL.md`

### External References

- GitHub Copilot customization cheat sheet: https://docs.github.com/en/copilot/reference/customization-cheat-sheet
- Cursor rules: https://cursor.com/docs/rules
- Cursor subagents: https://cursor.com/docs/subagents
- Cursor skills: https://cursor.com/docs/skills
- Cursor MCP: https://cursor.com/docs/mcp
- Claude Code directory: https://code.claude.com/docs/en/claude-directory
- Codex AGENTS.md: https://developers.openai.com/codex/guides/agents-md
- Codex subagents: https://developers.openai.com/codex/subagents
- Codex skills: https://developers.openai.com/codex/skills
- Codex MCP: https://developers.openai.com/codex/mcp
- Devin Desktop FAQ (paths): https://docs.devin.ai/desktop/devin-desktop-faq
- Devin subagents: https://docs.devin.ai/cli/subagents
- Devin skills: https://docs.devin.ai/cli/extensibility/skills
