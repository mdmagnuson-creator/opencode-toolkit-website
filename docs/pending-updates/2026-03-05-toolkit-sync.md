---
createdBy: toolkit
date: 2026-03-05
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Mandatory Playwright Between Stories

## Summary

Implemented PRD "mandatory-playwright-between-stories" — Builder now automatically runs Playwright E2E tests between every story during PRD mode execution for UI projects, matching the behavior that ad-hoc mode already had.

## Changes

- Modified: `skills/test-ui-verification/SKILL.md` — Replaced `playwright-required` config gate with automatic UI project detection via `isUIProject()` function (checks postChangeWorkflow steps, apps.*.testing.framework, apps.*.type)
- Modified: `skills/test-activity-resolution/SKILL.md` — Added `isUIProject()` function; E2E timing override so `deferred` resolves as `immediate` for UI projects
- Modified: `skills/test-e2e-flow/SKILL.md` — Updated PRD Mode Test Flow with UI project override documentation
- Modified: `skills/prd-workflow/SKILL.md` — Major additions: postChangeWorkflow execution in per-story quality checks, Playwright installation check (once per session), story-scoped Playwright test selection with 1-hop dependency edges, 5-attempt retry strategy with skip-and-log
- Modified: `skills/test-quality-checks/SKILL.md` — Updated activity execution order table and flow diagram for postChangeWorkflow steps
- Modified: `skills/adhoc-workflow/SKILL.md` — Aligned UI Verification Enforcement section with automatic detection
- Modified: `agents/builder.md` — Added Step 5 (story-scoped Playwright) and Step 6 (retry strategy) to Verification Pipeline Resolution

## Key Concepts for Documentation

1. **Automatic UI Project Detection** — No configuration required. Projects are detected as UI projects when any of: postChangeWorkflow has Playwright steps, apps.*.testing.framework contains "playwright", or apps.*.type is "frontend"/"desktop"
2. **Story-Scoped Testing** — Per-story Playwright runs only execute tests covering changed files and their 1-hop import consumers (not full suite)
3. **5-Attempt Retry** — On Playwright failure, Builder retries up to 5 times with escalating fix context, then skips and logs
4. **Installation Check** — If Playwright isn't installed, Builder detects this once per session and offers to install or skip
5. **No Config Gate** — `agents.verification.mode: "playwright-required"` is preserved for backward compatibility but no longer required for detection. `"no-ui"` remains the explicit opt-out

## Affected Website Pages

- [ ] Agent documentation page (builder agent capabilities updated)
- [ ] Skills documentation page (multiple skills updated)
- [ ] Any "how verification works" or "testing workflow" documentation

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
