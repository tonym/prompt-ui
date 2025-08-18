# Ticket → PR (Codex Prompt Template)

Context:
- Repo: <owner>/<repo>
- Base: main
- Branch: codex/<task>-<slug>-<yyyymmdd-hhmm> (append -v2 if exists)
- Read before coding: memory/project-overview.md, memory/codex-guidelines.md

Protocol:
1) Scope: read ticket + AC; list files to touch and why (DRY-RUN).
2) Tests first: add failing tests encoding AC.
3) Implement minimal code to satisfy tests.
4) Run: pnpm i && pnpm lint && pnpm test (and repo-specific test scripts).
5) PR (Draft): title `feat(<scope>): <summary> (closes <TICKET_ID>)`
   - Body includes AC → tests mapping & run commands.
6) Post results comment with plan → commits → test summary.

Guardrails:
- No secrets; idempotent; avoid unrelated formatting.
- If ambiguity: choose simplest option and note in PR.
