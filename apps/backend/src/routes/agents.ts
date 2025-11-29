import { Router } from 'express';
import { getRiskScore, getNegotiation } from '../controllers/agentController';
import { validateLoanRequest } from '../middleware/validation';

const router = Router();

router.post('/risk', validateLoanRequest, getRiskScore);
router.post('/negotiate', validateLoanRequest, getNegotiation);

export default router;
