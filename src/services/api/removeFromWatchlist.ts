import { WATCHLIST_REMOVE_ENDPOINT } from '../../config';
import axiosInstance from '../../lib/axios';

interface RemoveFromWatchlistProps {
  email: string;
  coinName: string;
}

export const removeFromWatchlist = async ({
  email,
  coinName,
}: RemoveFromWatchlistProps) => {
  try {
    await axiosInstance.delete(WATCHLIST_REMOVE_ENDPOINT, {
      data: { email: email, coinName: coinName },
    });
    return true;
  } catch (err) {
    console.log('Remove from watchlist error ', err);
    return false;
  }
};
