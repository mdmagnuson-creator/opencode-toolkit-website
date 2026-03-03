---
createdBy: toolkit
date: 2026-03-03
priority: normal
updateType: sync
---

# Sync Vectorization Visibility Improvements

## Summary

Added vectorization visibility improvements to Builder dashboard and vectorize skill - including status display, blocking stale index prompts, documented token batching, and verbosity controls.

## Changes

### Builder Dashboard (agents/builder.md)

- Added: **Vectorization Status section** to both Fresh and Resume dashboards
  - Shows status: "🟢 Healthy", "🟡 Stale (N days)", "🔴 Missing", "⚪ Not enabled"
  - Displays last indexed timestamp and document count when available

- Added: **Blocking stale index prompt** in startup flow (step 4.6)
  - Only triggers when: vectorization enabled AND index exists AND index > 24h old
  - Offers R/S/D options (Refresh now / Skip / Disable vectorization)
  - Non-blocking for not-enabled and missing-index states (informational only)

### Vectorize Skill (skills/vectorize/SKILL.md)

- Added: **Token-Aware Batching** section documenting the existing batching behavior
  - Explains Voyage API 50,000 tokens/batch limit
  - Documents automatic batch building and multi-batch processing

### Embeddings Module (skills/vectorize/resources/src/embeddings.ts)

- Added: **Verbosity control** to all embedding providers
  - Default: summary line only (`Processed 150 documents in 3 batches`)
  - `--verbose`: per-batch details (`Batch 1/3: 50 documents, 15000 tokens`)
  - `--quiet`: no output (for CI/automated use)

## Affected Website Pages

- [ ] Builder documentation page (dashboard section)
- [ ] Vectorize skill documentation page
- [ ] Semantic search / vectorization overview page (if exists)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
