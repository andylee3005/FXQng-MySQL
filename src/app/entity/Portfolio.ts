import { Stock } from "./Stock";

export class Portfolio {
    id: number;
    cid: number;
    pName: string;
    currency: string;
    updated: string;

    
    constructor(client_id: number, pName: string, currency: string) {
      this.cid = client_id;
      this.pName = pName;
      this.currency = currency;
    }
  }