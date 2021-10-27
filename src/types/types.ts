export interface CoinData {
  rank: number;
  logoUrl: string;
  name: string;
  symbol: string;
  price: number;
  change_1h: number;
  change_24h: number;
  change_7d: number;
  market_cap: number;
  price_7d: object[];
  price_min_max: number[];
}

export interface MarketData {
  marketData: CoinData[];
}

export interface CoinHoldings {
  hasData: boolean;
  isHidden: boolean;
  totalMoney: number;
  totalAmount: number;
}

export interface UserPortfolioItem {
  data: CoinData;
  holdings: CoinHoldings;
}

export interface UserPortfolio {
  portfolio: UserPortfolioItem[];
}
