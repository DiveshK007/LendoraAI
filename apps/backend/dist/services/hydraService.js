"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initHead = exports.getHydraState = exports.getHydraClient = void 0;
const hydra_1 = require("@lendora/hydra");
// Singleton instance
let hydraClient = null;
const getHydraClient = () => {
    if (!hydraClient) {
        // In a real app, this URL would come from env vars
        const HYDRA_URL = process.env.HYDRA_URL || 'ws://localhost:4001';
        hydraClient = new hydra_1.HydraClient(HYDRA_URL);
        // Setup default event listeners
        hydraClient.on('connected', () => console.log('Hydra Service: Connected'));
        hydraClient.on('disconnected', () => console.log('Hydra Service: Disconnected'));
        hydraClient.on('error', (err) => console.error('Hydra Service Error:', err));
        hydraClient.connect();
    }
    return hydraClient;
};
exports.getHydraClient = getHydraClient;
const getHydraState = () => {
    const client = (0, exports.getHydraClient)();
    return client.getState();
};
exports.getHydraState = getHydraState;
const initHead = async (contestationPeriod = 60) => {
    const client = (0, exports.getHydraClient)();
    await client.init(contestationPeriod);
};
exports.initHead = initHead;
