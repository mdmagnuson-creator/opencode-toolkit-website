---
createdBy: toolkit
date: 2026-03-16
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Swift Agents

## Summary

Added two new agents for native Apple platform development (Swift/SwiftUI) and updated the critic router to route `.swift` files to the new swift-critic agent.

## Changes

- Added: `agents/swift-dev.md` — Implementation agent specializing in SwiftUI layout, multiplatform (macOS/iOS), and native Apple patterns. Includes comprehensive SwiftUI layout rules covering VStack/HStack/ZStack, frame/sizing, GeometryReader, hidden content preservation, ScrollView/List, multiplatform layout, and performance patterns.
- Added: `agents/swift-critic.md` — Code review agent for Swift/SwiftUI covering layout correctness, view lifecycle, data flow, multiplatform issues, dark mode/theming, accessibility, and Apple platform best practices.
- Modified: `agents/critic.md` — Updated routing table to send `.swift` files to @swift-critic. Added Swift classification heuristic to routing section. Added project-specific swift-critic override support.
- Modified: `toolkit-structure.json` — Added swift-dev to implementation category, swift-critic to critics category, updated total from 63 to 65.
- Modified: `README.md` — Updated agent count from 63 to 65.

## Affected Website Pages

- [ ] Agent documentation page (new agents to add)
- [ ] Agent catalog/listing (count update)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
