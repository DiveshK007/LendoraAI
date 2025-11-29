# Lendora AI – System Architecture

Lendora AI is a decentralized lending platform built on Cardano, enhanced with AI-driven agents for loan negotiation and borrower risk evaluation.

This monorepo contains:
- Frontend (Next.js)
- Backend API (Express + TypeScript)
- AI Agents (TypeScript modules)
- Smart Contracts (Aiken)
- Shared utilities

---

## 🧩 High-Level Architecture

User → Frontend → Backend → Agents + Contracts → Cardano

### 1. Frontend (apps/web)
- Built with Next.js + TypeScript.
- Handles wallet connection, loan creation UI, dashboards.

### 2. Backend (apps/backend)
- Express REST API.
- Performs loan simulations, risk scoring, calls agents.
- Will later integrate with cardano-serialization-lib.

### 3. Agents (packages/agents)
- NegotiatorAgent → Optimizes loan terms.
- RiskAdvisorAgent → Assigns risk score & risk category.
- Modular, replaceable, mock first → real later.

### 4. Smart Contracts (packages/contracts)
- Aiken contracts for:
  - Loan creation
  - Collateral locking
  - Liquidation logic
- Includes TS wrappers for backend.

---

## 🔁 Request Lifecycle

1. User submits loan request (UI)
2. Frontend calls backend `/loans/simulate`
3. Backend:
   - Runs RiskAdvisorAgent
   - Runs NegotiatorAgent
   - Computes collateral requirements
4. Backend returns optimized loan offer
5. User accepts → contract interaction is triggered
6. Contract locks collateral + mints debt token

---

## 📦 Folder Structure (Monorepo)

apps/
web/       → Next.js
backend/   → Express API

packages/
agents/    → AI Modules
contracts/ → Aiken
utils/     → Shared Helpers

docs/
ARCHITECTURE.md
API_SPEC.md
AGENTS.md
CONTRACTS.md

---

## 🎯 MVP Goal

A working end-to-end flow:
- User enters a borrow request
- Agents optimize & score
- Backend returns recommended loan
- UI shows parameters
- Contract interaction mocked for now
