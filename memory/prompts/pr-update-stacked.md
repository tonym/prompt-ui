# PR Update (stacked PR fallback)

**Goal:** Create a stacked PR targeting the existing PR’s branch when direct pushes aren’t possible.

## Context (fill when invoking)
- Repo: `<owner>/<repo>`
- Base PR: `https://github.com/<owner>/<repo>/pull/<N>`
- New branch: `codex/stack-<slug>-<YYYYMMDD-HHMM>` (append `-v2` if exists)

## Protocol
1) Discover PR #<N> `head.ref` and use it as the base for this stacked PR.
2) Create a new branch from that base; apply requested changes.
3) Run:
   - `pnpm i`
   - `pnpm lint`
   - `pnpm test` (and repo-specific scripts, e.g., `pnpm test:angular-lib`)
4) Open a Draft PR with:
   - base = PR #<N> head branch
   - compare = the new stacked branch
   - Title: `chore: follow-ups for PR #<N> (<short slug>)`
   - Body: map checklist → commits → test output
5) Comment on PR #<N> with a link to this stacked PR.

## Safety / Guards
- Keep changes surgical; document any conflict resolutions.
- Prefer one commit per failure class or checklist item.
---
