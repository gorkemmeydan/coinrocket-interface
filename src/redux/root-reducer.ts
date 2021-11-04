import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from './storage';
import marketReducer from './market/market.reducers';
import newsReducer from './news/news.reducer';
import trendingReducer from './trending/trending.reducer';
import watchlistReducer from './watchlist/watchlist.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['trending', 'news', 'market', 'watchlist'],
};

const rootReducer = combineReducers({
  trending: trendingReducer,
  news: newsReducer,
  market: marketReducer,
  watchlist: watchlistReducer,
});

export default persistReducer(persistConfig, rootReducer);
