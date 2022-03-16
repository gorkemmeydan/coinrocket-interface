import { PORTFOLIO_ADD_ENDPOINT } from 'config';
import axiosInstance from '@lib/axios';

interface AddToPortfolioProps {
  email: string;
  coinName: string;
}

export const addCoinToPortfolio = async ({
  email,
  coinName,
}: AddToPortfolioProps) => {
  try {
    await axiosInstance.post(PORTFOLIO_ADD_ENDPOINT, {
      email: email,
      coinName: coinName,
    });
    return true;
  } catch (err) {
    console.log('Add coin to portfolio error ', err);
    return false;
  }
};
