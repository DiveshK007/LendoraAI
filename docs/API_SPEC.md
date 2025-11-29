# Lendora AI – Backend API Specification

The backend exposes REST endpoints for data, loan simulation, and agent operations.

Base URL: `http://localhost:3001`

---

## 🟦 GET /

Health check for backend.

Response:
{
  "status": "ok"
}

---

## 🟦 POST /loans/simulate

Simulates a loan using risk scoring + negotiation.

Request:
{
  "amount": number,
  "collateral": number,
  "currency": "ADA",
  "tenure": number
}

Backend performs:
- Risk score (RiskAdvisorAgent)
- Optimized amount (NegotiatorAgent)
- Calculates loan health factor

Response:
{
  "riskScore": number,
  "riskCategory": "LOW" | "MEDIUM" | "HIGH",
  "optimizedAmount": number,
  "healthFactor": number
}

---

## 🟦 POST /loans/create

Mocks contract call to lock collateral.

Request:
{
  "amount": number,
  "collateral": number,
  "address": string
}

Response:
{
  "txHash": "mock_tx_hash_123"
}

---

## 🟦 POST /agent/risk

Runs only the RiskAdvisorAgent.

Request:
{
  "amount": number,
  "collateral": number,
  "tenure": number
}

Response:
{
  "score": number,
  "category": string
}

---

## 🟦 POST /agent/negotiate

Runs only the NegotiatorAgent.

Request:
{
  "amount": number,
  "collateral": number
}

Response:
{
  "optimizedAmount": number,
  "confidence": number
}
