import React, { useState } from 'react';

import ButtonWithDropDown from '../button-with-dropdown/button-with-dropdown.component';
import PriceChart from '../../../price-chart/price-chart.component';

import checkPositive from '../../../../utils/checkPositive.util';

import * as S from './favorite-item.styled';
import Modal from '../../../modal/modal.component';
import AddToWatchlistContent from '../add-to-watchlist-content/add-to-watchlist-content.component';
import { useHoldings } from '../../../../contexts/holdings.context';
import Spinner from '../../../spinner/spinner.component';

export interface FavoriteItemProps {
  isEmpty: boolean;
  imageUrl: string;
  price: string;
  change: number;
  chartData: object[];
  priceArray: number[];
  range: number[];
  coin_id: string;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  isEmpty,
  imageUrl,
  price,
  change,
  chartData,
  priceArray,
  range,
  coin_id,
}: FavoriteItemProps) => {
  const isModalOpen = useState(false);
  const [itemLoading, setItemLoading] = useState(false);
  const { holdingsLoading } = useHoldings();

  return (
    <S.FavoriteItemWrapper>
      {holdingsLoading || itemLoading ? (
        <Spinner />
      ) : !isEmpty ? (
        <>
          <S.IconAndButtonWrapper>
            <S.CryptoIcon src={imageUrl} />
            <ButtonWithDropDown
              coin_id={coin_id}
              setItemLoading={setItemLoading}
            />
          </S.IconAndButtonWrapper>
          <S.StatisticsElementsWrapper>
            <S.PriceItems>
              <S.CoinPrice>${price}</S.CoinPrice>
              <S.PriceChange>
                {Number(change).toFixed(2)}% in 7 days
              </S.PriceChange>
            </S.PriceItems>
            <S.PriceChart>
              <PriceChart
                isPositive={checkPositive(priceArray)}
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
            children={
              <AddToWatchlistContent
                setModal={isModalOpen[1]}
                setItemLoading={setItemLoading}
              />
            }
            title='Add new coin to watchlist'
          />
        </>
      )}
    </S.FavoriteItemWrapper>
  );
};

export default FavoriteItem;
