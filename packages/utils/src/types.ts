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

export interface Offer {
    id: string;
    lenderId: string;
    amount: number;
    interestRate: number;
    duration: number;
}

export interface Agent {
    id: string;
    role: 'BORROWER' | 'LENDER';
    evaluateOffer(offer: Offer): Promise<boolean>;
    proposeOffer(request: any): Promise<Offer>;
}
