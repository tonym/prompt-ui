# Agents

## Build (Codex)
**Role:** Code & tests from tickets; keeps diffs minimal.
**Reads:** `memory/project-overview.md`, `memory/codex-guidelines.md`, `memory/prompts/ticket-to-pr.md`
**Scripts:** `pnpm i`, `pnpm lint`, `pnpm test` (plus repo-specific e.g., `pnpm test:angular-lib`)
**PR policy:** Draft until green; conventional commits; map AC → tests in PR body.

## Test
**Role:** Generate/maintain unit/integration tests; enforce repo testing rules.
**Reads:** `memory/codex-guidelines.md`, `memory/checklists/testing.md`

## Docs
**Role:** Update README/CHANGELOG/Storybook when behavior changes.
**Reads:** `memory/project-overview.md`, `memory/prompts/docs-update.md`

## Research
**Role:** Summarize design choices, create RFC stubs.
**Reads:** `memory/project-overview.md`, `memory/pitfalls.md`
