import { AnyRegistry } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

const getHoldings = (schema: Schema<AnyRegistry>) => {
  return schema.db.holdings[0];
};

export default getHoldings;
