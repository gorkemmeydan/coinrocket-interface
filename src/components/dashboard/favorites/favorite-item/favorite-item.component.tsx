import React, { useState } from 'react';

import ButtonWithDropDown from '../button-with-dropdown/button-with-dropdown.component';
import PriceChart from '../../../price-chart/price-chart.component';

import checkPositive from '../../../../utils/checkPositive.util';

import * as S from './favorite-item.styled';
import Modal from '../../../modal/modal.component';
import AddToWatchlistContent from '../add-to-watchlist-content/add-to-watchlist-content.component';

interface FavoriteItemProps {
  isEmpty: boolean;
  imageUrl: string;
  price: string;
  change: number;
  chartData: object[];
  range: number[];
  coin_id: string;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  isEmpty,
  imageUrl,
  price,
  change,
  chartData,
  range,
  coin_id,
}: FavoriteItemProps) => {
  const isModalOpen = useState(false);

  return (
    <S.FavoriteItemWrapper>
      {!isEmpty ? (
        <>
          <S.IconAndButtonWrapper>
            <S.CryptoIcon src={imageUrl} />
            <ButtonWithDropDown coin_id={coin_id} />
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
                showAnimation={false}
              />
            </S.PriceChart>
          </S.StatisticsElementsWrapper>
        </>
      ) : (
        <>
          <S.AddToWatchlistButton onClick={() => isModalOpen[1](true)}>
            Click to add new coin to watch
          </S.AddToWatchlistButton>
          <Modal
            isOpenState={isModalOpen}
            children={<AddToWatchlistContent setModal={isModalOpen[1]} />}
            title='Add new coin to watchlist'
          />
        </>
      )}
    </S.FavoriteItemWrapper>
  );
};

export default FavoriteItem;
