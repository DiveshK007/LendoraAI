"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LenderAgent = void 0;
class LenderAgent {
    constructor(id, minInterestRate) {
        this.role = 'LENDER';
        this.id = id;
        this.minInterestRate = minInterestRate;
    }
    async evaluateOffer(offer) {
        return offer.interestRate >= this.minInterestRate;
    }
    async proposeOffer(request) {
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
exports.LenderAgent = LenderAgent;
