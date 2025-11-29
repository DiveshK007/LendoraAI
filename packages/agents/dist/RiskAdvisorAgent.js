"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRisk = calculateRisk;
function calculateRisk(loanRequest) {
    const score = Math.floor(Math.random() * 101);
    let category = "MEDIUM";
    if (score <= 33)
        category = "HIGH";
    else if (score >= 67)
        category = "LOW";
    return {
        riskScore: score,
        category
    };
}
