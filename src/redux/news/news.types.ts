import { NewsItem } from '../../types/types';

export enum NewsActionTypes {
  FETCH_NEWS_START = 'FETCH_NEWS_START',
  FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE',
}

export interface NewsState {
  readonly news: NewsItem[];
  readonly loading: boolean;
  readonly error?: string;
}

export default NewsActionTypes;
