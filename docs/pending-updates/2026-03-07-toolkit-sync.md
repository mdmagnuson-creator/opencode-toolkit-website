---
createdBy: toolkit
date: 2026-03-07
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Test Mechanics Cleanup

## Summary

Removed all competing Playwright gate mechanisms from the toolkit. `testVerifySettings` (6 booleans in `project.json`) is now the sole mechanism controlling whether Playwright runs. All non-Playwright tests run unconditionally. Planner assigns zero test-related fields to stories.

## Changes

- Modified: `schemas/project.schema.json` — Added 6th testVerifySettings boolean (`adHocUIVerify_CompletionTest`), removed `rigorProfile` and `storyAssessment` properties
- Modified: `schemas/test-activity-rules.schema.json` — Removed `e2e` and `e2eScope` from activity rule schema
- Modified: `schemas/builder-state.schema.json` — Removed `e2e` object from testing section, removed `awaiting_e2e` from enum values
- Modified: `skills/test-flow/SKILL.md` — Rewrote retry strategy (20-attempt cap, no escape hatches), removed E2E activity resolution, removed rigorProfile deprecation notice
- Modified: `skills/adhoc-workflow/SKILL.md` — Removed `[E] Write E2E tests` prompts
- Modified: `skills/prd-workflow/SKILL.md` — Replaced Ship Phase prompt with automatic execution, removed `awaiting_e2e` state, removed story intensity resolution, removed `e2eRequired` flag handling
- Modified: `skills/ui-test-flow/SKILL.md` — Removed `[E] Write E2E` from flowchart, removed entire Deferred E2E Test Flow section
- Modified: `skills/builder-dashboard/SKILL.md` — Removed awaiting E2E section and `[E] Run E2E tests` option
- Modified: `skills/builder-state/SKILL.md` — Removed `testingRigor` references
- Modified: `skills/prd-to-json/SKILL.md` — Removed `testIntensity`, `testIntensityReason`, `e2eRequired`, `e2eScope` from PRD conversion
- Modified: `skills/test-failure-handling/SKILL.md` — Removed E2E Test Failure After PRD Completion section (with `[M]/[S]/[D]` escape hatches)
- Modified: `skills/verification-contracts/SKILL.md` — Already clean (no changes needed)
- Modified: `agents/planner.md` — Removed `testIntensity` column from flag tables
- Modified: `data/test-activity-rules.json` — Removed all `e2e` and `e2eScope` fields from 71+ rule entries
- Modified: `data/workflow-defaults.json` — Removed `e2e` and `e2e-write` steps
- Added: `templates/updates/configure-test-verify-settings.md` — Interactive update template for all projects
- Modified: `data/update-registry.json` — Added configure-test-verify-settings entry

## Affected Website Pages

- [ ] Agent documentation page (planner changes)
- [ ] Skills documentation (test-flow, prd-workflow, adhoc-workflow, ui-test-flow, builder-state, test-failure-handling, prd-to-json changes)
- [ ] Schema documentation (project.schema.json, test-activity-rules.schema.json, builder-state.schema.json changes)
- [ ] Testing documentation (if any page describes test mechanics, rigor profiles, or E2E gating)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
