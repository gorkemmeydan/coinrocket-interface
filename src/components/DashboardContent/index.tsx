import React from 'react';

import Favorites from './Favorites';
import MiniNews from './MiniNews';
import PortfolioOverview from './PortfolioOverview';
import Trending from './Trending';
import * as S from './DashboardContent.styled';

interface Props {
  isFullSize: boolean;
}

const DashboardContent: React.FC<Props> = ({ isFullSize }) => {
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

export default DashboardContent;
