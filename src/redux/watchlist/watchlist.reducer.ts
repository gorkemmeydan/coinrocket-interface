import { Reducer } from 'redux';

import WatchlistActionTypes, { WatchlistState } from './watchlist.types';
import { addCoinToWatchlist, removeCoinFromWatchlist } from './watchlist.utils';

const INITIAL_STATE: WatchlistState = {
  watched_coins: [],
  coins: [],
  loading: false,
  error: undefined,
};

const watchlistReducer: Reducer<WatchlistState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case WatchlistActionTypes.FETCH_WATCHLIST_START:
    case WatchlistActionTypes.FETCH_WATCHLIST_COINS_START:
    case WatchlistActionTypes.ADD_WATCHLIST_START:
    case WatchlistActionTypes.REMOVE_WATCHLIST_START:
      return {
        ...state,
        loading: true,
      };
    case WatchlistActionTypes.FETCH_WATCHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        watched_coins: action.payload,
      };
    case WatchlistActionTypes.FETCH_WATCHLIST_COINS_SUCCESS:
      return {
        ...state,
        loading: false,
        coins: action.payload,
      };
    case WatchlistActionTypes.ADD_WATCHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        watched_coins: [
          ...addCoinToWatchlist(state.watched_coins, action.payload),
        ],
      };
    case WatchlistActionTypes.REMOVE_WATCHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        watched_coins: [
          ...removeCoinFromWatchlist(state.watched_coins, action.payload),
        ],
      };
    case WatchlistActionTypes.FETCH_WATCHLIST_FAILURE:
    case WatchlistActionTypes.FETCH_WATCHLIST_COINS_FAILURE:
    case WatchlistActionTypes.ADD_WATCHLIST_FAILURE:
    case WatchlistActionTypes.REMOVE_WATCHLIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default watchlistReducer;
