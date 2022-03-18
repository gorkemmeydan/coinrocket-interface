import { NEWS_ENDPOINT } from 'config';

import { Server } from 'miragejs';
import getNews from './getNews';

export function getNewsRoutes(context: Server) {
  return [context.get(NEWS_ENDPOINT, getNews)];
}
