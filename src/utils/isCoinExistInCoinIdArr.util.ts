import { CoinData } from '../types/types';

const isCoinExistInCoinIdArr = (
  coins: string[],
  selectedCoin: string
): boolean => {
  if (coins.indexOf(selectedCoin) > -1) {
    return true;
  } else {
    return false;
  }
};

export default isCoinExistInCoinIdArr;
