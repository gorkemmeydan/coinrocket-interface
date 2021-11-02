import { Reducer } from 'redux';

import TrendingActionTypes, { TrendingState } from './trending.types';

const INITIAL_STATE: TrendingState = {
  trendingCoins: [],
  loading: false,
  error: undefined,
};

const trendingReducer: Reducer<TrendingState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case TrendingActionTypes.FETCH_TRENDING_START:
      return {
        ...state,
        loading: true,
      };
    case TrendingActionTypes.FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        trendingCoins: action.payload,
      };
    case TrendingActionTypes.FETCH_TRENDING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default trendingReducer;
