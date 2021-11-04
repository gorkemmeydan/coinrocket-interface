import React, { useState } from 'react';
import { UserPortfolio, UserPortfolioItem } from '../../types/types';

import PortfolioStats from './portfolio-stats/portfolio-stats.component';
import PortfolioTable from './portfolio-table/portfolio-table.component';

import * as S from './portfolio.styled';

const Item1: UserPortfolioItem = {
  data: {
    id: 'btc',
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
    price_change_24h: 31,
    price_7d: [
      61152.799784161485, 58045.24581656004, 59902.95672683597,
      59498.5883413694, 60802.77417909998, 61318.48640742202, 59318.48640742202,
      60318.48640742202, 55486.407422024, 60486.407422024,
    ],
    price_min_max: [50000, 65000],
  },
  holdings: {
    hasData: true,
    isHidden: true,
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
  const isHiddenState = useState(true);

  return (
    <S.PortfolioWrapper>
      <PortfolioStats isHiddenState={isHiddenState} />
      <S.HorizontalScrollable>
        <PortfolioTable
          portfolio={DummyPortfolio}
          isHidden={isHiddenState[0]}
        />
      </S.HorizontalScrollable>
    </S.PortfolioWrapper>
  );
};

export default PortfolioLayout;
