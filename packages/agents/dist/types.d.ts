export * from '@lendora/utils';
export interface LoanRequest {
    amount: number;
    collateral: number;
    tenure?: number;
    address?: string;
}
export interface RiskResult {
    riskScore: number;
    category: string;
}
export interface NegotiationResult {
    optimizedLoanAmount: number;
    confidence: number;
}
