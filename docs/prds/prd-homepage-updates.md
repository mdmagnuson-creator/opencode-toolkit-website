# PRD: Homepage Updates for Feb 2026 Toolkit Changes

## Introduction

The homepage needs several targeted updates to reflect changes in the toolkit made during Feb 23–28, 2026. The Coder primary agent is missing from the human-in-the-loop cards. The agent category counts on the homepage are inaccurate due to miscategorized agents in the manifest. And the homepage has an opportunity to call out the major new capability areas (authentication, Electron, resilience) that would resonate with users evaluating the toolkit.

## Goals

- Add the Coder primary agent to the homepage human-in-the-loop section
- Fix the agent category counts (Critics count is artificially low due to miscategorized manifest entries)
- Add a brief "What's New" section or callout highlighting Feb 2026 capability additions
- Ensure the homepage accurately reflects the current toolkit state

## User Stories

### US-001: Add Coder to the Human-in-the-Loop section on homepage

**Description:** As a visitor reading the homepage, I want to see all four primary agents (Planner, Builder, Coder, Toolkit) in the human-in-the-loop section, so I understand my full set of options when working with the toolkit.

**Background:** The homepage "The Human in the Loop" section currently shows 3 cards: Planner, Builder, and Toolkit. Coder is the fourth primary agent — the default interactive coding assistant — but it's absent from this section. The full human-in-the-loop concept page has a similar problem (addressed in `prd-accuracy-fixes`).

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] A fourth "Coder" card is added to the human-in-the-loop cards grid on the homepage
- [ ] The card uses a distinct color (suggest green or teal — differentiated from Planner=violet, Builder=blue, Toolkit=amber)
- [ ] The Coder card copy is concise (fits in the card format): "Default interactive coding assistant — ideal for exploratory work, quick changes, and fast back-and-forth coding sessions without the full PRD workflow"
- [ ] The card links to `/concepts/the-human-in-the-loop#coder`
- [ ] The grid layout handles four cards cleanly (suggest `sm:grid-cols-2 lg:grid-cols-4` or `sm:grid-cols-2 md:grid-cols-4`)
- [ ] The hero text or section intro that mentions "Planner, Builder, and Toolkit" is updated to include Coder
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser — confirm four cards render in both light and dark mode

---

### US-002: Fix agent category counts

**Description:** As a visitor reading the homepage's agent categories stats, I want accurate counts for each category (Critics, Developers, Testers, Other) so I understand the toolkit's composition.

**Background:** `backend-critic-go`, `backend-critic-java`, and `backend-critic-ts` are miscategorized as `"utilities"` in the manifest, which causes the Critics count to appear lower than it is. The fix may be in the manifest extraction script (recategorize these agents as `"critics"`) or in how the homepage displays categories.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] Investigate the manifest: confirm `backend-critic-go`, `backend-critic-java`, `backend-critic-ts` are categorized as `"critics"` (not `"utilities"`)
- [ ] If the issue is in the extraction script, fix `scripts/extract-toolkit-data.ts` to correctly categorize all `*-critic-*` agents as critics
- [ ] If the issue is in the agent markdown frontmatter, fix the frontmatter in those three agent files (toolkit-side fix — note this for the toolkit maintainer)
- [ ] After fix: the Critics count on the homepage accurately reflects all critic agents
- [ ] The total agent count on the homepage is accurate
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser — confirm category counts match actual agent counts

---

### US-003: Add "What's New" capability highlights

**Description:** As a visitor evaluating the toolkit, I want to see a brief summary of major new capabilities so I understand how the toolkit has evolved and whether it solves problems I care about.

**Background:** Feb 2026 saw significant new capabilities: the full authentication system for E2E tests, Electron desktop testing support, and agent resilience features (rate limiting, session resumability, commit gates). These are compelling differentiators that aren't visible on the homepage.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] A compact "What's New" section or banner is added to the homepage (position: after the Primary Agents section, before Getting Started, or at the bottom above the footer — choose what fits the design)
- [ ] The section highlights 3–4 capability areas with one-liner descriptions:
  - **Authentication System** — "Configure auth providers once; all E2E agents authenticate automatically"
  - **Electron Desktop Testing** — "Full Playwright Electron support for desktop app quality gates"
  - **Agent Resilience** — "Rate limit detection, session resumability, and automatic tool error recovery built in"
  - **Vectorized Search** — "Semantic codebase search with the vectorize skill"
- [ ] Each item links to the relevant docs page or section
- [ ] The section has a "View all changes →" link pointing to `/changelog`
- [ ] The section is styled consistently with the rest of the homepage (no new design patterns — reuse existing card/grid/callout patterns)
- [ ] The section does not feel like marketing copy — it should be informational and direct
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser — confirm section appears in both light and dark mode

---

### US-004: Update dynamic skill count display

**Description:** As a visitor reading the homepage Skills section, I want the skill count badge and "Plus N more" text to show the correct total, reflecting newly added skills.

**Background:** The homepage Skills section shows the first 8 skills and a "Plus N more" count. After adding ~10+ new skills (Feb 23–28), the displayed count may be stale or derived from the old manifest. The component should pull the count dynamically from the manifest (it likely already does — this story verifies it and fixes it if not).

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] The skill count shown in the homepage Skills section (e.g., "View all 26 skills →") reflects the accurate post-update total
- [ ] If the count was hardcoded anywhere, replace with dynamic manifest-driven count
- [ ] The 8 preview skills shown are still a reasonable representative sample — replace any that are no longer relevant or that have been superseded
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser

---

## Functional Requirements

- FR-1: All four primary agents must appear on the homepage human-in-the-loop section
- FR-2: All agent category counts must be accurate
- FR-3: Skill counts must be dynamic (from manifest) and accurate
- FR-4: New capability highlights must link to documentation that exists (no dead links)

## Non-Goals

- No homepage redesign or layout restructure beyond the specified changes
- No new pages
- No changes to the manifest data structure or extraction script beyond the category fix
- No changes to the Header or Footer navigation

## Technical Considerations

- The homepage is a Server Component reading from `toolkit-manifest.json` at build time — all counts and agent lists come from the manifest
- The "Plus N more" text for skills is likely computed as `manifest.skills.length - 8` — verify this is dynamically computed
- If `backend-critic-*` miscategorization is in the toolkit agent markdown frontmatter, this cannot be fixed in the website repo — it must be a toolkit-side fix, and the website should document the expected category mapping in the extraction script instead

## Credential & Service Access Plan

No external credentials required for this PRD.

## Definition of Done

Implementation is complete when:

1. All four user stories pass their acceptance criteria
2. The homepage shows all four primary agents (Planner, Builder, Coder, Toolkit) in the human-in-the-loop grid
3. Agent category counts are accurate
4. The "What's New" section appears and links to existing documentation
5. Skill count is dynamic and accurate
6. Lint, typecheck, and build all pass
7. Manual browser verification in both light and dark mode confirms all changes render correctly
