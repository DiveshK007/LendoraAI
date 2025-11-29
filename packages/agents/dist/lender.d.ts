import { Agent, Offer } from './types';
export declare class LenderAgent implements Agent {
    id: string;
    role: 'LENDER';
    minInterestRate: number;
    constructor(id: string, minInterestRate: number);
    evaluateOffer(offer: Offer): Promise<boolean>;
    proposeOffer(request: any): Promise<Offer>;
}
