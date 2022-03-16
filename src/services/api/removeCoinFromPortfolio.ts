import { PORTFOLIO_REMOVE_ENDPOINT } from 'config';
import axiosInstance from '@lib/axios';

interface RemoveFromPortfolioProps {
  email: string;
  coinName: string;
}

export const removeFromPortfolio = async ({
  email,
  coinName,
}: RemoveFromPortfolioProps) => {
  try {
    await axiosInstance.delete(PORTFOLIO_REMOVE_ENDPOINT, {
      data: { email: email, coinName: coinName },
    });
    return true;
  } catch (err) {
    console.log('Remove from watchlist error ', err);
    return false;
  }
};
