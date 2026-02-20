# Testing Script: Site-Wide Accuracy Pass

**Feature:** Documentation accuracy improvements across all pages  
**Completed:** 2026-02-20  
**Tested by:** _________________  
**Test date:** _________________

---

## What Was Built

All pages on the OpenCode Toolkit website have been audited and corrected to ensure they accurately reflect the actual ai-toolkit behavior. Non-existent agent references were removed, primary vs sub-agent distinctions were fixed, and page content now matches reality.

---

## Before You Start

- [ ] Open the live site: https://mdmagnuson-creator.github.io/opencode-toolkit-website/
- [ ] Have a second tab open to compare if needed

---

## Test Scenarios

### Scenario 1: Home Page Accuracy

**Starting point:** Home page (/)

**Steps:**
1. Scroll to the "How It Works" section
2. Look at Step 4 - verify it shows the curl install command
3. Check that no references to "@ralph" appear anywhere

**What should happen:**
- Step 4 should show: `curl -fsSL https://raw.githubusercontent.com/mdmagnuson-creator/ai-toolkit/main/install.sh | bash`
- No "@ralph" anywhere on the page

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 2: Getting Started Page

**Starting point:** /getting-started

**Steps:**
1. Read through the prerequisites section
2. Check the "Key Agents to Know" section
3. Verify the install command is shown

**What should happen:**
- Prerequisites should mention: terminal, Git, Node.js, OpenCode CLI
- Key agents should be: @builder, @planner, @e2e-tester, @toolkit, @merge-coordinator
- NOT @developer or @critic (those are sub-agents)
- Install command should match home page

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 3: Agent Relationship Diagram

**Starting point:** /concepts or any page with the agent diagram

**Steps:**
1. Find the agent relationship diagram
2. Count the primary agents shown
3. Verify the sub-agent count

**What should happen:**
- Exactly 5 primary agents: builder, planner, e2e-tester, toolkit, merge-coordinator
- Sub-agent count should show 54 (or dynamic from manifest)
- No "@ralph" or "@project-planner"

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 4: Agents List Pages

**Starting point:** /agents

**Steps:**
1. Click on "Primary Agents" tab/filter
2. Click on "Sub-Agents" tab/filter
3. Click into a few agent detail pages

**What should happen:**
- Primary agents: 5 total
- Sub-agents: 54 total
- Detail pages should load and show agent information

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 5: Skills Pages

**Starting point:** /skills

**Steps:**
1. View the skills list
2. Click into 2-3 skill detail pages
3. Check that project skills and meta-skills are distinguished

**What should happen:**
- Skills list should show all skills from manifest
- Detail pages should load with descriptions
- Meta-skills should be identifiable

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 6: Scaffolds Page

**Starting point:** /scaffolds

**Steps:**
1. Count the scaffolds shown
2. Verify the scaffold names

**What should happen:**
- Exactly 3 scaffolds should be shown
- Names should match what's in the manifest

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 7: Agent Templates Page

**Starting point:** /agent-templates

**Steps:**
1. View the agent templates list
2. Check that it pulls from manifest data

**What should happen:**
- Should show 14 agent templates
- Data should come from the manifest, not hardcoded

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 8: Automations Page

**Starting point:** /automations

**Steps:**
1. Review what automations are listed
2. Verify no non-existent features are mentioned

**What should happen:**
- Only real automation features should be shown
- No references to features that don't exist

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 9: MCP Page

**Starting point:** /mcp

**Steps:**
1. Check which MCP integrations are listed
2. Verify Supabase is mentioned

**What should happen:**
- Supabase MCP should be listed (not GitHub MCP)
- Information should be accurate

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 10: Concepts Page Links

**Starting point:** /concepts

**Steps:**
1. Check the list of primary agents mentioned
2. Verify @merge-coordinator is included
3. Click through concept sub-pages

**What should happen:**
- Primary agents list should include all 5: builder, planner, e2e-tester, toolkit, merge-coordinator
- All links should work

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 11: The Loop Component

**Starting point:** Any page showing "The Loop" workflow diagram

**Steps:**
1. Find references to the planner agent
2. Verify it says "@planner" not "@project-planner"

**What should happen:**
- Should reference "@planner"
- No "@project-planner" anywhere

**Result:** ☐ Pass  ☐ Fail

---

## Edge Cases to Try

| Try this | Expected behavior |
|----------|-------------------|
| Search for "@ralph" on any page | Should find zero results |
| Search for "@project-planner" | Should find zero results |
| Navigate to a non-existent agent (e.g., /agents/fake-agent) | Should show 404 or graceful error |
| Check mobile responsiveness | Pages should be readable on mobile |

---

## Things That Should Still Work

- [ ] Dark mode toggle (if exists)
- [ ] Navigation between all main sections
- [ ] External links (GitHub repo, etc.)
- [ ] Page load performance (no regressions)

---

## Final Check

- [ ] All scenarios passed
- [ ] Edge cases behave correctly  
- [ ] Existing features still work
- [ ] No references to non-existent agents (@ralph, @project-planner)

**Overall result:** ☐ Ready to ship  ☐ Needs fixes

---

## Notes

Key changes made:
1. Replaced all @ralph references with @developer
2. Fixed @project-planner → @planner
3. Corrected primary agent list to 5 agents
4. Updated Getting Started to show actual install command
5. Refactored several pages to use manifest data instead of hardcoded values
