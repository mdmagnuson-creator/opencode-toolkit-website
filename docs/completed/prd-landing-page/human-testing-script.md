# Testing Script: AI Toolkit Landing Page

**Feature:** Marketing/overview website for the AI Toolkit system  
**Completed:** February 20, 2026  
**Tested by:** _________________  
**Test date:** _________________

---

## What Was Built

A single-page landing website that explains what the AI Toolkit agent system is, shows the available agents and skills, and guides visitors on how to get started. The site works on both desktop and mobile, and includes a dark/light mode toggle.

---

## Before You Start

- [ ] Open the website in your browser (either locally or the deployed GitHub Pages URL)
- [ ] Have a second device or resize your browser window ready to test mobile view

---

## Test Scenarios

### Scenario 1: View the landing page on desktop

**Starting point:** Open the website URL in a desktop browser (at least 1024px wide)

**Steps:**
1. Load the website URL
2. Scroll from top to bottom, viewing each section

**What should happen:**
- The page loads without errors
- You see a hero section at the top with "An Agent System for opencode" headline
- Three statistic numbers appear (57 Agents, 16 Skills, 4 Steps to Start)
- Sections appear in order: What Is It, Primary Agents, Agent Categories, Skills, Getting Started, Footer
- The agent relationship diagram shows boxes connected with dotted lines
- All text is readable and nothing overlaps

**Result:** ☐ Pass  ☐ Fail

**If it failed, what happened?**  
_________________________________________________________________

---

### Scenario 2: View the landing page on mobile

**Starting point:** Open the website on a phone, or resize browser to 375px wide

**Steps:**
1. Load the website URL on a mobile device or narrow browser window
2. Scroll through the entire page

**What should happen:**
- All content stacks vertically (single column)
- Text remains readable (not too small)
- Buttons are large enough to tap
- The agent cards stack on top of each other
- Nothing gets cut off or hidden
- You can scroll smoothly without horizontal scrolling

**Result:** ☐ Pass  ☐ Fail

**If it failed, what happened?**  
_________________________________________________________________

---

### Scenario 3: Toggle dark mode

**Starting point:** Any page view (desktop or mobile)

**Steps:**
1. Look for a circular button in the bottom-right corner of the screen
2. Click/tap the button
3. Click/tap it again

**What should happen:**
- First click: The entire page switches between light and dark colors
- The button icon changes (sun icon for light mode, moon icon for dark mode)
- All text remains readable in both modes
- Second click: The page switches back to the original mode
- The transition is smooth (colors fade rather than snap)

**Result:** ☐ Pass  ☐ Fail

**If it failed, what happened?**  
_________________________________________________________________

---

### Scenario 4: Dark mode persists after refresh

**Starting point:** Page in light mode (white background)

**Steps:**
1. Click the theme toggle button to switch to dark mode
2. Refresh the page (press F5 or the refresh button)

**What should happen:**
- After refresh, the page stays in dark mode
- You don't see a flash of light mode before dark mode loads

**Result:** ☐ Pass  ☐ Fail

**If it failed, what happened?**  
_________________________________________________________________

---

### Scenario 5: Dark mode respects system preference

**Starting point:** Close all browser tabs with the website

**Steps:**
1. Set your computer/phone to dark mode (in system settings)
2. Open the website in a fresh browser tab

**What should happen:**
- The website loads in dark mode automatically
- The theme toggle shows a sun icon (indicating you're in dark mode)

**Result:** ☐ Pass  ☐ Fail

**If it failed, what happened?**  
_________________________________________________________________

---

### Scenario 6: Click the "Get Started" button

**Starting point:** Top of the page (hero section)

**Steps:**
1. Find the "Get Started" button near the top of the page
2. Click it

**What should happen:**
- The page smoothly scrolls down to the "Getting Started" section
- The Getting Started section shows 4 numbered steps

**Result:** ☐ Pass  ☐ Fail

**If it failed, what happened?**  
_________________________________________________________________

---

### Scenario 7: Verify agent and skill counts

**Starting point:** Top of the page

**Steps:**
1. Look at the statistics row below the main headline
2. Scroll to the "Agent Categories" section
3. Add up the numbers shown in each category card

**What should happen:**
- Hero shows "57 Agents" and "16 Skills"
- Agent Categories shows: Critics (22), Developers (9), Testers (5), Other (21)
- The category numbers add up to 57 total

**Result:** ☐ Pass  ☐ Fail

**If it failed, what happened?**  
_________________________________________________________________

---

### Scenario 8: View the agent relationship diagram

**Starting point:** Scroll to find the visual diagram

**Steps:**
1. Find the section showing how agents work together (boxes with connecting lines)
2. Read the labels on each box

**What should happen:**
- You see "You" at the top
- Below that is "bildr" or "planner"
- Lines connect down to other agents like "ralph", "critic", "tester"
- The diagram is centered on the page
- On mobile, the diagram may be simplified but still readable

**Result:** ☐ Pass  ☐ Fail

**If it failed, what happened?**  
_________________________________________________________________

---

## Edge Cases to Try

### What if the user...

| Try this | Expected behavior |
|----------|-------------------|
| Rapidly clicks the theme toggle 10 times | Theme switches smoothly each time, no glitches |
| Zooms the browser to 200% | Page content scales up, remains usable |
| Zooms the browser to 50% | Page content scales down, nothing breaks |
| Uses keyboard Tab key to navigate | Focus moves through interactive elements visibly |
| Right-clicks and opens "Get Started" in new tab | Same page opens, scrolled to Getting Started |

---

## Things That Should Still Work

These are basic browser behaviors that shouldn't be broken:

- [ ] Page can be bookmarked
- [ ] Page can be shared via URL
- [ ] Browser back/forward buttons work if you navigated to an anchor
- [ ] Page can be printed (Print dialog opens, content is visible)
- [ ] Text can be selected and copied

---

## Final Check

- [ ] All scenarios passed
- [ ] Edge cases behave correctly  
- [ ] Basic browser features still work
- [ ] Site looks good in both light and dark mode
- [ ] Site works on both desktop and mobile

**Overall result:** ☐ Ready to ship  ☐ Needs fixes

**Notes:**

_________________________________________________________________

_________________________________________________________________
