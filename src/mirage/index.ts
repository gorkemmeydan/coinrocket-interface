import { createServer, Factory, Model } from 'miragejs';
import { getCointransactionRoutes } from './routes/cointransaction';
import { getLoginRoutes } from './routes/login';
import { getLogoutRoutes } from './routes/logout';
import { getMarketRoutes } from './routes/marketdata';
import { getNewsRoutes } from './routes/news';
import { getPortfolioRoutes } from './routes/portfolio';
import { getUserRoutes } from './routes/user';
import { getWatchlistRoutes } from './routes/watchlist';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      holdings: Model,
    },

    seeds(server) {
      const holdings = require('./fixtures/userHoldingsData.json');
      server.create('holding', holdings);
    },

    routes() {
      getLoginRoutes(this);
      getUserRoutes(this);
      getNewsRoutes(this);
      getMarketRoutes(this);
      getWatchlistRoutes(this);
      getPortfolioRoutes(this);
      getCointransactionRoutes(this);
      getLogoutRoutes(this);

      this.passthrough('http://localhost:3000/**');
      this.passthrough('/');
      this.passthrough('/api/**');
    },
  });

  return server;
}
