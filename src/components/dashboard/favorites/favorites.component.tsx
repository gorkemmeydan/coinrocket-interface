import React, { useEffect } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import arrayToObjectArray from '../../../utils/arrayToObjectArray.util';
import FavoriteItem from './favorite-item/favorite-item.component';
import _uniqueId from 'lodash/uniqueId';

import * as S from './favorites.styled';
import { useDispatch } from 'react-redux';
import { fetchWatchlistCoinsStartAsync } from '../../../redux/watchlist/watchlish.actions';

const Favorites: React.FC = () => {
  const watched_coins = useAppSelector(
    (state) => state.watchlist.watched_coins
  );
  const coins = useAppSelector((state) => state.watchlist.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWatchlistCoinsStartAsync(watched_coins));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchWatchlistCoinsStartAsync(watched_coins));
  }, [watched_coins]);

  return (
    <S.FavoritesWrapper>
      {Array.from([0, 1, 2], (i) => {
        const isEmpty = typeof coins[i] === 'undefined';
        return (
          <FavoriteItem
            isEmpty={isEmpty}
            key={_uniqueId('watchlist-item')}
            imageUrl={!isEmpty ? coins[i].logoUrl : ''}
            price={!isEmpty ? coins[i].price : 0}
            change={!isEmpty ? coins[i].change_24h : 0}
            chartData={
              !isEmpty ? arrayToObjectArray(coins[i].price_7d, 'key') : [{}]
            }
            range={!isEmpty ? coins[i].price_min_max : []}
            coin_id={!isEmpty ? coins[i].id : ''}
          />
        );
      })}
    </S.FavoritesWrapper>
  );
};

export default Favorites;
