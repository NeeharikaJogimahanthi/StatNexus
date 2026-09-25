# StatNexus: Karmayogi AI — Official Learning Platform
**Ministry of Statistics & Programme Implementation (MoSPI) | Data Informatics & Innovation Division (DIID)**  
**Problem Statement ID: 26101 | Category: Software | Theme: Smart Education**

---

## Overview

StatNexus is an AI-enabled learning and competency intelligence platform developed for India's Official Statistical System. The platform assesses officer competencies, identifies empirical skill gaps, recommends personalized training pathways integrated with the **iGOT Karmayogi** ecosystem, and converts uploaded statistical learning materials into adaptive quizzes and MCQs aligned with **Bloom’s Taxonomy** using **NVIDIA NIM LLM** (`nvidia/llama-3.1-nemotron-70b-instruct`).

---

## Platform Architecture (5 Core Steps)

```
┌─────────────────────────┐     ┌─────────────────────────┐     ┌─────────────────────────┐     ┌─────────────────────────┐     ┌─────────────────────────┐
│ 1. Define Officer       │     │ 2. Recommend Courses    │     │ 3. Create Quizzes       │     │ 4. Detect Skill Gaps    │     │ 5. Analyze Performance  │
│    Profile              │────▶│                         │────▶│                         │────▶│                         │────▶│                         │
│ Identify role &         │     │ Access iGOT courses     │     │ Generate adaptive MCQs  │     │ Utilize AI diagnostics  │     │ Provide continuous      │
│ competency              │     │                         │     │                         │     │                         │     │ feedback                │
└─────────────────────────┘     └─────────────────────────┘     └─────────────────────────┘     └─────────────────────────┘     └─────────────────────────┘
        (Blue Box)                      (Green Box)                     (Pink Box)                      (Teal Box)                     (Yellow Box)
```

1. **Define Officer Profile** (*Identify role and competency*):
   - Single descriptive officer profile card with credentials, cadre, department, qualifications, and prior trainings.
   - Domain & Job Role calibration (ISS Level 4/5, SSS Level 3, FOD Level 2).
   - **Domain-Calibrated Analysing Exam**: Baseline assessment dynamically calibrated to domain & job difficulty.
2. **Recommend Courses** (*Access iGOT courses*):
   - Matches identified gaps to **iGOT Karmayogi Course Modules** and **NSSTA TPAC Recommended Training Programmes**.
   - Includes real-time match percentages, competency targets, duration, and 1-click enrollment.
3. **Create Quizzes** (*Generate adaptive MCQs*):
   - Multi-format ingestion (PDF, PPTX, DOCX, TXT) with official circular presets (PLFS, ASUSE, SNA 2025, Python Scrutiny).
   - **Pre-LLM Concept Extraction**: Displays word count, reading time, detected syllabus domain, and statutory tags before triggering the AI model.
   - **NVIDIA NIM LLM Synthesis**: Generates Bloom's taxonomy MCQs citing official MoSPI manuals with an interactive quiz runner.
4. **Detect Skill Gaps** (*Utilize AI diagnostics*):
   - Real-time empirical skill gap diagnostics across the **4 Official Competency Domains**:
     - *Statistical Competencies* (Survey Design, Sampling, National Accounts, Price/Labour Statistics)
     - *Technical Competencies* (Python, R, SQL, Stata, GIS, AI/ML)
     - *Digital Governance* (Cybersecurity, Data Privacy, Digital Signatures, DPI)
     - *Behavioural and Managerial* (Leadership, Communication, Ethics, Change Management)
5. **Analyze Performance** (*Provide continuous feedback*):
   - Comprehensive **Pratibha Darpan Report**:
     - Overall score % and readiness verdict.
     - **Question-by-Question Audit Table**: Green checkmark (✓ CORRECT) and red cross (✗ INCORRECT) cards comparing chosen answer vs verified correct answer with citations.
     - **Top Strengths** vs. **Critical Skill Gaps**.
     - **Gap-to-Mastery Progress Tracker**: Visual progress bar tracking progression from baseline gap to complete mastery.

---

## Innovation & Uniqueness Pillars

### Innovation:
- **Competency-First Intelligence**: Identifies the exact skill gap.
- **Self-Generating Assessments**: Creates quizzes from learning materials.
- **Predictive & Adaptive Learning**: Predicts needs and adapts learning.
- **Continuous Learning Loop**: Continuously improves the learning path.

### Uniqueness:
- **Officer-Specific Learning Journey**: Creates a unique path for each officer.
- **Gap-to-Mastery Tracking**: Tracks progress from gap to mastery.
- **Unified Learning Ecosystem**: Combines learning and assessment in one platform.
- **Self-Learning Feedback System**: Learns from every assessment.
- **Beyond Course Recommendation**: Recommends what to learn next.

---

## Quick Start Guide (Windows)

### Option A: Instant 1-Click Launch (No Setup / No Python Required)
1. Extract the `.zip` file to any folder.
2. Double-click `launch_in_browser.bat` (or open `index.html` directly in Google Chrome / Microsoft Edge).
3. The complete interactive StatNexus platform launches immediately in your web browser!

### Option B: Full Backend Server Launch (With Python & API)
1. Double-click `run.bat` (or run `python run.py` in Command Prompt).
2. The script will automatically:
   - Check your environment and start the FastAPI server on `http://localhost:8000`.
   - Open your default web browser automatically at `http://localhost:8000`.
   - If Python is not installed on the machine, `run.bat` automatically opens `index.html` in your browser as a zero-downtime fallback!
3. Interactive Swagger API docs are accessible at `http://localhost:8000/docs`.

---

## Security & DPDP Act 2023 Compliance

- **Government Domain Restriction**: Restricts registration strictly to official government domains (`@mospi.gov.in`, `@gov.in`, `@nic.in`), rejecting commercial domains.
- **AES-256-GCM Cryptographic Storage**: Encrypts raw official emails at rest.
- **HMAC-SHA256 Blind Indexing**: Deterministic keyed hash enables database lookups without decrypting PII.
