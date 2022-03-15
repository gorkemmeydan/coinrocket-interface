import { COINTRANSACTION_REMOVE_ENDPOINT } from '../../config';
import axiosInstance from '../../lib/axios';

interface RemoveTransactionFromCoinProps {
  email: string;
  coinName: string;
  id: number;
}

export const removeTransactionFromCoin = async ({
  email,
  coinName,
  id,
}: RemoveTransactionFromCoinProps) => {
  try {
    await axiosInstance.delete(COINTRANSACTION_REMOVE_ENDPOINT, {
      data: { email: email, coinName: coinName, id: id },
    });
    return true;
  } catch (err) {
    console.log('Remove transaction from coin error ', err);
    return false;
  }
};
