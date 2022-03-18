import { PROXY_LOGIN } from 'config';

import { Server } from 'miragejs';
import getCookies from './getCookies';

export function getLoginRoutes(context: Server) {
  return [context.post(PROXY_LOGIN, getCookies)];
}
