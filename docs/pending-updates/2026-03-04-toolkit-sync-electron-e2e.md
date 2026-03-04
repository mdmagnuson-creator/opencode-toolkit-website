---
createdBy: toolkit
date: 2026-03-04
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added Electron execution path support to the `test-e2e-flow` skill, enabling automatic detection and routing for Electron desktop app E2E testing.

## Changes

- Modified: `skills/test-e2e-flow/SKILL.md` — Added Step 0 (Detect Execution Mode) and Step 3E (Run Electron Tests)
- Added: `templates/updates/add-electron-e2e-execution-path.md` — Update template for Electron E2E routing
- Modified: `data/update-registry.json` — Added Electron E2E update to central registry

## What Changed

The `test-e2e-flow` skill now:
1. Detects Electron vs browser mode by checking `architecture.deployment` and `apps.*.framework`
2. Routes Electron projects to `playwright-electron` instead of browser Chromium
3. Skips base URL resolution and dev server checks for Electron (not needed)
4. Uses `--workers=1` and Electron-specific config files

## Affected Website Pages

- [ ] Skills documentation page (test-e2e-flow skill description)
- [ ] E2E testing documentation (if separate page exists)
- [ ] Electron testing documentation (if separate page exists)

## Source

- Commit: d03dd95
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
