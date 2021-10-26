import React from 'react';

import PortfolioStats from './portfolio-stats/portfolio-stats.component';

import * as S from './portfolio.styled';

const PortfolioLayout: React.FC = () => {
  return (
    <S.PortfolioWrapper>
      <PortfolioStats />
    </S.PortfolioWrapper>
  );
};

export default PortfolioLayout;
