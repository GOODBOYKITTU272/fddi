-- Drill sessions — tracks each adaptive drill run
create table if not exists public.drill_sessions (
  id           uuid primary key default gen_random_uuid(),
  device_id    uuid not null,
  player_name  text not null default 'Pranavi',
  mock_id      int  not null,
  modules      text[] not null,        -- e.g. {'C','D'}
  time_minutes int  not null,
  total_qs     int  not null default 0,
  correct      int  not null default 0,
  wrong        int  not null default 0,
  score_pct    numeric default 0,
  streak_best  int  not null default 0, -- longest correct streak in the session
  finished     bool default false,
  created_at   timestamptz default now(),
  finished_at  timestamptz
);

create index if not exists drill_sessions_device_idx on public.drill_sessions (device_id);

-- Per-question log inside a drill session
create table if not exists public.drill_responses (
  id           uuid primary key default gen_random_uuid(),
  session_id   uuid references public.drill_sessions(id) on delete cascade,
  question_id  text not null,
  section      text not null,
  tag          text,
  selected     int,
  correct_idx  int  not null,
  is_correct   bool not null,
  time_ms      int,
  created_at   timestamptz default now()
);

create index if not exists drill_responses_session_idx on public.drill_responses (session_id);

-- RLS (open for single-user anon mode)
alter table public.drill_sessions  enable row level security;
alter table public.drill_responses enable row level security;

drop policy if exists "anon-rw drill_sessions"  on public.drill_sessions;
drop policy if exists "anon-rw drill_responses" on public.drill_responses;

create policy "anon-rw drill_sessions"  on public.drill_sessions  for all to anon using (true) with check (true);
create policy "anon-rw drill_responses" on public.drill_responses for all to anon using (true) with check (true);
