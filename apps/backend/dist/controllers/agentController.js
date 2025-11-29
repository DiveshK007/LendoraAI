"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNegotiation = exports.getRiskScore = void 0;
const agents_1 = require("@lendora/agents");
const getRiskScore = async (req, res, next) => {
    try {
        const result = (0, agents_1.calculateRisk)(req.body);
        res.json({
            score: result.riskScore,
            category: result.category
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getRiskScore = getRiskScore;
const getNegotiation = async (req, res, next) => {
    try {
        const result = (0, agents_1.negotiate)(req.body);
        res.json({
            optimizedAmount: result.optimizedLoanAmount,
            confidence: result.confidence
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getNegotiation = getNegotiation;
