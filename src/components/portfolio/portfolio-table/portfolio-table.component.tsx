import React from 'react';
import { UserPortfolioItem } from '../../../types/types';
import _uniqueId from 'lodash/uniqueId';

import * as S from './portfolio-table.styled';
import CoinCardRowPortfolio from '../../coin-card-row/coin-card-row-portfolio.component';
import Spinner from '../../spinner/spinner.component';

interface Props {
  actionLoadingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  portfolio: UserPortfolioItem[];
  isHidden: boolean;
}

const PortfolioTable: React.FC<Props> = ({
  actionLoadingState,
  portfolio,
  isHidden,
}: Props) => {
  const [actionLoading, setActionLoading] = actionLoadingState;

  return (
    <S.PortofolioTableWrapper>
      {actionLoading ? (
        <Spinner />
      ) : (
        <>
          <S.PortfolioTableHead>
            <S.HeadRow>
              <S.HeadData>Coin</S.HeadData>
              <S.HeadData>Price</S.HeadData>
              <S.HeadData>24h</S.HeadData>
              <S.HeadData>7d</S.HeadData>
              <S.HeadData>Last 7 Days</S.HeadData>
              <S.HeadData>Holdings</S.HeadData>
              <S.HeadData>History</S.HeadData>
              <S.HeadData></S.HeadData>
              <S.HeadData></S.HeadData>
            </S.HeadRow>
          </S.PortfolioTableHead>
          <S.PortfolioTableBody>
            {portfolio.map((item) => {
              return (
                <CoinCardRowPortfolio
                  setActionLoading={setActionLoading}
                  key={_uniqueId('portfolio-row-')}
                  isHidden={isHidden}
                  portfolioItem={item}
                />
              );
            })}
          </S.PortfolioTableBody>
        </>
      )}
    </S.PortofolioTableWrapper>
  );
};

export default PortfolioTable;
