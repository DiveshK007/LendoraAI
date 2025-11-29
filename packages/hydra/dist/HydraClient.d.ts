import { EventEmitter } from 'events';
import { HydraState, UTxO } from './types';
export declare class HydraClient extends EventEmitter {
    private ws;
    private url;
    private state;
    private headId;
    constructor(url: string);
    connect(): void;
    disconnect(): void;
    getState(): HydraState;
    getHeadId(): string | null;
    init(contestationPeriod: number): Promise<void>;
    commit(utxo: UTxO): Promise<void>;
    newTx(transaction: any): Promise<void>;
    closeHead(): Promise<void>;
    fanout(): Promise<void>;
    private send;
    private handleMessage;
}
