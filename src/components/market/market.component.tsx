import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMarketStartAsync } from '../../redux/market/market.actions';
import { CoinData, MarketData } from '../../types/types';
import MarketTable from './market-table/market-table.component';

import * as S from './market.styled';

const MarketLayout: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarketStartAsync());
  }, [dispatch]);

  return (
    <S.MarketWrapper>
      <S.Title>Cryptocurrency Prices by Market Cap</S.Title>
      <S.HorizontalScrollable>
        <MarketTable />
      </S.HorizontalScrollable>
    </S.MarketWrapper>
  );
};

export default MarketLayout;
