# Local Development Guidance

## Overview

This design system is built for **AI-integrated development and build workflows**.

It does **not** ship runtime components. Instead, it provides:

- Declarative component placeholders (e.g., `<Button />`)
- Theme and token systems
- Prompts and generators to guide AI agents

At production build time, **AI agents or build tools** replace placeholders with real framework components.

This document explains how you can work with the system **during local development**, and offers an optional CLI script to help discover placeholders.

---

## How Local Development Works

During local development:

1. You import and use components like `<Button>` in your project normally.
2. These placeholders **do not render at runtime** — they are declarative markers.
3. Running the app without replacing them will cause intentional runtime errors in development.
4. You use AI tools (such as [Cursor](https://cursor.sh/), [Continue](https://continue.dev/), or custom CLI scripts) to generate the framework-specific components.
5. You replace placeholders with generated code as needed to run your app locally.

---

## How to Use AI Tools Like Cursor

- **Write your pages normally**, using `<Button>`, `<Link>`, etc.
- **Highlight** the placeholder usage in Cursor.
- **Prompt Cursor** with something like:

> "Replace this placeholder with a real framework-specific button component using the system's provided prompt and theme."

- **Cursor will follow imports, read prompts, and generate a real component** (e.g., a Next.js, React, or Angular button).

✅ Now your app will render normally during local development.

---

## Optional CLI: Placeholder Discovery Script

You can optionally use a simple CLI script to **scan your codebase for declarative components** and prepare for AI resolution.

Here’s an example `scripts/dev-scan.ts` you can include in your repo:

```typescript
// scripts/dev-scan.ts

import fs from 'fs';
import path from 'path';
import glob from 'glob';

const components = ['Button', 'Link', 'Badge']; // Expand this list as needed

function scanDirectory(basePath: string) {
  const files = glob.sync(`${basePath}/**/*.{ts,tsx}`);

  const findings: { file: string; matches: string[] }[] = [];

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const matches = components.filter(component => content.includes(`<${component}`));

    if (matches.length > 0) {
      findings.push({ file, matches });
    }
  });

  return findings;
}

function runScan() {
  console.log('🔍 Scanning for declarative components...\n');

  const results = scanDirectory('src');

  if (results.length === 0) {
    console.log('✅ No placeholders found. All clear!\n');
    return;
  }

  results.forEach(({ file, matches }) => {
    matches.forEach(match => {
      console.log(`- ${file}: <${match} />`);
    });
  });

  console.log('\n⚡ Next steps:');
  console.log('- Use your AI tool (e.g., Cursor) to resolve these placeholders.');
  console.log('- Replace them with real framework-specific components before production builds.\n');
  console.log('🧐 Reminder: Placeholders must be replaced before production.');
}

runScan();
```

### To use:

```bash
pnpm tsx scripts/dev-scan.ts
```

or add a script to `package.json`:

```json
{
  "scripts": {
    "dev-scan": "tsx scripts/dev-scan.ts"
  }
}
```

Then run:

```bash
pnpm dev-scan
```

---

## Final Notes

- **Placeholder discovery and resolution** are intentionally left to your local tooling and build workflows.
- **This system does not bundle runtime components.**
- You can use AI tools, local scripts, or any future build agents to resolve your UI at development time.
- This approach keeps the system lightweight, composable, and future-proof.
