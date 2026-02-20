# PRD: Build-Time Toolkit Sync

**Status:** Completed  
**PR:** https://github.com/mdmagnuson-creator/opencode-toolkit-website/pull/2  
**Completed:** 2026-02-20

## Summary

Implemented automatic fetching of toolkit data from the ai-toolkit GitHub repo during build time, ensuring the website always reflects the latest toolkit content.

## User Stories Completed

| Story | Title |
|-------|-------|
| US-001 | Create build-time manifest generation script |
| US-002 | Add GitHub fetch mode to manifest script |
| US-003 | Update deploy workflow to generate fresh manifest |
| US-004 | Remove committed manifest from git tracking |
| US-005 | Add sync metadata to manifest and display on site |
| US-006 | Add fallback for local development without toolkit |

## Key Deliverables

1. **`scripts/generate-manifest.ts`** — Manifest generator supporting local + GitHub modes
2. **`src/data/sample-manifest.json`** — Fallback for development without toolkit
3. **Footer sync metadata** — Shows sync timestamp and commit hash
4. **CI/CD integration** — Deploy workflow generates fresh manifest from GitHub
5. **Timezone fix** — Fixed date parsing bug in formatDate() functions
