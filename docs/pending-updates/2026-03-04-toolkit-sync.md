---
createdBy: toolkit
date: 2026-03-04
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Made Builder's Analysis Gate compaction-resilient by adding a mandatory state checkpoint before delegating to @developer.

## Changes

- Modified: `agents/builder.md` — Added "Analysis Gate Pre-Delegation Check (Compaction-Resilient)" section with mandatory bash check that reads `analysisCompleted` from state file before any @developer delegation
- Modified: `skills/adhoc-workflow/SKILL.md` — Added "Step 0.0: Initialize Analysis Gate" to ensure `analysisCompleted: false` is set when entering ad-hoc mode
- Modified: `skills/builder-state/SKILL.md` — Added "Analysis Gate Checkpoint (MANDATORY — Compaction Resilient)" section documenting the `analysisCompleted` field lifecycle and pre-delegation check

## Affected Website Pages

- [ ] Builder agent documentation (analysis gate enforcement)
- [ ] Ad-hoc workflow documentation (initialization step)
- [ ] Builder state documentation (new checkpoint field)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
