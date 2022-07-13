import { IndexData } from 'src/app/models/index-data';
import { Symbol } from 'src/app/models/symbol';
import { Price } from 'src/app/models/price';
import { MarketData } from 'src/app/models/market-data';
import { MarketQuote } from 'src/app/models/market-quote';

export var symbolTestData: Symbol[] = [
    { ticker: "IBM", region: "US", sector: "Information Technology", symbolId: 1 },
    { ticker: "AAPL", region: "US", sector: "Information Technology", symbolId: 2 },
    { ticker: "HMN", region: "US", sector: "Financials", symbolId: 3 },
    { ticker: "IBM", region: "US", sector: "Financials", symbolId: 4 },
];

export var symbolPutTestData: Symbol[] = [
    { ticker: "IBM", region: "US", sector: "Information Technology", symbolId: 1 },
    { ticker: "AAPL", region: "US", sector: "Information Technology", symbolId: 2 },
    { ticker: "HMN", region: "US", sector: "Information Technology", symbolId: 3 },
    { ticker: "IBM", region: "US", sector: "Financials", symbolId: 4 },
];

export var priceTestData: Price[] = [
    {
        priceId: 1,
        symbolId: 1,
        date: new Date("2017-11-07"),
        open: 123.12,
        high: 124.10,
        low: 122.5,
        close: 124.02,
        closeAdj: 123.0,
        volume: 3102500
    },
    {
        priceId: 2,
        symbolId: 1,
        date: new Date("2017-11-08"),
        open: 111.02,
        high: 112.10,
        low: 110.5,
        close: 112.02,
        closeAdj: 111.0,
        volume: 4102500
    },
    {
        priceId: 3,
        symbolId: 1,
        date: new Date("2017-11-09"),
        open: 115.02,
        high: 117.10,
        low: 114.5,
        close: 116.02,
        closeAdj: 115.0,
        volume: 5102500
    },
];

export var symbolAndPriceTestData: Symbol[] =[
{
    ticker: symbolTestData[0].ticker, 
    region: symbolTestData[0].region, 
    sector: symbolTestData[0].sector, 
    symbolId: symbolTestData[0].symbolId, 
    prices: priceTestData
},
{
    ticker: symbolTestData[1].ticker, 
    region: symbolTestData[1].region, 
    sector: symbolTestData[1].sector, 
    symbolId: symbolTestData[1].symbolId, 
    prices: priceTestData
},
];

export var indexDataTestData: IndexData[] = [
    {
        id: 1,
        date: new Date('09/03/2008'),
        igSpread: 193.39,
        hySpread: 776.82,
        spx: 1273.37,
        vix: 29.38
    },
    {
        id: 2,
        date: new Date('10/03/2008'),
        igSpread: 176.39,
        hySpread: 866.82,
        spx: 1353.37,
        vix: 27.38
    },
    {
        id: 3,
        date: new Date('11/03/2008'),
        igSpread: 177.39,
        hySpread: 928.82,
        spx: 1753.37,
        vix: 24.38
    },
    {
        id: 4,
        date: new Date('12/03/2008'),
        igSpread: 167.39,
        hySpread: 628.82,
        spx: 1853.37,
        vix: 31.38
    },
];

export var yahooStockTestData: MarketData[] = [    
    {
        ticker: "IBM",
        date: getDate(-365),
        open: 123.321,
        high: 124.321,
        low: 122.021,
        close: 124.320,
        closeAdj: 124.0,
        volume: 32425284
    },
    {
        ticker: "IBM",
        date: getDate(-364),
        open: 124.320,
        high: 125.81,
        low: 122.021,
        close: 125.30,
        closeAdj: 125.0,
        volume: 32443284
    },
    {
        ticker: "IBM",
        date: getDate(-363),
        open: 125.30,
        high:125.481,
        low:123.021,
        close: 124.30,
        closeAdj: 124.0,
        volume: 31425284
    },
    {
        ticker: "IBM",
        date: getDate(-362),
        open: 124.30,
        high: 126.481,
        low: 122.021,
        close: 124.30,
        closeAdj: 123.5,
        volume: 41425284
    }
];

export var IexStockTestData = yahooStockTestData;

export var IexQuoteTestData: MarketQuote = {
    ticker: "IBM",
    open: 140.78,
    openTime: new Date(1657546201086),
    close: 140.99,
    closeTime: new Date(1657569596227),
    latestPrice: 141,
    latestTime: new Date("July 11, 2022"),
    latestUpdateTime: new Date(1657569602157),
    latestVolume: null,
    delayedPrice: null,
    delayedPriceTime: new Date(1657569599993),
    previousClose: 140.47,
    iexRealTimePrice: 140.99,
    iexRealTimeSize: 100,
    iexLastUpdated: new Date(1657569596227),
    iexBidPrice: 0,
    iexBidSize: 0,
    iexAskPrice: 0,
    iexAskSize: 0,
    change: 0.53,
    changePercent: 0.04435251961671668,
    marketCap: 126820380825,
    PeRatio: 22.89,
    week52High: 144.73,
    week52Low: 111.84,
    ytdChange: 0.0802814805155791
};

function getDate(addDays: number) {
    var date = new Date();
    date.setDate(date.getDate() + addDays);

    return date;
}