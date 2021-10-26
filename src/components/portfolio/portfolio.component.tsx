import { addBasePath } from 'next/dist/shared/lib/router/router';
import React from 'react';
import { UserPortfolio, UserPortfolioItem } from '../../types/types';

import PortfolioStats from './portfolio-stats/portfolio-stats.component';
import PortfolioTable from './portfolio-table/portfolio-table.component';

import * as S from './portfolio.styled';

const Item1: UserPortfolioItem = {
  data: {
    rank: 1,
    logoUrl:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 616161,
    change_1h: 1.8,
    change_24h: 3,
    change_7d: -0.2,
    market_cap: 999999,
    price_7d: [
      { key: 61152.799784161485 },
      { key: 58045.24581656004 },
      { key: 59902.95672683597 },
      { key: 59498.5883413694 },
      { key: 60802.77417909998 },
      { key: 61318.486407422024 },
      { key: 59318.486407422024 },
      { key: 60318.486407422024 },
      { key: 55486.407422024 },
      { key: 60486.407422024 },
    ],
    price_min_max: [50000, 65000],
  },
  holdings: {
    hasData: true,
    totalMoney: 1800000,
    totalAmount: 15,
  },
};

const DummyPortfolio: UserPortfolio = {
  portfolio: [
    Item1,
    Item1,
    Item1,
    Item1,
    Item1,
    Item1,
    Item1,
    Item1,
    Item1,
    Item1,
  ],
};
const PortfolioLayout: React.FC = () => {
  return (
    <S.PortfolioWrapper>
      <PortfolioStats />
      <S.HorizontalScrollable>
        <PortfolioTable portfolio={DummyPortfolio} />
      </S.HorizontalScrollable>
    </S.PortfolioWrapper>
  );
};

export default PortfolioLayout;
