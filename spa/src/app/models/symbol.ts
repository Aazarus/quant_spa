import { Price } from "./price";

export interface Symbol {
    symbolId?: number,
    ticker?: string,
    region?: string,
    sector?: string,
    prices?: Price[]
}