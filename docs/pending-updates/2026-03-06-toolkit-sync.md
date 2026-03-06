---
createdBy: toolkit
date: 2026-03-06
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — PRD adhoc-design-decisions

## Summary

Implemented all 17 stories of the "Ad-hoc Design Decision Surfacing & Testing Consolidation" PRD. Major changes to agent orchestration, testing pipeline, and session state model.

## Changes

### Part 1: Design Decision Surfacing (US-001 through US-007)
- Modified: `skills/adhoc-workflow/SKILL.md` — Added Step 0.1c (design decision detection with planning considerations), Step 0.1c-questions (lettered options UI), Step 0.1d (Playwright analysis confirmation), IMPLEMENTATION DECISIONS dashboard section, Task Spec integration, and skip detection for trivial tasks

### Part 2: Testing Consolidation (US-008 through US-013)
- Rewritten: `skills/test-flow/SKILL.md` — Merged test-quality-checks + test-activity-resolution into unified test orchestrator (~698 lines). Organized as: Skip Gate → Activity Resolution → Quality Check Pipeline → Completion Prompt → Tier 2 Skill Loading
- Deleted: `skills/test-quality-checks/SKILL.md` — Absorbed into test-flow
- Deleted: `skills/test-activity-resolution/SKILL.md` — Absorbed into test-flow
- Modified: `skills/adhoc-workflow/SKILL.md` — Replaced inline quality checks with test-flow reference (232-line reduction)
- Modified: `skills/prd-workflow/SKILL.md` — Replaced inline quality checks with skill references (439-line reduction)
- Modified: `agents/builder.md` — Replaced verification pipeline with single test-flow call (43-line reduction)
- Modified: 7 files to remove `isUIProject()` gate — all projects now get full Playwright verification

### Part 3: Unified Pipeline & State (US-014 through US-017)
- Modified: `schemas/builder-state.schema.json` — Added unified `activeWork` state model, removed `activePrd`/`activeTask`/`adhocQueue`
- Modified: `agents/builder.md` — Added mandatory Story Processing Pipeline section, session resume dashboard with [R]/[A]/[S] options and failed story handling
- Modified: `skills/builder-state/SKILL.md` — Updated resume protocol for activeWork-based sessions
- Modified: `skills/adhoc-workflow/SKILL.md` — Added [F] flow chart option to dashboards, Step 0.2a flow chart format
- Modified: `skills/prd-workflow/SKILL.md` — Added Story List Review step with [F] option
- Modified: `skills/dynamic-reassignment/SKILL.md` — Migrated state references to activeWork

## Affected Website Pages

- [ ] Agent documentation page (builder.md changes)
- [ ] Skills documentation page (test-flow rewrite, deleted skills, adhoc-workflow/prd-workflow changes)
- [ ] Schema documentation page (builder-state.schema.json changes)
- [ ] Architecture/workflow documentation (unified pipeline, session resume)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
