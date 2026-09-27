---
name: StatNexus Karmayogi AI
description: MoSPI capacity-building wizard — official-statistics competency diagnosis in a 5-step guided flow
colors:
  official-blue: "#1D4ED8"
  official-blue-deep: "#1E40AF"
  official-blue-tint: "#EFF6FF"
  official-blue-line: "#BFDBFE"
  ink: "#0F172A"
  body-ink: "#334155"
  muted-ink: "#475569"
  faint-ink: "#64748B"
  hairline: "#E2E8F0"
  hairline-strong: "#CBD5E1"
  page: "#F8FAFC"
  panel: "#FFFFFF"
  success: "#047857"
  success-tint: "#ECFDF5"
  warning: "#B45309"
  warning-tint: "#FFFBEB"
  danger: "#B91C1C"
  danger-tint: "#FEF2F2"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  base:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
  title:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
  title-lg:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
  question:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
  stat-suffix:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
  numeral:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 800
  body:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 500
    lineHeight: 1.55
  label:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 600
  label-xs:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11.5px"
    fontWeight: 600
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "12.5px"
rounded:
  sm: "10px"
  md: "14px"
  lg: "18px"
  full: "999px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "22px"
  xl: "24px"
  card-padding: "22px 24px"
components:
  button-primary:
    backgroundColor: "{colors.official-blue}"
    textColor: "{colors.panel}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
  button-ghost:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.sm}"
    padding: "10px 18px"
  card:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.md}"
    padding: "{spacing.card-padding}"
  chip:
    backgroundColor: "{colors.official-blue-tint}"
    textColor: "{colors.official-blue}"
    rounded: "999px"
    padding: "3px 10px"
---

# Design System: StatNexus Karmayogi AI

## Overview

The Training Academy Bulletin — an official MoSPI/iGOT course-notice aesthetic: disciplined, instructive, calm institutional precision. The interface reads like an official gazette entry, not a startup page. One government-blue accent carries all action; status colors carry only meaning. The wizard is a sequence of clearance-approved forms and report sheets.

Voice (confirmed 2026-09-27): calm institutional precision — "like an official gazette, not a startup page".

## Colors

- Single accent: official blue `#1D4ED8` (hover `#1E40AF`) — every primary action, the current step, the active radio, the filled pager dots.
- Neutrals: ink `#0F172A` (headings), body `#334155`, muted `#475569`, faint `#64748B` (secondary text), hairline `#E2E8F0` / strong `#CBD5E1` (borders), page `#F8FAFC`, panel `#FFFFFF` (all surfaces).
- Status semantic set (never decorative): success `#047857` / warning `#B45309` / danger `#B91C1C`, each with a tint (`-tint`) for chip backgrounds and a line variant (`official-blue-line`, `#A7F3D0`-style greens/reds/ambers in the source set) for borders.
- Tints exist per status: blue tint `#EFF6FF`, success tint `#ECFDF5`, warning tint `#FFFBEB`, danger tint `#FEF2F2`.

## Typography

- Display: Plus Jakarta Sans 800, 20px, tight tracking — step titles only.
- Card titles: Plus Jakarta Sans 700, 15px. Body: 500, 13–13.5px, 1.55 line height. Labels: 600, 12.5px (the floor — no interactive text below it).
- Eyebrows: 12.5px bold uppercase, wide tracking ("STEP 1 OF 5").
- Citations/questions metadata: system mono stack at 12.5px.
- No italic headers anywhere (anti-slop discipline); emphasis carried by weight, color, or underline.

## Layout

- Single centered column, max-width 56rem (max-w-4xl), px-6 gutters; one step per viewport.
- Sticky header (identity + sign-out) with a separating hairline; sticky anchored Back/Continue bar at the bottom of the step shell (`--shadow-bar`).
- Stepper: horizontal, locked steps, aria-current on the active step; scrollable horizontally on mobile.
- Rhythm: 4px base grid (gap-1.5 = 6px … gap-3.5 = 14px), card padding 22×24px, section spacing 20–24px.
- Breakpoints: mobile-first; stepper labels collapse to short forms below md; content verified at 375px and 1262px.

## Elevation & Depth

- Incumbent: flat with tonal layering — panels are white on a `#F8FAFC` page with hairline borders; the only shadow is the sticky bar's `--shadow-bar` (0 -1px hairline + 24px soft drop).
- Confirmed redesign direction (2026-09-27, user decision): **slightly lifted** — soft ambient shadows on cards and nav in the next visual round. Shadows, when added, stay ambient (spread, low opacity), never structural.

## Shapes

- Radius ladder: 10px (buttons/inputs), 14px (cards), 18px (large surfaces), 999px (chips, stepper dots, bars).
- Controls are rounded-rectangle, inputs match button radius; the pager dots are 28px circles.

## Components

- Button primary: blue fill, white text, 10px radius; hover deepens to `#1E40AF`; disabled = lowered opacity via Tailwind disabled styles; focus-visible ring on all controls.
- Button ghost: white fill, hairline border, body text; hover warms page-tint.
- Card: white panel, hairline border, 14px radius, 22×24 padding — course rows, gap rows, audit entries.
- Chip: 12.5px bold, tinted background per status, pill shape — status labels, course codes, "Enrolled" marks.
- Bar (progress/mastery): 10px track `--line`, filled span with status color, 500ms ease width transition.
- Radio: real form controls with visible focus rings, grouped in fieldsets with legends; label text 13px+.
- Skip link, aria-current stepper, labelled controls, reduced-motion support — all non-negotiable.

## Do's and Don'ts

- Do keep one accent; status colors only for status. Do keep the 12.5px floor (11.5px only for decorative aria-hidden initials). Do keep real HTML controls and focus rings.
- Don't use emoji icons; the inline stroke icon set (Check/Back/Forward/Chart/Clipboard/Shield/Target) is the only icon source.
- Don't add gradients, glassmorphism, fake browser chrome, or invented metrics. Don't italicize headers.
- Don't break the single-file wizard build; new tokens go into the `:root` block, referenced by name (no mid-render color improvisation).
- Next visual round: apply the confirmed elevation shift (soft ambient shadows on cards/nav) and honor the Training Academy Bulletin metaphor in surface details while preserving the incumbent token names where values survive.