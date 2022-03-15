import React from 'react';
import { useMarket } from '../../contexts/market.context';
import Spinner from '../spinner/spinner.component';
import MarketTable from './market-table/market-table.component';

import * as S from './market.styled';

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
