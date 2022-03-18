import { AnyRegistry } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

const addToWatchlist = async (schema: Schema<AnyRegistry>) => {
  await schema.db.holdings.update({
    watchList: [
      {
        id: 96,
        coinName: 'ethereum',
      },
      {
        id: 97,
        coinName: 'bitcoin',
      },
    ],
  });
  return {};
};

export default addToWatchlist;
