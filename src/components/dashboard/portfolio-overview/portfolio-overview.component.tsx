import React from 'react';
import PortfolioChart from './portfolio-chart/portfolio-chart.component';

import * as S from './portfolio-overview.styled';

const data = [
  {
    time: 'Mon',
    key: 2400,
  },
  {
    time: 'Tue',
    key: 1398,
  },
  {
    time: 'Wed',
    key: 9800,
  },
  {
    time: 'Thu',
    key: 3908,
  },
  {
    time: 'Fri',
    key: 4800,
  },
  {
    time: 'Sat',
    key: 3800,
  },
  {
    time: 'Sun',
    key: 4300,
  },
];

const PortfolioOverview: React.FC = () => {
  return (
    <S.PortfolioOverviewWrapper>
      <S.Title>Portfolio Overview</S.Title>
      <S.ChartWrapper>
        <PortfolioChart isPositive={true} data={data} />
      </S.ChartWrapper>
    </S.PortfolioOverviewWrapper>
  );
};

export default PortfolioOverview;
