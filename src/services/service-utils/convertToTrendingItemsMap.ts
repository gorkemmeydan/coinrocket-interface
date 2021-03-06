import { TrendingCoin } from 'types';

export const convertToTrendingItemsMap = (response: {
  data: { coins: any[] };
}): TrendingCoin[] => {
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
