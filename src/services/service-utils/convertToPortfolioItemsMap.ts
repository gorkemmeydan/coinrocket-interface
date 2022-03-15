import { UserPortfolioItem } from '../../types/types';

export const convertToPortfolioItemsMap = (response: {
  data: UserPortfolioItem[];
}): UserPortfolioItem[] => {
  let returnedPortfolio: UserPortfolioItem[] = [];

  console.log(response);

  for (let i = 0; i < response.data.length; i++) {
    let temp: UserPortfolioItem = {
      id: response.data[i].id,
      coinName: response.data[i].coinName,
      lastWeeksHoldings: response.data[i].lastWeeksHoldings,
      coinTransactions: [],
    };

    for (let j = 0; j < response.data[i].coinTransactions.length; j++) {
      temp.coinTransactions.push(response.data[i].coinTransactions[j]);
    }

    returnedPortfolio.push(temp);
  }

  return returnedPortfolio;
};
