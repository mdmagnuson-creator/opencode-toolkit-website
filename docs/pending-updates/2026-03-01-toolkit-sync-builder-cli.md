---
createdBy: toolkit
date: 2026-03-01
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added CLI availability detection to Builder startup, so it remembers which service CLIs (vercel, supabase, aws, etc.) are available and uses them directly.

## Changes

- Modified: `agents/builder.md` — Added Step 4.7: Detect available CLIs
  - Checks for vercel, supabase, aws, gh, netlify, fly, railway, wrangler
  - Detects if installed AND authenticated
  - Shows authenticated CLIs in dashboard
  - Stores in session memory for use throughout session
  - Includes capabilities table for each CLI

## Affected Website Pages

- [ ] Builder agent documentation
- [ ] Agent startup workflow documentation (if applicable)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
