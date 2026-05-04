-- AIST Ace · Mock-test platform schema
-- Single-user, no-auth mode: every record is keyed by a device_id (UUID stored in localStorage).
-- Open Row-Level-Security policies for the anon role so the app works without sign-in.
-- If you ever add multi-user later, swap these for tighter auth-based policies.

-- 1. mock_attempts ------------------------------------------------------------
create table if not exists public.mock_attempts (
  id           uuid primary key default gen_random_uuid(),
  device_id    uuid not null,
  mock_id      int  not null,
  score        numeric not null,
  marks        int  not null,
  total        int  not null,
  section_scores jsonb not null,
  answers      jsonb not null,
  status       text default 'completed',
  forced       bool default false,
  created_at   timestamptz default now()
);
create index if not exists mock_attempts_device_idx on public.mock_attempts (device_id, mock_id);

-- 2. question_responses (optional fine-grained logging) -----------------------
create table if not exists public.question_responses (
  id          uuid primary key default gen_random_uuid(),
  attempt_id  uuid references public.mock_attempts(id) on delete cascade,
  question_id text not null,
  selected    int,
  is_correct  bool,
  time_spent_ms int,
  created_at  timestamptz default now()
);

-- 3. weak_areas (computed, used by adaptive engine) ---------------------------
create table if not exists public.weak_areas (
  id         uuid primary key default gen_random_uuid(),
  device_id  uuid not null,
  section    text not null,
  tag        text,
  accuracy   numeric not null,
  updated_at timestamptz default now()
);

-- 4. RLS ---------------------------------------------------------------------
alter table public.mock_attempts      enable row level security;
alter table public.question_responses enable row level security;
alter table public.weak_areas         enable row level security;

-- Open policies for anon role (single-user use case).
-- These can be replaced with auth.uid() checks once login is added.
create policy "anon-rw mock_attempts"      on public.mock_attempts      for all to anon using (true) with check (true);
create policy "anon-rw question_responses" on public.question_responses for all to anon using (true) with check (true);
create policy "anon-rw weak_areas"         on public.weak_areas         for all to anon using (true) with check (true);
