import NewsActionTypes, { NewsState } from './news.types';

import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { NewsItem } from '../../types/types';
import { convertToNewsItemMap } from './news.utils';

const axios = require('axios');

export type AppThunk = ActionCreator<
  ThunkAction<void, NewsState, null, Action<string>>
>;

export const fetchNewsStart = () => ({
  type: NewsActionTypes.FETCH_NEWS_START,
});

export const fetchNewsSuccess = (newsItemMap: NewsItem[]) => ({
  type: NewsActionTypes.FETCH_NEWS_SUCCESS,
  payload: newsItemMap,
});

export const fetchNewsFailure = (error: any) => ({
  type: NewsActionTypes.FETCH_NEWS_FAILURE,
  payload: error,
});

export const fetchNewsStartAsync: AppThunk = () => {
  return (dispatch: Dispatch<Action>) => {
    axios
      .get('https://data.messari.io/api/v1/news')
      .then(function (response: { data: { data: any[] } }) {
        const newsItemsMap = convertToNewsItemMap(response);
        return dispatch(fetchNewsSuccess(newsItemsMap));
      })
      .catch(function (error: { message: any }) {
        return dispatch(fetchNewsFailure(error.message));
      });
  };
};
