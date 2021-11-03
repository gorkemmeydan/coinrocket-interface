import { Reducer } from 'redux';

import MarketActionTypes, { MarketState } from './market.types';

const INITIAL_STATE: MarketState = {
  coins: [],
  loading: false,
  error: undefined,
};

const marketReducer: Reducer<MarketState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MarketActionTypes.FETCH_MARKET_START:
      return {
        ...state,
        loading: true,
      };
    case MarketActionTypes.FETCH_MARKET_SUCCESS:
      return {
        ...state,
        loading: false,
        coins: action.payload,
      };
    case MarketActionTypes.FETCH_MARKET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default marketReducer;
