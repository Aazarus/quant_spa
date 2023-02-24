import { MarketData } from 'src/app/models/market-data';
import { StockChartData } from '../models/stock-chart-data';

export function processStockChartData(stockData: MarketData[]): StockChartData {
  if (!!stockData && stockData.length > 0) {
    const categoryData: string[] = [];
    const values = [];
    const volumes = [];

    for (let i = 0; i < stockData.length; i++) {
      categoryData.push(stockData[i].date.toString().substring(0, 10));
      values.push([stockData[i].open, stockData[i].close, stockData[i].low, stockData[i].high]);
      volumes.push(stockData[i].volume);
    }

    return {
      categoryData,
      values,
      volumes
    };
  }
  return null;
}