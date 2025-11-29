import { Request, Response, NextFunction } from 'express';

export const validateLoanRequest = (req: Request, res: Response, next: NextFunction) => {
    const { amount, collateral } = req.body;
    if (!amount || !collateral || isNaN(amount) || isNaN(collateral)) {
        return res.status(400).json({ error: 'Invalid amount or collateral' });
    }
    next();
};

export const validateCreateLoan = (req: Request, res: Response, next: NextFunction) => {
    const { amount, collateral, address } = req.body;
    if (!amount || !collateral || !address) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    next();
};
