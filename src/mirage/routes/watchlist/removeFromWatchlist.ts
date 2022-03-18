import { AnyRegistry } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

const removeFromWatchlist = (schema: Schema<AnyRegistry>) => {
  schema.db.holdings.update({
    watchList: [],
  });
  return {};
};

export default removeFromWatchlist;
