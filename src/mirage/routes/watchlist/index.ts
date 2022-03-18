import {
  WATCHLIST_ADD_ENDPOINT,
  WATCHLIST_GET_ENDPOINT,
  WATCHLIST_REMOVE_ENDPOINT,
} from 'config';

import { Server } from 'miragejs';
import addToWatchlist from './addToWatchlist';
import getWatchlist from './getWatchlist';
import removeFromWatchlist from './removeFromWatchlist';

export function getWatchlistRoutes(context: Server) {
  return [
    context.post(WATCHLIST_ADD_ENDPOINT, (schema) => addToWatchlist(schema)),
    context.delete(WATCHLIST_REMOVE_ENDPOINT, (schema) =>
      removeFromWatchlist(schema)
    ),
    context.get(WATCHLIST_GET_ENDPOINT, (schema) => getWatchlist(schema)),
  ];
}
