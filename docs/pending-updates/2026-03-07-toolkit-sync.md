---
createdBy: toolkit
date: 2026-03-07
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Three pending Builder update requests processed: launchTarget-aware E2E test writing, atomic E2E write+run, and postChangeWorkflow condition evaluation for webContent:remote apps.

## Changes

- Modified: `skills/e2e-electron/SKILL.md` — Added Launch Target Resolution section (MANDATORY) that reads project.json → apps[].testing to determine test directory, launch pattern, and Playwright config
- Modified: `agents/tester.md` — Updated Electron E2E delegation prompt to include launchTarget/testDir/playwrightConfig/executablePath fields
- Modified: `agents/e2e-playwright.md` — Added mandatory launchTarget reading to Electron detection (step 0d)
- Modified: `skills/test-flow/SKILL.md` — Consolidated E2E write+run into atomic operation, removed separate [R]/[S] prompt after test generation
- Modified: `skills/test-ui-verification/SKILL.md` — Added condition evaluation to postChangeWorkflow handler (files-changed-in pattern), strengthened webContent:remote no-rebuild rule with explicit change-type-to-action table

## Affected Website Pages

- [ ] E2E testing documentation (e2e-electron skill changes)
- [ ] Test flow documentation (atomic E2E write+run)
- [ ] Verification pipeline documentation (postChangeWorkflow condition evaluation)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
