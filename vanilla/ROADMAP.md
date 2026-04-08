# Vanilla Migration Roadmap (`sms/vanilla`)

This document tracks migration from bundled React runtime (`index.js` + `config.js`) to plain JS modules under `sms/vanilla`.

---

## Status Summary

- ✅ Entry switched to vanilla: `index.html` now loads `vanilla/main.js`
- ✅ Core bootstrap and shared helpers created
- ✅ Implemented modules:
  - `modules/header.js` (sticky header, mobile menu, family modal)
  - `modules/hero.js` (hero parallax)
  - `modules/reveal.js` (intersection reveal animation)
  - `modules/calculator.js` (calculator state + formulas + details)
  - `modules/map.js` (map remade from scratch with Leaflet + filters + list sync)
  - `modules/community.js` (groups/board tabs + board rendering + likes)
  - `modules/courses.js` (category filtering + enrollment toggles)
  - `modules/faq.js` (category filtering + accordion)
  - `modules/psychSupport.js` (tab visual state + specialist booking toggles)
  - `modules/calendar.js` (online/offline filtering + registration toggles)
- ✅ Shared migration data extracted:
  - `modules/data.js`

---

## Current Architecture

- **Entry point**: `vanilla/main.js`
- **Pattern**: each module exposes `initXxx()` and returns cleanup function
- **Shared utilities**: `modules/utils.js`
- **Shared state-like constants**: `modules/data.js`
- **No React dependency at runtime**

---

## Remaining Migration Work

## 1) Hardening and selector stabilization

### Tasks
- [ ] Add explicit `data-*` hooks in HTML for every interactive control:
  - calculator controls
  - community tabs
  - courses filters
  - calendar filters
  - FAQ categories and items
  - psych support tabs
- [ ] Refactor modules to prefer `data-*` selectors over style/class-dependent queries.
- [ ] Add `null` guards for all optional nodes to avoid runtime crashes on markup drift.
- [ ] Add idempotency checks per module to prevent double listener binding in future edits.

### Why
Current modules rely on snapshot class structures in several places; this is workable but brittle.

---

## 2) Calculator parity verification

### Tasks
- [ ] Verify output totals match old logic for all regions and edge values.
- [ ] Add explicit tests/check cases for:
  - `children = 1`
  - `children = 6`
  - housing on/off
  - each region
- [ ] Confirm Russian pluralization in subtitle is correct for all values.
- [ ] Ensure detail rows and totals always stay in sync after any interaction order.

### Why
Calculator is key business logic and must remain exact.

---

## 3) Community full parity (optional enhancement)

### Tasks
- [ ] Add expandable live chat panel for selected group (currently simplified).
- [ ] Add message input behavior parity (clear/send UX, optional local append).
- [ ] Add group card "selected/open" visual parity with original behavior.
- [ ] Optionally persist likes/toggles in `localStorage`.

### Why
Current behavior is functional but lighter than original React state model.

---

## 4) Psych support full tab content switching (optional enhancement)

### Tasks
- [ ] Move full tab datasets into `data.js` (parents/children/family blocks).
- [ ] Re-render services + specialists by active tab (currently visual-tab safe mode).
- [ ] Keep booking toggles per tab scope.
- [ ] Add transitions matching prior feel.

### Why
Current implementation intentionally avoids risky panel replacement; this restores full parity.

---

## 5) Map UX improvements

### Tasks
- [ ] Add explicit selected marker style (pulse/ring) when list item clicked.
- [ ] Add "fit bounds" on filter change.
- [ ] Add loading/empty/error UI states for future remote data.
- [ ] Add keyboard focus handling for list and markers.
- [ ] Optionally extract popup template to utility for maintainability.

### Why
Map was intentionally remade; now polish and resilience can be improved.

---

## 6) Accessibility pass

### Tasks
- [ ] Add ARIA attributes:
  - FAQ accordions (`aria-expanded`, `aria-controls`)
  - modal dialog (`role="dialog"`, `aria-modal="true"`)
  - tab controls (`role="tablist"`, `role="tab"`)
- [ ] Add keyboard interactions:
  - `Esc` closes modal
  - Enter/Space activates card buttons where needed
- [ ] Ensure visible focus states for all interactive elements.
- [ ] Verify color contrast of custom inline styles.

### Why
The migration currently focuses behavior; a11y should be formalized.

---

## 7) Performance and event hygiene

### Tasks
- [ ] Audit for passive listeners where possible.
- [ ] Debounce/throttle heavy handlers consistently.
- [ ] Avoid unnecessary full rerenders in modules that can update single nodes.
- [ ] Add one lightweight debug flag to log init timings in development mode only.

### Why
Keep page smooth and maintainable as modules grow.

---

## 8) HTML cleanup and consistency

### Tasks
- [ ] Remove stale inline transforms left by snapshot HTML where unnecessary.
- [ ] Normalize invalid inline fragments (e.g. broken `font-family` artifacts).
- [ ] Keep semantic structure consistent for long-term edits.
- [ ] Ensure section wrappers and IDs are unique and stable.

### Why
Snapshot-derived HTML contains artifacts that can cause confusion later.

---

## 9) Final cutover validation

### Tasks
- [ ] Confirm no runtime dependence on `index.js` / `config.js`.
- [ ] Check browser console for zero errors/warnings on full interaction pass.
- [ ] Validate all anchors and smooth scrolling.
- [ ] Validate all migrated sections on mobile breakpoints.
- [ ] Do one full regression pass with checklist below.

---

## Regression Checklist

- [ ] Header sticky effect works
- [ ] Mobile menu opens/closes; links close menu
- [ ] Family modal opens/closes/backdrop-close works
- [ ] Hero parallax works
- [ ] Fade-in sections animate from hidden state
- [ ] Calculator:
  - [ ] region changes
  - [ ] children +/- works (1..6)
  - [ ] housing toggle works
  - [ ] details toggle works
  - [ ] total and rows update correctly
- [ ] Community:
  - [ ] groups/board tab switch
  - [ ] board likes toggle correctly
- [ ] Courses:
  - [ ] category filter works
  - [ ] enrollment button toggles
- [ ] Calendar:
  - [ ] all/online/offline filter works
  - [ ] registration toggles
- [ ] FAQ:
  - [ ] category filter works
  - [ ] accordion opens/closes
- [ ] Psych support:
  - [ ] tab visual state changes
  - [ ] specialist booking toggles
- [ ] Map:
  - [ ] renders fresh Leaflet map
  - [ ] filters by type
  - [ ] list count updates
  - [ ] list click recenters map and opens popup
  - [ ] marker click highlights list item

---

## Suggested Next Execution Order

1. Stabilize selectors with `data-*` hooks  
2. Psych support full content parity (if desired)  
3. Community chat-panel parity (if desired)  
4. Accessibility pass  
5. Final regression + polish

---

## Notes

- The map was intentionally rebuilt and no longer depends on snapshot Leaflet DOM.
- Several modules currently prioritize robustness over perfect visual parity; this is by design for incremental migration.
- The module pattern used now is a good base for adding small targeted improvements safely.