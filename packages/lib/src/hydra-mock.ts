export type HydraStatus = 'IDLE' | 'OPENING' | 'OPEN' | 'CLOSING' | 'CLOSED';

export class HydraHead {
    status: HydraStatus = 'IDLE';
    participants: string[] = [];

    constructor(participants: string[]) {
        this.participants = participants;
    }

    async open(): Promise<void> {
        this.status = 'OPENING';
        console.log('Hydra Head: Opening...');
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
        this.status = 'OPEN';
        console.log('Hydra Head: Open and ready.');
    }

    async close(): Promise<void> {
        this.status = 'CLOSING';
        console.log('Hydra Head: Closing...');
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
        this.status = 'CLOSED';
        console.log('Hydra Head: Closed. Final state settled on L1.');
    }

    async submitTransaction(tx: any): Promise<void> {
        if (this.status !== 'OPEN') {
            throw new Error('Hydra Head is not open');
        }
        // Simulate instant confirmation
        console.log('Hydra Head: Transaction confirmed off-chain:', tx);
    }
}
