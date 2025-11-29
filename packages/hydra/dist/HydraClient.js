"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HydraClient = void 0;
const ws_1 = __importDefault(require("ws"));
const events_1 = require("events");
const types_1 = require("./types");
class HydraClient extends events_1.EventEmitter {
    constructor(url) {
        super();
        this.ws = null;
        this.state = types_1.HydraState.IDLE;
        this.headId = null;
        this.url = url;
    }
    connect() {
        try {
            this.ws = new ws_1.default(this.url);
            this.ws.on('open', () => {
                console.log('Hydra WebSocket connected');
                this.emit('connected');
            });
            this.ws.on('message', (data) => {
                try {
                    const message = JSON.parse(data.toString());
                    this.handleMessage(message);
                }
                catch (error) {
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
        }
        catch (error) {
            console.error('Failed to connect to Hydra node:', error);
            this.emit('error', error);
        }
    }
    disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }
    getState() {
        return this.state;
    }
    getHeadId() {
        return this.headId;
    }
    // Client Commands
    async init(contestationPeriod) {
        this.send({ tag: 'Init', contestationPeriod });
    }
    async commit(utxo) {
        this.send({ tag: 'Commit', utxo });
    }
    async newTx(transaction) {
        this.send({ tag: 'NewTx', transaction });
    }
    async closeHead() {
        this.send({ tag: 'Close' });
    }
    async fanout() {
        this.send({ tag: 'Fanout' });
    }
    send(command) {
        if (this.ws && this.ws.readyState === ws_1.default.OPEN) {
            this.ws.send(JSON.stringify(command));
        }
        else {
            console.warn('Cannot send command, WebSocket not open');
        }
    }
    handleMessage(message) {
        this.emit('message', message);
        switch (message.tag) {
            case 'Greetings':
                this.emit('greetings', message);
                break;
            case 'HeadIsInitializing':
                this.state = types_1.HydraState.INITIALIZING;
                this.headId = message.headId;
                this.emit('headInitializing', message);
                break;
            case 'HeadIsOpen':
                this.state = types_1.HydraState.OPEN;
                this.headId = message.headId;
                this.emit('headOpen', message);
                break;
            case 'HeadIsClosed':
                this.state = types_1.HydraState.CLOSED;
                this.headId = message.headId;
                this.emit('headClosed', message);
                break;
            case 'HeadIsFinalized':
                this.state = types_1.HydraState.FINAL;
                this.headId = message.headId;
                this.emit('headFinalized', message);
                break;
            case 'HeadIsAborted':
                this.state = types_1.HydraState.IDLE;
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
exports.HydraClient = HydraClient;
