# Lendora AI – Smart Contract Specification (Aiken)

Goal:
Create three Aiken modules.

---

# 1. loan_contract.ak

Handles:
- creating a loan
- storing principal
- storing borrower address
- storing collateral reference

Inputs:
{
  borrower: Address,
  amount: Int,
  collateral: Int
}

---

# 2. collateral_contract.ak

Handles:
- locking ADA
- unlocking upon repayment
- returning failure if under-collateralized

---

# 3. liquidation_contract.ak

Handles:
- liquidating collateral if health factor < threshold

Formula:
healthFactor = collateralValue / loanValue

If < 1.1 → liquidation

---

# Mock Implementation (V1)

All contract interactions will be mocked inside backend to:
return { txHash: "mock_hash" }

Later versions will use cardano-serialization-lib.
