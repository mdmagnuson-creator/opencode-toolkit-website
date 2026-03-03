---
createdBy: toolkit
date: 2026-03-02
priority: normal
updateType: sync
---

# Sync Toolkit Documentation: Voyage AI Embedding Support

## Summary

Added Voyage AI as an embedding provider option for the vectorize skill, with `voyage-code-3` recommended for code search.

## Changes

- Modified: `skills/vectorize/SKILL.md` — Added Voyage AI embedding support
  - Added `VOYAGE_API_KEY` to requirements section
  - Added "Embedding Models" table showing all providers (Voyage AI, OpenAI, Ollama)
  - Recommended `voyage-code-3` for code retrieval (Anthropic's official recommendation)
  - Updated configuration example to show `voyage-code-3` as default
  - Added `voyage` to credentials section in config example
  - Updated status/init output examples to show Voyage
  - Added Voyage troubleshooting section
  - Updated "High embedding costs" troubleshooting to mention Voyage lite option

## Affected Website Pages

- [ ] Vectorization documentation (if exists)
- [ ] Features/capabilities page (embedding providers)
- [ ] Any page listing supported integrations

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
