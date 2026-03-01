---
createdBy: toolkit
date: 2026-02-28
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added new E2E Auditor capability for comprehensive autonomous E2E test auditing.

## Changes

- **New Agent:** `agents/e2e-auditor.md` — Autonomous E2E test auditor that analyzes apps, generates comprehensive test coverage, and executes with 5-retry resilience
- **New Skill:** `skills/e2e-full-audit/SKILL.md` — Audit workflow patterns, manifest schema, and resilient execution strategies
- **New Schema:** `schemas/e2e-audit-manifest.schema.json` — Schema for tracking comprehensive E2E test audits with per-test commit tracking
- **Modified:** `agents/e2e-playwright.md` — Added audit-mode support (5 retries, continue-on-failure, per-test commits)
- **Modified:** `skills/test-flow/SKILL.md` — Added E2E Auditor integration section

## Key Features

1. **Proactive Full-App Audits** — Unlike reactive story-driven testing, auditor analyzes entire application state
2. **Manifest-Driven Execution** — Tracks all tests in `e2e-audit-manifest.json` with status tracking
3. **5-Retry Resilience** — Each test gets 5 attempts with AI-powered fix attempts between retries
4. **Per-Test Commits** — Commits after each passing test to preserve progress
5. **Continue on Failure** — Logs failures and continues to next test (never stops)
6. **PRD Integration** — Can use PRDs like `prd-comprehensive-e2e-suite.json` as test manifests

## Affected Website Pages

- [ ] Agent documentation page (add e2e-auditor)
- [ ] Skills documentation page (add e2e-full-audit)
- [ ] Testing workflow documentation (add auditor integration)
- [ ] Schema reference page (add e2e-audit-manifest)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
