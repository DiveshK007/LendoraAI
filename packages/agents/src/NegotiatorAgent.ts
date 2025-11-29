import { LoanRequest, NegotiationResult } from './types';

export function negotiate(loanRequest: LoanRequest): NegotiationResult {
    return {
        optimizedLoanAmount: loanRequest.amount * 0.95,
        confidence: 0.85
    };
}
