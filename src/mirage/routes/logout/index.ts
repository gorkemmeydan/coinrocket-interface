import { PROXY_LOGOUT } from 'config';

import { Server } from 'miragejs';
import removeCookies from './removeCookies';

export function getLogoutRoutes(context: Server) {
  return [context.post(PROXY_LOGOUT, removeCookies)];
}
