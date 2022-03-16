import React, { useState } from 'react';

import { useHoldings } from '@contexts/holdings';

import checkPositiveFromArr from '@utils/checkPositiveFromArr';

import ButtonWithDropDown from '../ButtonWithDropdown';
import PriceChart from '../../../PriceChart';
import Modal from '../../../Modal';
import AddToWatchlistContent from '../AddToWatchlistContent';
import Spinner from '../../../Spinner';
import * as S from './FavoriteItem.styled';

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
                isPositive={checkPositiveFromArr(priceArray)}
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
