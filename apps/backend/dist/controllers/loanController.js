"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoan = exports.simulateLoan = void 0;
const loanService_1 = require("../services/loanService");
const simulateLoan = async (req, res, next) => {
    try {
        const result = await (0, loanService_1.simulateLoanService)(req.body);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.simulateLoan = simulateLoan;
const createLoan = async (req, res, next) => {
    try {
        const result = await (0, loanService_1.createLoanService)(req.body);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.createLoan = createLoan;
