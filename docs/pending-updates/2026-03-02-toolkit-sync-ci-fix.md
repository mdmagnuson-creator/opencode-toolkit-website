---
createdBy: toolkit
date: 2026-03-02
priority: normal
updateType: sync
---

# Sync Toolkit Documentation: CI=true Bug Fix

## Summary

Bug fix restoring CI=true enforcement to adhoc-workflow skill after accidental removal during ad-hoc analysis phase rewrite.

## Changes

- Modified: `skills/adhoc-workflow/SKILL.md` — Restored "Per-Task Quality Checks (MANDATORY)" section with explicit CI=true enforcement for test commands

## Affected Website Pages

- [ ] No user-visible documentation changes required (internal enforcement fix)

## Source

- Commit: fba9e0f
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
