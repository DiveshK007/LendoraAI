"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoanService = exports.simulateLoanService = void 0;
const agents_1 = require("@lendora/agents");
const contracts_1 = require("@lendora/contracts");
const simulateLoanService = async (data) => {
    const { amount, collateral } = data;
    // Call Agents
    const risk = (0, agents_1.calculateRisk)(data);
    const negotiation = (0, agents_1.negotiate)(data);
    // Compute Health Factor
    const healthFactor = collateral / amount;
    return {
        riskScore: risk.riskScore,
        riskCategory: risk.category,
        optimizedAmount: negotiation.optimizedLoanAmount,
        healthFactor
    };
};
exports.simulateLoanService = simulateLoanService;
const createLoanService = async (data) => {
    const { amount, collateral, address } = data;
    if (!amount || !collateral || !address) {
        throw new Error("Invalid input");
    }
    const tx = (0, contracts_1.createLoanOnChain)({ amount, collateral, address });
    return {
        txHash: tx.txHash
    };
};
exports.createLoanService = createLoanService;
