import { AnyRegistry } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

const removeCoinTransaction = async (schema: Schema<AnyRegistry>) => {
  await schema.db.holdings.update({
    portfolio: [
      {
        id: 73,
        coinName: 'bitcoin',
        lastWeeksHoldings: [0, 0, 0, 0, 0, 0, 0],
        coinTransactions: [],
      },
    ],
  });
  return {};
};

export default removeCoinTransaction;
