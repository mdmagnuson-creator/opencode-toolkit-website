# Code Review: Header.tsx Breakpoint Changes

**File:** `src/components/Header.tsx`  
**Reviewer:** Code Quality Critic  
**Date:** 2026-02-20

---

## Summary

The change shifts the mobile/desktop breakpoint from `md:` (768px) to `lg:` (1024px) for navigation visibility. The implementation is **internally consistent** and the changes are focused and correct.

---

## Critical Issues

*None identified.*

---

## Warnings

### 1. Breakpoint inconsistency with Footer.tsx

**Location:** `Footer.tsx:46`

The Footer component still uses `md:grid-cols-4` at line 46:
```tsx
<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
```

This means the Footer expands to 4 columns at 768px, while the Header stays in "mobile mode" until 1024px. Users on tablets (~850px) will see:
- Header: hamburger menu (mobile layout)
- Footer: 4-column layout (desktop layout)

This creates visual inconsistency. Consider aligning the Footer to use `lg:grid-cols-4` to match the Header's new breakpoint.

---

## Suggestions

### 1. Document the breakpoint decision

Consider adding a comment in the Header explaining why `lg:` (1024px) was chosen over `md:` (768px). This helps future maintainers understand the layout crowding issue that motivated the change:

```tsx
{/* Desktop Navigation - uses lg: breakpoint (1024px) instead of md: (768px) 
    to prevent layout crowding at intermediate viewport widths (~850px) */}
<div className="hidden items-center gap-6 lg:flex">
```

### 2. Consider a Tailwind design token for nav breakpoint

If this breakpoint is semantically meaningful (e.g., "when there's enough space for full nav"), defining a custom breakpoint in `tailwind.config.ts` would make intent clearer and ensure consistency:

```ts
theme: {
  screens: {
    'nav-desktop': '1024px', // Full navigation visibility
  }
}
```

This is optional but helpful for projects with complex responsive needs.

---

## Accessibility Review

### What's Good

1. **Mobile menu button has `aria-label="Toggle menu"`** (line 221) — screen readers can identify the button's purpose.

2. **Keyboard shortcut (⌘K) is displayed** in the search button (line 206-208) — users can discover the shortcut.

3. **Focus management is reasonable** — the mobile menu is conditionally rendered, which means focus naturally stays on the toggle button when closed.

### Minor Accessibility Considerations

1. **Dropdown buttons lack `aria-expanded`** — The dropdown toggle buttons (line 152-169) should indicate their expanded/collapsed state:
   ```tsx
   <button
     onClick={() => handleDropdownToggle(item.name)}
     aria-expanded={openDropdown === item.name}
     aria-haspopup="menu"
     className={...}
   >
   ```
   This is a pre-existing issue, not introduced by this change.

2. **Mobile menu toggle lacks `aria-expanded`** — Similar issue at line 217-232:
   ```tsx
   <button
     type="button"
     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
     aria-expanded={mobileMenuOpen}
     aria-label="Toggle menu"
     ...
   >
   ```
   Also pre-existing.

---

## What's Done Well

1. **Consistent breakpoint usage** — All 5 locations that control mobile/desktop visibility now use `lg:` consistently. The pairing is correct:
   - Desktop elements: `hidden lg:flex` or `hidden lg:block`
   - Mobile elements: `lg:hidden`

2. **Clean separation of concerns** — Mobile navigation includes both search and theme toggle, matching their desktop counterparts.

3. **Dark mode coverage is complete** — All elements have appropriate `dark:` variants per project conventions.

4. **Accessibility baseline is solid** — The component has `aria-label` on interactive elements without visible text.

5. **Keyboard navigation support** — Global ⌘K/Ctrl+K shortcut for search enhances usability.

---

## Verdict

**Approve with minor follow-up.** The breakpoint changes are correct and consistent within Header.tsx. The only actionable item is aligning Footer.tsx to the same breakpoint to maintain visual consistency across the site.
