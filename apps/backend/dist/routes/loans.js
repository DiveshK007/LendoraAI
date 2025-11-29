"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loanController_1 = require("../controllers/loanController");
const validation_1 = require("../middleware/validation");
const router = (0, express_1.Router)();
router.post('/simulate', validation_1.validateLoanRequest, loanController_1.simulateLoan);
router.post('/create', validation_1.validateCreateLoan, loanController_1.createLoan);
exports.default = router;
