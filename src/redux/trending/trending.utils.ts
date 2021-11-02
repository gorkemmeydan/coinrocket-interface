import { TrendingCoin } from '../../types/types';

export const convertToTrendingItemsMap = (response): TrendingCoin[] => {
  let coinMap: TrendingCoin[] = [];

  response.data.coins.forEach((element) => {
    const coin = {
      id: element.item.coin_id,
      imageSrc: element.item.large,
      coinName: element.item.name,
      coinSymbol: element.item.symbol,
    };
    coinMap.push(coin);
  });

  return coinMap;
};
