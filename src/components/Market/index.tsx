import React from 'react';

import { useMarket } from '@contexts/market';

import Spinner from '../Spinner';
import MarketTable from './MarketTable';
import * as S from './Market.styled';

const MarketLayout: React.FC = () => {
  const { marketLoading } = useMarket();

  return (
    <S.MarketWrapper>
      <S.Title>Cryptocurrency Prices by Market Cap</S.Title>
      {marketLoading ? (
        <Spinner />
      ) : (
        <S.HorizontalScrollable>
          <MarketTable />
        </S.HorizontalScrollable>
      )}
    </S.MarketWrapper>
  );
};

export default MarketLayout;
