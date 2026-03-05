---
createdBy: toolkit
date: 2026-03-05
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Architecture-Aware Verification

## Summary

Implemented PRD `architecture-aware-verification`: Builder now auto-infers verification pipelines from app architecture (desktop/Electron → rebuild+relaunch, web → HMR), and headless auth supports CLI-based token acquisition.

## Changes

### Schema (`schemas/project.schema.json`)
- Added: `postChangeWorkflow` top-level property for custom rebuild/relaunch commands
- Added: `authentication.headless.method` enum (`api` | `cli`)
- Added: `authentication.headless.command`, `responseFormat`, `tokenPath`, `refreshTokenPath`, `sessionStorage` fields for CLI auth
- Added: `authentication.acquisition` block with `description`, `steps`, `fallbackToUI`, `notes`

### Builder Agent (`agents/builder.md`)
- Added: "Verification Pipeline Resolution" section — auto-infers `rebuild-then-launch-app` vs `ensure-electron-running` vs HMR based on `apps[].webContent` architecture
- Added: `postChangeWorkflow` override detection from `project.json`

### Verification Skills
- Modified: `skills/test-ui-verification/SKILL.md` — added `rebuild-then-launch-app` and `ensure-electron-running` strategies with full flows
- Modified: `skills/adhoc-workflow/SKILL.md` — added Step 3.5 (Rebuild/Relaunch) to quality checks
- Modified: `skills/test-quality-checks/SKILL.md` — added Step 3.5 to execution order and flow diagram

### Auth Skills
- Modified: `skills/auth-headless/SKILL.md` — added CLI method with `authenticateHeadlessCLI()` implementation and session injection
- Modified: `skills/auth-config-check/SKILL.md` — added acquisition validation and headless CLI validation sections
- Modified: `skills/setup-auth/SKILL.md` — added Step 6b (CLI wizard), Step 6c (acquisition steps), new Supabase+CLI example

### Update Registry
- Added: `data/update-registry.json` entry for `architecture-aware-verification` (interactive, high priority, all-projects)
- Created: `templates/updates/architecture-aware-verification.md` — 7-step interactive migration template

## Affected Website Pages

- [ ] Agent documentation page (Builder verification pipeline)
- [ ] Skills documentation page (auth-headless CLI, test-ui-verification strategies)
- [ ] Schema reference page (postChangeWorkflow, authentication.acquisition, headless CLI fields)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
