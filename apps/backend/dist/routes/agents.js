"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agentController_1 = require("../controllers/agentController");
const validation_1 = require("../middleware/validation");
const router = (0, express_1.Router)();
router.post('/risk', validation_1.validateLoanRequest, agentController_1.getRiskScore);
router.post('/negotiate', validation_1.validateLoanRequest, agentController_1.getNegotiation);
exports.default = router;
