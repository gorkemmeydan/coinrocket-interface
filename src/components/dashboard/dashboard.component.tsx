import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import { fetchMarketStartAsync } from '../../redux/market/market.actions';
import { fetchNewsStartAsync } from '../../redux/news/news.actions';
import { fetchTrendingStartAsync } from '../../redux/trending/trending.actions';
import { fetchWatchlistStartAsync } from '../../redux/watchlist/watchlish.actions';

import * as S from './dashboard.styled';
import Favorites from './favorites/favorites.component';
import MiniNewsContainer from './mini-news/mini-news.container';
import PortfolioOverview from './portfolio-overview/portfolio-overview.component';
import TrendingContainer from './trending/trending.container';

const DashboardLayout: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingStartAsync());
    dispatch(fetchNewsStartAsync());
    dispatch(fetchMarketStartAsync());
    dispatch(fetchWatchlistStartAsync());
  }, [dispatch]);

  return (
    <S.DashboardWrapper>
      <Favorites />
      <S.PortfolioNewsTrensWrapper>
        <S.PortfolioNewsWrapper>
          <PortfolioOverview />
          <MiniNewsContainer />
        </S.PortfolioNewsWrapper>
        <TrendingContainer />
      </S.PortfolioNewsTrensWrapper>
    </S.DashboardWrapper>
  );
};

export default DashboardLayout;
