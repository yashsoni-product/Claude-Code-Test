# BYD Ti 7 — variant selector

React + TypeScript implementation of the "Choose your perfect variant" section,
redesigned to carry both the 5-seater and the incoming 7-seater Ti 7.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production bundle
```

## What the section does

| | |
|---|---|
| **Variant tabs** | `DESIGN` / `PREMIUM` / `URBAN ADVENTURE`, across the top. |
| **Seater toggle** | 5- or 7-seater, inside the detail card, under the model name. The 7-seater carries a `New` badge. Switching seats keeps the selected trim. |
| **Compare bar** | "Add to comparison" pins the current trim to a sticky bottom bar. Holds up to three, mixable across seater types; each chip removes individually, or `Clear` empties the bar. |

## Layout

```
src/
  components/Ti7VariantSelector/
    Ti7VariantSelector.tsx          markup + state
    Ti7VariantSelector.module.css   the visual spec
    data.ts                         trim catalogue  ← content lives only here
    types.ts
    icons.tsx
  design-system/chassis/            Chassis tokens, copied from the bundle
  assets/ti7-front.png
project/                            the original Claude Design handoff bundle
chats/                              the design conversation behind it
```

`<Ti7VariantSelector />` renders standalone. Every prop is optional:

```tsx
<Ti7VariantSelector
  defaultSeater="5"                 // '5' | '7'
  data={TI7_DATA}                   // swap in trims from a CMS
  specSheetHref="/ti7/specs.pdf"
  onGoToConfigurator={({ seater, variant }) => …}
  onCompare={(selections) => …}     // up to 3
/>
```

`onGoToConfigurator` and `onCompare` are unwired — the prototype had no
destinations for them, so they are left as callbacks for the host app.

## Design system

The Chassis token files are copied verbatim from the handoff bundle into
`src/design-system/chassis/` and imported once in `src/main.tsx`. The brand is
selected by `data-mode="byd"` on `<html>` (see `index.html`). Every colour,
radius, control height and border width in the component resolves through a
token; only the section's one-off typographic sizes (44/40/32/26px …) are
literal, because the prototype set them literally.

Two things the bundle flags as unresolved, unchanged here:

- **Fonts.** `tokens/fonts.css` pulls Montserrat from Google Fonts. Five
  licensed brand faces in that file are still substitutions awaiting real
  `.woff2` binaries.
- **`_ds_bundle.js`** only defines the design system's own documentation
  screens, so it is not part of this implementation.

## Content status

The trim catalogue in `data.ts` is the prototype's, carried over verbatim and
annotated there. **Only the 5-seater `DESIGN` figures are confirmed.** Every
7-seater figure, the 5-seater `PREMIUM` / `URBAN ADVENTURE` figures, and all
blurb copy are plausible placeholders the designer flagged for replacement.

The 7-seater also reuses the 5-seater photograph; the section says so in a
caption under the image, driven by `imageNote` in `data.ts`. Clearing that
string removes the caption once real photography lands.

## Fidelity to the prototype

Verified by screenshot diff against `project/Ti7 Variant Selector.dc.html` at
1440×1100 @2x, across all six seater × trim combinations plus the filled
compare bar. Element geometry matches to two decimal places; residual pixel
deltas are sub-perceptual glyph antialiasing on the price.

Three deliberate departures:

1. **Semantics and keyboard support.** The tabs are a real ARIA tablist with
   roving tabindex and arrow/Home/End navigation; the seater toggle is a
   labelled group of `aria-pressed` buttons; the spec strip is a `<dl>`; the
   compare chips are a list with per-item remove labels. The prototype was
   `<div>`s and `<button>`s with no roles.
2. **A dead control now reads as dead.** Once the compare bar holds three
   trims, "Add to comparison" no-ops. The prototype gave no feedback; here it
   is `aria-disabled`, which dims it through Chassis' own `[aria-disabled]`
   rule. The *pinned* state deliberately stays at full strength — there the
   label already reads as confirmation, not unavailability.
3. **Narrow viewports.** The prototype specified desktop only and its grid
   bottoms out around 760px of content. A single breakpoint at 900px stacks
   the columns. Nothing above it changes.

Hover styles on the tabs and the seater segments are additions too — the
prototype's `style-hover` attribute is not something its runtime implements, so
those states never rendered.
