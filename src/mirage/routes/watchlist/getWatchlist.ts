import { AnyRegistry } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

const getWatchlist = (schema: Schema<AnyRegistry>) => {
  return schema.db.holdings[0].watchList;
};

export default getWatchlist;
