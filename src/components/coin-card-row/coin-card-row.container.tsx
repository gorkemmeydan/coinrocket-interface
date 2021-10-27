import React from 'react';
import { UserPortfolioItem } from '../../types/types';
import CoinCardRowDetailed from './coin-card-row-detailed.component';

import * as S from './coin-card.-row.styled';

interface CoinRowProps {
  isDetailed: boolean;
  portfolioItem: UserPortfolioItem;
}

const CoinCard: React.FC<CoinRowProps> = ({
  isDetailed,
  portfolioItem,
}: CoinRowProps) => {
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
