import { StockData } from "./stock-data";

export interface StockOutput {
  status: string;
  stock: StockData;
  totalDataPoints: number;
}