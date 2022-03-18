import {
  MARKETDATA_SEARCH_ENDPOINT,
  MARKETDATA_TOP100_ENDPOINT,
  MARKETDATA_TRENDING_ENDPOINT,
} from 'config';

import { Server } from 'miragejs';
import getMarketTop100 from './getMarketTop100';
import getSearchVal from './getSearchVal';
import getTrending from './getTrending';

export function getMarketRoutes(context: Server) {
  return [
    context.get(MARKETDATA_TOP100_ENDPOINT, getMarketTop100),
    context.get(MARKETDATA_TRENDING_ENDPOINT, getTrending),
    context.get(MARKETDATA_SEARCH_ENDPOINT, (schema, request) =>
      getSearchVal(request)
    ),
  ];
}
