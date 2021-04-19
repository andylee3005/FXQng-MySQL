
export class Stock {
    id: number | undefined;
    cid: number | undefined;
    symbol: string | undefined;
    currency: string | undefined;
    volume: number | undefined;
    price: number | undefined;
    currPrice: string | undefined;
    timePurchased: string | undefined;
    timeDate: number | undefined;

    constructor(cid: number, symbol: string, currency: string, volume: number, price: number) {
        this.cid = cid;
        this.symbol = symbol;
        this.currency = currency;
        this.volume = volume;
        this.price = price;
    }

}