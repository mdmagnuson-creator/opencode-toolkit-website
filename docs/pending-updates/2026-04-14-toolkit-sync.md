---
createdBy: toolkit
date: 2026-04-14
priority: normal
updateType: sync
---

# Sync Toolkit Documentation

## Summary

Added Swift/native Apple fallback chains for agent routing and made specialist delegation mandatory in @developer to prevent generalist misrouting.

## Changes

- Modified: `data/fallback-chains.yaml` — Added `swift-native` and `xcuitest` fallback chains under new NATIVE / MOBILE section, plus `*.swift` and `*UITests*` file pattern detection comments
- Modified: `agents/developer.md` — Changed routing algorithm from optional ("If a matching specialist exists, delegate") to mandatory ("you MUST delegate") with explicit prohibition against implementing work when a matching specialist agent exists

## Affected Website Pages

- [ ] Agent documentation page (developer agent routing behavior changed)
- [ ] Data files / fallback chains documentation (new Swift chains added)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
