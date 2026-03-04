---
createdBy: toolkit
date: 2026-03-04
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Builder Verification Architecture PRD implementation - adds architecture-aware verification, pre-analysis screenshots, Electron zombie cleanup, and test documentation sync.

## Changes

### Schema Changes
- Modified: `schemas/project.schema.json` — Added `webContent` (bundled|remote|hybrid) and `remoteUrl` fields to apps schema for desktop app architecture detection

### Skill Changes
- Modified: `skills/project-bootstrap/SKILL.md` — Added desktop app detection and `webContent` questions during project setup
- Modified: `skills/test-flow/SKILL.md` — Added architecture-aware verification strategy selection, zombie process pre-check
- Modified: `skills/adhoc-workflow/SKILL.md` — Added Step 0.0a mandatory pre-analysis screenshot before code analysis
- Modified: `skills/start-dev-server/SKILL.md` — Added Step 0 app type detection, Step 0c desktop app startup handling
- Modified: `skills/e2e-electron/SKILL.md` — Added frontmatter, zombie process cleanup section with globalSetup.ts pattern

### Agent Changes
- Modified: `agents/builder.md` — Added "Test Documentation Sync (MANDATORY BEFORE COMMIT)" section for pre-commit stale reference detection
- Modified: `agents/developer.md` — Added test documentation sync step 6 in Phase 3 (before commit)

## Affected Website Pages

- [ ] Skills documentation page (test-flow, adhoc-workflow, start-dev-server, e2e-electron, project-bootstrap)
- [ ] Schema documentation page (project.schema.json updates)
- [ ] Agent documentation page (builder, developer)
- [ ] Desktop/Electron testing documentation (if exists)

## Source

- PRD: `docs/prds/prd-builder-verification-architecture.md`
- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
