import React from 'react';

import * as S from './dashboard.styled';
import Favorites from './favorites/favorites.component';
import MiniNews from './mini-news/mini-news.component';
import PortfolioOverview from './portfolio-overview/portfolio-overview.component';
import Trending from './trending/trending.component';

const DashboardLayout: React.FC = () => {
  return (
    <S.DashboardWrapper>
      <Favorites />
      <S.PortfolioNewsTrensWrapper>
        <S.PortfolioNewsWrapper>
          <PortfolioOverview />
          <MiniNews />
        </S.PortfolioNewsWrapper>
        <Trending />
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
