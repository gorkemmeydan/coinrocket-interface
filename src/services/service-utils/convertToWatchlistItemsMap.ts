import { WatchlistItem } from '../../types/types';

export const convertToWatchlistItemsMap = (response: {
  data: WatchlistItem[];
}): WatchlistItem[] => {
  let returnedWatchlist: WatchlistItem[] = [];

  for (let i = 0; i < response.data.length; i++) {
    let temp: WatchlistItem = {
      id: response.data[i].id,
      coinName: response.data[i].coinName,
    };
    returnedWatchlist.push(temp);
  }

  return returnedWatchlist;
};
