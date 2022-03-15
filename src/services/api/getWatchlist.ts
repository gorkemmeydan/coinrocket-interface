import { WATCHLIST_GET_ENDPOINT } from '../../config';
import axiosInstance from '../../lib/axios';
import { WatchlistItem } from '../../types/types';
import { convertToWatchlistItemsMap } from '../service-utils/convertToWatchlistItemsMap';

interface IWatchlistResponse {
  data: WatchlistItem[];
}

export const getWatchlist = async (email: string | undefined) => {
  try {
    const response: IWatchlistResponse = await axiosInstance.get(
      WATCHLIST_GET_ENDPOINT,
      {
        params: {
          email: email,
        },
      }
    );
    return convertToWatchlistItemsMap(response);
  } catch (err) {
    console.log('Get Watchlist error ', err);
    return [];
  }
};
