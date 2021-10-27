import React from 'react';
import Portfolio from '../../../pages/app/portfolio';
import { CoinHoldings, MarketData } from '../../../types/types';
import CoinCard from '../../coin-card-row/coin-card-row.container';
import _uniqueId from 'lodash/uniqueId';

import * as S from './market-table.styled';

interface Props {
  data: MarketData;
}

const MarketTable: React.FC<Props> = ({ data }: Props) => {
  const emptyHoldings: CoinHoldings = {
    hasData: false,
    isHidden: false,
    totalMoney: 0,
    totalAmount: 0,
  };

  return (
    <S.MarketTableWrapper>
      <S.MarketTableHead>
        <S.HeadRow>
          <S.HeadData style={{ width: '5%' }}>#</S.HeadData>
          <S.HeadData style={{ width: '30%' }}>Coin</S.HeadData>
          <S.HeadData style={{ width: '10%' }}>Price</S.HeadData>
          <S.HeadData style={{ width: '10%' }}>1h</S.HeadData>
          <S.HeadData style={{ width: '10%' }}>24h</S.HeadData>
          <S.HeadData style={{ width: '10%' }}>7d</S.HeadData>
          <S.HeadData style={{ width: '15%' }}>Market Cap</S.HeadData>
          <S.HeadData style={{ width: '20%' }}>Last 7 Days</S.HeadData>
        </S.HeadRow>
      </S.MarketTableHead>
      <S.MarketTableBody>
        {data.marketData.map((item) => {
          const portfolioItem = { data: item, holdings: emptyHoldings };
          return (
            <CoinCard
              key={_uniqueId('portfolio-row-')}
              isDetailed={true}
              portfolioItem={portfolioItem}
            />
          );
        })}
      </S.MarketTableBody>
    </S.MarketTableWrapper>
  );
};

export default MarketTable;
