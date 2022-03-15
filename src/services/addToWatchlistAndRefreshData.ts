import { notifyError } from '../lib/toast';
import { UserHoldings } from '../types/types';
import { addToWatchlist } from './api/addToWatchlist';
import { getCoinsBySearchVal } from './api/getCoinsBySearchVal';
import { getWatchlist } from './api/getWatchlist';
import extractCoinNamesFromHoldings from './service-utils/extractCoinNamesFromHoldings';

import _ from 'lodash';

interface Props {
  coinName: string;
  holdings: UserHoldings | undefined;
  setHoldings: (holdings?: UserHoldings | undefined) => void;
}

const addToWatchlistAndRefreshData = async ({
  coinName,
  holdings,
  setHoldings,
}: Props) => {
  let email = holdings?.email ? holdings.email : '';
  await addToWatchlist({ email, coinName }).then(async (result) => {
    if (result) {
      let cloneHoldings = _.cloneDeep(holdings);
      await getWatchlist(email).then(async (watchListItems) => {
        if (cloneHoldings) cloneHoldings.watchList = watchListItems;
        let watchListSearchval = extractCoinNamesFromHoldings(watchListItems);
        if (watchListSearchval && watchListSearchval.length > 0) {
          await getCoinsBySearchVal(watchListSearchval).then(
            (watchlistDataResponse) => {
              for (let i = 0; i < watchListItems.length; i++) {
                let idx = watchListItems.findIndex(
                  (x) => x.coinName === watchlistDataResponse[i].id
                );
                if (cloneHoldings) {
                  cloneHoldings.watchList[idx].coinData =
                    watchlistDataResponse[i];
                }
              }
            }
          );
        }
      });

      setHoldings(cloneHoldings);
    } else {
      notifyError();
    }
  });
};

export default addToWatchlistAndRefreshData;
