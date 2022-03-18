import { USER_ME_ENDPOINT, USER_HOLDINGS_ENDPOINT } from 'config';

import { Server } from 'miragejs';
import getHoldings from './getHoldings';
import getUserMe from './getUser';

export function getUserRoutes(context: Server) {
  return [
    context.get(USER_ME_ENDPOINT, getUserMe),
    context.get(USER_HOLDINGS_ENDPOINT, (schema) => getHoldings(schema)),
  ];
}
