---
createdBy: toolkit
date: 2026-03-03
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Git Completion Workflow

## Summary

Added canonical Git Completion Workflow to AGENTS.md that unifies git shipping behavior between PRD mode and ad-hoc mode. Both workflows now follow the same 7-step process driven by `git.agentWorkflow` settings.

## Changes

- Added: `AGENTS.md` — New "Git Completion Workflow" section (canonical 7-step workflow)
- Modified: `skills/prd-workflow/SKILL.md` — Phase 3: Ship Steps 4-7 rewritten to use `git.agentWorkflow` and reference AGENTS.md
- Modified: `skills/adhoc-workflow/SKILL.md` — Phase 2: Ship now references AGENTS.md canonical workflow
- Modified: `schemas/project.schema.json` — Updated `requiresHumanApproval` description to clarify PRs allowed, only auto-merge blocked
- Moved: `docs/drafts/prd-git-workflow-completion.md` → `docs/prds/prd-git-workflow-completion.md` (implemented)

## Affected Website Pages

- [ ] AGENTS.md documentation page (new section: Git Completion Workflow)
- [ ] Skills documentation (prd-workflow, adhoc-workflow changes)
- [ ] Schema documentation (project.schema.json agentWorkflow description updates)

## Key Changes to Document

1. **Unified Workflow:** PRD mode and ad-hoc mode now use identical git shipping behavior
2. **User Prompt Before PR:** Both modes now prompt user before PR creation
3. **requiresHumanApproval Clarification:** PRs CAN be created to protected branches, only auto-merge is blocked
4. **Fail-Fast Validation:** Both modes fail immediately if `git.agentWorkflow` is not configured

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
