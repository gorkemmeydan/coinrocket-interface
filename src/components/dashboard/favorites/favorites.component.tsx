import React from 'react';
import FavoriteItem from './favorite-item/favorite-item.component';

import * as S from './favorites.styled';

const data = [
  {
    key: 2400,
  },
  {
    key: 1398,
  },
  {
    key: 9800,
  },
  {
    key: 3908,
  },
  {
    key: 4800,
  },
  {
    key: 3800,
  },
  {
    key: 4300,
  },
];

const Favorites: React.FC = () => {
  return (
    <S.FavoritesWrapper>
      <FavoriteItem
        imageUrl={
          'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
        }
        price={'61229'}
        change={0.80979}
        chartData={data}
      />
      <FavoriteItem
        imageUrl={
          'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
        }
        price={'61229'}
        change={0.0}
        chartData={data}
      />
      <FavoriteItem
        imageUrl={
          'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
        }
        price={'61229'}
        change={0.000002}
        chartData={data}
      />
    </S.FavoritesWrapper>
  );
};

export default Favorites;
