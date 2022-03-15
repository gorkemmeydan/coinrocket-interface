import React from 'react';
import { CoinData } from '../../types/types';
import numberToDollar from '../../utils/numberToDollar.util';
import numberToObjectArray from '../../utils/arrayToObjectArray.util';
import PriceChart from '../price-chart/price-chart.component';

import * as S from './coin-card.-row.styled';
import CoinName from './coin-name/coin-name.component';
import PosNegText from './pos-neg-text/pos-neg-text.component';
import checkPositiveFromArr from '../../utils/checkPositive.util';
import calculateChangePercent from '../../utils/calculateChangePercent';

interface Props {
  data: CoinData;
}

const CoinCardRowMarket: React.FC<Props> = ({ data }: Props) => {
  return data ? (
    <S.RowDataWrapper>
      <S.RowData>{data.rank}</S.RowData>
      <S.RowData>
        <CoinName
          isFullSize={true}
          coinData={{
            logoUrl: data.logoUrl,
            name: data.name,
            symbol: data.symbol.toUpperCase(),
          }}
        />
      </S.RowData>
      <S.RowData>${data.price}</S.RowData>
      <S.RowData>
        <PosNegText change={Number(data.change_24h.toFixed(2))} />
      </S.RowData>
      <S.RowData>
        <PosNegText
          change={Number(
            calculateChangePercent(
              data.price_7d[0],
              data.price_7d[data.price_7d.length - 1]
            ).toFixed(2)
          )}
        />
      </S.RowData>
      <S.RowData>{numberToDollar(data.market_cap)}</S.RowData>
      <S.RowData>
        <S.PriceChartWrapper>
          <PriceChart
            isPositive={checkPositiveFromArr(data.price_7d)}
            data={numberToObjectArray(data.price_7d, 'key')}
            range={data.price_min_max}
            showAnimation={false}
          />
        </S.PriceChartWrapper>
      </S.RowData>
    </S.RowDataWrapper>
  ) : null;
};

export default CoinCardRowMarket;
