import { negotiate, calculateRisk, LoanRequest } from '@lendora/agents';
import { createLoanOnChain } from '@lendora/contracts';

export const simulateLoanService = async (data: LoanRequest) => {
    const { amount, collateral } = data;

    // Call Agents
    const risk = calculateRisk(data);
    const negotiation = negotiate(data);

    // Compute Health Factor
    const healthFactor = collateral / amount;

    return {
        riskScore: risk.riskScore,
        riskCategory: risk.category,
        optimizedAmount: negotiation.optimizedLoanAmount,
        healthFactor
    };
};

export const createLoanService = async (data: any) => {
    const { amount, collateral, address } = data;

    if (!amount || !collateral || !address) {
        throw new Error("Invalid input");
    }

    const tx = createLoanOnChain({ amount, collateral, address });

    return {
        txHash: tx.txHash
    };
};
