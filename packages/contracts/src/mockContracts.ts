export const createLoanOnChain = (params: any) => {
    return {
        txHash: "mock_tx_hash_loan_" + Date.now().toString()
    };
};

export const lockCollateralOnChain = (params: any) => {
    return {
        txHash: "mock_tx_hash_collateral_" + Date.now().toString()
    };
};
