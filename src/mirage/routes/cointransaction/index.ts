import {
  COINTRANSACTION_ADD_ENDPOINT,
  COINTRANSACTION_REMOVE_ENDPOINT,
} from 'config';

import { Server } from 'miragejs';
import addCoinTransaction from './addCoinTransaction';
import removeCoinTransaction from './removeCoinTransaction';

export function getCointransactionRoutes(context: Server) {
  return [
    context.post(COINTRANSACTION_ADD_ENDPOINT, (schema) =>
      addCoinTransaction(schema)
    ),
    context.delete(COINTRANSACTION_REMOVE_ENDPOINT, (schema) =>
      removeCoinTransaction(schema)
    ),
  ];
}
