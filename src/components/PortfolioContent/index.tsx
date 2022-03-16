import React, { useState } from 'react';

import { useHoldings } from '@contexts/holdings';

import Spinner from '../Spinner';
import PortfolioStats from './PortfolioStats';
import PortfolioTable from './PortfolioTable';
import * as S from './PortfolioContent.styled';

const PortfolioLayout: React.FC = () => {
  const actionLoadingState = useState(false);
  const isHiddenState = useState(true);
  const { holdingsLoading, holdings } = useHoldings();
  const lastWeeksPriceData = holdings?.lastWeekGraphData
    ? holdings?.lastWeekGraphData
    : [0, 0];

  return (
    <S.PortfolioWrapper>
      {holdingsLoading ? (
        <Spinner />
      ) : (
        <>
          <PortfolioStats
            actionLoadingState={actionLoadingState}
            isHiddenState={isHiddenState}
            lastWeeksPriceData={lastWeeksPriceData}
          />
          <S.HorizontalScrollable>
            <PortfolioTable
              actionLoadingState={actionLoadingState}
              portfolio={holdings?.portfolio ? holdings?.portfolio : []}
              isHidden={isHiddenState[0]}
            />
          </S.HorizontalScrollable>
        </>
      )}
    </S.PortfolioWrapper>
  );
};

export default PortfolioLayout;
