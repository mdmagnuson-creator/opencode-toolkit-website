---
createdBy: toolkit
date: 2026-03-06
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Probe Bypass Fix

## Summary

Closed remaining Playwright probe bypass paths where Builder rationalized the probe as "inapplicable" for IPC/main-process/native API changes, and tightened `ops-only` task classification to prevent source file modifications from escaping the probe pipeline.

## Changes

- Modified: `skills/adhoc-workflow/SKILL.md` — Added 4 new invalid rationalizations to NO-BYPASS RULE table: "cannot be verified via Playwright", "main process / IPC / native API change", "code analysis is definitive", "critical path cannot be verified in a browser"
- Modified: `skills/adhoc-workflow/SKILL.md` — Added `ops-only` guard: source file modifications can never be classified as `ops-only`, with explicit misclassification examples
- Modified: `skills/adhoc-workflow/SKILL.md` — Fixed stale "Autonomous Auth Resolution" reference to "Auth Resolution Escalation"
- Modified: `agents/builder.md` — Added 2 new explicit prohibitions: probe inapplicability rationalization and ops-only misclassification for source changes

## Affected Website Pages

- [ ] Agent documentation page (builder.md changes)
- [ ] Skills documentation page (adhoc-workflow changes)
- [ ] Mandatory probe enforcement feature documentation (if exists)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
