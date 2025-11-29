import { Agent, Offer } from './types';

export class BorrowerAgent implements Agent {
    id: string;
    role: 'BORROWER' = 'BORROWER';
    maxInterestRate: number;

    constructor(id: string, maxInterestRate: number) {
        this.id = id;
        this.maxInterestRate = maxInterestRate;
    }

    async evaluateOffer(offer: Offer): Promise<boolean> {
        return offer.interestRate <= this.maxInterestRate;
    }

    async proposeOffer(request: any): Promise<Offer> {
        throw new Error("Borrowers don't propose initial offers, they request.");
    }

    async counterOffer(offer: Offer): Promise<Offer> {
        // Counter with slightly lower rate
        const rate = offer.interestRate * 0.9;
        return {
            ...offer,
            interestRate: parseFloat(rate.toFixed(2))
        }
    }
}
