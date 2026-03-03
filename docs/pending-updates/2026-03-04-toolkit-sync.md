---
createdBy: toolkit
date: 2026-03-04
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added environment-database context diagnosis capability to Builder agent and a new skill for diagnosing Vercel-Supabase alignment issues.

## Changes

- **New skill:** `skills/vercel-supabase-alignment/SKILL.md` — Comprehensive guide for diagnosing which database Builder should target in multi-environment setups
- **Modified:** `agents/builder.md` — Added "Environment Context & Database Error Diagnosis" section with triggers for the new skill
- **Modified:** `schemas/project.schema.json` — Extended environments section with `database`, `branch`, `vercelEnvironment`, and `desktop` mappings
- **New:** `docs/research/2026-03-03-llm-techniques-synthesis.md` — LLM research synthesis with 6 implementation recommendations (internal reference)

## Affected Website Pages

- [ ] Skills reference page (add vercel-supabase-alignment skill)
- [ ] Builder agent documentation (document environment diagnosis capability)
- [ ] Schema reference page (document new environments fields)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
