---
createdBy: toolkit
date: 2026-03-08
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — postChangeActions

## Summary

Added `postChangeActions` configuration to the project schema, replacing scattered workflow-step-based mechanisms for downstream propagation (support articles, marketing sync, tools updates) with a unified, project-defined JSON array that runs after commit.

## Changes

- Modified: `schemas/project.schema.json` — Added `postChangeActions` array configuration after `postChangeWorkflow` section (~120 lines of schema). Removed `support-article`, `tools`, `marketing` from `workflows.adhoc` and `workflows.prd` step enums.
- Modified: `schemas/workflow-defaults.schema.json` — Removed `support-article`, `tools`, `marketing` from `workflowStep` enum. Updated `conditionalSteps` description to note migration to postChangeActions.
- Modified: `data/workflow-defaults.json` — Removed `conditionalSteps` entries for support-article/tools/marketing (kept tester-scoped). Removed `stepReference` entries for those three steps. Updated `lastUpdated`.
- Modified: `skills/test-flow/SKILL.md` — Added Section 5.5 "Post-Change Actions (After Commit)" covering trigger evaluation, action execution (pending-update, agent, command, notify), and error handling. Updated completion prompt [C] option.
- Modified: `skills/prd-workflow/SKILL.md` — Replaced hardcoded `supportArticleRequired`/`toolsRequired`/`marketingRequired` story flags with postChangeActions reference.
- Modified: `skills/post-completion/SKILL.md` — Replaced Step B (Generate Missing Support Articles) with postChangeActions verification. Replaced Step D (Copy Review for New Articles) with post-change action result verification. Updated description triggers.
- Modified: `skills/builder-delegation/SKILL.md` — Added "Post-Change Actions (after commit)" section to the canonical source example.
- Created: `templates/updates/migrate-to-post-change-actions.md` — Interactive migration template for all projects.
- Modified: `data/update-registry.json` — Added `2026-03-08-migrate-to-post-change-actions` entry with `all-projects` affinity, high priority.
- Modified: `toolkit-structure.json` — Fixed schema entries (replaced deleted builder-state.schema with session.schema, chunk.schema, builder-config.schema; total 16→18). Updated post-completion skill description. Added changelog entries. Updated session-log skill entry (replaced deleted builder-state).

## Affected Website Pages

- [ ] Schema documentation page (postChangeActions is a new top-level config)
- [ ] Workflow documentation page (execution flow now includes post-commit actions)
- [ ] Skills documentation page (test-flow, post-completion, prd-workflow updated)
- [ ] Agent documentation page (builder-delegation canonical source updated)
- [ ] Migration/updates page (new migration template available)

---

## Part 2: Builder Pipeline — postChangeActions Execution Step

### Summary

Added mandatory Step 4.5 to the Builder's Story Processing Pipeline (and equivalent Step 1.5 in ad-hoc workflow) that reads and executes `postChangeActions` from `project.json` after every commit. This closes the gap where the schema/config existed but nothing in the pipeline actually triggered execution.

### Changes

- Modified: `agents/builder.md` — Added Step 4.5 (Post-Change Actions) between auto-commit and story status update. Includes decision tree, trigger evaluation table, failureMode table, and skill reference to test-flow Section 5.5. Updated Pipeline Loop, Failure Handling table, and Step 5 story status.
- Modified: `skills/adhoc-workflow/SKILL.md` — Added Step 1.5 in Phase 2: Ship between commit and push/PR. Updated flow chart and pipeline summary list.
- Modified: `skills/prd-workflow/SKILL.md` — Updated pipeline summary from `implement → test-flow → auto-commit` to `implement → test-flow → commit → postChangeActions`. Strengthened existing postChangeActions reference to point to canonical builder.md Step 4.5.
- Modified: `skills/test-flow/SKILL.md` — Strengthened Section 5.5 header with ⛔ MANDATORY gate, explicit pipeline step reference, and `all commit paths` applicability note.

### Affected Website Pages

- [ ] Agent documentation page (builder pipeline updated)
- [ ] Workflow documentation page (new mandatory post-commit step)
- [ ] Skills documentation page (adhoc-workflow, prd-workflow, test-flow updated)

## Source

- Commit: pending (will update after commit)
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
