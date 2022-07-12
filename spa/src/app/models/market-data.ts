export interface MarketData {
    ticker: string;
    date?: Date;
    open?: number;
    high?: number;
    low?: number;
    close?: number;
    closeAdj?: number;
    volume?: number;
};