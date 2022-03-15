import { notifyError } from '../lib/toast';
import { UserHoldings } from '../types/types';
import { removeFromWatchlist } from './api/removeFromWatchlist';
import _ from 'lodash';

interface Props {
  coinName: string;
  holdings: UserHoldings | undefined;
  setHoldings: (holdings?: UserHoldings | undefined) => void;
}

const removeFromWatchlistAndClearData = async ({
  coinName,
  holdings,
  setHoldings,
}: Props) => {
  let email = holdings?.email ? holdings.email : '';
  await removeFromWatchlist({ email, coinName }).then((result) => {
    if (result) {
      let cloneHoldings = _.cloneDeep(holdings);
      if (cloneHoldings) {
        for (let i = 0; i < cloneHoldings?.watchList.length; i++) {
          let idx = cloneHoldings?.watchList.findIndex(
            (x) => x.coinName === coinName
          );
          if (cloneHoldings && idx >= 0) {
            cloneHoldings.watchList.splice(idx, 1);
          }
        }
      }
      setHoldings(cloneHoldings);
    } else {
      notifyError();
    }
  });
};

export default removeFromWatchlistAndClearData;
