---
createdBy: toolkit
date: 2026-03-03
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Major update implementing Project Context Awareness & Git Workflow Enforcement PRD - adds git workflow validation, project context loading, and relatedProjects enforcement across all primary agents.

## Changes

### Schema Changes

- Modified: `schemas/project.schema.json` — Removed deprecated `agents.gitWorkflow`, `agents.trunkMode`, `agents.autoCommit`, `agents.autoPush` fields; added `git.agentWorkflow` object with `pushTo`, `createPrTo`, `workBranch`, `requiresHumanApproval` fields
- Modified: `schemas/builder-state.schema.json` — Added `projectContext` key for caching project context in builder state

### Agent Changes

- Modified: `AGENTS.md` — Added "Git Workflow Enforcement" section with validation protocol, error formats, and default cascade rules
- Modified: `agents/builder.md` — Added project context loading/caching, git workflow validation anchor, updated sub-agent context delegation block
- Modified: `agents/planner.md` — Added context loading, git enforcement, cross-project PRD creation via relatedProjects
- Modified: `agents/developer.md` — Added git workflow extraction, enforcement anchor, Phase 3 validation
- Modified: `agents/toolkit.md` — Added Option C central registry instructions, enforced relatedProjects lookup (no name-based fallback)

### Central Registry (New)

- Created: `templates/updates/migrate-git-config.md` — Interactive migration template for git config migration
- Modified: `data/update-registry.json` — Added migration entry with `affinityRule: "all-projects"`

## Affected Website Pages

- [ ] Agent documentation page (Builder, Planner, Developer, Toolkit sections)
- [ ] Schema documentation (project.schema.json, builder-state.schema.json)
- [ ] Git workflow documentation (new section for git.agentWorkflow)
- [ ] Central registry / updates documentation

## Source

- Commits: 9907098, 74b71d4, 3e56396, 6b0c065, fdf0178, af7b452, 50d99fd, d0382c9, 5693d72
- PRD: `docs/prds/prd-project-context-awareness.md`
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
