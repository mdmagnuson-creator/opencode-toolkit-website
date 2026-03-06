---
createdBy: toolkit
date: 2026-03-06
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — PRDs adhoc-design-decisions + mandatory-probe-enforcement

## Summary

Two PRDs implemented: (1) "Ad-hoc Design Decision Surfacing & Testing Consolidation" (17 stories) and (2) "Mandatory Playwright Probe Enforcement" (13 stories). Major changes to agent orchestration, testing pipeline, session state model, and probe enforcement.

## Changes

### PRD: adhoc-design-decisions (17 stories)

#### Part 1: Design Decision Surfacing (US-001 through US-007)
- Modified: `skills/adhoc-workflow/SKILL.md` — Added Step 0.1c (design decision detection with planning considerations), Step 0.1c-questions (lettered options UI), Step 0.1d (Playwright analysis confirmation), IMPLEMENTATION DECISIONS dashboard section, Task Spec integration, and skip detection for trivial tasks

#### Part 2: Testing Consolidation (US-008 through US-013)
- Rewritten: `skills/test-flow/SKILL.md` — Merged test-quality-checks + test-activity-resolution into unified test orchestrator (~698 lines)
- Deleted: `skills/test-quality-checks/SKILL.md` — Absorbed into test-flow
- Deleted: `skills/test-activity-resolution/SKILL.md` — Absorbed into test-flow
- Modified: `skills/adhoc-workflow/SKILL.md` — Replaced inline quality checks with test-flow reference (232-line reduction)
- Modified: `skills/prd-workflow/SKILL.md` — Replaced inline quality checks with skill references (439-line reduction)
- Modified: `agents/builder.md` — Replaced verification pipeline with single test-flow call (43-line reduction)
- Modified: 7 files to remove `isUIProject()` gate — all projects now get full Playwright verification

#### Part 3: Unified Pipeline & State (US-014 through US-017)
- Modified: `schemas/builder-state.schema.json` — Added unified `activeWork` state model, removed `activePrd`/`activeTask`/`adhocQueue`
- Modified: `agents/builder.md` — Added mandatory Story Processing Pipeline, session resume dashboard
- Modified: `skills/builder-state/SKILL.md` — Updated resume protocol for activeWork-based sessions
- Modified: `skills/adhoc-workflow/SKILL.md` — Added [F] flow chart option to dashboards
- Modified: `skills/prd-workflow/SKILL.md` — Added Story List Review step with [F] option
- Modified: `skills/dynamic-reassignment/SKILL.md` — Migrated state references to activeWork

### PRD: mandatory-probe-enforcement (13 stories)

Eliminates all Playwright probe skip paths (`skipped`, `degraded-no-auth`, config opt-out). Makes the probe truly mandatory with user-assisted auth escalation, a re-probe loop for contradictions, and `user-skipped` as the only skip path (requires explicit user acceptance).

#### Gate & Prohibition Changes (US-001, US-002, US-010)
- Modified: `agents/builder.md` — Removed `skipped` from probe gate check, now accepts only `confirmed`, `partially-confirmed`, `user-skipped`. Removed Electron-specific qualifier from prohibitions (universal never-skip). Added `contradicted` as gate-blocking status with state machine documentation.

#### Probe Results & Skip Conditions (US-003, US-004, US-006, US-008)
- Modified: `skills/test-ui-verification/SKILL.md` — Replaced "Skip Conditions" section with "Mandatory Enforcement" section. Removed `skipped` from probe results tables, replaced with `user-skipped`. Updated `ProbeResult` interface.
- Modified: `skills/adhoc-workflow/SKILL.md` — Removed `skipped` from probe results processing table and dashboard display table, replaced with `user-skipped`.

#### NO-BYPASS & Dashboard (US-005, US-007)
- Modified: `skills/adhoc-workflow/SKILL.md` — Expanded NO-BYPASS RULE with invalid rationalizations table and mandatory resolutions. Replaced "probe was skipped" dashboard handling with mandatory enforcement statement.

#### Re-probe Loop & Config Removal (US-009, US-011)
- Modified: `skills/adhoc-workflow/SKILL.md` — Added contradicted → re-probe loop (max 2 attempts) replacing old single-pass re-analysis. Removed `agents.analysisProbe` config option (kept `analysisProbeTimeoutMs`).
- Modified: `skills/test-ui-verification/SKILL.md` — Removed `agents.analysisProbe` config option.

#### Auth Escalation (US-012, US-013)
- Modified: `skills/adhoc-workflow/SKILL.md` — Replaced "Autonomous Auth Resolution" with "Auth Resolution Escalation" using user-assisted `[S]`/`[H]`/`[C]` prompt.
- Modified: `skills/test-ui-verification/SKILL.md` — Added 6-step auth escalation ladder with user assistance.

## Affected Website Pages

- [ ] Agent documentation page (builder.md gate, prohibitions, contradicted status, story pipeline)
- [ ] Skills documentation page (test-flow rewrite, test-ui-verification probe enforcement, adhoc-workflow changes)
- [ ] Schema documentation page (builder-state.schema.json activeWork model)
- [ ] Architecture/workflow documentation (unified pipeline, probe enforcement, auth escalation)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
