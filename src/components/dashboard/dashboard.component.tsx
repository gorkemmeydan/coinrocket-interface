import React from 'react';

import * as S from './dashboard.styled';
import Favorites from './favorites/favorites.component';
import MiniNews from './mini-news/mini-news.component';
import PortfolioOverview from './portfolio-overview/portfolio-overview.component';
import Trending from './trending/trending.component';

interface Props {
  isFullSize: boolean;
}

const DashboardLayout: React.FC<Props> = ({ isFullSize }) => {
  return (
    <S.DashboardWrapper>
      <Favorites isFullSize={isFullSize} />
      <S.PortfolioNewsTrensWrapper>
        <S.PortfolioNewsWrapper>
          <PortfolioOverview />
          <MiniNews />
        </S.PortfolioNewsWrapper>
        {isFullSize ? <Trending /> : null}
      </S.PortfolioNewsTrensWrapper>
    </S.DashboardWrapper>
  );
};

export default DashboardLayout;
