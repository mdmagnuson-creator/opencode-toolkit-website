---
createdBy: toolkit
date: 2026-03-03
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added single-instance lock pattern to e2e-electron skill for preventing multiple Electron app instances during parallel test runs.

## Changes

- Modified: `skills/e2e-electron/SKILL.md` — Added "### 6. Single-Instance Lock (CRITICAL)" section to Common Gotchas with kill-before-launch pattern, singleton instance enforcement, and CI/parallel execution guidance

## Affected Website Pages

- [ ] Skills documentation page (e2e-electron skill reference)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
