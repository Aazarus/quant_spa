export default interface Stock {
    id:number,
    ticker: string,
    price: number,
    holdStock: boolean
}

export function defaultStocks(): Stock[] {
    return [
        {
          id: 1,
          ticker: "AAPL",
          price: 207.48,
          holdStock: true
        },
        {
          id: 2,
          ticker: "AMZN",
          price: 1165.53,
          holdStock: false
        },
        {
          id: 3,
          ticker: "GOOG",
          price: 1057.79,
          holdStock: true
        },
        {
          id: 4,
          ticker: "IBM",
          price: 115.48,
          holdStock: false
        },
        {
          id: 5,
          ticker: "MSFT",
          price: 106.16,
          holdStock: true
        }
      ];
}