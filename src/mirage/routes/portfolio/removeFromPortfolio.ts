import { AnyRegistry } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

const removeFromPortfolio = async (schema: Schema<AnyRegistry>) => {
  await schema.db.holdings.update({
    portfolio: [],
  });
  return {};
};

export default removeFromPortfolio;
