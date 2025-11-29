"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowerAgent = void 0;
class BorrowerAgent {
    constructor(id, maxInterestRate) {
        this.role = 'BORROWER';
        this.id = id;
        this.maxInterestRate = maxInterestRate;
    }
    async evaluateOffer(offer) {
        return offer.interestRate <= this.maxInterestRate;
    }
    async proposeOffer(request) {
        throw new Error("Borrowers don't propose initial offers, they request.");
    }
    async counterOffer(offer) {
        // Counter with slightly lower rate
        const rate = offer.interestRate * 0.9;
        return {
            ...offer,
            interestRate: parseFloat(rate.toFixed(2))
        };
    }
}
exports.BorrowerAgent = BorrowerAgent;
