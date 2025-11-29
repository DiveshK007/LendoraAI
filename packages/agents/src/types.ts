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
