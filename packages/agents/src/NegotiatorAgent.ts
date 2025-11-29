export function negotiate(loanRequest: any) {
    return {
        optimizedLoanAmount: loanRequest.amount * 0.95,
        confidence: 0.88
    };
}
