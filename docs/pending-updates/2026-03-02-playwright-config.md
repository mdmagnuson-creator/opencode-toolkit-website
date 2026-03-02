---
createdBy: toolkit
date: 2026-03-02
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added Playwright config guidance: do not use `webServer` config to prevent dev server from being killed after tests.

## Changes

- Modified: `skills/test-flow/SKILL.md` — Added explicit dev server check before E2E tests, added "Playwright Config: No webServer" section with correct config pattern
- Modified: `agents/playwright-dev.md` — Added "Playwright Config: No webServer" section
- Modified: `agents/e2e-playwright.md` — Added "Playwright Config: No webServer" section
- Modified: `templates/coding-playwright.md` — Added config section with no-webServer pattern

## Affected Website Pages

- [ ] Skill documentation (test-flow)
- [ ] Agent documentation (playwright-dev, e2e-playwright)
- [ ] Template documentation (if any)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
