import { HydraClient, HydraState } from '@lendora/hydra';

// Singleton instance
let hydraClient: HydraClient | null = null;

export const getHydraClient = (): HydraClient => {
    if (!hydraClient) {
        // In a real app, this URL would come from env vars
        const HYDRA_URL = process.env.HYDRA_URL || 'ws://localhost:4001';
        hydraClient = new HydraClient(HYDRA_URL);

        // Setup default event listeners
        hydraClient.on('connected', () => console.log('Hydra Service: Connected'));
        hydraClient.on('disconnected', () => console.log('Hydra Service: Disconnected'));
        hydraClient.on('error', (err) => console.error('Hydra Service Error:', err));

        hydraClient.connect();
    }
    return hydraClient;
};

export const getHydraState = (): HydraState => {
    const client = getHydraClient();
    return client.getState();
};

export const initHead = async (contestationPeriod: number = 60) => {
    const client = getHydraClient();
    await client.init(contestationPeriod);
};
