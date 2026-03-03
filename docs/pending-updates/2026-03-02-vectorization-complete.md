---
createdBy: toolkit
date: 2026-03-02
priority: high
updateType: sync
---

# Sync Toolkit Documentation: Vectorization PRD Complete

## Summary

The Vectorization PRD (19 user stories) is now fully implemented, adding semantic search capabilities to the AI toolkit with 276 tests passing.

## Changes

### New Skill: `skills/vectorize/`

Major new skill with comprehensive semantic search capabilities:

- **`SKILL.md`** — Complete documentation (581 lines) covering:
  - CLI commands: `vectorize init`, `vectorize refresh`, `vectorize status`, `vectorize search`
  - Embedding models: Voyage AI (recommended), OpenAI, Ollama (local)
  - Contextual Retrieval (49% fewer retrieval failures)
  - Database schema and config table indexing
  - Hybrid search (semantic + BM25)
  - Git post-commit hook integration
  - Cost estimates by codebase size

- **`resources/src/`** — Implementation (276 tests):
  - `chunker.ts` — AST-based code chunking with Tree-sitter
  - `embeddings.ts` — Auto-detect and use Voyage > OpenAI > Ollama
  - `store.ts` — LanceDB vector storage
  - `bm25.ts` — BM25 keyword search
  - `search.ts` — Hybrid search with RRF fusion
  - `contextual.ts` — Contextual Retrieval with prompt caching
  - `database.ts` — PostgreSQL schema extraction with RLS support
  - `relationships.ts` — Call graph and dependency extraction
  - `git-history.ts` — Commit history and blame context
  - `test-mapping.ts` — Test-to-code mapping
  - `summaries.ts` — Architecture summary generation
  - `tool.ts` — `semantic_search` MCP tool
  - `cli.ts` — CLI entry point
  - `git.ts` — Git hook installation

### Agent Updates for Semantic Search (US-017)

- **`agents/builder.md`** — Added:
  - Section 4.6: One-time vectorization setup prompt
  - Semantic context gathering before delegation
  - Usage instructions for `semantic_search` tool

- **`agents/planner.md`** — Added semantic search for codebase analysis

- **`agents/developer.md`** — Added:
  - Call graph queries for "What calls this function?"
  - Test mapping queries for finding related tests
  - Git history queries for "Why was this changed?"

- **`agents/tester.md`** — Added test mapping queries for coverage analysis

- **`agents/critic.md`** — Added semantic search for consistency verification

### Bootstrap Integration (US-018)

- **`skills/project-bootstrap/SKILL.md`** — Step 10i already exists with:
  - Environment variable detection
  - Three options: Initialize now / Defer / Skip
  - Database schema indexing prompt
  - Config table detection

### Builder Integration for Existing Projects (US-019)

- **`agents/builder.md`** — Section 4.6 already exists with:
  - One-time vectorization prompt
  - Stale index refresh
  - Missing index rebuild prompt

## Affected Website Pages

- [ ] Agent documentation page (5 agents updated: builder, planner, developer, tester, critic)
- [ ] Skills documentation page (new vectorize skill with 581 lines of docs)
- [ ] Getting started / configuration guide (vectorization section)
- [ ] Features page (semantic search capabilities)

## Source

- Commits: `a3430d1`, `0b79550`, `8476bf6`, `69aab4a`, `7116696`
- PRD: `docs/completed/prd-vectorization.md` (764 lines)
- Tests: 276 passing in `skills/vectorize/resources/`
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json

## Key Stats

| Metric | Value |
|--------|-------|
| User Stories | 19 complete |
| Test Files | 11 |
| Tests | 276 passing |
| Source Files | 14 |
| SKILL.md Lines | 581 |
