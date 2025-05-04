# Angular Example App

This is a minimal Angular application used to demonstrate how a PromptUI-based design system can integrate with AI-assisted workflows to generate runtime component implementations.

---

## ✨ Purpose

- Show how consuming apps reference placeholder components like `<Button />` from `@prompt-ui/core`
- Demonstrate how AI tools can generate framework-specific components on demand
- Serve as a testbed for build-time replacement and local development using PromptUI prompts

---

## 📄 Overview

- Uses Angular CLI
- Imports placeholders (e.g. `Button`) from `@prompt-ui/core`
- Does **not** include compiled runtime implementations of those components
- Relies on AI to generate Angular components locally into `src/generated/`

---

## 👥 Audience

- Feature developers experimenting with AI-integrated component systems
- Tooling authors building PromptUI-compatible pipelines
- Designers and system architects exploring PromptUI's DX model

---

## 🧠 How PromptUI works in this app

1. Placeholder components like `Button` are imported from `@prompt-ui/core`
2. Each placeholder has:
   - A `prompt.ts` file describing the component interface
   - A `generate.ts` file that outputs a framework-agnostic spec
3. An AI assistant (like Cursor, ChatGPT, or CI pipeline agent) is used to:
   - Run the generator
   - Interpret the prompt and spec
   - Output Angular component files to `src/generated/Button/`

---

### 🧠 Local Development Flow

1. **Prompt your AI assistant** to create a shadow copy of your app (e.g., in `.generated/`), excluding:
   - `node_modules/`
   - `.git/`
   - Ignored or build artifact files

   Then, within that shadow folder:
   - Generate real components for all PromptUI placeholders by following their imports to locate prompts.
   - Refactor the app to use the generated components instead of the placeholders

2. **Run your app** inside the shadow folder using your usual start script.

3. **Repeat generation** whenever you:
   - Change PromptUI placeholder props
   - Update a prompt or generator
   - Modify app logic using PromptUI components

4. **Angular will detect changes** in the shadow app automatically and rebuild when components are regenerated.
