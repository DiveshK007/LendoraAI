# Lendora AI – Agent System Specification

The system uses two agents:

---

# 1. NegotiatorAgent

Goal:
- Improve loan terms for user
- Compute optimized amount
- Estimate confidence

Mock Logic (V1):
optimizedAmount = request.amount * 0.95
confidence = 0.85

---

# 2. RiskAdvisorAgent

Goal:
- Evaluate borrower/loan risk
- Produce riskScore (0–100)
- Classify category: LOW / MEDIUM / HIGH

Mock Logic (V1):
score = random(0,100)

Category:
0–33   → HIGH  
34–66  → MEDIUM  
67–100 → LOW

---

# Final Integration Format Returned by Backend

{
  "riskScore": number,
  "riskCategory": string,
  "optimizedAmount": number,
  "healthFactor": number
}
