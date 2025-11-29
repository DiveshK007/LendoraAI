import { Agent, Offer } from './types';
export declare class BorrowerAgent implements Agent {
    id: string;
    role: 'BORROWER';
    maxInterestRate: number;
    constructor(id: string, maxInterestRate: number);
    evaluateOffer(offer: Offer): Promise<boolean>;
    proposeOffer(request: any): Promise<Offer>;
    counterOffer(offer: Offer): Promise<Offer>;
}
