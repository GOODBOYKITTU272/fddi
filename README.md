# AIST Ace · Prep Master

A focused mock-test platform for the **AIST 2026 M.Des entrance exam** at FDDI Hyderabad (10 May 2026).

Built for one specific student: 11 days of preparation, 6 mock papers spaced every 2 days, an adaptive engine that adjusts difficulty based on performance, and AI-powered explanations on demand.

---

## What's inside

- **6 mock papers** (Mock 1 fully populated with 175 questions; 2-6 reuse Mock 1 as a placeholder until their scheduled date — they get hand-written content delivered before each mock day).
- **Stripe-inspired dark UI** with section colour coding.
- **Within-mock adaptive logic**: if running accuracy in a section drops below 50%, easier questions surface next; above 75%, harder ones surface.
- **Cross-mock recommendations**: each section's accuracy is tracked over time; the dashboard ranks sections weakest → strongest.
- **AI explanations** via a Supabase Edge Function (the OpenAI key never enters the browser).
- **Curated YouTube library** — 30 hand-picked search links for each question type, each 5–10 minutes.
- **Local-first**: all progress saved to `localStorage`. Supabase is set up in parallel for cross-device sync (and analytics persistence).

---

## Run locally (in 2 minutes)

```bash
# 1 · Install dependencies
npm install

# 2 · (optional) Create your local env file
cp .env.example .env
#    The .env already has the Supabase URL + anon key for the project.
#    The anon key is *meant* to be public, so this is safe.

# 3 · Start the dev server
npm run dev
```

Open <http://localhost:5173>. The app boots straight into the Dashboard. Click **Start Diagnostic Session** to take Mock 1.

---

## Mock schedule (your 11-day plan)

| Day | Date | Activity |
|---:|------|----------|
| 1 | Apr 28 | Foundation — review syllabus, idioms, paper-folding video |
| 2 | Apr 29 | **Mock 1 — Diagnostic** (2.5 h) |
| 3 | Apr 30 | Section A drill |
| 4 | May 1  | **Mock 2 — Foundation** |
| 5 | May 2  | GK + current affairs |
| 6 | May 3  | **Mock 3 — Build-Up** |
| 7 | May 4  | Design aptitude drill |
| 8 | May 5  | **Mock 4 — Stretch** |
| 9 | May 6  | English revision |
| 10 | May 7 | **Mock 5 — Exam Sim** |
| 11 | May 8 | **Mock 6 — Final Sim** |
| 12 | May 9 | Light review only |
| 13 | May 10 | **EXAM DAY** |

---

## Set up Supabase (optional — for cloud sync)

The app works fully offline; Supabase is only needed if you want progress sync.

1. Open the Supabase dashboard for project `bgmfzujgdaalyvxiynhi`.
2. **SQL Editor → New query** → paste the contents of `supabase/migrations/0001_init.sql` → **Run**. This creates the `mock_attempts`, `question_responses`, `weak_areas` tables with open RLS policies (single-user mode).
3. Confirm the tables appear under **Table Editor**.

That's it — the app starts writing to Supabase the next time you submit a mock.

> **Security note**: the `anon` JWT key in `.env` is *designed* to be public; that's how Supabase clients work. The DB password you shared in chat is **separate** — please reset it from Supabase Settings → Database. The anon key gives only the access that RLS policies allow.

---

## Enable AI explanations (Supabase Edge Function)

Each "Ask AI for deeper explanation" button in the review screen triggers a call to OpenAI. The key lives **only** as a Supabase secret on the server — never in the browser.

```bash
# 1 · Install Supabase CLI if you haven't:
npm install -g supabase

# 2 · Login + link
supabase login
supabase link --project-ref bgmfzujgdaalyvxiynhi

# 3 · Set your NEW OpenAI key as a secret (rotate the one you pasted in chat first!)
supabase secrets set OPENAI_API_KEY=sk-proj-...your-new-key

# 4 · Deploy the function
supabase functions deploy explain --project-ref bgmfzujgdaalyvxiynhi
```

After deploy, the "Ask AI" button in `/review/:id` works automatically. If the function isn't deployed, AI explanations gracefully fall back to a "not configured" message.

---

## Security checklist (do this NOW)

- [ ] **Rotate the OpenAI key** at <https://platform.openai.com/api-keys> — the one you pasted earlier is publicly visible.
- [ ] **Reset the Supabase database password** in the project's Settings → Database. (The anon JWT is fine to keep public; it's the DB password that needs rotating.)
- [ ] Confirm RLS is **enabled** on every table. The migration enables it; double-check in Supabase → Authentication → Policies.

---

## Project structure

```
fddi/
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ vite.config.js
├─ .env, .env.example, .gitignore
├─ public/
│  └─ favicon.svg
├─ supabase/
│  ├─ migrations/0001_init.sql
│  └─ functions/explain/index.ts
└─ src/
   ├─ main.jsx, App.jsx, index.css, config.js
   ├─ components/  (AppShell, Header, ui)
   ├─ hooks/       (useTimer)
   ├─ lib/         (supabase, openai)
   ├─ pages/       (Dashboard, Plan, Practice, Stats, MockTaker, Review)
   ├─ state/       (ProgressContext)
   └─ data/
      ├─ youtube.js
      ├─ questionShape.js
      ├─ papers.js
      └─ paper1/
         ├─ index.js
         ├─ passages.js
         ├─ sectionA.js  (25 questions × 2 marks)
         ├─ sectionB.js  (50 questions × 1 mark, with 3 RC passages)
         ├─ sectionC.js  (50 questions × 1 mark)
         └─ sectionD.js  (50 questions × 1 mark — M.Des focused)
```

---

## What's still to come

| Mock | Status |
|---|---|
| Mock 1 — Diagnostic (Apr 29) | **Ready — 175 handwritten questions** |
| Mock 2 — Foundation (May 1) | Placeholder (uses Mock 1 content). Full mock delivered before May 1. |
| Mocks 3-6 | Same — delivered before each scheduled date. |

Each new mock will use the same shape (`src/data/paperN/sectionX.js`) and just be added to `src/data/papers.js`.

---

## Goal

Reach **80%+** on Mock 5 and Mock 6 (May 7 / May 8) so that on exam day she walks in confident and lands her seat. Good luck!
