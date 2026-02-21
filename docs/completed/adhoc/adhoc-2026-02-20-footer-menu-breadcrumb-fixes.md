# Ad-hoc Change: Footer, Mobile Menu, and Breadcrumb Fixes

**Completed:** 2026-02-20  
**Commit:** c862894

---

## What Changed

Fixed three UI/UX issues: synced footer navigation with header, fixed mobile hamburger menu to be full-screen with proper scroll behavior, and fixed breadcrumb alignment on mobile.

## Files Modified

- `src/components/Footer.tsx` — Updated Concepts and Resources sections to match header navigation structure
- `src/components/Header.tsx` — Mobile menu now uses fixed positioning for full-screen coverage, added useEffect to lock body scroll when open
- `src/components/Breadcrumbs.tsx` — Added flex-wrap, adjusted gap spacing, changed to inline-flex for proper alignment

## Testing Notes

- [ ] Open site on mobile and verify hamburger menu covers full screen
- [ ] Scroll within mobile menu and confirm background doesn't scroll
- [ ] Compare footer links to header dropdowns - should match
- [ ] View breadcrumbs on narrow mobile screen and check alignment

## Notes

- Header height is hardcoded as `top-[65px]` in mobile menu - if header height changes, this will need updating
- Pre-existing lint warnings in TheLoop.tsx (unused variables) were not addressed as they're unrelated to this change
