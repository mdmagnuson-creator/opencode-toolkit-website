---
createdBy: toolkit
date: 2026-03-04
priority: normal
updateType: sync
---

# Sync Toolkit Documentation - CLI Persistence

## Summary

Added CLI state persistence and proactive CLI usage triggers to Builder to prevent "forgetting" CLI access during long sessions.

## Changes

- Modified: `schemas/builder-state.schema.json` — Added `availableCLIs` field for persisting detected CLI authentication state
- Modified: `agents/builder.md` — Updated step 4.7 to persist CLI state to builder-state.json with compaction recovery
- Modified: `agents/builder.md` — Added comprehensive "Proactive CLI Usage" section with trigger table
- Modified: `skills/builder-state/SKILL.md` — Added "CLI State Persistence" documentation section

## Affected Website Pages

- [ ] Agent documentation page (if exists)
- [ ] Builder agent reference
- [ ] State management / session persistence docs

## Details

### Problem Solved

Builder was "forgetting" it had CLI access during long PRD sessions due to context compaction. This caused Builder to tell users to manually configure services (e.g., "Go to Vercel dashboard → Domains") when it had authenticated CLI access that could do the work directly.

### Solution

1. **Persist CLI state** — `availableCLIs` is now stored in `builder-state.json` so it survives context compaction
2. **Proactive triggers** — Added explicit trigger table telling Builder WHEN to use CLIs instead of passive "remember to check"
3. **Compaction recovery** — On session resume, Builder reads persisted CLI state instead of re-detecting (unless stale >24h)

### New Proactive Triggers (Partial List)

| Instead of telling user... | CLI Command |
|---------------------------|-------------|
| "Go to Vercel → Domains" | `vercel domains add [domain]` |
| "Go to Vercel → Environment Variables" | `vercel env add [NAME]` |
| "Add GitHub secret in Settings" | `gh secret set [NAME]` |
| "Configure Supabase secrets" | `supabase secrets set [NAME]=[VALUE]` |

## Source

- Commit: 3655fd9
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
