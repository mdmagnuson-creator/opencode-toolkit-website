---
createdBy: toolkit
date: 2026-03-03
priority: normal
updateType: sync
---

# Sync Toolkit Documentation: Git Workflow Enforcement Clarification

## Summary

Clarified git workflow enforcement to properly distinguish between direct push (blocked), PR creation (allowed), and auto-merge (blocked) for protected branches.

## Changes

- Modified: `AGENTS.md` — Updated Git Workflow Enforcement section to clarify:
  - Direct push to protected branch → BLOCKED
  - Create PR to protected branch → ALLOWED
  - Auto-merge PR to protected branch → BLOCKED (human must approve and merge)

- Modified: `skills/adhoc-workflow/SKILL.md` — Added explicit `git.agentWorkflow` enforcement to Phase 2: Ship:
  - Added Step 2: Push and PR (Follow Project Settings) with flow based on project settings
  - Added user prompt before PR creation
  - Added handling for `requiresHumanApproval` branches

- Added: `docs/drafts/prd-git-workflow-completion.md` — PRD for consistent git workflow completion behavior between ad-hoc and PRD modes

## Affected Website Pages

- [ ] AGENTS.md documentation page (Git Workflow Enforcement section)
- [ ] Skills documentation (adhoc-workflow skill)
- [ ] Any pages describing agent git behavior

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
