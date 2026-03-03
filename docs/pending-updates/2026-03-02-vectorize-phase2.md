---
createdBy: toolkit
date: 2026-03-02
priority: normal
updateType: sync
---

# Sync Toolkit Documentation: Vectorize Phase 2 - Relationships & Context

## Summary

Completed Phase 2 of the vectorization PRD, adding relationship indexing, git history tracking, test mapping, and architecture summaries.

## Changes

### New Modules Added to vectorize skill

- `relationships.ts` — Call graph and dependency extraction using AST
  - Extracts function calls, class inheritance, import/export relationships
  - Supports TypeScript, JavaScript, Python, Go
  - Stores relationships in LanceDB for querying

- `git-history.ts` — Git commit history and blame context
  - Indexes commit history with file changes
  - Tracks change frequency per file (hotspot detection)
  - Supports incremental indexing from last known commit

- `test-mapping.ts` — Maps tests to source files
  - Supports Jest, Vitest, Playwright, pytest, Go test
  - Extracts test names, file paths, and associated source files
  - Enables "find tests for this file" queries

- `summaries.ts` — Architecture summary generation
  - Uses Claude to generate module-level summaries
  - Aggregates into project-wide architecture overview
  - Cached summaries for fast retrieval

### Integration Updates

- `index.ts` — Updated init flow to run Phase 2 indexing after core vectorization
- `store.ts` — Added RelationshipRecord, GitHistoryRecord, TestMappingRecord interfaces

### Test Coverage

- 185 total tests (up from 59 in Phase 1)
- 24 tests for relationships
- 21 tests for git history
- 37 tests for test mapping
- 44 tests for summaries

## Affected Website Pages

- [ ] Vectorization documentation — add Phase 2 features section
- [ ] Features/capabilities page — mention relationship indexing, git history, test mapping
- [ ] Agent documentation — note semantic search now includes contextual data

## Source

- Commit: 0b79550
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
