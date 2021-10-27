import React from 'react';
import { CoinData, MarketData } from '../../types/types';
import MarketTable from './market-table/market-table.component';

import * as S from './market.styled';

const dummyData: CoinData = {
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
};

const dummyMarketData: MarketData = { marketData: [dummyData, dummyData] };
for (let i = 0; i < 20; i++) {
  dummyMarketData.marketData.push(dummyData);
}

const MarketLayout: React.FC = () => {
  return (
    <S.MarketWrapper>
      <S.Title>Cryptocurrency Prices by Market Cap</S.Title>
      <S.HorizontalScrollable>
        <MarketTable data={dummyMarketData} />
      </S.HorizontalScrollable>
    </S.MarketWrapper>
  );
};

export default MarketLayout;