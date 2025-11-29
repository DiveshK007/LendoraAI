"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lockCollateralOnChain = exports.createLoanOnChain = void 0;
const createLoanOnChain = (params) => {
    return {
        txHash: "mock_tx_hash_loan_" + Date.now().toString()
    };
};
exports.createLoanOnChain = createLoanOnChain;
const lockCollateralOnChain = (params) => {
    return {
        txHash: "mock_tx_hash_collateral_" + Date.now().toString()
    };
};
exports.lockCollateralOnChain = lockCollateralOnChain;
