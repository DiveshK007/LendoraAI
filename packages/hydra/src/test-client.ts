import { WebSocketServer } from 'ws';
import { HydraClient, HydraState } from './index';

// 1. Start Mock Server
const wss = new WebSocketServer({ port: 4001 });
console.log('Mock Hydra Node running on port 4001');

wss.on('connection', (ws) => {
    console.log('Client connected to Mock Node');

    // Send Greetings
    ws.send(JSON.stringify({
        tag: 'Greetings',
        me: { party: { vkey: 'mock-vkey' }, vkey: 'mock-vkey' }
    }));

    ws.on('message', (data) => {
        const msg = JSON.parse(data.toString());
        console.log('Received command:', msg.tag);

        if (msg.tag === 'Init') {
            // Simulate Init -> HeadIsInitializing
            ws.send(JSON.stringify({
                tag: 'HeadIsInitializing',
                headId: 'mock-head-id',
                parties: [{ vkey: 'mock-vkey' }]
            }));

            // Simulate Commit -> HeadIsOpen (skipping commit step for brevity in test)
            setTimeout(() => {
                ws.send(JSON.stringify({
                    tag: 'HeadIsOpen',
                    headId: 'mock-head-id',
                    utxo: {}
                }));
            }, 500);
        }
    });
});

// 2. Test Client
async function runTest() {
    const client = new HydraClient('ws://localhost:4001');

    client.on('connected', () => console.log('Client: Connected'));
    client.on('greetings', () => console.log('Client: Received Greetings'));
    client.on('headInitializing', () => console.log('Client: Head Initializing'));
    client.on('headOpen', () => {
        console.log('Client: Head Open');
        console.log('Final State:', client.getState());

        if (client.getState() === HydraState.OPEN) {
            console.log('TEST PASSED');
            process.exit(0);
        } else {
            console.log('TEST FAILED');
            process.exit(1);
        }
    });

    client.connect();

    // Wait for connection then Init
    setTimeout(async () => {
        console.log('Client: Sending Init...');
        await client.init(10);
    }, 1000);
}

runTest();
