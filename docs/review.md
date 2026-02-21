# Code Review

**Reviewed:** Footer.tsx, Header.tsx, Breadcrumbs.tsx  
**Date:** 2026-02-20

## Summary

✅ **All changes approved.** No critical issues found.

---

## Critical Issues

None.

---

## Warnings

### 1. Magic Number for Header Height
**File:** `Header.tsx:251`  
**Issue:** `top-[65px]` assumes fixed header height. Fragile if header styling changes.

```tsx
<div className="fixed inset-0 top-[65px] z-40 ...">
```

**Recommendation:** Consider using CSS variable or measuring actual height.

---

## Suggestions

### 1. Add `aria-expanded` to Mobile Menu Button
**File:** `Header.tsx:230-245`

```tsx
<button
  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
  aria-expanded={mobileMenuOpen}
  ...
>
```

Improves screen reader state announcements.

### 2. Handle Scrollbar Layout Shift
**File:** `Header.tsx:110-120`

On desktop with visible scrollbars, `overflow: hidden` can cause layout shift. Could add `paddingRight` compensation.

---

## What's Done Well

- ✅ Dark mode variants applied consistently throughout
- ✅ Body scroll lock properly cleans up on unmount
- ✅ Breadcrumb wrapping uses appropriate flex utilities
- ✅ External links have proper `rel="noopener noreferrer"`
- ✅ Code follows project conventions
