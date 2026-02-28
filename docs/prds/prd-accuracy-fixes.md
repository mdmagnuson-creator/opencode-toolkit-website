# PRD: Site-Wide Accuracy Fixes

## Introduction

Several pages on the toolkit website contain factually incorrect or stale information — references to agents that don't exist, features that have been removed, and documented behavior that no longer matches the toolkit. This PRD addresses all known accuracy issues as of Feb 28, 2026. These are not missing features; they are wrong facts that actively mislead users.

## Goals

- Remove all references to non-existent agents (`@e2e-tester`, `python-tester`)
- Replace the removed rigor profiles section with accurate documentation of the automatic test activity selection system
- Add the Coder primary agent to the human-in-the-loop page (currently documenting only 3 of the 4 primary agents)
- Fix the stale `e2e-tester` listing in the architecture diagram on the testing page
- Ensure every agent named on the site actually exists in the toolkit

## User Stories

### US-001: Remove @e2e-tester from Getting Started page

**Description:** As a new user reading the Getting Started page, I want the "Key Agents to Know" section to only show agents that actually exist, so I can find them by name.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] The `@e2e-tester` card in the "Key Agents to Know" grid is replaced with `@e2e-reviewer` (which actually exists and is the correct entry point for E2E testing)
- [ ] The card description accurately reflects `@e2e-reviewer`'s role: identifies what areas of the UI need E2E tests after changes
- [ ] The card link points to `/reference/agents/e2e-reviewer`
- [ ] The purple badge reads `@e2e-reviewer`
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser

---

### US-002: Remove python-tester from testing page routing table

**Description:** As a developer reading about testing routing, I want the routing table to only list agents that exist in the toolkit, so I understand what actually handles my Python files.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] The `python-tester` row is removed from the "Routing Logic" table in the tester orchestrator section
- [ ] A note is added where the row was: "Python files are not yet supported by a dedicated specialist. The tester orchestrator will surface a note when Python files are detected."
- [ ] Alternatively (preferred if space allows): replace with a row that honestly states `*.py → No specialist yet — handled manually`
- [ ] Typecheck passes
- [ ] Lint passes

---

### US-003: Remove e2e-tester from E2E layer diagram on testing page

**Description:** As a user reading the testing architecture diagram, I want all agent names in the diagram to be real, existing agents.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] The `e2e-tester` box in the "E2E Testing Layer" section of the architecture diagram is removed
- [ ] The remaining three E2E agents (`e2e-playwright`, `e2e-reviewer`, `playwright-dev`) are kept and remain accurate
- [ ] The layer still has a correct heading and description
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser

---

### US-004: Replace Rigor Profiles section with Automatic Test Activity Selection

**Description:** As a developer reading about how testing works in PRDs, I want accurate documentation of the current system, so I'm not confused when no rigor profile prompt appears.

**Background:** The rigor profile selection feature (Rapid / Standard / Strict / Compliance) was removed from the `prd-workflow` and `test-flow` skills on Feb 27, 2026. It was replaced by automatic test activity selection driven by signals from the PRD's story metadata (`testIntensity`, `e2eRequired`, etc.). No manual selection prompt exists in the current toolkit.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] The `#rigor-profiles` section is **replaced entirely** — both the section heading and all content within it
- [ ] The replacement section is titled "Automatic Test Activity Selection" with id `automatic-test-selection`
- [ ] The new section explains: the system reads signals from each story's metadata (`testIntensity`, `e2eRequired`, `documentationRequired`) and selects test activities automatically — no manual selection needed
- [ ] The section shows a table with the signal-to-activity mapping:
  - `testIntensity: low` → lint + typecheck only
  - `testIntensity: medium` → unit tests + lint + typecheck
  - `testIntensity: high` → unit tests + E2E + lint + typecheck
  - `testIntensity: critical` → all of the above + security checks
  - `e2eRequired: true` → always includes E2E regardless of intensity
- [ ] The `#rigor-profiles` item is replaced with `#automatic-test-selection` in the `PAGE_SECTIONS` array at the top of the file
- [ ] The corresponding quick-jump nav card is updated to reflect the new section name
- [ ] The code block showing the old `[R] Rapid / [S] Standard / [T] Strict / [C] Compliance` prompt is removed
- [ ] The profile comparison table is removed
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser — confirm section appears and old rigor profile content is gone

---

### US-005: Add Coder agent to Human-in-the-Loop page

**Description:** As a user learning about the primary agents, I want the human-in-the-loop page to document all four primary agents (Planner, Builder, Toolkit, **and Coder**), so I understand when and how to use each one.

**Background:** `@coder` is a primary agent described as "Default interactive coding assistant" — it's the ad-hoc coding agent for users who want direct, responsive coding help without going through Builder's full PRD workflow. It's listed in the toolkit manifest but completely absent from the human-in-the-loop page, which only documents three of the four primary agents.

**Documentation:** No

**Tools:** No

**Acceptance Criteria:**

- [ ] A fourth card is added to the "What You'll Learn" overview grid (currently shows 3 cards in `sm:grid-cols-3`) — update grid to `sm:grid-cols-4` or keep at 3 per row with 4th wrapping cleanly
- [ ] The Coder card uses a distinct color (suggest green or teal to differentiate from Planner=violet, Builder=blue, Toolkit=amber)
- [ ] A full "Working with Coder" section is added with id `coder` — placed between the Builder and Toolkit sections
- [ ] `coder` is added to the `PAGE_SECTIONS` array (between `builder` and `toolkit`)
- [ ] The page title/description metadata is updated to mention Coder
- [ ] The hero description is updated from "Planner, Builder, and Toolkit" to include "Coder"
- [ ] The Coder section content explains:
  - Coder is for interactive, ad-hoc coding help — think of it as a smart coding assistant that takes immediate action
  - Unlike Builder, Coder doesn't require a PRD or go through full quality gates
  - Best for: exploratory coding, experimenting with approaches, quick one-off file changes, and situations where you want a fast back-and-forth loop
  - Coder won't auto-commit or run the full critic/test pipeline — it responds and acts, then waits for your next instruction
  - When to escalate to Builder: when the task grows beyond a few files or needs structured testing and quality gates
- [ ] Include practical prompts for Coder (similar to Planner and Builder sections):
  - "Explore this function and tell me what it does, then suggest improvements"
  - "Write a quick script that does X"
  - "Help me understand how this regex works and fix it"
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Verify in browser — confirm Coder section is visible and section nav includes it

---

## Functional Requirements

- FR-1: No page on the site may reference `@e2e-tester` or `python-tester` — these agents do not exist
- FR-2: The rigor profiles section must be fully replaced — removing it entirely is acceptable if the replacement section is added
- FR-3: All four primary agents must be documented on the human-in-the-loop page
- FR-4: The testing page architecture diagram must only show agents that exist in the current toolkit manifest

## Non-Goals

- No new pages
- No changes to the manifest data structure
- No changes to any other pages beyond what's specified
- No update to the `e2e-tester` reference page (it was never created and doesn't need one — the link will be updated to `e2e-reviewer`)

## Technical Considerations

- All changes are in `.tsx` page files — no data or API changes required
- The `PAGE_SECTIONS` array at the top of `testing/page.tsx` must be kept in sync with actual section IDs in the page body, as the `OnThisPageNav` component uses it
- The `the-human-in-the-loop/page.tsx` grid layout for the overview cards may need adjustment (currently `sm:grid-cols-3`) — using `sm:grid-cols-2 lg:grid-cols-4` is suggested

## Definition of Done

Implementation is complete when:

1. All five user stories pass their acceptance criteria
2. No page on the live site references `@e2e-tester`, `python-tester`, or the rigor profile selection prompt
3. The testing page rigor profiles section is fully replaced with automatic test activity selection content
4. All four primary agents (Planner, Builder, Coder, Toolkit) are documented on the human-in-the-loop page with their own sections
5. The architecture diagram shows only real, existing agents
6. Lint, typecheck, and build all pass
7. Manual browser verification confirms changes are rendered correctly in both light and dark mode

No external credentials required for this PRD.
