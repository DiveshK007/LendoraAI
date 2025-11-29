// liquidation_contract.ak
// Handles:
// - liquidating collateral if health factor < threshold
// Formula: healthFactor = collateralValue / loanValue
// If < 1.1 -> liquidation
