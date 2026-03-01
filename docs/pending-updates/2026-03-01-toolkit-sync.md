---
createdBy: toolkit
date: 2026-03-01
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Multiple Builder agent enhancements: loop detection, expanded git.autoCommit modes, and e2e-auditor category fix.

## Changes

- Modified: `agents/builder.md` — Added new section "Loop Detection and Bulk Fix" with:
  - Detection triggers for recognizing repetitive work patterns
  - Self-check protocol after 3+ similar fixes
  - Bulk fix protocol with scope-based strategy selection
  - Example of good vs bad approach
  - Reporting template for switching to bulk mode

- Modified: `agents/builder.md` — Expanded `git.autoCommit` from boolean to enum:
  - `onStoryComplete` (default) — commit after each story/task
  - `onFileChange` — commit after each file modification
  - `manual` — stage only, never commit
  - Legacy `true`/`false` still supported

- Modified: `toolkit-structure.json` — Moved `e2e-auditor` from testing category to primary category (matches its `mode: primary` frontmatter)

## Affected Website Pages

- [ ] Builder agent documentation page (auto-commit modes, loop detection)
- [ ] Agent capabilities overview (if it lists agent self-correction features)
- [ ] Agent index/listing (e2e-auditor category change)

## Source

- Commits: ee6c60c (loop detection), pending (autoCommit + e2e-auditor fix)
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
