import { UserPortfolioItem, WatchlistItem } from '../../types/types';

const extractCoinNamesFromHoldings = (
  items: WatchlistItem[] | UserPortfolioItem[]
): string[] => {
  let result: string[] = [];
  items.forEach((item) => {
    result.push(item.coinName);
  });
  return result;
};

export default extractCoinNamesFromHoldings;
