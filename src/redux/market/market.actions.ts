import MarketActionTypes, { MarketState } from './market.types';

import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { CoinData } from '../../types/types';
import { convertToMarketItemsMap } from './market.utils';

const axios = require('axios');

export type AppThunk = ActionCreator<
  ThunkAction<void, MarketState, null, Action<string>>
>;

export const fetchMarketStart = () => ({
  type: MarketActionTypes.FETCH_MARKET_START,
});

export const fetchMarketSuccess = (marketCoinsMap: CoinData[]) => ({
  type: MarketActionTypes.FETCH_MARKET_SUCCESS,
  payload: marketCoinsMap,
});

export const fetchMarketFailure = (error: any) => ({
  type: MarketActionTypes.FETCH_MARKET_FAILURE,
  payload: error,
});

export const fetchMarketStartAsync: AppThunk = () => {
  return (dispatch: Dispatch<Action>) => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d'
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
        const marketItemsMap = convertToMarketItemsMap(response);
        return dispatch(fetchMarketSuccess(marketItemsMap));
      })
      .catch(function (error: { message: any }) {
        return dispatch(fetchMarketFailure(error.message));
      });
  };
};
