import { WATCHLIST_ADD_ENDPOINT } from '../../config';
import axiosInstance from '../../lib/axios';

interface AddToWatchlistProps {
  email: string;
  coinName: string;
}

export const addToWatchlist = async ({
  email,
  coinName,
}: AddToWatchlistProps) => {
  try {
    await axiosInstance.post(WATCHLIST_ADD_ENDPOINT, {
      email: email,
      coinName: coinName,
    });
    return true;
  } catch (err) {
    console.log('Add to watchlist error ', err);
    return false;
  }
};
