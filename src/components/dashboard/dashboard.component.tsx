import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../redux/hooks';
import { fetchTrendingStartAsync } from '../../redux/trending/trending.actions';
import TrendingActionTypes from '../../redux/trending/trending.types';

import * as S from './dashboard.styled';
import Favorites from './favorites/favorites.component';
import MiniNews from './mini-news/mini-news.component';
import PortfolioOverview from './portfolio-overview/portfolio-overview.component';
import TrendingContainer from './trending/trending.container';

const DashboardLayout: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingStartAsync());
  }, []);

  return (
    <S.DashboardWrapper>
      <Favorites />
      <S.PortfolioNewsTrensWrapper>
        <S.PortfolioNewsWrapper>
          <PortfolioOverview />
          <MiniNews />
        </S.PortfolioNewsWrapper>
        <TrendingContainer />
      </S.PortfolioNewsTrensWrapper>
    </S.DashboardWrapper>
  );
};

export default DashboardLayout;

{
  /* <S.PortfolioNewsTrensWrapper>
  <S.PortfolioNewsWrapper>
    <PortfolioOverview />
    <News />
  </S.PortfolioNewsWrapper>
  <Trending />
</S.PortfolioNewsTrensWrapper>; */
}
