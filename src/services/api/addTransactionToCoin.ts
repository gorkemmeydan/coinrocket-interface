import { COINTRANSACTION_ADD_ENDPOINT } from '../../config';
import axiosInstance from '../../lib/axios';

interface AddToPortfolioProps {
  email: string;
  coinName: string;
  isPositive: boolean;
  quantity: number;
  date: number;
}

export const addTransactionToCoin = async ({
  email,
  coinName,
  isPositive,
  quantity,
  date,
}: AddToPortfolioProps) => {
  try {
    await axiosInstance.post(COINTRANSACTION_ADD_ENDPOINT, {
      email: email,
      coinName: coinName,
      isPositive: isPositive,
      quantity: quantity,
      unixTransactionDate: date,
    });
    return true;
  } catch (err) {
    console.log('Add transaction to coin error ', err);
    return false;
  }
};
