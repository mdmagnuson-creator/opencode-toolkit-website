---
createdBy: toolkit
date: 2026-03-23
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added infrastructure-verification skill and Builder pipeline integration to verify that infrastructure files (migrations, IaC templates, serverless functions) are actually deployed after @developer creates them.

## Changes

- Created: `skills/infrastructure-verification/SKILL.md` — New skill for verifying infrastructure deployments (migrations, IaC, functions) after creation. Includes file detection patterns, verification pipeline, error diagnostic priority, and configuration reference.
- Modified: `agents/builder.md` — Added Step 2.5 (infrastructure verification gate) to story pipeline, added Infrastructure-Error Diagnostic Priority section, added skill to Skills Reference table and Test Skill Loading triggers.
- Modified: `schemas/project.schema.json` — Added top-level `infrastructure` property with `migrations`, `functions`, and `iac` sub-objects for deployment verification configuration.
- Modified: `skills/test-flow/SKILL.md` — Added Infrastructure-Error Diagnostic Priority pre-check to Section 3 quality pipeline, added `infrastructure-verification` to on-demand skills table.

## Affected Website Pages

- [ ] Skills documentation page (new skill to add)
- [ ] Agent documentation page (Builder pipeline update)
- [ ] Schema/configuration documentation (new infrastructure section)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson/helm-ade-toolkit/main/toolkit-structure.json
