# @prompt-ui/core

This package contains the core utilities, themes, and declarative component definitions for the PromptUI AI-integrated design system.

It serves as the central logic layer, orchestrating how tokens, themes, and component generators interact. It does not export any runtime components or styles.

## 🤖 What It Is

- The foundation of the design system's logic and composition
- Includes:
  - Declarative component interfaces and placeholder components
  - Theme composition utilities
  - Prompt and generation logic

## ⚖️ What It Does

- Exposes composable functions to:
  - Generate design-system-compliant components based on tokens
  - Apply and switch themes based on context or app configuration
- Hosts all blueprint logic for AI agents to resolve components at build time

## 🔧 Architecture Notes

- Does not include any JSX, HTML, or CSS at runtime
- All components are framework-agnostic and declarative only
- Runtime styling is handled downstream, post-generation

## 🔎 Theme and Modality

- Themes are generated from tokens and available from the core package
- A small internal store is used to manage theme modality (e.g. light/dark/high contrast) and token sets in applications that require runtime switching

---

For an overview of the system philosophy and usage guidance, see the root-level [`/docs/`](../../docs/) folder.
