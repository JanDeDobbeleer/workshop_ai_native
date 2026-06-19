---
date: 2026-06-19
topic: capability-first-tool-structure
---

# Capability-First Workshop Structure

## Problem Frame

The AI Native Developer Workshop currently organizes much of its hands-on content around individual tools—especially GitHub Copilot—with a large dedicated Copilot section and several Copilot-branded follow-on sections (CLI, SDK, Spaces). Claude Code, Cursor, and other assistants appear in places but feel secondary or scattered.

Workshop attendees increasingly use multiple AI coding assistants that share the same underlying concepts (instructions, agents, skills, MCP) but expose them through different filenames, folders, and product names. The curriculum should teach **what to configure and why**, then show **where each tool implements it**—not teach the same idea three times under three product logos.

## Requirements

- R1. **Dissolve the standalone Copilot section.** Universal content from `copilot.tsx` merges into capability sections; Copilot-unique features become brief callouts within those sections, not a dedicated multi-slide tour.
- R2. **Organize the main workshop path by capability**, not by vendor. Core capability sections: Instructions, Agents & Skills, Context, MCP, plus reframed sections for terminal agents, team knowledge sharing, and programmatic extension.
- R3. **Instructions is the primary home for persistent project guidance.** Teach the concept once; surface tool-specific filenames as columns in a comparison matrix (e.g. `AGENTS.md`, `.github/copilot-instructions.md`, `CLAUDE.md`, `.cursor/rules`, `*.instructions.md`). Cursor Rules and Claude CLAUDE.md are filenames within this section, not separate sections.
- R4. **Each core capability section includes a cross-tool comparison matrix** covering Cursor, Claude Code, and GitHub Copilot as primary columns, with Codex and Devin Desktop (formerly Windsurf) as lighter secondary columns where equivalents exist or are emerging.
- R5. **Reframe formerly Copilot-only sections** by concept:
  - Copilot CLI → terminal/CLI agent assistants (Copilot CLI, Claude Code CLI, Cursor agent CLI where applicable)
  - Team Sharing (Spaces) → team knowledge bases that ground multiple assistants (Spaces, shared instruction repos, APM-style compile targets)
  - Copilot SDK → programmatic extension of agent runtimes (Copilot SDK as primary example; note equivalents or gaps for other tools)
- R6. **Agents & Skills section stays unified** but shifts from side-by-side Copilot/Claude blocks toward a capability-first narrative with a matrix slide, keeping existing strong dual-tool content where it aids clarity.
- R6a. **Multi-Agent section expands with cross-tool orchestration examples**, not just git worktrees. Include a comparison matrix row for how each tool defines, delegates to, and runs parallel agents:
  - **Cursor** — custom subagents in `.cursor/agents/`, built-in explore/bash/browser subagents, `/multitask` for parallel async subagents, worktree isolation
  - **Claude Code** — subagents in `.claude/agents/`, automatic delegation via description matching
  - **GitHub Copilot** — custom agents in `.github/agents/`, handoffs, cloud coding agent
  - **Codex** — custom agents in `.codex/agents/` (TOML), built-in worker/explorer/default subagents, configurable `agents.max_threads` / `agents.max_depth`
  - **Devin Desktop** (formerly Windsurf) — Agent Command Center with Spaces/Kanban, parallel local + cloud agents, Devin Local subagents, ACP-compatible third-party agents
- R7. **Prompting, foundations (Intro through Models), Context, Spec Kit, Security, MCP, Multi-Agent, Closing, and Ollama addendum remain** in the main narrative unless content clearly duplicates a capability section after merge.
- R8. **Section navigation labels reflect capabilities**, not vendor names. Remove "Copilot" from sidebar section titles unless the content is genuinely unique to that product (callout-only).

## Success Criteria

- A attendee can answer "where do I put project-wide coding standards?" from the Instructions section without needing to know which tool they use first.
- No standalone section in the main path is named after a single vendor (Copilot, Claude, Cursor).
- Each core capability section has at least one slide showing the same concept mapped across Cursor, Claude Code, and Copilot.
- Copilot-specific content that has no cross-tool equivalent is present only as a labeled callout, not as the section's framing.
- The Copilot section file is removed or emptied after its universal content is migrated; slide count in the main path does not grow materially (target: net neutral or shorter).

## Scope Boundaries

- **Not a goal:** Feature parity documentation for every tool on every slide. Secondary tools (Codex, Devin Desktop) appear only where a reasonable equivalent exists; gaps are noted briefly, not filled with speculation.
- **Naming note:** Do not refer to Windsurf as "acquired by OpenAI." The OpenAI deal fell through (July 2025). The product continues under Cognition as **Devin Desktop** (June 2026 rebrand). Use "Devin Desktop" in slides; no legacy Windsurf branding unless a footnote is needed for doc searchability (user chose against this).
- **Not a goal:** Replacing product-specific docs links. Link out to official docs; the workshop teaches patterns, not exhaustive API coverage.
- **Not a goal:** Renaming or restructuring foundation sections (LLM Basics, 4D Fluency, Models, Evolution) unless merge creates obvious duplication.
- **Out of scope:** Building tooling to sync or compile instructions across tools (mention APM/compile patterns where already present; do not expand into a new product section).
- **Deferred:** Login page marketing copy still says "GitHub Copilot" — update only if explicitly requested during implementation.

## Key Decisions

- **Organizing axis:** Capability-first (Instructions, Agents, Skills, etc.) with tool comparison matrices inside each section.
- **Copilot-specific sections:** Reframe by concept where possible; unique Copilot-only features become callouts, not section anchors.
- **Tools in matrices:** Cursor, Claude Code, GitHub Copilot as primary; Codex and Devin Desktop (formerly Windsurf) as lighter columns.
- **Windsurf status (June 2026):** OpenAI did not acquire Windsurf. After failed acquisition talks, Cognition acquired the product/team; Windsurf rebranded to Devin Desktop with an Agent Command Center for multi-agent orchestration. Still relevant as a secondary matrix column labeled **Devin Desktop** (no legacy name in slides).
- **Multi-agent coverage:** Expand Agents & Skills and Multi-Agent sections with Cursor subagents, Codex subagents, and Devin Desktop's parallel agent management—not only Copilot/Claude patterns already in the deck.
- **Copilot section handling:** Dissolve entirely—fold universal content into capability sections.
- **Rules vs Instructions:** Single Instructions section; Cursor Rules and Claude CLAUDE.md taught as tool-specific filenames, not separate capabilities.

## Recommended Approach

**Evolve in place (recommended).** Extend existing capability sections (`instructions.tsx`, `agents.tsx`, `mcp.tsx`) with matrix slides and migrated content from `copilot.tsx`, `copilot-cli.tsx`, `spaces.tsx`, and `sdk.tsx`. Reframe section titles and sidebar labels in `main.tsx`. Avoid a full rewrite of all slide JSX—audit each Copilot slide as *universal*, *reframable*, or *callout-only* and move accordingly.

**Alternative considered:** Create net-new section files per capability and delete old ones. Higher churn, same outcome—only worth it if migrated files become unmaintainable.

**Challenger option:** Add a single 2-slide "AI Coding Assistants Landscape" bridge after Models (before Prompting) showing the tool matrix at a glance. Low cost, helps orientation—but user chose to merge Copilot into capabilities rather than add a landscape section; revisit only if playtesting shows attendees are disoriented without it.

## Dependencies / Assumptions

- Official filenames and folder conventions for Cursor, Claude Code, Copilot, Codex, and Devin Desktop remain stable enough to document with "as of mid-2026" callouts.
- Existing `instructions.tsx` and `agents.tsx` content is a strong base; most work is reorganization, matrix slides, and sidebar/navigation updates.
- `copilot.tsx` is the largest migration source; slide-by-slide audit is required during planning.

## Outstanding Questions

### Resolve Before Planning

_(none — user decisions captured above)_

### Deferred to Planning

- [Affects R4][Needs research] Exact Devin Desktop and Codex equivalents for each capability row in the matrices (agents path, skills path, rules/instructions path, MCP support). Partial research captured below for multi-agent rows.
- [Affects R6a][Needs research] Devin Desktop ACP registry paths and whether to mention Cascade (legacy, sunsetting July 2026) or only Devin Local.
- [Affects R5][Technical] Proposed sidebar names for reframed sections: e.g. "Terminal Agents" vs "CLI Assistants", "Team Knowledge" vs "Shared Context", "Programmatic Extension" vs "Agent SDKs" — pick names that fit existing icon/color patterns in `main.tsx`.
- [Affects R1][Technical] Slide-by-slide audit of `copilot.tsx`: classify each slide as migrate, reframe, callout-only, or cut.
- [Affects R7][Technical] Whether Multi-Agent and Copilot App content in `multiagent.tsx` merges into Agents & Skills or stays standalone after reframe.
- [Affects R8][Technical] Update `README.md` section table to match new navigation labels.

## Next Steps

→ `/ce:plan` for structured implementation planning
