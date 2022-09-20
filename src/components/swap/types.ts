export interface IToken {
  address: string;
  chainId: number;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
}

export interface ICurrency {
  amount?: number;
  balance?: number;
  selected?: IToken | {};
}

export type ICurrencySide = "base" | "quote";
