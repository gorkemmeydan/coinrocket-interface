import { CoinData } from 'types';

export type customOptionType = {
  value: string;
  label: string;
  id: string;
};

const coinDataToSearch = (coinData: CoinData[]): customOptionType[] => {
  let searchArray: customOptionType[] = [];

  coinData.forEach((coin) => {
    searchArray.push({ value: coin.symbol, label: coin.name, id: coin.id });
  });

  return searchArray;
};

export default coinDataToSearch;
