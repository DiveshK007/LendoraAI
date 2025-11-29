"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateLoan = exports.validateLoanRequest = void 0;
const validateLoanRequest = (req, res, next) => {
    const { amount, collateral } = req.body;
    if (!amount || !collateral || isNaN(amount) || isNaN(collateral)) {
        return res.status(400).json({ error: 'Invalid amount or collateral' });
    }
    next();
};
exports.validateLoanRequest = validateLoanRequest;
const validateCreateLoan = (req, res, next) => {
    const { amount, collateral, address } = req.body;
    if (!amount || !collateral || !address) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    next();
};
exports.validateCreateLoan = validateCreateLoan;
