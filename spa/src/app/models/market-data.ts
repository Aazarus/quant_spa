export interface MarketData {
    ticker: string,
    date?: Date,
    open?: number,
    high?: number,
    low?: number,
    close?: number,
    adjustedClose?: number,
    volume?: number,
};