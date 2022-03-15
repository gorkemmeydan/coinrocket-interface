export const API_URL = process.env.HOST as string;
export const AUTH_ENDPOINT = process.env.AUTH_ENDPOINT as string;
export const AUTH_USERNAME = process.env.AUTH_USERNAME as string;
export const AUTH_PASSWORD = process.env.AUTH_PASSWORD as string;
export const LOGOUT_ENDPOINT = process.env.LOGOUT_ENDPOINT as string;

export const PROXY_LOGIN = '/api/login';
export const PROXY_REFRESH = '/api/refreshToken';
export const PROXY_LOGOUT = '/api/logout';

const MARKETDATA_ENDPOINT = '/api/marketdata';
export const MARKETDATA_TRENDING_ENDPOINT = MARKETDATA_ENDPOINT + '/trending';
export const MARKETDATA_TOP100_ENDPOINT = MARKETDATA_ENDPOINT + '/top100';
export const MARKETDATA_SEARCH_ENDPOINT = MARKETDATA_ENDPOINT + '/searchval';

const COINTRANSACTION_ENDPOINT = '/api/cointransaction';
export const COINTRANSACTION_GET_ENDPOINT = COINTRANSACTION_ENDPOINT + '/get';
export const COINTRANSACTION_ADD_ENDPOINT = COINTRANSACTION_ENDPOINT + '/add';
// prettier-ignore
export const COINTRANSACTION_REMOVE_ENDPOINT = COINTRANSACTION_ENDPOINT + '/remove';

export const NEWS_ENDPOINT = '/api/news';

const PORTFOLIO_ENDPOINT = '/api/portfolio';
export const PORTFOLIO_GET_ENDPOINT = PORTFOLIO_ENDPOINT + '/get';
export const PORTFOLIO_ADD_ENDPOINT = PORTFOLIO_ENDPOINT + '/add';
export const PORTFOLIO_REMOVE_ENDPOINT = PORTFOLIO_ENDPOINT + '/remove';

const USER_ENDPOINT = '/api/user';
export const USER_SIGNUP_ENDPONT = USER_ENDPOINT + '/signup';
export const USER_HOLDINGS_ENDPOINT = USER_ENDPOINT + '/holdings';
export const USER_ME_ENDPOINT = USER_ENDPOINT + '/me';

const WATCHLIST_ENDPOINT = '/api/watchlist';
export const WATCHLIST_GET_ENDPOINT = WATCHLIST_ENDPOINT + '/get';
export const WATCHLIST_ADD_ENDPOINT = WATCHLIST_ENDPOINT + '/add';
export const WATCHLIST_REMOVE_ENDPOINT = WATCHLIST_ENDPOINT + '/remove';
