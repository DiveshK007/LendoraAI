export const formatDate = (date: Date) => date.toISOString();
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
