import React from 'react';

import combineComponents from '../utils/combineComponents';

import { MarketProvider } from './market.context';
import { NewsProvider } from './news.context';
import { TrendingProvider } from './trending.context';
import { AuthProvider } from './auth.context';
import { HoldingsProvider } from './holdings.context';

const providers = [
  MarketProvider,
  TrendingProvider,
  NewsProvider,
  AuthProvider,
  HoldingsProvider,
];

export const AppContextProvider = combineComponents(...providers);
