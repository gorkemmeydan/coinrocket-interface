import { CoinData } from '../../types/types';

export const addCoinToWatchlist = (
  watchlist: string[],
  itemToAdd: string
): string[] => {
  watchlist.push(itemToAdd);
  return watchlist;
};

export const removeCoinFromWatchlist = (
  watchlist: string[],
  itemToRemove: string
) => {
  const index = watchlist.indexOf(itemToRemove);
  if (index > -1) {
    watchlist.splice(index, 1);
  }
  return watchlist;
};

export const convertToMarketItemsMap = (response: {
  data: {
    id: any;
    market_cap_rank: any;
    image: any;
    name: any;
    symbol: any;
    current_price: any;
    price_change_24h: any;
    price_change_percentage_1h_in_currency: any;
    price_change_percentage_24h_in_currency: any;
    price_change_percentage_7d_in_currency: any;
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
      price_change_percentage_1h_in_currency: any;
      price_change_percentage_24h_in_currency: any;
      price_change_percentage_7d_in_currency: any;
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
        change_1h: element.price_change_percentage_1h_in_currency,
        change_24h: element.price_change_percentage_24h_in_currency,
        change_7d: element.price_change_percentage_7d_in_currency,
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
