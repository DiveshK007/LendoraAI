import WebSocket from 'ws';
import { EventEmitter } from 'events';
import {
    ClientInput,
    HydraState,
    ServerOutput,
    UTxO
} from './types';

export class HydraClient extends EventEmitter {
    private ws: WebSocket | null = null;
    private url: string;
    private state: HydraState = HydraState.IDLE;
    private headId: string | null = null;

    constructor(url: string) {
        super();
        this.url = url;
    }

    public connect(): void {
        try {
            this.ws = new WebSocket(this.url);

            this.ws.on('open', () => {
                console.log('Hydra WebSocket connected');
                this.emit('connected');
            });

            this.ws.on('message', (data: WebSocket.Data) => {
                try {
                    const message: ServerOutput = JSON.parse(data.toString());
                    this.handleMessage(message);
                } catch (error) {
                    console.error('Failed to parse Hydra message:', error);
                }
            });

            this.ws.on('close', () => {
                console.log('Hydra WebSocket closed');
                this.emit('disconnected');
                // Simple reconnection logic could go here
            });

            this.ws.on('error', (error) => {
                console.error('Hydra WebSocket error:', error);
                this.emit('error', error);
            });
        } catch (error) {
            console.error('Failed to connect to Hydra node:', error);
            this.emit('error', error);
        }
    }

    public disconnect(): void {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }

    public getState(): HydraState {
        return this.state;
    }

    public getHeadId(): string | null {
        return this.headId;
    }

    // Client Commands
    public async init(contestationPeriod: number): Promise<void> {
        this.send({ tag: 'Init', contestationPeriod });
    }

    public async commit(utxo: UTxO): Promise<void> {
        this.send({ tag: 'Commit', utxo });
    }

    public async newTx(transaction: any): Promise<void> {
        this.send({ tag: 'NewTx', transaction });
    }

    public async closeHead(): Promise<void> {
        this.send({ tag: 'Close' });
    }

    public async fanout(): Promise<void> {
        this.send({ tag: 'Fanout' });
    }

    private send(command: ClientInput): void {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(command));
        } else {
            console.warn('Cannot send command, WebSocket not open');
        }
    }

    private handleMessage(message: ServerOutput): void {
        this.emit('message', message);

        switch (message.tag) {
            case 'Greetings':
                this.emit('greetings', message);
                break;
            case 'HeadIsInitializing':
                this.state = HydraState.INITIALIZING;
                this.headId = message.headId;
                this.emit('headInitializing', message);
                break;
            case 'HeadIsOpen':
                this.state = HydraState.OPEN;
                this.headId = message.headId;
                this.emit('headOpen', message);
                break;
            case 'HeadIsClosed':
                this.state = HydraState.CLOSED;
                this.headId = message.headId;
                this.emit('headClosed', message);
                break;
            case 'HeadIsFinalized':
                this.state = HydraState.FINAL;
                this.headId = message.headId;
                this.emit('headFinalized', message);
                break;
            case 'HeadIsAborted':
                this.state = HydraState.IDLE;
                this.headId = null;
                this.emit('headAborted', message);
                break;
            case 'TxValid':
                this.emit('txValid', message);
                break;
            case 'TxInvalid':
                this.emit('txInvalid', message);
                break;
            case 'SnapshotConfirmed':
                this.emit('snapshotConfirmed', message);
                break;
        }
    }
}
