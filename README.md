# StatNexus: Karmayogi AI

**MoSPI Capacity Building & Competency Gap Platform**

Smart India Hackathon 2026 · Problem Statement **26101** · Category: Software · Theme: Smart Education
**Ministry of Statistics & Programme Implementation (MoSPI) — Data Informatics & Innovation Division (DIID)**

---

## 📌 Overview

StatNexus is an AI-enabled learning and competency-intelligence platform built for India's Official Statistical System. Officers follow a guided **5-step sequential journey** — profile definition → course recommendation → adaptive skill assessment → gap analysis → performance dashboard — that converts raw assessment results into **empirical skill-gap diagnostics** and personalized learning paths aligned with the **iGOT Karmayogi** ecosystem.

The flagship demo runs **fully client-side** (zero API calls): a single-page React application bundled into `index.html`, driven by the bundled 108-question bank, 10-course iGOT catalogue, and four official MoSPI competency domains. A FastAPI backend ships alongside the frontend, providing the product's API scaffolding (health, officer, session, and document endpoints) with a MySQL-first / SQLite-fallback database engine.

---

## ✨ Features

| # | Step | What it does |
|---|------|--------------|
| 1 | **Define Officer Profile** | Select a pre-seeded officer (ISS / PSU) or enter an official gov/PSU email; pick a competency domain (Survey Design, National Accounts, PLFS/ASI, Python/R, Digital Governance, PSU Operations) and an experience tier (Foundations / Operational / Advanced) |
| 2 | **Recommended Courses** | Domain-matched iGOT modules with one-click enrolment; categorical filters (Recommended / Technical / Behavioural / Prescribed iGOT) |
| 3 | **Skill Assessment** | Adaptive 10-question quiz calibrated to the chosen domain and tier (mixed Easy/Medium/Hard weights), one question at a time, with progress dots and instant auto-advance |
| 4 | **Detect Skill Gaps** | Gap analysis across the four official competency domains: current mastery vs. 85–90% targets, with gap/status chips (Critical · Moderate · Priority · On Track) |
| 5 | **Performance Dashboard** | Overall score + readiness verdict, top strengths vs. critical gaps, gap-to-mastery trackers, question-by-question audit with citations, and AI feedback with a recommended course |

**UX / accessibility:** sequential one-step-at-a-time wizard navigation with a locked stepper, real form controls (`<input type="radio">`), keyboard operability and focus rings, ARIA labels/landmarks/skip-link, semantic status colors on a single government-blue accent system, WCAG-friendly typography (13px+ body text; 12.5px reserved for labels/numerals), and a responsive layout down to 375px.

---

## 🏗 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 (UMD, in-page Babel compilation), Tailwind CSS, custom design tokens (CSS variables) |
| Backend | FastAPI + Uvicorn, Pydantic |
| Database | SQLAlchemy — MySQL (production) with automatic **SQLite fallback** (`statnexus.db`) for zero-config demos |
| Content | `qb.json` — 108-question MCQ bank (6 domains × 3 tiers, with citations) |
| Extras | Document-ingestion scaffolding (PDF/PPTX/DOCX), anonymized officer registry (AES-256-GCM + HMAC-SHA256 blind indexing) |

---

## 📁 Repository Structure

```
Nutrifit_family_Hub/
├── index.html              # Live single-page React app (the 5-step wizard)
├── main.py                 # FastAPI backend (routes, DB engine, security)
├── run.py                  # Launcher: frees port 8000, starts uvicorn, auto-opens browser
├── run.bat                 # Windows one-click launcher (falls back to index.html without Python)
├── launch_in_browser.bat   # Zero-install launcher — opens index.html directly in a browser
├── qb.json                 # 108-question adaptive quiz bank
├── statnexus.db            # SQLite demo database (pre-seeded with 6 officer profiles)
├── statnexus_mysql.sql     # MySQL schema/seed export
├── setup_mysql.py          # MySQL provisioning script
├── requirements.txt        # Python dependencies
├── apply_full_profile_flow.py / verify_*.js / debug_*.js   # dev/test helpers
├── app_bundle.js / compiled_*.js   # legacy build artifacts (superseded by index.html)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- A modern browser (Chrome / Edge) with **internet access** — the frontend loads React, Babel, and Tailwind from CDNs.
- *(Server mode only)* Python **3.10+** — verified on 3.12 (Windows).

### Option A — Zero-Install Demo (no Python required)

```bash
# Windows
launch_in_browser.bat
```

or simply double-click `index.html` — the complete wizard runs in your browser immediately.

### Option B — Full Server Launch

```bash
# Windows (one click)
run.bat

# or cross-platform
python -m venv .venv
# activate:  .venv\Scripts\activate   (Windows)  /  source .venv/bin/activate  (Linux/macOS)
pip install -r requirements.txt
python run.py
```

The launcher starts the FastAPI server, and after a health check opens **http://127.0.0.1:8000** in your browser. Interactive API docs: **http://127.0.0.1:8000/docs**.

> No Python? `run.bat` automatically falls back to opening `index.html` directly.

### Using `uv` (recommended, fast)

```bash
uv venv --python 3.12 .venv
uv pip install --python .venv/Scripts/python.exe -r requirements.txt
NO_BROWSER=1 .venv/Scripts/python.exe -m uvicorn main:app --host 127.0.0.1 --port 8000
```

### Database behavior

`main.py` first attempts MySQL on `127.0.0.1:3306`; if unavailable it logs

```
[StatNexus DB Engine] MySQL unavailable … Falling back to SQLite …
[StatNexus DB Engine] Active Database Engine: SQLite (Local Fallback: ./statnexus.db)
```

and serves from the pre-seeded `statnexus.db` — the demo works out of the box.

---

## 🖥 Usage Guide

1. **Step 1 — Define Officer Profile**
   Select a demo officer (e.g. *Dr. Rajesh Verma, ISS*) or enter an official email (`@mospi.gov.in`, `@gov.in`, `@nic.in`, `@hpcl.co.in` are accepted; the rule is shown inline). Choose a competency domain and experience tier, then **Continue**.
2. **Step 2 — Recommended Courses**
   Review the courses matched to your domain, enrol as needed, then **Continue**.
3. **Step 3 — Skill Assessment**
   Ten adaptive questions, one at a time (auto-advances on answer; the question dots let you revisit any answered question). On the last question, **Submit Assessment**.
4. **Step 4 — Detect Skill Gaps**
   Review your mastery bars and gap statuses across the four competency domains, then **View Performance Dashboard**.
5. **Step 5 — Performance Dashboard**
   Read your verdict, strengths, critical gaps, gap-to-mastery tracker, question audit (your answer vs. the cited correct answer), and the AI feedback line. **Start New Assessment** resets the journey.

Progress persists in the browser (`localStorage`) — refreshing mid-flow resumes where you left off. **Sign out** clears the session.

---

## 🔌 API Endpoints (server mode)

| Endpoint | Description |
|----------|-------------|
| `GET /api/health` | Health check used by the launcher |
| `GET /api/officers` | Registry lookups (anonymized) |
| `POST /api/officers/verify` | Official-email verification flow |
| `POST /api/assessment` / `POST /api/documents/upload` | Assessment & document-ingestion scaffolding |
| `GET /docs` | OpenAPI / Swagger interactive docs |

*The 5-step demo UI is intentionally self-contained; backend endpoints support the full product vision (document upload → LLM MCQ generation, server-side profiles).*

---

## 🧪 Testing & Verification

The reworked wizard was verified end-to-end in a live browser against the running server:

- **Flow test (PASS):** Step 1 → 2 → 3 (all 10 questions answered) → submit → Step 4 gaps → Step 5 dashboard, with the AI feedback correctly personalized to the selected officer.
- **Restore test (PASS):** refresh mid-flow / deep states (step 3, 5) re-render correctly from `localStorage`.
- **Defect fixes covered:** step-advance wiring on all Continue/Next buttons; answer index 0 no longer blocks submission; question-dot answered states; stale-state reload crashes (null quiz/result) guarded with loading states.
- **Accessibility audit:** skip-link, labelled radio groups, `aria-current` stepper, focus-visible rings, semantic color-only status indicators, no text below 12.5px outside decorative numerals.

---

## 🔐 Security & DPDP Act 2023 Alignment

- **Gov-domain enforcement** — registration restricted to official government/PSU domains (`@gov.in`, `@nic.in`, `@mospi.gov.in`, `@hpcl.co.in`), with the rule stated in the error message.
- **AES-256-GCM** cryptographic storage of official emails at rest.
- **HMAC-SHA256 blind indexing** — deterministic keyed hashing enables lookups without decrypting PII.
- Client-side session state stays in `localStorage` and is cleared on sign-out.

---

## 📝 Acknowledgements

Adapted from the StatNexus SIH 2026 prototype (MoSPI DIID). Course catalogue references iGOT Karmayogi modules and NSSTA TPAC recommended training programmes; quiz content cites official MoSPI manuals (PLFS, SNA, survey methodology). Built as a government capacity-building demonstration — not an official MoSPI product.

---

*Prototype for demonstration · SIH 2026 · Problem Statement 26101*