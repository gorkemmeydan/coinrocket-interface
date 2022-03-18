import { AnyRegistry } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

const addToPortfolio = async (schema: Schema<AnyRegistry>) => {
  await schema.db.holdings.update({
    portfolio: [
      {
        id: 73,
        coinName: 'bitcoin',
        lastWeeksHoldings: [0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02],
        coinTransactions: [
          {
            id: 44,
            coinName: 'bitcoin',
            quantity: 0.02,
            transactionDate: '2022-03-09T09:25:43.000+00:00',
            positive: true,
          },
        ],
      },
      {
        id: 74,
        coinName: 'ethereum',
        lastWeeksHoldings: [],
        coinTransactions: [],
      },
    ],
  });
  return {};
};

export default addToPortfolio;
