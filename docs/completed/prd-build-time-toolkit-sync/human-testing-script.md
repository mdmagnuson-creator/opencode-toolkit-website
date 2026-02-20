# Testing Script: Build-Time Toolkit Sync

**Feature:** Automatic toolkit data sync during build  
**Completed:** 2026-02-20  
**Tested by:** _________________  
**Test date:** _________________

---

## What Was Built

The website now automatically fetches the latest toolkit data from GitHub when deploying, so the site always shows current agents, skills, and changelog information. A footer indicator shows when data was last synced.

---

## Before You Start

- [ ] Have access to the deployed website
- [ ] Have access to GitHub Actions to view deploy logs

---

## Test Scenarios

### Scenario 1: Verify Sync Metadata Display

**Starting point:** Homepage of the deployed website

**Steps:**
1. Scroll to the bottom of any page
2. Look at the footer area

**What should happen:**
- Footer shows "Synced from ai-toolkit" with a timestamp
- May show a commit hash link (if available)

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 2: Verify Data is Current

**Starting point:** Agents page

**Steps:**
1. Navigate to the Agents page
2. Note the list of agents shown
3. Compare with the ai-toolkit repo's agents directory

**What should happen:**
- Agent list matches what's in the ai-toolkit repo
- No stale or missing agents

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 3: Verify Deploy Workflow

**Starting point:** GitHub Actions

**Steps:**
1. Go to the repository's Actions tab
2. Find a recent deploy run
3. Expand the "Generate manifest" step

**What should happen:**
- Step shows "Fetching from GitHub..."
- Successfully generates manifest with agent/skill counts
- No errors in the log

**Result:** ☐ Pass  ☐ Fail

---

### Scenario 4: Local Development Fallback

**Starting point:** Local development environment

**Steps:**
1. Clone the repo fresh (without ~/.config/opencode)
2. Run `npm install`
3. Run `npm run dev`

**What should happen:**
- Site starts successfully
- Uses sample-manifest.json as fallback data
- Console may show "Using sample manifest for development"

**Result:** ☐ Pass  ☐ Fail

---

## Edge Cases to Try

| Try this | Expected behavior |
|----------|-------------------|
| View site after toolkit repo update | Data should be fresh after next deploy |
| Deploy with GitHub API rate limit | Should gracefully fail with error message |

---

## Things That Should Still Work

- [ ] All existing pages load correctly
- [ ] Search functionality works
- [ ] Agent detail pages display properly
- [ ] Changelog shows recent updates

---

## Final Check

- [ ] All scenarios passed
- [ ] Edge cases behave correctly  
- [ ] Existing features still work

**Overall result:** ☐ Ready to ship  ☐ Needs fixes
