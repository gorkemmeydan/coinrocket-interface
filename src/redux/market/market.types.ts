import { CoinData } from '../../types/types';

export enum MarketActionTypes {
  FETCH_MARKET_START = 'FETCH_MARKET_START',
  FETCH_MARKET_SUCCESS = 'FETCH_MARKET_SUCCESS',
  FETCH_MARKET_FAILURE = 'FETCH_MARKET_FAILURE',
}

export interface MarketState {
  readonly coins: CoinData[];
  readonly loading: boolean;
  readonly error?: string;
}

export default MarketActionTypes;
