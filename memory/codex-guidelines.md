# Codex Guidelines (Repo-Specific)

## Stack & Scripts
- Stack: TypeScript, Angular example library
- Commands: install `pnpm i`; lint `pnpm lint`; tests `pnpm test`, angular-lib `pnpm test:angular-lib`
- Build sanity: `pnpm build`

## Code Conventions
- Type-first TS; no `any` unless justified (comment why)
- Keep diffs minimal; no broad refactors in ticket work
- Accessibility: use proper ARIA in UI work

## Testing Rules
- Prefer one `expect` per `it` (split otherwise)
- Mirror acceptance criteria in tests; name tests descriptively
- Angular: use `jest-preset-angular`, `TestBed`, `ComponentFixture`

## PR Rules
- Conventional commits; Draft until tests pass
- PR body: Summary, Changeset, AC → tests map, How to run, Risks
