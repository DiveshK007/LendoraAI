"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.negotiate = negotiate;
function negotiate(loanRequest) {
    return {
        optimizedLoanAmount: loanRequest.amount * 0.95,
        confidence: 0.85
    };
}
