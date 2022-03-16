import { UserHoldings } from 'types';
import { getCoinsBySearchVal } from './api/getCoinsBySearchVal';
import { getUserHoldings } from './api/getUserHoldings';
import constructGraphData from './service-utils/constructGraphData';
import extractCoinNamesFromHoldings from './service-utils/extractCoinNamesFromHoldings';

interface Props {
  email: string;
  setHoldings: (holdings?: UserHoldings | undefined) => void;
}

const getUserHoldingsAndParseData = async ({ email, setHoldings }: Props) => {
  await getUserHoldings(email).then(async (userHoldingsResponse) => {
    if (userHoldingsResponse.id !== -1) {
      let watchListSearchval = extractCoinNamesFromHoldings(
        userHoldingsResponse.watchList
      );
      if (watchListSearchval && watchListSearchval.length > 0) {
        await getCoinsBySearchVal(watchListSearchval).then(
          (watchlistDataResponse) => {
            for (let i = 0; i < watchlistDataResponse.length; i++) {
              let idx = userHoldingsResponse.watchList.findIndex(
                (x) => x.coinName === watchlistDataResponse[i].id
              );
              userHoldingsResponse.watchList[idx].coinData =
                watchlistDataResponse[i];
            }
          }
        );
      }

      let portfolioSearchval = extractCoinNamesFromHoldings(
        userHoldingsResponse.portfolio
      );
      if (portfolioSearchval && portfolioSearchval.length > 0) {
        await getCoinsBySearchVal(portfolioSearchval).then(
          (portfolioDataResponse) => {
            for (let i = 0; i < portfolioDataResponse.length; i++) {
              let idx = userHoldingsResponse.portfolio.findIndex(
                (x) => x.coinName === portfolioDataResponse[i].id
              );
              userHoldingsResponse.portfolio[idx].coinData =
                portfolioDataResponse[i];
              userHoldingsResponse.portfolio[idx].graphData =
                constructGraphData(
                  portfolioDataResponse[i].price_7d,
                  userHoldingsResponse.portfolio[idx].lastWeeksHoldings
                );
            }
          }
        );
      }

      let accumulatedGraphData: number[] = new Array(7).fill(0);
      for (let i = 0; i < userHoldingsResponse.portfolio.length; i++) {
        const currentPortolioItem = userHoldingsResponse.portfolio[i];
        for (let j = 0; j < 7; j++) {
          if (currentPortolioItem.graphData !== undefined) {
            const toBeAdded = currentPortolioItem.graphData[j]
              ? currentPortolioItem.graphData[j]
              : 0;
            accumulatedGraphData[j] = accumulatedGraphData[j] + toBeAdded;
          }
        }
      }

      userHoldingsResponse.lastWeekGraphData = accumulatedGraphData;
    }

    setHoldings(userHoldingsResponse);
  });
};

export default getUserHoldingsAndParseData;
