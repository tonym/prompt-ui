# @prompt-ui/tokens

This package contains the design tokens used by the PromptUI AI-integrated design system.

Tokens are versioned, structured, and transformed into formats usable at build time. They serve as the single source of truth for design values such as color, spacing, border radius, and more.

## 🤖 What It Is

- A source of platform-agnostic design values
- Organized and exported as a consumable NPM package
- Managed independently from the component or theme packages

## ⚖️ What It Does

- Accepts raw design tokens (currently from TokensStudio)
- Transforms them into:
  - **Raw JSON** for programmatic access
  - **Style Dictionary format** for framework integration and styling pipelines

## ⚡ How It Works

- Tokens are stored in `src/tokens/sets/`
- A GitHub Action (`transform-tokens.yml`) runs on push to transform the token sets
- A local script (`pnpm transform:tokens`) is available for manual development use
- Transformed tokens are output to the `build/` directory in multiple formats

## 🔧 Customization

- Currently configured to accept tokens from **TokensStudio**
- Can be easily reconfigured to accept any token source (e.g. custom JSON, other tools)
- Transformation logic can be extended or replaced as needed

---

For more details about local development and token workflows, see the root-level [`/docs/`](../../docs/) folder.
