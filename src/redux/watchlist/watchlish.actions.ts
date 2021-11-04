import WatchlistActionTypes, { WatchlistState } from './watchlist.types';

import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { CoinData } from '../../types/types';
import { convertToMarketItemsMap } from './watchlist.utils';

const axios = require('axios');

export type AppThunk = ActionCreator<
  ThunkAction<void, WatchlistState, null, Action<string>>
>;

// WATCHLIST
export const fetchWatchlistStart = () => ({
  type: WatchlistActionTypes.FETCH_WATCHLIST_START,
});

export const fetchWatchlistSuccess = (watchlistMap: string[]) => ({
  type: WatchlistActionTypes.FETCH_WATCHLIST_SUCCESS,
  payload: watchlistMap,
});

export const fetchWatchlistFailure = (error: any) => ({
  type: WatchlistActionTypes.FETCH_WATCHLIST_FAILURE,
  payload: error,
});

// TODO: get from backend api
export const fetchWatchlistStartAsync: AppThunk = () => {
  return (dispatch: Dispatch<Action>) => {
    // dispatch(fetchWatchlistCoinsStart());

    axios
      .get('')
      .then(function (response: { data: { coins: any[] } }) {
        // const trendingItemsMap = convertToTrendingItemsMap(response);
        // return dispatch(fetchTrendingSuccess(response));
      })
      .catch(function (error: { message: any }) {
        // return dispatch(fetchTrendingFailure(error.message));
      });
    dispatch(fetchWatchlistSuccess(['bitcoin', 'solana']));
  };
};

// WATCHLIST COINS
export const fetchWatchlistCoinsStart = () => ({
  type: WatchlistActionTypes.FETCH_WATCHLIST_COINS_START,
});

export const fetchWatchlistCoinsSuccess = (coinsMap: CoinData[]) => ({
  type: WatchlistActionTypes.FETCH_WATCHLIST_COINS_SUCCESS,
  payload: coinsMap,
});

export const fetchWatchlistCoinsFailure = (error: any) => ({
  type: WatchlistActionTypes.FETCH_WATCHLIST_COINS_FAILURE,
  payload: error,
});

export const fetchWatchlistCoinsStartAsync: AppThunk = (
  watchlist: string[]
) => {
  let searchVal = '';
  if (typeof watchlist !== 'undefined') {
    for (let i = 0; i < 3; i++) {
      const isEmpty = typeof watchlist[i] === 'undefined';
      if (!isEmpty) {
        if (i == 0) searchVal += watchlist;
        else searchVal += '%2C' + watchlist[i];
      }
    }
  }

  return (dispatch: Dispatch<Action>) => {
    if (searchVal != '') {
      dispatch(fetchWatchlistCoinsStart());

      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${searchVal}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        )
        .then(function (response: {
          data: {
            id: any;
            market_cap_rank: any;
            image: any;
            name: any;
            symbol: any;
            current_price: any;
            price_change_24h: any;
            price_change_percentage_1h_in_currency: any;
            price_change_percentage_24h_in_currency: any;
            price_change_percentage_7d_in_currency: any;
            market_cap: any;
            sparkline_in_7d: { price: number[] };
          }[];
        }) {
          const coinItemsMap = convertToMarketItemsMap(response);
          return dispatch(fetchWatchlistCoinsSuccess(coinItemsMap));
        })
        .catch(function (error: { message: any }) {
          return dispatch(fetchWatchlistCoinsFailure(error.message));
        });
    }
  };
};

// ADD
export const addWatchlistStart = () => ({
  type: WatchlistActionTypes.ADD_WATCHLIST_START,
});

export const addWatchlistSuccess = (coin_id: string) => ({
  type: WatchlistActionTypes.ADD_WATCHLIST_SUCCESS,
  payload: coin_id,
});

export const addWatchlistFailure = (error: any) => ({
  type: WatchlistActionTypes.ADD_WATCHLIST_FAILURE,
  payload: error,
});

// TODO: connect with backend api
export const addWatchlistStartAsync: AppThunk = (coin_id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(addWatchlistStart());

    axios
      .get('')
      .then(function (response: { data: { coins: any[] } }) {
        // const trendingItemsMap = convertToTrendingItemsMap(response);
        // return dispatch(fetchTrendingSuccess(response));
      })
      .catch(function (error: { message: any }) {
        // return dispatch(fetchTrendingFailure(error.message));
      });

    // TODO: always adds, connect to backed response and remove the below line
    dispatch(addWatchlistSuccess(coin_id));
  };
};

// REMOVE
export const removeWatchlistStart = () => ({
  type: WatchlistActionTypes.REMOVE_WATCHLIST_START,
});

export const removeWatchlistSuccess = (coin_id: string) => ({
  type: WatchlistActionTypes.REMOVE_WATCHLIST_SUCCESS,
  payload: coin_id,
});

export const removeWatchlistFailure = (error: any) => ({
  type: WatchlistActionTypes.REMOVE_WATCHLIST_FAILURE,
  payload: error,
});

// TODO: connect with backend api
export const removeWatchlistStartAsync: AppThunk = (coin_id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(removeWatchlistStart());

    axios
      .get('')
      .then(function (response: { data: { coins: any[] } }) {
        // const trendingItemsMap = convertToTrendingItemsMap(response);
        // return dispatch(fetchTrendingSuccess(response));
      })
      .catch(function (error: { message: any }) {
        // return dispatch(fetchTrendingFailure(error.message));
      });

    // TODO: always adds, connect to backed response and remove the below line
    dispatch(removeWatchlistSuccess(coin_id));
  };
};
