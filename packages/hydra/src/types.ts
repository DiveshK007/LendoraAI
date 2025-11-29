export type UTxO = Record<string, any>; // Placeholder for complex UTxO structure

// Server Output Messages
export interface Greetings {
    tag: 'Greetings';
    me: {
        party: { vkey: string };
        vkey: string;
    };
}

export interface HeadIsInitializing {
    tag: 'HeadIsInitializing';
    headId: string;
    parties: { vkey: string }[];
}

export interface HeadIsOpen {
    tag: 'HeadIsOpen';
    headId: string;
    utxo: UTxO;
}

export interface HeadIsClosed {
    tag: 'HeadIsClosed';
    headId: string;
    snapshotNumber: number;
    contestationDeadline: string;
}

export interface HeadIsAborted {
    tag: 'HeadIsAborted';
    headId: string;
}

export interface HeadIsFinalized {
    tag: 'HeadIsFinalized';
    headId: string;
    utxo: UTxO;
}

export interface TxValid {
    tag: 'TxValid';
    headId: string;
    transaction: any;
}

export interface TxInvalid {
    tag: 'TxInvalid';
    headId: string;
    utxo: UTxO;
    transaction: any;
    validationError: any;
}

export interface SnapshotConfirmed {
    tag: 'SnapshotConfirmed';
    headId: string;
    snapshot: {
        snapshotNumber: number;
        utxo: UTxO;
        confirmedTransactions: any[];
    };
    signature: string;
}

export interface PeerConnected {
    tag: 'PeerConnected';
    peer: string;
}

export interface PeerDisconnected {
    tag: 'PeerDisconnected';
    peer: string;
}

export interface CommandFailed {
    tag: 'CommandFailed';
    clientInput: ClientInput;
}

export interface PostTxOnChainFailed {
    tag: 'PostTxOnChainFailed';
    postTxError: any;
}

export type ServerOutput =
    | Greetings
    | HeadIsInitializing
    | HeadIsOpen
    | HeadIsClosed
    | HeadIsAborted
    | HeadIsFinalized
    | TxValid
    | TxInvalid
    | SnapshotConfirmed
    | PeerConnected
    | PeerDisconnected
    | CommandFailed
    | PostTxOnChainFailed;

// Client Input Messages
export interface Init {
    tag: 'Init';
    contestationPeriod: number; // in seconds
}

export interface Abort {
    tag: 'Abort';
}

export interface Commit {
    tag: 'Commit';
    utxo: UTxO;
}

export interface NewTx {
    tag: 'NewTx';
    transaction: any; // CBOR hex
}

export interface GetUTxO {
    tag: 'GetUTxO';
}

export interface Close {
    tag: 'Close';
}

export interface Fanout {
    tag: 'Fanout';
}

export type ClientInput =
    | Init
    | Abort
    | Commit
    | NewTx
    | GetUTxO
    | Close
    | Fanout;

export enum HydraState {
    IDLE = 'IDLE',
    INITIALIZING = 'INITIALIZING',
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
    FANOUT_POSSIBLE = 'FANOUT_POSSIBLE',
    FINAL = 'FINAL'
}
