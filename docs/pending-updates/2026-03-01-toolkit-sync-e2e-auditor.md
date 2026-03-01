---
createdBy: toolkit
date: 2026-03-01
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added mandatory project selection to E2E Auditor agent, matching Builder/Planner startup pattern.

## Changes

- Modified: `agents/e2e-auditor.md` — Added Phase 0: Project Selection (IMMEDIATE) section
  - Shows project selection table as first response
  - No greeting or questions before project selection
  - Session scoped to selected project only
  - Renumbered subsequent phases (1→2→3→4→5)

## Affected Website Pages

- [ ] Agent documentation page (e2e-auditor section)
- [ ] Testing agents overview (if applicable)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
