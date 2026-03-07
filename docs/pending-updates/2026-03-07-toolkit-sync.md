---
createdBy: toolkit
date: 2026-03-07
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Playwright Agent Consolidation

## Summary

Major refactor: consolidated two Playwright agents into one, renamed all `e2e-*` agents/skills/schemas to `ui-*` naming convention, added `testVerifySettings` as the universal Playwright gate in `project.json`, and deleted `playwright-dev.md`. Also includes earlier pending update processing (launchTarget awareness, E2E auto-run, webContent condition evaluation).

## Changes

### Agents
- Deleted: `agents/playwright-dev.md` — merged into consolidated agent
- Renamed: `agents/e2e-playwright.md` → `agents/ui-tester-playwright.md`
- Renamed: `agents/e2e-reviewer.md` → `agents/ui-test-reviewer.md`
- Renamed: `agents/e2e-auditor.md` → `agents/ui-test-full-app-auditor.md`
- Modified: `agents/tester.md` — replaced `devPort: null` skip gate with `testVerifySettings.prdUIVerify_StoryTest` gate
- Modified: `agents/builder.md`, `agents/developer.md`, `agents/hammer.md`, `agents/qa-browser-tester.md`, `agents/planner.md`, `agents/toolkit.md` — updated all `e2e-*` and `playwright-dev` references to `ui-*` names

### Skills
- Renamed: `skills/test-e2e-flow/` → `skills/ui-test-flow/`
- Renamed: `skills/e2e-electron/` → `skills/ui-test-electron/`
- Renamed: `skills/e2e-quality/` → `skills/ui-test-ux-quality/`
- Renamed: `skills/e2e-full-audit/` → `skills/ui-test-full-app-audit/`
- Modified: `skills/test-flow/SKILL.md` — added `testVerifySettings` gates for PRD mode (`prdUIVerify_Analysis`, `prdUIVerify_StoryTest`) and ad-hoc mode (`adHocUIVerify_StoryTest`)
- Modified: `skills/adhoc-workflow/SKILL.md` — added `testVerifySettings.adHocUIVerify_Analysis` gate before Playwright analysis probe
- Modified: `skills/prd-workflow/SKILL.md` — added `testVerifySettings.prdUIVerify_PRDCompletionTest` gate on Ship Phase E & G options
- Modified: 15+ other skill files — updated cross-references from old to new names

### Schemas
- Renamed: `schemas/e2e-audit-manifest.schema.json` → `schemas/ui-test-audit-manifest.schema.json`
- Modified: `schemas/project.schema.json` — added `testVerifySettings` object (5 boolean settings)

### Templates
- Renamed: `templates/e2e-quality-helpers.ts` → `templates/ui-test-ux-quality-helpers.ts`
- Modified: `templates/coding-playwright.md`, `agent-templates/testing/playwright.md`, `project-templates/CONVENTIONS.md` — updated references

### Data
- Modified: `data/fallback-chains.yaml`, `data/skill-mapping.json`, `data/workflow-defaults.json` — updated all old names

### New Feature: `testVerifySettings`
- 5 boolean settings in `project.json` that replace scattered heuristic gates (devPort checks, UI file detection, isUIProject)
- Settings: `adHocUIVerify_Analysis`, `adHocUIVerify_StoryTest`, `prdUIVerify_Analysis`, `prdUIVerify_StoryTest`, `prdUIVerify_PRDCompletionTest`
- All default to `true` if absent — full Playwright verification out-of-the-box

## Affected Website Pages

- [ ] Agent documentation page (3 renamed agents, 1 deleted, 6+ modified)
- [ ] Skills documentation page (4 renamed skills, 15+ modified)
- [ ] Schema documentation page (1 renamed, 1 modified)
- [ ] Any page referencing `playwright-dev`, `e2e-playwright`, `e2e-reviewer`, `e2e-auditor`
- [ ] Any page documenting `testVerifySettings` or Playwright gating behavior

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
