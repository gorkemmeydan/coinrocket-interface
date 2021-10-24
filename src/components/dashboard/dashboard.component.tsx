import React from 'react';

import * as S from './dashboard.styled';
import Favorites from './favorites/favorites.component';
import News from './news/news.component';
import PortfolioOverview from './portfolio-overview/portfolio-overview.component';
import Trending from './trending/trending.component';

const DashboardLayout: React.FC = () => {
  return (
    <S.DashboardWrapper>
      <Favorites />
      <S.PortfolioNewsTrensWrapper>
        <S.PortfolioNewsWrapper>
          <PortfolioOverview />
          <News />
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
