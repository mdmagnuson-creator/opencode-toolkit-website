---
createdBy: toolkit
date: 2026-03-01
priority: normal
type: sync
scope: implementation
---

# Sync Toolkit Documentation

## Changes

- **Added skill:** `supabase-skill-generator` — Generates a project-specific Supabase database skill covering RLS policies, server/browser client patterns, query types, and realtime subscriptions. Does not duplicate existing auth skills.
- **Modified agent:** `developer` — Added Phase 3B.2 for auto-promoting generated skills back to the toolkit via `pending-updates/` queue.
- **Modified data:** `meta-skill-triggers.json` — Added `supabase` to `integrationTriggers` so Developer and project-bootstrap auto-trigger the new generator for Supabase projects.

## Files to Update

- Fetch latest `toolkit-structure.json` from GitHub to get updated agent/skill counts and entries
- Update the skills page/list to include `supabase-skill-generator` (44 skills total, 11 meta-generators)
- Update the agents page/list to reflect corrected agent count (63 agents)
- Update any "what's new" or changelog section with these additions

## Source

- Commit: `504872d`
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
