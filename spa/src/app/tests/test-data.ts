import { IndexData } from 'src/app/models/index-data';
import { Symbol } from 'src/app/models/symbol';
import { Price } from 'src/app/models/price';

export var symbolTestData: Symbol[] = [
    { ticker: "IBM", region: "US", sector: "Information Technology", symbolId: 1 },
    { ticker: "AAPL", region: "US", sector: "Information Technology", symbolId: 2 },
    { ticker: "HMN", region: "US", sector: "Financials", symbolId: 3 },
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

export var symbolAndPriceTestData: Symbol =
{
    ticker: symbolTestData[0].ticker, 
    region: symbolTestData[0].region, 
    sector: symbolTestData[0].sector, 
    symbolId: symbolTestData[0].symbolId, 
    prices: priceTestData
};

export var indexDataTestData: IndexData[] = [
    {
        id: 1,
        date: new Date('10/03/2008'),
        igSpread: 193.39,
        hySpread: 776.82,
        spx: 1273.37,
        vix: 29.38
    },
    {
        id: 2,
        date: new Date('11/03/2008'),
        igSpread: 176.39,
        hySpread: 866.82,
        spx: 1353.37,
        vix: 27.38
    },
    {
        id: 3,
        date: new Date('12/03/2008'),
        igSpread: 177.39,
        hySpread: 928.82,
        spx: 1753.37,
        vix: 24.38
    },
    {
        id: 4,
        date: new Date('13/03/2008'),
        igSpread: 167.39,
        hySpread: 628.82,
        spx: 1853.37,
        vix: 31.38
    },
];