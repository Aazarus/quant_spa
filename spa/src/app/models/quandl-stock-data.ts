export interface QuandlStockData {
  ticker: string;
  date?: Date,
  open?: number;
  high?: number;
  low?: number;
  close?: number;
  volume?: number;
  exDividend?: number;
  splitRatio?: number;
  openAdj?: number;
  highAdj?: number;
  lowAdj?: number;
  closeAdj?: number;
  volumeAdj?: number;
}