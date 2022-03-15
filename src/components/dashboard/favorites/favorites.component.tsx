import React, { useMemo } from 'react';
import arrayToObjectArray from '../../../utils/arrayToObjectArray.util';
import FavoriteItem from './favorite-item/favorite-item.component';
import _uniqueId from 'lodash/uniqueId';

import * as S from './favorites.styled';
import { selectHoldings } from '../../../contexts/holdings.context';
import calculateChangePercent from '../../../utils/calculateChangePercent';
import { UserHoldings } from '../../../types/types';
import connectToContext from '../../../contexts/connectToContext';

interface Props {
  isFullSize: boolean;
  holdings: UserHoldings;
}

const Favorites: React.FC<Props> = React.memo(({ isFullSize, holdings }) => {
  const arrayIteration = isFullSize ? [0, 1, 2] : [0, 1];

  return (
    <S.FavoritesWrapper>
      {Array.from([...arrayIteration], (i: number) => {
        const watchListItem = holdings?.watchList[i];
        const data = watchListItem?.coinData;
        return (
          <FavoriteItem
            isEmpty={data ? false : true}
            key={_uniqueId('watchlist-item')}
            imageUrl={data ? data.logoUrl : ''}
            price={data ? data.price : ''}
            change={
              data
                ? calculateChangePercent(
                    data.price_7d[0],
                    data.price_7d[data.price_7d.length - 1]
                  )
                : 0
            }
            chartData={data ? arrayToObjectArray(data.price_7d, 'key') : [{}]}
            priceArray={data ? data.price_7d : []}
            range={data ? data.price_min_max : []}
            coin_id={data ? data.id : ''}
          />
        );
      })}
    </S.FavoritesWrapper>
  );
});

export default connectToContext(Favorites, selectHoldings);
