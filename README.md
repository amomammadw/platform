# Platform

## Packages and Applications

### `apps/website`

This is the main web application built with Next.js. It serves as the front-end for the platform, utilizing React and TailwindCSS for styling.

### `packages/common/auth`

A shared library for authentication logic. It provides reusable utilities and configurations for handling user authentication across the platform.

### `packages/config`

Contains shared configuration files and settings for the workspace. This includes ESLint, Prettier, and other project-wide configurations.

### `packages/font`

A library for managing custom fonts and typography. It ensures consistent font usage across all applications in the workspace.

### `packages/tailwind`

A library for TailwindCSS configurations and utilities. It centralizes Tailwind settings to maintain a consistent design system.

### `packages/ui`

A component library for reusable UI elements. It includes buttons, modals, and other components used across the platform.

### `packages/utils`

A utility library with helper functions and shared logic. It provides common utilities to avoid code duplication across projects.

## Tech Stack

### Frontend

- **Next.js**: Framework for building server-rendered React applications.
- **React**: Library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for styling.

### Backend

- **Nx**: Monorepo tool for managing and building projects efficiently.

### Libraries

- **Zustand**: State management library for React.
- **TanStack React Query**: Data-fetching and state management for server state.
- **Headless UI**: Accessible UI components for React.

### Build Tools

- **Vite**: Fast build tool for modern web projects.
- **SWC**: JavaScript/TypeScript compiler for fast builds.

### Testing

- **Jest**: Testing framework for unit and integration tests.
- **Testing Library**: Utilities for testing React components.

### Linting and Formatting

- **ESLint**: Linter for maintaining code quality.
- **Prettier**: Code formatter for consistent styling.

### Package Management

- **pnpm**: Fast and efficient package manager for monorepos.
