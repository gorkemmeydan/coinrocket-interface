import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import newsReducer from './news/news.reducer';

// import marketReducer from './market/market.reducer';
// import newsReducer from './news/news.reducer';
// import portfolioReducer from './portfolio/portfolio.reducer';
import trendingReducer from './trending/trending.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['trending', 'news'],
};

// const rootReducer = combineReducers({
//   market: marketReducer,
//   news: newsReducer,
//   portfolio: portfolioReducer,
//   trending: trendingReducer,
// });

const rootReducer = combineReducers({
  trending: trendingReducer,
  news: newsReducer,
});

export default persistReducer(persistConfig, rootReducer);