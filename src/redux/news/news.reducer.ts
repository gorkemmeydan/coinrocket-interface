import { Reducer } from 'redux';

import NewsActionTypes, { NewsState } from './news.types';

const INITIAL_STATE: NewsState = {
  news: [],
  loading: false,
  error: undefined,
};

const newsReducer: Reducer<NewsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS_START:
      return {
        ...state,
        loading: true,
      };
    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload,
      };
    case NewsActionTypes.FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
