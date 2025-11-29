import { Request, Response, NextFunction } from 'express';
import { calculateRisk, negotiate } from '@lendora/agents';

export const getRiskScore = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = calculateRisk(req.body);
        res.json({
            score: result.riskScore,
            category: result.category
        });
    } catch (error) {
        next(error);
    }
};

export const getNegotiation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = negotiate(req.body);
        res.json({
            optimizedAmount: result.optimizedLoanAmount,
            confidence: result.confidence
        });
    } catch (error) {
        next(error);
    }
};
