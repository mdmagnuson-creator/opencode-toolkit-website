---
createdBy: toolkit
date: 2026-03-01
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added "Loop Detection and Bulk Fix" guidance to Builder agent to help it recognize and break out of repetitive one-by-one fix patterns.

## Changes

- Modified: `agents/builder.md` — Added new section "Loop Detection and Bulk Fix" with:
  - Detection triggers for recognizing repetitive work patterns
  - Self-check protocol after 3+ similar fixes
  - Bulk fix protocol with scope-based strategy selection
  - Example of good vs bad approach
  - Reporting template for switching to bulk mode

## Affected Website Pages

- [ ] Builder agent documentation page (if it documents Builder's recovery/resilience features)
- [ ] Agent capabilities overview (if it lists agent self-correction features)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
