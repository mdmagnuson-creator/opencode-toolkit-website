---
createdBy: toolkit
date: 2026-03-16
priority: normal
updateType: sync
---

# Sync Toolkit Documentation — Swift Agents, Outcome-Only Analysis, Dynamic Routing, Reduced Analysis Depth

## Summary

Added two new agents for native Apple platform development (Swift/SwiftUI), made ad-hoc analysis dashboards fully outcome-only (no mechanism prescriptions across all dashboard sections), replaced hardcoded agent routing tables with dynamic discovery from the Task tool's agent list, and reduced analysis phase depth to behavior-focused exploration (specialists handle deep codebase understanding).

## Changes

- Added: `agents/swift-dev.md` — Implementation agent specializing in SwiftUI layout, multiplatform (macOS/iOS), and native Apple patterns. Includes comprehensive SwiftUI layout rules covering VStack/HStack/ZStack, frame/sizing, GeometryReader, hidden content preservation, ScrollView/List, multiplatform layout, and performance patterns.
- Added: `agents/swift-critic.md` — Code review agent for Swift/SwiftUI covering layout correctness, view lifecycle, data flow, multiplatform issues, dark mode/theming, accessibility, and Apple platform best practices.
- Modified: `agents/critic.md` — Replaced hardcoded language/framework critic routing table with dynamic discovery from available `*-critic` agents. Project-specific override layer and cross-cutting/security critics unchanged.
- Modified: `agents/developer.md` — Replaced hardcoded specialist routing table with dynamic discovery from available `*-dev` agents via the Task tool's agent list.
- Modified: `skills/adhoc-workflow/SKILL.md` — Outcome-only analysis applied to all dashboard sections:
  - Step 0.1: Added dashboard presentation rule separating internal analysis (mechanism-aware) from user-facing dashboard (outcome-only)
  - UNDERSTANDING section: "Proposed behavior" items describe desired behavior, not APIs/components
  - AFFECTED FILES: File descriptions state functional change, not implementation mechanism
  - RECOMMENDED APPROACH: Describes desired outcomes and constraints, not techniques
  - STORY PREVIEW: Task descriptions describe user experience, not which API/pattern to use
  - Dashboard rules: Added explicit rules for Understanding and Affected Files sections
  - Task spec template: Updated to match outcome-only patterns
  - Step 0.1: Renamed from "Time-Boxed Analysis" to "Behavior-Focused Analysis" — replaced deep AST/semantic/checklist methods with locate-area/side-effect-check/scope-estimate, added explicit guidance that deep exploration belongs to specialist agents not the analysis phase
- Modified: `toolkit-structure.json` — Added swift-dev to implementation category, swift-critic to critics category, updated total from 63 to 65. Updated changelog.
- Modified: `README.md` — Updated agent count from 63 to 65.

## Affected Website Pages

- [ ] Agent documentation page (new agents to add, routing changes to document)
- [ ] Agent catalog/listing (count update)
- [ ] Workflow documentation (outcome-only analysis is a behavioral change)

## Source

- Commit: pending
- toolkit-structure.json: https://raw.githubusercontent.com/mdmagnuson-creator/yo-go/main/toolkit-structure.json
