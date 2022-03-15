export interface CoinData {
  id: string;
  rank: number;
  logoUrl: string;
  name: string;
  symbol: string;
  price: string;
  price_change_24h: number;
  change_24h: number;
  market_cap: number;
  price_7d: number[];
  price_min_max: number[];
}

export interface MarketData {
  marketData: CoinData[];
}

export interface CoinHoldings {
  isHidden: boolean;
  totalMoney: number;
  totalAmount: number;
}

export interface CoinTransactionsItem {
  id: number;
  coinName: string;
  quantity: number;
  transactionDate: Date;
  positive: boolean;
}
export interface UserPortfolioItem {
  id: number;
  coinName: string;
  lastWeeksHoldings: number[];
  coinTransactions: CoinTransactionsItem[];
  coinData?: CoinData;
  graphData?: number[];
}

export interface NewsItem {
  id: string;
  title: string;
  published_at: string;
  content: string;
  newsUrl: string;
}

export interface News {
  news: NewsItem[];
}

export interface TrendingCoin {
  id: number;
  imageSrc: string;
  coinName: string;
  coinSymbol: string;
}

export interface SignUpData {
  fullName: string;
  email: string;
  password: string;
}

export interface WatchlistItem {
  id: number;
  coinName: string;
  coinData?: CoinData;
}
export interface UserHoldings {
  id: number;
  email: string;
  portfolio: UserPortfolioItem[];
  watchList: WatchlistItem[];
  lastWeekGraphData?: number[];
}
