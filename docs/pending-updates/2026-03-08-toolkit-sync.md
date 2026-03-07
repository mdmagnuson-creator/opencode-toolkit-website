---
createdBy: toolkit
date: 2026-03-08
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Electron Build-Deploy Cycle

## Summary

Implemented PRD `prd-electron-build-deploy` — adds first-class Electron build-deploy cycle automation to the toolkit. New `buildDeploy` schema, triggerPaths matching in test-flow, and an update template for existing Electron projects.

## Changes

- Modified: `schemas/project.schema.json` — Added `apps.desktop.buildDeploy` configuration section (buildCommand, buildOutputApp, testApp, autoDeployAfterStory, buildTimeoutMs, triggerPaths)
- Modified: `skills/test-flow/SKILL.md` — Added triggerPaths glob matching algorithm to Step 3.5 and Build & Deploy section to completion report
- Added: `templates/updates/configure-electron-build-deploy.md` — Interactive update template for Electron projects
- Modified: `data/update-registry.json` — Registered configure-electron-build-deploy with electron-apps affinity
- Already existed: `skills/electron-build-deploy/SKILL.md` — Created in prior commit (c905a17)

## Affected Website Pages

- [ ] Schema documentation (new `buildDeploy` section)
- [ ] Skills documentation (test-flow changes)
- [ ] Update templates documentation (new template)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
