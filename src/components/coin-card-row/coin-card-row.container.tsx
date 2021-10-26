import React from 'react';
import { UserPortfolioItem } from '../../types/types';
import CoinCardRowDetailed from './coin-card-row-detailed.component';

import * as S from './coin-card.-row.styled';

interface PortfolioLayoutProps {
  isDetailed: boolean;
  portfolioItem: UserPortfolioItem;
}

const CoinCard: React.FC<PortfolioLayoutProps> = ({
  isDetailed,
  portfolioItem,
}: PortfolioLayoutProps) => {
  return (
    <>
      {isDetailed ? (
        <CoinCardRowDetailed
          data={portfolioItem.data}
          holdings={portfolioItem.holdings}
        />
      ) : null}
    </>
  );
};

export default CoinCard;
