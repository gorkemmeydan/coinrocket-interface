import { CoinData } from '../../types/types';

export const convertToMarketItemsMap = (response: {
  data: {
    id: any;
    market_cap_rank: any;
    image: any;
    name: any;
    symbol: any;
    current_price: any;
    price_change_24h: any;
    price_change_percentage_24h: any;
    market_cap: any;
    sparkline_in_7d: { price: number[] };
  }[];
}): CoinData[] => {
  let coinMap: CoinData[] = [];

  response.data.forEach(
    (element: {
      id: any;
      market_cap_rank: any;
      image: any;
      name: any;
      symbol: any;
      current_price: any;
      price_change_24h: any;
      price_change_percentage_24h: any;
      market_cap: any;
      sparkline_in_7d: { price: number[] };
    }) => {
      const coin = {
        id: element.id,
        rank: element.market_cap_rank,
        logoUrl: element.image,
        name: element.name,
        symbol: element.symbol,
        price: element.current_price,
        price_change_24h: element.price_change_24h,
        change_24h: element.price_change_percentage_24h,
        market_cap: element.market_cap,
        price_7d: element.sparkline_in_7d.price,
        price_min_max: findMindMaxInNumArray(element.sparkline_in_7d.price),
      };
      coinMap.push(coin);
    }
  );

  return coinMap;
};

export const findMindMaxInNumArray = (numbers: number[]): number[] => {
  return [Math.min(...numbers), Math.max(...numbers)];
};
