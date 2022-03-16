import React from 'react';
import _uniqueId from 'lodash/uniqueId';

import { UserPortfolioItem } from 'types';

import { CoinCardRowPortfolio } from '../../CoinCardRow';
import Spinner from '../../Spinner';
import * as S from './PortfolioTable.styled';

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
