import React from 'react';

import ButtonWithDropDown from '../button-with-dropdown/button-with-dropdown.component';
import FavoriteItemChart from '../favorite-item-chart/favorite-item-chart.component';

import checkPositive from '../../../../utils/checkPositive.util';

import * as S from './favorite-item.styled';

interface FavoriteItemProps {
  imageUrl: string;
  price: string;
  change: number;
  chartData: readonly object[];
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  imageUrl,
  price,
  change,
  chartData,
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
          <FavoriteItemChart
            isPositive={checkPositive(change)}
            data={chartData}
          />
        </S.PriceChart>
      </S.StatisticsElementsWrapper>
    </S.FavoriteItemWrapper>
  );
};

export default FavoriteItem;
