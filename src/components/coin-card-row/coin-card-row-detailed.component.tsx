import React from 'react';
import { CoinData, CoinHoldings } from '../../types/types';
import checkPositive from '../../utils/checkPositive.util';
import { ColoredText } from '../portfolio/portfolio-stats/portfolio-stats.styled';
import PriceChart from '../price-chart/price-chart.component';

import * as S from './coin-card.-row.styled';
import CoinName from './coin-name/coin-name.component';
import Holdings from './holdings/holdings.component';
import PosNegText from './pos-neg-text/pos-neg-text.component';

interface Props {
  data: CoinData;
  holdings: CoinHoldings;
}

const CoinCardRowDetailed: React.FC<Props> = ({ data, holdings }: Props) => {
  return (
    <S.RowDataWrapper>
      <S.RowData>{data.rank}</S.RowData>
      <S.RowData>
        <CoinName
          isFullSize={true}
          coinData={{
            logoUrl: data.logoUrl,
            name: data.name,
            symbol: data.symbol,
          }}
        />
      </S.RowData>
      <S.RowData>${data.price}</S.RowData>
      <S.RowData>
        <PosNegText change={data.change_1h} />
      </S.RowData>
      <S.RowData>
        <PosNegText change={data.change_24h} />
      </S.RowData>
      <S.RowData>
        <PosNegText change={data.change_7d} />
      </S.RowData>
      <S.RowData>{data.market_cap}</S.RowData>
      <S.RowData>
        <S.PriceChartWrapper>
          <PriceChart
            isPositive={checkPositive(data.change_7d)}
            data={data.price_7d}
            range={data.price_min_max}
          />
        </S.PriceChartWrapper>
      </S.RowData>
      {holdings.hasData ? (
        <S.RowData>
          <Holdings
            totalMoney={holdings.totalMoney}
            totalAmount={holdings.totalAmount}
          />
        </S.RowData>
      ) : null}
    </S.RowDataWrapper>
  );
};

export default CoinCardRowDetailed;
