# PromptUI

[Read about how PromptUI works](https://www.designsystemscollective.com/how-ai-integrated-design-systems-and-generative-component-libraries-work-a060897b8abb?source=friends_link&sk=e544b72669ae7838be2ad5e5d5abd8d8)

## AI-Integrated Design System Sandbox

Welcome to PromptUI, an AI-integrated design system.

This project explores a new architecture for design systems, built around the assumption that AI agents are part of the development and build toolchain. Unlike traditional design systems that ship fully-rendered components, this system provides **declarative component placeholders**, **composable token infrastructure**, and **AI-resolvable prompts** to generate real, framework-specific code at build time.

## 🧠 What It Is

- A proof-of-concept for **AI-integrated UI development**
- A design system that uses **declarative components**, not runtime ones
- A framework-agnostic architecture powered by tokens, prompts, and build-time generation

## 🌌 Why It Exists

Most design systems today assume manual integration and runtime rendering. This project takes a different approach:

- It assumes AI agents (e.g., OpenAI, Anthropic, Cursor, Continue) are available to resolve components
- It embraces build-time code generation, not runtime behavior
- It positions the design system as a **source of intent**, not final implementation

This opens the door to:

- **Fully customizable output per framework**
- **Lighter, faster packages** without unnecessary runtime overhead
- **Composable, portable UI logic** that fits into modern AI-augmented workflows

## 📄 Key Concepts

- **Declarative Components**: Placeholder components like `<Button />` that represent UI intent
- **AI Prompts + Generators**: Structured guidance for build agents to generate framework-specific output
- **Tokens and Themes**: Provided as versioned packages, ready to be consumed at compile time
- **No Runtime Styling**: All visual output is determined at build time
- **Runtime-Aware Theming**: While components are generated at build time, theme application and mode switching (e.g., light/dark) remain runtime concerns
- **AI-Integrated Philosophy**: This system is designed for AI agents, not manual developer assembly

## 📃 Learn More

To learn more about how to use this system locally, including how to integrate AI agents or inspect declarative usage, see [`/docs/local-development.md`](./docs/local-development.md).

Additional materials and a link to the full Medium story will be added here when published.
