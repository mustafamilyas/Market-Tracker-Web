// this code should be generated by some kind of tools
// like swagger-codegen
export interface PriceChange {
  pair: string;
  latestPrice: string;
  day: string | null;
  week: string | null;
  month: string | null;
  year: string | null;
}

export interface SupportedCurrencyGroup {
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: string;
  wallet: SupportedCurrency[];
}

export interface SupportedCurrency {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: string;
  blockchainName: string;
  logo: string;
}
