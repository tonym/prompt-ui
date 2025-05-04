# PromptUI Angular Component Library Example

PromptUI is designed for AI-integrated, build-time UI generation — but it can also be used to generate a **traditional component library** for legacy products or teams that do not use AI tooling in their build pipelines.

This folder demonstrates that capability by showcasing Angular components generated from PromptUI's intent-first architecture (placeholders, prompts, and generators).

## 🧠 Why this matters

Some teams need:
- Runtime components (not placeholders)
- Traditional Angular modules and components
- Theme-aware behavior without integrating a custom compiler or AI transform

PromptUI supports this by exposing:
- Declarative component placeholders (`Button`, etc.)
- Associated prompts (`ButtonPrompt`)
- Generator functions (`generateButton`)

Consumers can use this information — with their AI agent (like Cursor, Continue, or ChatGPT) — to generate a complete component library, either with or without runtime dependencies on `@prompt-ui/core`.

---

## 🛠 How to generate your own component library

PromptUI does not provide tooling to generate a runtime library directly. Instead, consumers prompt their AI agent of choice to:

1. Discover available components from `@prompt-ui/core`
2. Use the prompts and generators to understand each component’s purpose
3. Generate Angular components into a local library folder

This can be done with or without including PromptUI tooling in the output.

---

## 🧩 Strategy 1: **Lightweight, components-only output**

The generated Angular components:
- Are theme-aware
- Import tokens and utility functions from `@prompt-ui/core`
- Do **not** duplicate prompt or generator logic

This results in:
- A **clean, minimal** library
- A **runtime dependency** on `@prompt-ui/core`
- The ability to benefit from upstream updates to tokens and themes

### 📎 Suggested AI prompt

> Scan each folder in @prompt-ui/core/components/.
>
> Each folder contains a ./prompt file.
>
> A Theme interface can be imported from @prompt-ui/core.
>
> For each component:
> 	1.	Import the prompt and follow the instructions in the prompt.
> 	2.	Use the generated output to create a standalone Angular component. Style values must reference theme keys (e.g., theme.spacing.medium, theme.intent.primary.bg) — not raw > tokens or hardcoded values. Assume the theme will be provided by the host application at build time or runtime, depending on the framework.
> 	3.	Place each component in its own folder inside examples/angular-library/src/components/ (e.g., Button/, Input/). Include any supporting files such as module definitions.
> 	4. Create an `.scss` file for each component to define its styles. Follow Angular best practices by co-locating the SCSS file with the component. Use SCSS variables that correspond to keys in the PromptUI `Theme` interface (e.g., `$spacing-medium`, `$intent-primary-background`, `$border-radius-medium`). Do **not** hardcode raw style values. You may assume the host application will provide these variables at build time by transforming the PromptUI theme into SCSS. The SCSS must include class-based styles for all prop variants defined in the component interface, including all values of `appearance`, `intent`, and `size`.
> 	5.	Create index.ts barrel files for each folder in components/ and a components/index.ts barrel file that re-exports everything in the component folders.
> 	6.	Add a root index.ts file in examples/angular-library/ that re-exports from components/ for clean package entry.
>
> Follow Angular naming and styling conventions, and do not copy or inline any PromptUI logic.


## 🧱 Strategy 2: **Fully self-contained output (standalone)**

In this mode:
- The AI copies PromptUI’s relevant tokens, theme logic, and any helpers directly into the output
- There are **no runtime dependencies** on `@prompt-ui/core`
- The output is completely standalone

This may be appropriate for:
- Legacy applications with strict dependency controls
- Long-term frozen versions of a design system
- Offline/air-gapped environments

### 📎 Suggested AI prompt

> Scan each folder in @prompt-ui/core/components/.
>
> Each folder contains a ./prompt file.
>
> A Theme interface can be imported from @prompt-ui/core.
>
> For each component:
> 	1.	Import the prompt and follow the instructions in the prompt.
> 	2.	Use the generated output to create a standalone Angular component. Style values must reference theme keys (e.g., theme.spacing.medium, theme.intent.primary.bg) — not raw tokens or hardcoded values. Assume the theme will be provided by the host application at build time or runtime, depending on the framework.
> 	3.	Place each component in its own folder inside examples/angular-library/src/components/ (e.g., Button/, Input/). Include any supporting files such as module definitions.
> 	4. Create an `.scss` file for each component to define its styles. Follow Angular best practices by co-locating the SCSS file with the component. Use SCSS variables that correspond to keys in the PromptUI `Theme` interface (e.g., `$spacing-medium`, `$intent-primary-background`, `$border-radius-medium`). Do **not** hardcode raw style values. You may assume the host application will provide these variables at build time by transforming the PromptUI theme into SCSS. The SCSS must include class-based styles for all prop variants defined in the component interface, including all values of `appearance`, `intent`, and `size`.
> 	5.	Recreate the full contents of the theme/, store/, and types/ folders, maintaining the folder and file structure inside examples/angular-library/src, as uncompiled TypeScript source files. These should contain all necessary logic to support the generated components without depending on PromptUI.
> 	6.	Create index.ts barrel files for each folder (components/, theme/, store/, types/).
> 	7.	Add a root index.ts file in examples/angular-library/src that re-exports everything from the subfolders for clean package entry.
>
> The result should be a standalone, TypeScript-native component library that mirrors the PromptUI structure but contains runtime components instead of placeholders. It must compile cleanly with tsc and run without PromptUI as a dependency.

## 🔍 Comparing the Two Strategies

| Feature                      | Strategy 1 (Lightweight) | Strategy 2 (Standalone) |
| ---------------------------- | ------------------------ | ----------------------- |
| Output size                  | Smaller                  | Larger                  |
| Depends on `@prompt-ui/core` | ✅ Yes                    | ❌ No                    |
| Easier to maintain           | ✅ Yes                    | ❌ No                    |
| Easier to publish            | ❌ No                     | ✅ Yes                   |
| Best for modern apps         | ✅ Yes                    | ❌ Not ideal             |
| Best for legacy apps         | ❌ May be limited         | ✅ Yes                   |

---

## 📦 About this example

The code in this folder was generated using **Strategy 1 (Lightweight)**.

Only the code inside the `src/` folder was generated using PromptUI and the provided AI prompts.
