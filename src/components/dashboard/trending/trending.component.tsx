import React from 'react';
import connectToContext from '../../../contexts/connectToContext';
import { selectTrending } from '../../../contexts/trending.context';
import { TrendingCoin } from '../../../types/types';
import Spinner from '../../spinner/spinner.component';
import TrendingItem from './trending-item/trending-item.component';

import * as S from './trending.styled';

interface Props {
  trendingLoading: boolean;
  trendingCoins: TrendingCoin[];
}

const Trending: React.FC<Props> = React.memo(
  ({ trendingLoading, trendingCoins }) => {
    return (
      <S.TrendingWrapper>
        <S.TrendingTitle>Trending</S.TrendingTitle>
        {trendingLoading ? (
          <Spinner />
        ) : (
          <S.TrendingItemsContainer>
            {trendingCoins?.map((coin: TrendingCoin) => (
              <TrendingItem
                key={coin.id}
                imageSrc={coin.imageSrc}
                coinName={coin.coinName}
                coinSymbol={coin.coinSymbol}
              />
            ))}
          </S.TrendingItemsContainer>
        )}
      </S.TrendingWrapper>
    );
  }
);

export default connectToContext(Trending, selectTrending);
