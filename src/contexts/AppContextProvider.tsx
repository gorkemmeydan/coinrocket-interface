import combineComponents from '@utils/combineComponents';

import { MarketProvider } from './market';
import { NewsProvider } from './news';
import { TrendingProvider } from './trending';
import { AuthProvider } from './auth';
import { HoldingsProvider } from './holdings';

const providers = [
  MarketProvider,
  TrendingProvider,
  NewsProvider,
  AuthProvider,
  HoldingsProvider,
];

export const AppContextProvider = combineComponents(...providers);
