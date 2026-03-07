---
createdBy: toolkit
date: 2026-03-08
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

New `electron-build-deploy` skill created and test-flow updated to load it as the primary build-deploy mechanism for Electron projects. PRD `prd-electron-build-deploy` promoted to ready with 6 stories.

## Changes

- Created: `skills/electron-build-deploy/SKILL.md` — New skill (68th) providing explicit kill → copy → relaunch command sequence for Electron apps before Playwright verification
- Modified: `skills/test-flow/SKILL.md` — Step 3.5 now loads `electron-build-deploy` skill as first priority when `apps.desktop.buildDeploy` is configured
- Created: `docs/prds/prd-electron-build-deploy.md` — Promoted from draft to ready, 6 user stories, all open questions resolved, macOS only v1
- Modified: `docs/prd-registry.json` — Added `prd-electron-build-deploy` entry

## Affected Website Pages

- [ ] Skills documentation page (new skill: electron-build-deploy)
- [ ] Agent/skill count on overview page (67 → 68 skills)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
