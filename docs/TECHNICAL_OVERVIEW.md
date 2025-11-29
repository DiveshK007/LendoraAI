# Lendora AI - Technical Overview

## System Architecture

Lendora AI is a decentralized lending platform powered by AI agents and Cardano smart contracts.

### Modules

1.  **Apps**
    *   `apps/web`: Next.js 14 frontend (App Router). Handles user interface, loan simulation, and dashboard.
    *   `apps/backend`: Express.js backend. Orchestrates AI agents and interacts with smart contracts.

2.  **Packages**
    *   `packages/agents`: AI modules for Risk Assessment and Negotiation.
    *   `packages/contracts`: Aiken smart contract wrappers (currently mocked).
    *   `packages/utils`: Shared TypeScript types and utility functions.

### Data Flow

1.  **Loan Simulation**:
    *   User submits loan request on Web UI.
    *   Backend receives request -> Calls `RiskAdvisorAgent` -> Calls `NegotiatorAgent`.
    *   Returns optimized loan terms and risk score.

2.  **Loan Creation**:
    *   User approves terms.
    *   Backend calls `createLoanOnChain` (Mock Contract).
    *   Returns transaction hash.

## Running the Project

### Prerequisites
*   Node.js v18+
*   PNPM

### Setup

```bash
pnpm install
```

### Development

```bash
# Start all apps (frontend + backend)
pnpm dev
```

### Testing

```bash
# Run backend tests
cd apps/backend
pnpm test
```
