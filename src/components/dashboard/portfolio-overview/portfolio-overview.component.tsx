import React from 'react';
import connectToContext from '../../../contexts/connectToContext';
import {
  selectHoldings,
  useHoldings,
} from '../../../contexts/holdings.context';
import { UserHoldings } from '../../../types/types';
import toFixedNumber from '../../../utils/toFixedNumber';
import Spinner from '../../spinner/spinner.component';
import PortfolioChart from './portfolio-chart/portfolio-chart.component';

import * as S from './portfolio-overview.styled';

interface Props {
  holdingsLoading: boolean;
  holdings: UserHoldings;
}

const PortfolioOverview: React.FC<Props> = React.memo(
  ({ holdingsLoading, holdings }) => {
    const chartData = holdings?.lastWeekGraphData
      ? holdings?.lastWeekGraphData
      : new Array(7).fill(0);

    const isPositive = chartData[chartData.length - 1] >= chartData[0];
    const data = createPortfolioChartData(chartData);

    return (
      <S.PortfolioOverviewWrapper>
        <S.Title>Portfolio Overview</S.Title>
        {holdingsLoading ? (
          <Spinner />
        ) : (
          <S.ChartWrapper>
            <PortfolioChart isPositive={isPositive} data={data} />
          </S.ChartWrapper>
        )}
      </S.PortfolioOverviewWrapper>
    );
  }
);
export interface PortfolioChartData {
  time: string;
  total: number;
}

const createPortfolioChartData = (
  chartData: number[]
): PortfolioChartData[] => {
  let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDayIndex = new Date().getDay();
  weekDays = weekDays.concat(weekDays.splice(0, currentDayIndex + 1)); // shift left

  let portfolioChartDataArr: PortfolioChartData[] = [];
  for (let i = 0; i < 7; i++) {
    let temp = {
      time: weekDays[i],
      total: toFixedNumber(chartData[i], 3),
    };
    portfolioChartDataArr.push(temp);
  }

  return portfolioChartDataArr;
};

export default connectToContext(PortfolioOverview, selectHoldings);
