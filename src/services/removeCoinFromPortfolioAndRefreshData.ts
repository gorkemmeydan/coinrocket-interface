import { notifyError } from '@lib/toast';

import { UserHoldings } from 'types';

import { removeFromPortfolio } from './api/removeCoinFromPortfolio';
import getUserHoldingsAndParseData from './getUserHoldingsAndParseData';

interface Props {
  coinName: string;
  holdings: UserHoldings | undefined;
  setHoldings: (holdings?: UserHoldings | undefined) => void;
}

const removeCoinFromPortfolioAndRefreshData = async ({
  coinName,
  holdings,
  setHoldings,
}: Props) => {
  let email = holdings?.email ? holdings.email : '';
  await removeFromPortfolio({ email, coinName }).then(async (result) => {
    if (result) {
      await getUserHoldingsAndParseData({ email, setHoldings });
    } else {
      notifyError();
    }
  });
};

export default removeCoinFromPortfolioAndRefreshData;
