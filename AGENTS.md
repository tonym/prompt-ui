# Agents

See `memory/index.yaml` for the manifest of agent-readable context.

## Build (Codex)
**Role:** Code & tests from tickets; keeps diffs minimal.
**Reads:** `memory/project-overview.md`, `memory/codex-guidelines.md`, `memory/prompts/ticket-to-pr.md`
**Scripts:** `pnpm i`, `pnpm lint`, `pnpm test` (plus repo-specific e.g., `pnpm test:angular-lib`)
**PR policy:** Draft until green; conventional commits; map AC → tests in PR body.

### PR updates
- Policy: Prefer direct push to the PR’s head branch; if not permitted, create a stacked PR targeting that branch.
- Prompts:
  - memory/prompts/pr-update-direct.md
  - memory/prompts/pr-update-stacked.md

## Test
**Role:** Generate/maintain unit/integration tests; enforce repo testing rules.
**Reads:** `memory/codex-guidelines.md`, `memory/checklists/testing.md`

## Docs
**Role:** Update README/CHANGELOG/Storybook when behavior changes.
**Reads:** `memory/project-overview.md`, `memory/prompts/docs-update.md`

## Research
**Role:** Summarize design choices, create RFC stubs.
**Reads:** `memory/project-overview.md`, `memory/pitfalls.md`
