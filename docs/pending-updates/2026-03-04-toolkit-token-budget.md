---
createdBy: toolkit
date: 2026-03-04
priority: normal
updateType: sync
---

# Sync Toolkit Documentation: Token Budget Management

## Summary

Added Token Budget Management section to Builder agent to prevent excessive context consumption at startup.

## Changes

- **Modified:** `agents/builder.md` — Added "Token Budget Management (CRITICAL)" section
- **Modified:** `agents/builder.md` — Changed startup file reads to use selective jq queries instead of full file reads
- **Modified:** `agents/builder.md` — Updated Skills Reference table with sizes and token impact
- **Modified:** `agents/builder.md` — Added dashboard-specific guidance for minimal data reading

## Key Documentation Updates Needed

### New Section: Token Budget Management

Document the new rules:
- JSON files >10KB must use `jq` to extract only needed fields
- Text files >50 lines should use offset/limit reads
- Log files should never be read in full
- Skills should be loaded on-demand, not eagerly

### Updated Guidance

1. `prd-registry.json` reading:
   - Old: `cat docs/prd-registry.json` (50KB+)
   - New: `jq '[.prds[] | {id, name, status, estimatedStories}]'` (~2KB)

2. Skills loading strategy:
   - `test-flow` (133KB) — load only on first test execution
   - `adhoc-workflow` (61KB) — load only when entering ad-hoc mode
   - `prd-workflow` (34KB) — load only when selecting a PRD

## Affected Website Pages

- [ ] Builder agent documentation
- [ ] Token/context management guide (if exists)
- [ ] Best practices for agent development

## Source

- Commit: pending
- Toolkit path: ~/.config/opencode/agents/builder.md
