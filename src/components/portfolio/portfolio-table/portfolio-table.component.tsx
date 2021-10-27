import React from 'react';
import Portfolio from '../../../pages/app/portfolio';
import { UserPortfolio } from '../../../types/types';
import CoinCard from '../../coin-card-row/coin-card-row.container';
import _uniqueId from 'lodash/uniqueId';

import * as S from './portfolio-table.styled';

interface Props {
  portfolio: UserPortfolio;
  isHidden: boolean;
}

const PortfolioTable: React.FC<Props> = ({ portfolio, isHidden }: Props) => {
  return (
    <S.PortofolioTableWrapper>
      <S.PortfolioTableHead>
        <S.HeadRow>
          <S.HeadData>#</S.HeadData>
          <S.HeadData>Coin</S.HeadData>
          <S.HeadData>Price</S.HeadData>
          <S.HeadData>1h</S.HeadData>
          <S.HeadData>24h</S.HeadData>
          <S.HeadData>7d</S.HeadData>
          <S.HeadData>Market Cap</S.HeadData>
          <S.HeadData>Last 7 Days</S.HeadData>
          <S.HeadData>Holdings</S.HeadData>
        </S.HeadRow>
      </S.PortfolioTableHead>
      <S.PortfolioTableBody>
        {portfolio.portfolio.map((item) => {
          item.holdings.isHidden = isHidden;
          return (
            <CoinCard
              key={_uniqueId('portfolio-row-')}
              isDetailed={true}
              portfolioItem={item}
            />
          );
        })}
      </S.PortfolioTableBody>
    </S.PortofolioTableWrapper>
  );
};

export default PortfolioTable;
