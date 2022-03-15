import { notifyError } from '../lib/toast';
import { UserHoldings } from '../types/types';

import { addCoinToPortfolio } from './api/addCoinToPortfolio';
import getUserHoldingsAndParseData from './getUserHoldingsAndParseData';

interface Props {
  coinName: string;
  holdings: UserHoldings | undefined;
  setHoldings: (holdings?: UserHoldings | undefined) => void;
}

const addCoinToPortfolioAndRefreshData = async ({
  coinName,
  holdings,
  setHoldings,
}: Props) => {
  let email = holdings?.email ? holdings.email : '';
  await addCoinToPortfolio({ email, coinName }).then(async (result) => {
    if (result) {
      await getUserHoldingsAndParseData({ email, setHoldings });
    } else {
      notifyError();
    }
  });
};

export default addCoinToPortfolioAndRefreshData;
