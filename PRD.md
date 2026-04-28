# AIST Ace · Product Requirements Document

**Version:** 0.1 (built 28 Apr 2026)
**Status:** Mock 1 ready for use; Mocks 2–6 to be delivered before each scheduled date
**Owner:** Kittu (you)
**Primary user:** One specific student preparing for AIST 2026 M.Des at FDDI Hyderabad
**Exam date:** 10 May 2026 (12 days away at time of writing)
**Target outcome:** Student scores ≥ 80% (160/200) on the actual exam, secures her seat

---

## 1 · Problem & Goal

The student has applied for AIST 2026 M.Des and has 11 days of effective preparation between today (28 Apr) and the day before her exam (8 May, with a buffer day on 9 May). The published syllabus has 4 sections worth 200 total marks, taken under a 2.5-hour time limit. There is no widely available high-quality mock-test platform tailored to this exam and especially to the M.Des stream's design-aptitude section.

**Goal of this product:** Give her a personalised, adaptive practice environment that mimics the real exam, identifies her weakest areas, and routes her toward targeted revision (curated short videos + AI-generated explanations) — all inside a focused 1-hour-per-day study loop.

**Non-goals:** Multi-user platform, monetisation, public launch, native mobile app.

---

## 2 · Target user & constraints

| Attribute | Value |
|---|---|
| User | Single student (M.Des aspirant) |
| Daily study budget | ~1 hour on study days, ~2.5 hours on mock days |
| Stack preference | React frontend + Supabase backend (your decision) |
| Design reference | Stripe-inspired dark theme (per your screenshot direction) |
| Authentication | None — single-device localStorage + optional Supabase sync |
| Devices | Desktop browser primary; responsive on tablet/phone |
| Data sensitivity | Low — only her own progress and exam answers |

---

## 3 · Exam intelligence (drives every product decision)

The FDDI Master's sample paper has these mechanics:

| Section | Topic | Q | Marks/Q | Total |
|---|---|---:|---:|---:|
| A | Analytical Ability | 25 | **2** | 50 |
| B | English Comprehension & Grammar | 50 | 1 | 50 |
| C | General Knowledge & Current Affairs | 50 | 1 | 50 |
| D | Management + Design Aptitude | 50 | 1 | 50 |
| | **Total** | **175** | | **200** |

**Critical insight:** Section A is worth double marks. A 4-question swing in Section A = 8 marks = a 4% delta on overall. Most preparation time should go here first.

**Stream split:** The published sample paper mixes both M.Des and MBA Section-D content. Per your decision, this product treats Section D as **M.Des-focused** — paper folding, mirror image, embedded figures, art history, color theory, design principles, famous painters, Indian crafts, architecture.

---

## 4 · What's built (v0.1)

### 4.1 Frontend (React + Vite + Tailwind + Framer Motion)

| Page | Path | Purpose |
|---|---|---|
| Dashboard | `/` | Mission card + countdown + section accuracy + 6-mock list |
| Plan | `/plan` | 13-day study roadmap with daily tasks |
| Practice | `/practice` | Section-by-section drill launcher |
| Stats | `/stats` | Radar chart, weak→strong ranking, mock history, YouTube library |
| Mock Taker | `/mock/:id` | Full 2.5h mock interface |
| Review | `/review/:id` | Per-question result + explanation + AI button + video link |

**Design system:** Stripe-inspired dark theme. Custom Tailwind tokens — `accent` (#635BFF Stripe purple), 4 section accent colors (indigo/emerald/amber/rose), typography (Inter), card glass effect, animated transitions via Framer Motion. Reusable primitives: `Card`, `Progress`, `Chip`, `Button`, `BottomNav`, `Modal`.

**Bug fixed from your screenshot:** the "Lecturer's Tip: Focus on $Coding patterns" / "$Logic depth" placeholder strings are now real, section-specific tips driven from `src/config.js`.

### 4.2 Mock Taker (the core experience)

- 2h 30m countdown timer with color-shift to red in last 10 min, auto-submit at 0:00
- 4 section tabs with attempted/total counter per section
- Question palette (color-coded: answered=green, marked=amber, current=accent)
- 4-option single-select with keyboard shortcuts: `←` `→` Save & Next, `1`–`4` to answer, `M` to mark for review
- Sticky reading-comprehension passage panel for Section B
- Submit confirmation modal showing attempted count
- Exit confirmation to prevent accidental data loss

### 4.3 Adaptive engine (hybrid — within-mock + cross-mock)

**Within-mock:** After 4 attempts in the active section, the engine measures running accuracy. If <50%, it surfaces easier remaining questions first (rebuilds confidence). If >75%, it surfaces harder questions first (prevents boredom). Code lives in `MockTaker.jsx` → `adaptedSectionList` memo.

**Cross-mock:** Each mock submission updates a per-section accuracy score (60% new + 40% old, so trends emerge). The dashboard ranks sections weakest → strongest; weak ones are highlighted on the Stats radar.

### 4.4 Question bank — Mock 1 (175 questions, fully written)

| Section | Count | Coverage |
|---|---:|---|
| A — Analytical | 25 | Statement-argument, assertion-reason, number series, direction sense, blood relations, coding-decoding, syllogisms, classification, analogy, mirror image, paper folding, time-and-work |
| B — English | 50 | 3 RC passages × 5 Q each; synonyms (5); antonyms (5); idioms (5); one-word substitution (5); spelling (3); error-spotting (4); para-jumbles (2); vocab in context (3); active/passive (1); direct/indirect (1); preposition (1) |
| C — GK | 50 | Polity (8), History (6), Geography (6), Sci/Tech & ISRO (6), Awards (4), Sports (5), Economics & Banking (5), International (4), Recent Current Affairs Jan 2025 – Apr 2026 (6) |
| D — Design (M.Des) | 50 | Color theory (8), famous painters (8), art movements (5), design principles (8), logos & brand identity (5), paper folding (3), mirror image (3), pattern grouping & embedded figures (3), Indian crafts (3), architecture (4) |

Each question has: id, section, text, 4 options, correct index, explanation, difficulty (1–3), tag, marks, optional passage reference. Total marks = exactly 200 (verified programmatically).

### 4.5 Curated YouTube library (30 videos)

Each entry is a short YouTube **search URL** for a specific topic (5–10 min videos), so links never break even if individual videos go down. Mapped from question `tag` → video via `videoForTag()` in `src/data/youtube.js`. Shown:
- On the Review screen next to each wrong question
- On the Stats page as a browsable library

### 4.6 AI explanations (security-first design)

Architecture: browser → Supabase Edge Function → OpenAI. The OpenAI key lives **only** as a Supabase secret on the function, never in the bundled JS. Code in `supabase/functions/explain/index.ts` uses `gpt-4o-mini` with a tutor-style prompt that:
1. Explains why the correct answer is correct (with a memory hook)
2. Diagnoses why the student's wrong answer is a common trap
3. Gives a "spot this pattern next time" tip

Behaviour: on-demand only — the user must click "Ask AI for deeper explanation" on a specific question. This keeps OpenAI cost bounded and avoids interrupting the test flow.

### 4.7 Supabase backend (no auth, single-device mode)

Schema in `supabase/migrations/0001_init.sql`:
- `mock_attempts` — one row per submission (score, marks, section_scores, answers JSON)
- `question_responses` — optional fine-grained per-question logging
- `weak_areas` — computed table for the cross-mock recommendation engine

RLS enabled, with open `anon` policies (single-user use case). When you add multi-user later, swap these for `auth.uid()` policies.

A `device_id` UUID is generated once and stored in `localStorage`, used as the row key. This means switching browsers/devices starts a fresh history (intentional — you wanted no auth).

### 4.8 Local-first behavior

The app works **without** Supabase configured. All progress goes to `localStorage` under `aist-ace-progress-v1`. If `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are present in `.env`, mock attempts also POST to Supabase. This way the student is never blocked by network issues during a mock.

### 4.9 Project structure

```
fddi/
├── README.md, PRD.md, package.json, vite.config.js, tailwind.config.js
├── start.bat, start.ps1            ← one-click runners
├── .env, .env.example, .gitignore
├── public/favicon.svg
├── supabase/
│   ├── migrations/0001_init.sql    ← paste into SQL editor
│   └── functions/explain/index.ts  ← deploy via supabase CLI
└── src/
    ├── main.jsx, App.jsx, index.css, config.js
    ├── components/   (AppShell, Header, ui)
    ├── hooks/        (useTimer)
    ├── lib/          (supabase, openai)
    ├── pages/        (Dashboard, Plan, Practice, Stats, MockTaker, Review)
    ├── state/        (ProgressContext)
    └── data/
        ├── youtube.js, papers.js, questionShape.js
        └── paper1/   (index, passages, sectionA-D — 175 questions)
```

**Stats:** 38 files · ~1,625 lines of code · 175 unique question IDs · 200 marks · 3 RC passages · 30 YouTube links · 1 SQL migration · 1 Edge Function

---

## 5 · What's left

### 5.1 Mocks 2–6 (highest priority, time-sensitive)

| Mock | Date due | Difficulty profile | Status |
|---|---|---|---|
| 1 — Diagnostic | 29 Apr | Easy | ✅ Ready |
| 2 — Foundation | 1 May | Easy → Medium | ⏳ To write |
| 3 — Build-Up | 3 May | Medium | ⏳ To write |
| 4 — Stretch | 5 May | Medium → Hard | ⏳ To write |
| 5 — Exam Sim | 7 May | Hard | ⏳ To write |
| 6 — Final Sim | 8 May | Exam Replica | ⏳ To write |

Each mock requires another 175 hand-written questions (≈25/50/50/50). Total remaining content: **875 questions**. Each subsequent paper should also rotate the RC passages, vary the question tags, and gradually increase difficulty distribution. Plan: deliver each paper in its own session before its scheduled date — same structure as Paper 1, just `src/data/paperN/` + one line in `src/data/papers.js`.

Right now the app falls back to Mock 1 content for IDs 2–6 with a "Coming Soon" placeholder badge so it remains usable.

### 5.2 Deployment & ops

- [ ] **Run `npm install && npm run dev`** on your Windows machine to launch (use `start.bat`). Confirm the dashboard renders, take a sample mock, verify timer + adaptive logic + review.
- [ ] **Apply the Supabase migration** — paste `supabase/migrations/0001_init.sql` into project `bgmfzujgdaalyvxiynhi` SQL editor.
- [ ] **Deploy the Edge Function** — `supabase functions deploy explain` (only needed if you want AI explanations).
- [ ] (Optional) Deploy the static frontend — `npm run build` produces `dist/`, drop it on Vercel/Netlify/Cloudflare Pages so she can use it from any device.

### 5.3 Security must-fixes (blocking)

- [ ] **Rotate the OpenAI key** at https://platform.openai.com/api-keys. The one you pasted in chat is publicly visible. Set the new one as a Supabase secret only: `supabase secrets set OPENAI_API_KEY=sk-...new-key`.
- [ ] **Reset the Supabase database password** in Project Settings → Database. (The anon JWT in `.env` is fine to keep public; the database password is what matters.)
- [ ] Confirm RLS is enabled on every table after running the migration (the migration enables it; verify in Supabase → Authentication → Policies).

### 5.4 Nice-to-have (post-exam or stretch)

- [ ] Resume in-progress mock if browser closes mid-test (currently progress is in component state; would need persisting `answers` to localStorage on every change)
- [ ] Per-question time tracking — capture how long she spent on each question, visualise on Review
- [ ] Section-specific drills (10-question quick mode) — UI shells exist on the Practice page; logic to load only one section is partial
- [ ] Bookmarks / "review later" list across mocks
- [ ] PDF export of any mock with answer key (for offline revision the day before the exam)
- [ ] Weak-tag drill: from her wrong answers, generate a 20-question custom drill targeting only her weakest tags
- [ ] Confidence calibration — for each answer she also rates how sure she was; on Review we show "wrong but very confident" questions first (these are the highest-value learnings)
- [ ] Push reminders ("Mock 3 is scheduled for tomorrow") via PWA notifications
- [ ] Light theme toggle (currently dark only)

### 5.5 Known limitations (intentional, not bugs)

- **Single-user, single-device** — by design. Switching browsers loses local progress unless Supabase is configured.
- **No auth recovery** — if `localStorage` is cleared, history resets. Supabase sync mitigates this.
- **AI cost is uncapped** — each "Ask AI" click costs a small OpenAI charge. With ~30 wrong answers per mock × 6 mocks × $0.0002 per call ≈ $0.04 total, this is negligible. But if she clicks repeatedly there's no rate limit. Add one if needed.
- **No spam protection on Edge Function** — anyone with the deployed URL can trigger an OpenAI call. For a single-user app this is acceptable; for a public app you'd want a Turnstile/captcha or auth gate.
- **Mocks 2–6 are placeholders** — the app won't crash if she opens them, but they show Mock 1 content with a "Coming Soon" label until I write the real content.

---

## 6 · Success metrics

These are tracked automatically by the app:

| Metric | Where shown | Target |
|---|---|---|
| Overall readiness % | Header pill, Dashboard hero, Stats radar | ≥ 80% by 7 May |
| Section accuracy (A) | Dashboard Section card | ≥ 85% (because A is double-marks) |
| Section accuracy (B/C/D) | Dashboard Section card | ≥ 75% each |
| Mocks completed | Dashboard mission card | 6/6 by 8 May |
| Streak | Dashboard streak indicator | 11 days unbroken |
| Wrong-answer review count | Implicit (Review page filter) | Aim: every wrong answer reviewed within 2 days of the mock |

The single product KPI — does she score ≥ 80% on the actual exam on 10 May — is measured offline.

---

## 7 · Timeline (committed)

| Date | Deliverable |
|---|---|
| 28 Apr (today) | ✅ App scaffold, Mock 1 (175 Q), Supabase schema, Edge Function code |
| 30 Apr | Mock 2 — Foundation (175 Q, easy→medium) |
| 2 May | Mock 3 — Build-Up (175 Q, medium) |
| 4 May | Mock 4 — Stretch (175 Q, medium→hard) |
| 6 May | Mock 5 — Exam Sim (175 Q, hard) |
| 7 May | Mock 6 — Final Sim (175 Q, exam replica) |
| 9 May | Bug-fix buffer day; no new content |
| 10 May | Exam day. Goodbye nerves, hello seat. |

---

## 8 · Open questions for you

1. **Mocks 2–6 difficulty calibration** — should harder mocks include more high-difficulty questions, longer RC passages, or more ambiguous wrong-answer distractors? (Leaning: progressively all three, but want your call.)
2. **AI explanation autoplay** — currently strictly on-demand. Want me to auto-fetch for the bottom 5 wrong answers on Review-page open, so she doesn't have to click?
3. **Cloud deployment** — do you want the app deployed publicly (Vercel/Netlify) so she can use it on her phone/another machine? Free, takes 5 minutes.
4. **Streak gamification** — current streak is a static counter. Want me to add a visual streak chain + lose-it warning if a day is missed?
5. **Voice / accessibility** — the exam is desk-based, but if she practices late at night, does she want a "read question aloud" button? (Web Speech API, free.)

Reply to any/all and I'll fold them into v0.2 alongside Mock 2 before 1 May.
