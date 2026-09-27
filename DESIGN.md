---
name: StatNexus Karmayogi AI
description: MoSPI capacity-building wizard — official-statistics competency diagnosis in a 5-step guided flow
colors:
  official-blue: "#1D4ED8"
  official-blue-deep: "#1E40AF"
  official-blue-tint: "#EFF6FF"
  official-blue-line: "#BFDBFE"
  ink: "#1B2A4A"
  body-ink: "#333F55"
  muted-ink: "#4C5870"
  faint-ink: "#64748B"
  hairline: "#DDD8CD"
  hairline-strong: "#C8C2B4"
  page: "#F1EEE5"
  panel: "#FFFFFF"
  masthead-strong: "#FFFFFF"
  masthead-muted: "rgba(255,255,255,0.72)"
  masthead-sep: "rgba(255,255,255,0.35)"
  masthead-line: "rgba(255,255,255,0.28)"
  success: "#047857"
  success-tint: "#ECFDF5"
  warning: "#B45309"
  warning-tint: "#FFFBEB"
  danger: "#B91C1C"
  danger-tint: "#FEF2F2"
typography:
  display:
    fontFamily: "IBM Plex Serif, Georgia, serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  subdisplay:
    fontFamily: "IBM Plex Serif, Georgia, serif"
    fontSize: "20px"
    fontWeight: 700
  base:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
  title:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
  title-lg:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
  question:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
  stat-suffix:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
  numeral:
    fontFamily: "IBM Plex Serif, Georgia, serif"
    fontSize: "34px"
    fontWeight: 700
  body:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 500
    lineHeight: 1.55
  label:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 600
  label-xs:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11.5px"
    fontWeight: 600
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "12.5px"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
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

The Training Academy Bulletin — an official MoSPI/iGOT course-notice aesthetic: disciplined, instructive, calm institutional precision. The interface reads like an official gazette entry, not a startup page. Navy masthead with a gold rule, warm paper page, serif display headings, one government-blue accent for all action, status colors for meaning only. The wizard is a sequence of clearance-approved forms and report sheets.

Voice (confirmed 2026-09-27): calm institutional precision — "like an official gazette, not a startup page".

## Colors

- Masthead + footer bookends: deep navy ink `#1B2A4A` with a 3px gold rule (`#FDE047`) under the header; white identity text (`--masthead-strong`), muted white secondary (`--masthead-muted`), hairline white borders (`--masthead-line` / `--masthead-sep`).
- Single action accent: official blue `#1D4ED8` (hover `#1E40AF`) — primary buttons, active step, selected radio, filled pager dots.
- Neutrals: ink `#1B2A4A` (headings on light surfaces), body `#333F55`, muted `#4C5870`, faint `#64748B`, warm hairline `#DDD8CD` / strong `#C8C2B4`, page = oat parchment `#F1EEE5` (deliberate gazette-paper tone — deep enough to read as a tinted surface, not the default AI cream), panel `#FFFFFF`.
- Status semantic set (never decorative): success `#047857` / warning `#B45309` / danger `#B91C1C`, each with a tint for chip backgrounds and a line variant for borders.
- Emblem: deep navy `#1E3A8A`, mid blue `#2563EB`, gold tick `#FDE047` (`--mark-*`), framed by a white hairline capsule in the masthead.

## Typography

- Display (h1 step titles, score numeral, card h2s): IBM Plex Serif 700 — the gazette voice. No italics, no tight tracking; `-0.01em` max.
- UI (everything else): IBM Plex Sans 400–700. Distinctive institutional face, replaces the overused Plus Jakarta Sans (impeccable detector flagged it as an AI-converged face).
- Sizes: h1 26px serif; question 17px; body 13.5px; labels 12.5px floor; decorative avatar initials 11.5px (aria-hidden); numeral 34px serif; mono stack 12.5px for citations.
- Eyebrows ("STEP 1 OF 5"): 12.5px bold uppercase, wide tracking, navy ink, with a 3px gold left tick — the official-notice signature.
- No italic headers anywhere (anti-slop discipline); emphasis carried by weight, color, or underline.

## Layout

- Navy masthead (identity + sign-out) topped by a gold rule; white stepper strip below; navy footer bookend with the same muted-white caption.
- Single centered column, max-width 56rem (max-w-4xl), px-6 gutters; one step per viewport.
- Sticky anchored Back/Continue bar at the bottom of the step shell (`--shadow-bar`, warm translucent `--bar-bg`).
- Stepper: horizontal, locked steps, aria-current on the active step; scrollable horizontally on mobile.
- Rhythm: 4px base grid, card padding 22×24px, section spacing 20–24px.
- Breakpoints: mobile-first; content verified at 320/375/414/768px — no horizontal scroll (stepper scrolls by design).

## Elevation & Depth

Shipped (2026-09-27, user decision "slightly lifted"): `--shadow-card` — soft ambient shadows on every card (0 1px 2px + 0 10px 28px at low opacity, navy-tinted), plus the existing `--shadow-bar` under the sticky action bar. Shadows are ambient only — spread, low opacity, never structural.

## Shapes

- Radius ladder: 8px (buttons/inputs/tabs), 12px (cards), 16px (large surfaces), 999px (chips, stepper dots, bars).
- Controls are rounded-rectangle; inputs match button radius; pager dots are 36px circles with 8px gaps (44px pitch, WCAG 2.5.5 spacing exception).

## Components

- Button primary: blue fill, white text, 8px radius; hover deepens to `#1E40AF`; disabled = lowered opacity; focus-visible ring on all controls.
- Button ghost: white fill, hairline border; Enrol/actions 44px min-height.
- Card: white panel, warm hairline, 12px radius, 22×24 padding, `--shadow-card`.
- Chip: 12.5px bold on tinted backgrounds, pill shape — status labels, course codes, "Enrolled".
- Bar: 10px track, status-colored fill, 500ms ease-out width transition.
- Radio: real form controls, visible focus rings, fieldsets with legends, 44px touch targets.
- Skip link, aria-current stepper, labelled controls, reduced-motion support — all non-negotiable.

## Do's and Don'ts

- Do keep one action accent + gold identity accents only; status colors only for status. Do keep the 12.5px floor (11.5px only for decorative aria-hidden initials). Do keep real HTML controls and focus rings. Do use IBM Plex (Sans UI / Serif display); the gold tick + navy masthead identify the Bulletin.
- Don't use emoji icons; the inline stroke icon set (Check/Alert/Back/Forward/Chart/Clipboard/Shield/Target) is the only icon source.
- Don't add gradients, glassmorphism, fake browser chrome, or invented metrics (course catalog carries no ratings/enrollment counts). Don't italicize headers.
- Don't break the single-file wizard build; new tokens go into the `:root` block, referenced by name (no mid-render color improvisation).