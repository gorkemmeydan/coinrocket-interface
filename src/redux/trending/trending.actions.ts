import TrendingActionTypes, { TrendingState } from './trending.types';

import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { convertToTrendingItemsMap } from './trending.utils';
import { TrendingCoin } from '../../types/types';

const axios = require('axios');

export type AppThunk = ActionCreator<
  ThunkAction<void, TrendingState, null, Action<string>>
>;

export const fetchTrendingStart = () => ({
  type: TrendingActionTypes.FETCH_TRENDING_START,
});

export const fetchTrendingSuccess = (trendingItemsMap: TrendingCoin[]) => ({
  type: TrendingActionTypes.FETCH_TRENDING_SUCCESS,
  payload: trendingItemsMap,
});

export const fetchTrendingFailure = (error: any) => ({
  type: TrendingActionTypes.FETCH_TRENDING_FAILURE,
  payload: error,
});

export const fetchTrendingStartAsync: AppThunk = () => {
  return (dispatch: Dispatch<Action>) => {
    axios
      .get('https://api.coingecko.com/api/v3/search/trending')
      .then(function (response: { data: { coins: any[] } }) {
        const trendingItemsMap = convertToTrendingItemsMap(response);
        return dispatch(fetchTrendingSuccess(trendingItemsMap));
      })
      .catch(function (error: { message: any }) {
        return dispatch(fetchTrendingFailure(error.message));
      });
  };
};
