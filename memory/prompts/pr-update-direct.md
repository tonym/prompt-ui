# PR Update (direct push to existing PR branch)

**Goal:** Update PR #<N> by pushing commits to its existing branch. Do **not** open a new PR.

## Context (fill when invoking)
- Repo: `<owner>/<repo>`
- PR: `https://github.com/<owner>/<repo>/pull/<N>`

## Protocol
1) Discover PR head: read PR #<N> to get `head.repo` and `head.ref` (branch).
2) Check out that exact branch locally.
3) Apply requested changes (from review checklist or TODO plan).
4) Run:
   - `pnpm i`
   - `pnpm lint`
   - `pnpm test` (and repo-specific scripts, e.g., `pnpm test:angular-lib`)
5) Commit and push to the **same** branch.
   - Conventional commit message, e.g., `fix(<scope>): <short summary>`
6) Post a PR comment titled "Change sweep results" that maps:
   - checklist item → commit SHA → files touched → test output snippet

## Safety / Guards
- If push is denied or branch is missing, stop and print: "Use stacked PR fallback."
- Keep diffs minimal; avoid unrelated refactors.
---
