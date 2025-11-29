export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

export const sleep = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export * from './types';
