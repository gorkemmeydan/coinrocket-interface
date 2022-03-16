import { notifyError } from '@lib/toast';

import { CoinData, UserHoldings } from 'types';

import { getMarketTop100 } from './api/getMarketTop100';
import { getMe } from './api/getMe';
import getUserHoldingsAndParseData from './getUserHoldingsAndParseData';

interface Props {
  setCoins: (coins?: CoinData[] | undefined) => void;
  setEmail: (email?: string | undefined) => void;
  setHoldingsLoading: (state: boolean) => void;
  setHoldings: (holdings?: UserHoldings | undefined) => void;
}

const getPortfolioPageData = async ({
  setCoins,
  setEmail,
  setHoldingsLoading,
  setHoldings,
}: Props) => {
  setHoldingsLoading(true);

  // user might not logged in, hence get the name from token
  let email = '';
  await getMe().then((result) => {
    setEmail(result);
    email = result ? result : '';
  });

  const promises = [
    getMarketTop100(),
    getUserHoldingsAndParseData({ email, setHoldings }),
  ];

  await Promise.all<any>(promises)
    .then(([marketCoins, ...other]) => {
      setCoins(marketCoins);
    })
    .catch(() => notifyError());

  setHoldingsLoading(false);
};

export default getPortfolioPageData;
