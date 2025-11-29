import { Request, Response, NextFunction } from 'express';
import { simulateLoanService, createLoanService } from '../services/loanService';

export const simulateLoan = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await simulateLoanService(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

export const createLoan = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await createLoanService(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
};
