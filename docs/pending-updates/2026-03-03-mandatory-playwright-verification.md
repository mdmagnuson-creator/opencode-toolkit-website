---
createdBy: toolkit
date: 2026-03-03
priority: normal
updateType: sync
---

# Sync Toolkit Documentation: Mandatory Playwright Verification

## Summary

Added mandatory Playwright verification for UI changes, including configuration schema, workflow enforcement, test generation, flaky test handling, and completion messages.

## Changes

### Schema Changes
- Modified: `schemas/project.schema.json` — Added `agents.verification` configuration block with:
  - `mode`: `playwright-required` (default) or `no-ui`
  - `selectorStrategy`: `strict` (default) or `flexible`
  - `testDir`: defaults to `tests/ui-verify`
  - `screenshotDir`: defaults to `ai-tmp/verification/screenshots`
  - `reviewGeneratedTests`: defaults to `true`
- Modified: `schemas/project.schema.json` — Added `agents.workingDir` (defaults to `ai-tmp`)
- Deprecated: `agents.browserVerification` boolean (replaced by `agents.verification.mode`)

### Skill Changes
- Modified: `skills/project-bootstrap/SKILL.md` — Added Q19 for UI verification mode selection
- Modified: `skills/test-flow/SKILL.md` — Added UI Verification section with status returns, verification flow, and flaky test detection
- Modified: `skills/adhoc-workflow/SKILL.md` — Added verification enforcement with skip patterns, override mechanism, and completion messages
- Modified: `skills/prd-workflow/SKILL.md` — Added verification enforcement with skip patterns, override mechanism, and completion messages

### Agent Changes
- Modified: `agents/builder.md` — Added verification-incomplete handling, flaky test handling, and override mechanism
- Modified: `agents/e2e-playwright.md` — Added Verification Mode section for generating verification tests
- Modified: `agents/quality-critic.md` — Added verification test review criteria

## Affected Website Pages

- [ ] Agent documentation pages (builder, e2e-playwright, quality-critic)
- [ ] Skills documentation pages (test-flow, adhoc-workflow, prd-workflow, project-bootstrap)
- [ ] Schema documentation page
- [ ] Getting started / configuration guide (if exists)

## Source

- Commits: b91d4de, 4c3c870, 31f19c7, 213464f, c1db447
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
