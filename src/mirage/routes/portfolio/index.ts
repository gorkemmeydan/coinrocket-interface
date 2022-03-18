import { PORTFOLIO_ADD_ENDPOINT, PORTFOLIO_REMOVE_ENDPOINT } from 'config';

import { Server } from 'miragejs';
import addToPortfolio from './addToPortfolio';
import removeFromPortfolio from './removeFromPortfolio';

export function getPortfolioRoutes(context: Server) {
  return [
    context.post(PORTFOLIO_ADD_ENDPOINT, (schema) => addToPortfolio(schema)),
    context.delete(PORTFOLIO_REMOVE_ENDPOINT, (schema) =>
      removeFromPortfolio(schema)
    ),
  ];
}
