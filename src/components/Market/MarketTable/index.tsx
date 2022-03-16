import React from 'react';
import _uniqueId from 'lodash/uniqueId';

import { useMarket } from '@contexts/market';

import { CoinCardRowMarket } from '../../CoinCardRow';
import * as S from './MarketTable.styled';

const MarketTable: React.FC = () => {
  const { coins } = useMarket();

  return (
    <S.MarketTableWrapper>
      <S.MarketTableHead>
        <S.HeadRow>
          <S.HeadData style={{ width: '5%' }}>#</S.HeadData>
          <S.HeadData style={{ width: '25%' }}>Coin</S.HeadData>
          <S.HeadData style={{ width: '15%' }}>Price</S.HeadData>
          <S.HeadData style={{ width: '10%' }}>24h</S.HeadData>
          <S.HeadData style={{ width: '10%' }}>7d</S.HeadData>
          <S.HeadData style={{ width: '15%' }}>Market Cap</S.HeadData>
          <S.HeadData style={{ width: '20%' }}>Last 7 Days</S.HeadData>
        </S.HeadRow>
      </S.MarketTableHead>
      <S.MarketTableBody>
        {coins?.map((coin) => {
          return (
            <CoinCardRowMarket key={_uniqueId('market-row-')} data={coin} />
          );
        })}
      </S.MarketTableBody>
    </S.MarketTableWrapper>
  );
};

export default MarketTable;
