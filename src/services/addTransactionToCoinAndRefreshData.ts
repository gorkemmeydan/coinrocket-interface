import { notifyError } from '../lib/toast';
import { UserHoldings } from '../types/types';

import { addTransactionToCoin } from './api/addTransactionToCoin';
import getUserHoldingsAndParseData from './getUserHoldingsAndParseData';

interface Props {
  coinName: string;
  isPositive: boolean;
  quantity: number;
  date: number;
  holdings: UserHoldings | undefined;
  setHoldings: (holdings?: UserHoldings | undefined) => void;
}

const addTransactionToCoinAndRefreshData = async ({
  coinName,
  isPositive,
  quantity,
  date,
  holdings,
  setHoldings,
}: Props) => {
  let email = holdings?.email ? holdings.email : '';

  await addTransactionToCoin({
    email,
    coinName,
    isPositive,
    quantity,
    date,
  }).then(async (result) => {
    if (result) {
      await getUserHoldingsAndParseData({ email, setHoldings });
    } else {
      notifyError();
    }
  });
};

export default addTransactionToCoinAndRefreshData;
