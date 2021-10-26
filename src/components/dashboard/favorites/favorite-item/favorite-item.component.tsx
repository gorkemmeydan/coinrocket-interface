import React from 'react';

import ButtonWithDropDown from '../button-with-dropdown/button-with-dropdown.component';
import PriceChart from '../../../price-chart/price-chart.component';

import checkPositive from '../../../../utils/checkPositive.util';

import * as S from './favorite-item.styled';

interface FavoriteItemProps {
  imageUrl: string;
  price: string;
  change: number;
  chartData: object[];
  range: number[];
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  imageUrl,
  price,
  change,
  chartData,
  range,
}: FavoriteItemProps) => {
  return (
    <S.FavoriteItemWrapper>
      <S.IconAndButtonWrapper>
        <S.CryptoIcon src={imageUrl} />
        <ButtonWithDropDown />
      </S.IconAndButtonWrapper>
      <S.StatisticsElementsWrapper>
        <S.PriceItems>
          <S.CoinPrice>${price}</S.CoinPrice>
          <S.PriceChange>
            {Number(change).toFixed(2)}% in 24 Hours
          </S.PriceChange>
        </S.PriceItems>
        <S.PriceChart>
          <PriceChart
            isPositive={checkPositive(change)}
            data={chartData}
            range={range}
          />
        </S.PriceChart>
      </S.StatisticsElementsWrapper>
    </S.FavoriteItemWrapper>
  );
};

export default FavoriteItem;
