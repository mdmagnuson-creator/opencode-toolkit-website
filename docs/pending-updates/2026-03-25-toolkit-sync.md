---
createdBy: toolkit
date: 2026-03-25
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Pin subagent models to claude-opus-4.5 to prevent model inheritance from opus-4.6 primary agents — affects explore (via opencode.json), tester, and ui-tester-playwright delegation blocks.

## Changes

- Modified: `opencode.json` — Added `explore` agent config with `model: github-copilot/claude-opus-4.5`
- Modified: `agents/tester.md` — Added `model: github-copilot/claude-opus-4.5` to visual-audit, adhoc, and full-suite delegation context blocks
- Modified: `agents/ui-tester-playwright.md` — Added `model: github-copilot/claude-opus-4.5` to verification mode delegation context block

## Affected Website Pages

- [ ] Agent documentation page (tester, ui-tester-playwright)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
