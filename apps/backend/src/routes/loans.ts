import { Router } from 'express';
import { simulateLoan, createLoan } from '../controllers/loanController';
import { validateLoanRequest, validateCreateLoan } from '../middleware/validation';

const router = Router();

router.post('/simulate', validateLoanRequest, simulateLoan);
router.post('/create', validateCreateLoan, createLoan);

export default router;
