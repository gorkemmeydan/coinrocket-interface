import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { TrendingCoin } from '../../../types/types';
import TrendingItem from './trending-item/trending-item.component';

import * as S from './trending.styled';

const Trending: React.FC = () => {
  const trendingCoins = useAppSelector((state) => state.trending.trendingCoins);

  return (
    <S.TrendingWrapper>
      <S.TrendingTitle>Trending</S.TrendingTitle>
      <S.TrendingItemsContainer>
        {trendingCoins.map((coin: TrendingCoin) => (
          <TrendingItem
            key={coin.id}
            imageSrc={coin.imageSrc}
            coinName={coin.coinName}
            coinSymbol={coin.coinSymbol}
          />
        ))}
      </S.TrendingItemsContainer>
    </S.TrendingWrapper>
  );
};

export default Trending;
