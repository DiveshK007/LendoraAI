export function calculateRisk(loanRequest: any) {
    return {
        riskScore: Math.random() * 100,
        category: "MEDIUM"
    };
}
