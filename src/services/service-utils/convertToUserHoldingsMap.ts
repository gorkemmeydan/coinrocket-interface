import {
  UserHoldings,
  UserPortfolioItem,
  WatchlistItem,
} from '../../types/types';

export const convertToUserHoldingsMap = (response: {
  data: UserHoldings;
}): UserHoldings => {
  let returnedHoldings: UserHoldings = {
    id: -1,
    email: '',
    portfolio: [],
    watchList: [],
    lastWeekGraphData: [],
  };

  returnedHoldings.id = response.data.id;
  returnedHoldings.email = response.data.email;

  for (let i = 0; i < response.data.watchList.length; i++) {
    let temp: WatchlistItem = {
      id: response.data.watchList[i].id,
      coinName: response.data.watchList[i].coinName,
    };
    returnedHoldings.watchList.push(temp);
  }

  for (let i = 0; i < response.data.portfolio.length; i++) {
    let temp: UserPortfolioItem = {
      id: response.data.portfolio[i].id,
      coinName: response.data.portfolio[i].coinName,
      lastWeeksHoldings: response.data.portfolio[i].lastWeeksHoldings,
      coinTransactions: [],
    };

    for (
      let j = 0;
      j < response.data.portfolio[i].coinTransactions.length;
      j++
    ) {
      temp.coinTransactions.push(
        response.data.portfolio[i].coinTransactions[j]
      );
    }

    returnedHoldings.portfolio.push(temp);
  }

  return returnedHoldings;
};
