---
createdBy: toolkit
date: 2026-03-26
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Updated adhoc-workflow skill to retain full CONVENTIONS.md content instead of lossy-compressing it to a 2-5 sentence summary.

## Changes

- Modified: `skills/adhoc-workflow/SKILL.md` — Context Loading step 2 now instructs Builder to keep full CONVENTIONS.md in session context and pass it to sub-agents via context blocks, rather than preparing a 2-5 sentence summary. Supports `## TL;DR for Agents` section as a quick-reference anchor.

## Affected Website Pages

- [ ] Skills documentation page (if adhoc-workflow context loading is documented)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
