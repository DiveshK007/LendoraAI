import { Agent, Offer } from './types';

export class LenderAgent implements Agent {
    id: string;
    role: 'LENDER' = 'LENDER';
    minInterestRate: number;

    constructor(id: string, minInterestRate: number) {
        this.id = id;
        this.minInterestRate = minInterestRate;
    }

    async evaluateOffer(offer: Offer): Promise<boolean> {
        return offer.interestRate >= this.minInterestRate;
    }

    async proposeOffer(request: any): Promise<Offer> {
        // Simple logic: offer slightly above min rate
        const rate = this.minInterestRate + Math.random() * 2;
        return {
            id: Math.random().toString(36).substring(7),
            lenderId: this.id,
            amount: request.amount,
            interestRate: parseFloat(rate.toFixed(2)),
            duration: request.duration
        };
    }
}
