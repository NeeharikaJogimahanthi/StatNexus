# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary operator: Raj (team member) — runs the app for stakeholder evaluation, presents via screen-recorded walkthroughs (SIH 2026 judging context, PS 26101, Smart Education).
- Immediate audience: evaluation judges and stakeholders watching the walkthrough.
- Aspirational (not yet confirmed): MoSPI officers — ISS cadre and PSU statistical staff — using the app hands-on to plan individual capacity-building.

## Product Purpose

Diagnose the competency gaps of India's official-statistics workforce and convert each gap into a ready next step (recommended iGOT Karmayogi module + coursework). A 5-step guided wizard takes an officer profile (role, domain, experience tier), recommends matched courses, runs a calibrated 10-question assessment, reports per-competency skill gaps against official mastery targets (85–90%), and closes with a performance dashboard with question-by-question audit.

Product life (confirmed by user): an SIH 2026 prototype that continues to evolve after the hackathon — not a one-off demo artifact.

## Positioning

Evidence-based gap diagnosis over generic LMS browsing: scores are computed from a curated 108-question bank and per-domain accuracy math — only the assessed domain is moved by quiz evidence, untouched domains hold their baseline (no fabricated signal) — rather than self-reported or asserted skill levels. The wizard sequencing makes the whole story demoable in one continuous walkthrough.

## Operating Context

- Demoed as a screen-recorded walkthrough, or live via a local server (FastAPI on 127.0.0.1:8000) — development uses ngrok for temporary public shares.
- Zero-install mode: `index.html` alone runs the whole wizard client-side (localStorage persistence, zero API calls); the backend exists but the wizard never depends on it.
- Seeded demo data: 10 courses (C-101..C-110), 2 official officer presets, 6 competency domains, 4 gap-analysis domains, 4 doc presets, 108 questions across 6 domains × 3 tiers.
- No image-generation tooling available in the build environment; all visuals are code-built.

## Capabilities and Constraints

- True sequential 5-step wizard with locked stepper, back/continue anchoring, per-step localStorage restore (including mid-quiz refresh).
- 6 selectable domains × 3 experience tiers; quiz sampling is calibrated (one-time ten-question build per domain+tier, no duplicates).
- Per-competency gap math: `delta = round((acc−50)/100×44)` applied only to the assessed domain; statuses Critical >30 / Moderate·Priority >18 / On Track.
- "AI feedback" is deterministic template text computed from results — no model call. The UI must never overclaim it as a live AI.
- Single-file constraint: the wizard is one self-contained HTML (inline Babel+React, Tailwind via CDN) assembled by a build script; no build step for users.
- CDN-bound: react/tailwind/fonts load from CDNs; a fully offline run is not guaranteed.
- Backend (FastAPI) and SQLite/MySQL fallback exist but are untouched by the wizard; assessment is 100% client-side.

## Brand Commitments

- Name and identity: "StatNexus: Karmayogi AI — MoSPI Capacity Building Platform" (PS 26101, MoSPI Data Informatics & Innovation Division). Binding.
- Voice: official, Government-of-India-facing; honest copy only — no invented metrics, testimonials, or claims (applies to UI copy and demo narrative).
- Visual world: name/identity binding, but the current government-blue single-accent system + Plus Jakarta Sans is NOT binding — the user confirmed openness to a bolder visual world in the redesign round (decision recorded 2026-09-27).

## Evidence on Hand

- Question bank: `qb.json` (108 questions, cited).
- Extracted seed data: courses (10), officer presets (2), domains (6), competencies (4), doc presets (4).
- Design documentation: build-time assembly pipeline in `%LOCALAPPDATA%\Temp\statnexus_build\` (template `app_template.html` is the source of truth; `index.html` is generated).
- Audit trail: ponytail-lazy-dev audits — 16/16 + 5 + 5 findings fixed, browser-verified (gap math, a11y, typography floor ≥12.5px, no dead code).
- Absences that must not be fabricated: no real deployment, no officer-user testing, no live AI provider, no production telemetry, no testimonials.

## Product Principles

1. Evidence over assertion — every number on screen traces to the question bank or the baseline data; never invent a metric.
2. One guided path — the wizard sequence is the product; keep each step single-purpose and the path demoable end-to-end in one take.
3. Demo-first craft — the screen recording is the surface; the UI must read well at recording resolution, at 375px, and under narration.
4. Zero-friction delivery — keep the single-file zero-install property; never introduce a build or runtime dependency for the demo path.
5. Official credibility without slop — government-grade tone, truthful copy, WCAG-honest details; anti-AI-slop discipline on every screen.

## Accessibility & Inclusion

- Implemented baseline (confirmed in code): skip link, focus-visible rings, labelled radios with fieldsets/legends, aria-current stepper, reduced-motion respect, 12.5px minimum text outside decorative elements.
- No formal standard (e.g., WCAG conformance level) has been required by the user; treat the implemented baseline as the floor, not the ceiling.