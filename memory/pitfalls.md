# Pitfalls & Gotchas
- Angular + Jest ESM: use `jest-preset-angular`, ts-jest with `useESM: true`, and transform @angular|rxjs.
- Tests: prefer one `expect` per `it`; split when necessary.
- Class assertions: assert on stable substrings (avoid brittle full-class matches).
