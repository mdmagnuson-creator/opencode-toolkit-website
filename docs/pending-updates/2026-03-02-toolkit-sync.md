---
createdBy: toolkit
date: 2026-03-02
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added relatedProjects configuration system to enable explicit project-to-project relationships, replacing name-based guessing for cross-project workflows like website sync.

## Changes

- Added: `schemas/project.schema.json` — New `relatedProjects` array schema with projectId, relationship, label, description fields
- Added: `skills/project-bootstrap/SKILL.md` — Step 10j for related projects configuration during bootstrap (includes inverse relationship offer)
- Added: `data/related-projects.md` — Helper pattern documentation for agents to resolve related projects
- Modified: `agents/toolkit.md` — Post-change workflow now uses relatedProjects for website sync lookup with fallback
- Added: `docs/project.json` — New file for yo-go toolkit with documentation-site relationship to opencode-toolkit-website

## New Relationship Conventions

| Relationship | Inverse | Description |
|--------------|---------|-------------|
| `documentation-site` | `documented-project` | This project is documentation for the other |
| `marketing-site` | `marketed-product` | This project markets the other |
| `api-backend` | `frontend-client` | This project is the API for the other |
| `admin-dashboard` | `managed-service` | This project manages the other |
| `shared-library` | `dependent-project` | This project is shared code for the other |
| `monorepo-sibling` | `monorepo-sibling` | Both are in the same monorepo |
| `test-harness` | `tested-system` | This project tests the other |

## Affected Website Pages

- [ ] Agent documentation page (toolkit.md changes)
- [ ] Skills documentation page (project-bootstrap updates)
- [ ] Schema documentation page (new relatedProjects schema)
- [ ] Getting started/bootstrap guide (new step 10j)

## Source

- Commits: 7c7a059, 2cbf291, 23c386c, 6960d3c, a846deb
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
