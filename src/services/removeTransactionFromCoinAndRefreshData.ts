import { notifyError } from '../lib/toast';
import { UserHoldings } from '../types/types';
import { removeTransactionFromCoin } from './api/removeTransactionFromCoin';
import getUserHoldingsAndParseData from './getUserHoldingsAndParseData';

interface Props {
  coinName: string;
  id: number;
  holdings: UserHoldings | undefined;
  setHoldings: (holdings?: UserHoldings | undefined) => void;
}

const removeTransactionFromCoinAndRefreshData = async ({
  coinName,
  id,
  holdings,
  setHoldings,
}: Props) => {
  let email = holdings?.email ? holdings.email : '';
  await removeTransactionFromCoin({ email, coinName, id }).then(
    async (result) => {
      if (result) {
        await getUserHoldingsAndParseData({ email, setHoldings });
      } else {
        notifyError();
      }
    }
  );
};

export default removeTransactionFromCoinAndRefreshData;
