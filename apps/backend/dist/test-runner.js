"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const API_URL = 'http://localhost:3001';
async function runTests() {
    console.log('Running tests...');
    // Test 1: Simulate Loan (Valid)
    try {
        console.log('Test 1: Simulate Loan (Valid)');
        const res = await (0, node_fetch_1.default)(`${API_URL}/loans/simulate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 1000, collateral: 1500, tenure: 12 })
        });
        const data = await res.json();
        if (res.status === 200 && data.riskScore) {
            console.log('✅ Passed');
        }
        else {
            console.error('❌ Failed', data);
        }
    }
    catch (e) {
        console.error('❌ Failed with error', e);
    }
    // Test 2: Simulate Loan (Invalid)
    try {
        console.log('Test 2: Simulate Loan (Invalid)');
        const res = await (0, node_fetch_1.default)(`${API_URL}/loans/simulate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: "invalid", collateral: 1500 })
        });
        const data = await res.json();
        if (res.status === 400 && data.error) {
            console.log('✅ Passed');
        }
        else {
            console.error('❌ Failed', data);
        }
    }
    catch (e) {
        console.error('❌ Failed with error', e);
    }
    // Test 3: Create Loan (Valid)
    try {
        console.log('Test 3: Create Loan (Valid)');
        const res = await (0, node_fetch_1.default)(`${API_URL}/loans/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 1000, collateral: 1500, address: "addr1..." })
        });
        const data = await res.json();
        if (res.status === 200 && data.txHash) {
            console.log('✅ Passed');
        }
        else {
            console.error('❌ Failed', data);
        }
    }
    catch (e) {
        console.error('❌ Failed with error', e);
    }
}
runTests();
