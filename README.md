# 🖱️ React Hooks & State Lab

A collection of lightweight, type-safe React interactive components demonstrating modern state management patterns using **TypeScript** and React Hooks (`useState`, `useEffect`, `useReducer`).

---

## 📑 Table of Contents

- [Overview](#overview)
- [Components](#components)
  - [1. CursorPos (Pointer Tracker)](#1-cursorpos)
  - [2. Calculator (Reducer State Machine)](#2-calculator)
  - [3. Counter (Basic Reducer)](#3-counter)
- [TypeScript Definitions](#typescript-definitions)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [License](#license)

---

## 🎯 Overview

This project showcases practical examples of:
- **Event Listeners & Cleanup**: Managing global window events (`pointermove`) inside `useEffect`.
- **Complex State Transitions**: Handling multi-step workflows (arithmetic calculations) with `useReducer` and discriminated union types.
- **Type Safety**: Utilizing TypeScript's exhaustive checks (`never` type) to ensure full action coverage in reducers.

---

## 🧩 Components

### 1. `CursorPos`
An interactive pointer tracking component.
- **Features**:
  - Subscribes to window `pointermove` events and cleans up on unmount.
  - Formats live `(x, y)` coordinate readouts to 1 decimal place using monospace alignment.
  - Renders a custom emoji cursor (`🖱️`) that smoothly follows user movement via CSS `transform`.
- **Hooks used**: `useState`, `useEffect`

---

### 2. `Calculator`
A mini arithmetic calculator powered by a reducer state machine.
- **Features**:
  - Supports numeric input (`1`, `2`, `3`), basic operations (`+`, `-`), equals evaluation, and reset (`C`).
  - Implements **Exhaustive Type Checking** via `const _exhaustive: never = action;` to catch unhandled action types at compile time.
- **Hooks used**: `useReducer`

---

### 3. `Counter`
A reducer-driven counter component.
- **Features**:
  - Initialized with a default value of `100`.
  - Dispatches `increment` and `decrement` actions.
  - Demonstrates a clean, simple `useReducer` implementation for numerical state.
- **Hooks used**: `useReducer`

---

## 🏷️ TypeScript Definitions

The components rely on the following types (expected in `src/types.ts`):

```typescript
// types.ts

// --- Calculator Types ---
export type State = {
  display: number;
  operand: number | null;
  op: '+' | '-' | null;
};

export type Action =
  | { type: 'digit'; value: number }
  | { type: 'op'; op: '+' | '-' }
  | { type: 'equals' }
  | { type: 'clear' };

// --- Counter Types ---
export type CountOp = 
  | { type: 'increment' } 
  | { type: 'decrement' };
