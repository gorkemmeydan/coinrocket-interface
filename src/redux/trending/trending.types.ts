import { TrendingCoin } from '../../types/types';

export enum TrendingActionTypes {
  FETCH_TRENDING_START = 'FETCH_TRENDING_START',
  FETCH_TRENDING_SUCCESS = 'FETCH_TRENDING_SUCCESS',
  FETCH_TRENDING_FAILURE = 'FETCH_TRENDING_FAILURE',
}

export interface TrendingState {
  readonly trendingCoins: TrendingCoin[];
  readonly loading: boolean;
  readonly error?: string;
}

export default TrendingActionTypes;
