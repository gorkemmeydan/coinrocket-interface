import React from 'react';
import TrendingItem from './trending-item/trending-item.component';

import * as S from './trending.styled';

const coins = [
  {
    item: {
      id: 'shiba-inu',
      coin_id: 11939,
      name: 'Shiba Inu',
      symbol: 'SHIB',
      _market_cap_rank: 11,
      get market_cap_rank() {
        return this._market_cap_rank;
      },
      set market_cap_rank(value) {
        this._market_cap_rank = value;
      },
      thumb:
        'https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446',
      small:
        'https://assets.coingecko.com/coins/images/11939/small/shiba.png?1622619446',
      large:
        'https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446',
      slug: 'shiba-inu',
      price_btc: 6.390639704626619e-10,
      score: 0,
    },
  },
  {
    item: {
      id: 'polkabridge',
      coin_id: 13744,
      name: 'PolkaBridge',
      symbol: 'PBR',
      market_cap_rank: 881,
      thumb:
        'https://assets.coingecko.com/coins/images/13744/thumb/symbol-whitebg200x200.png?1611377553',
      small:
        'https://assets.coingecko.com/coins/images/13744/small/symbol-whitebg200x200.png?1611377553',
      large:
        'https://assets.coingecko.com/coins/images/13744/large/symbol-whitebg200x200.png?1611377553',
      slug: 'polkabridge',
      price_btc: 0.00001018184085436477,
      score: 1,
    },
  },
  {
    item: {
      id: 'kuma-inu',
      coin_id: 15526,
      name: 'Kuma Inu',
      symbol: 'KUMA',
      market_cap_rank: 725,
      thumb:
        'https://assets.coingecko.com/coins/images/15526/thumb/kuma_inu.PNG?1621128824',
      small:
        'https://assets.coingecko.com/coins/images/15526/small/kuma_inu.PNG?1621128824',
      large:
        'https://assets.coingecko.com/coins/images/15526/large/kuma_inu.PNG?1621128824',
      slug: 'kuma-inu',
      price_btc: 4.96818547103753e-12,
      score: 2,
    },
  },
  {
    item: {
      id: 'moonriver',
      coin_id: 17984,
      name: 'Moonriver',
      symbol: 'MOVR',
      market_cap_rank: 121,
      thumb:
        'https://assets.coingecko.com/coins/images/17984/thumb/9285.png?1630028620',
      small:
        'https://assets.coingecko.com/coins/images/17984/small/9285.png?1630028620',
      large:
        'https://assets.coingecko.com/coins/images/17984/large/9285.png?1630028620',
      slug: 'moonriver',
      price_btc: 0.006658199927933905,
      score: 3,
    },
  },
  {
    item: {
      id: 'aurory',
      coin_id: 19324,
      name: 'Aurory',
      symbol: 'AURY',
      market_cap_rank: 387,
      thumb:
        'https://assets.coingecko.com/coins/images/19324/thumb/logo.png?1635076945',
      small:
        'https://assets.coingecko.com/coins/images/19324/small/logo.png?1635076945',
      large:
        'https://assets.coingecko.com/coins/images/19324/large/logo.png?1635076945',
      slug: 'aurory',
      price_btc: 0.00023200923178263508,
      score: 4,
    },
  },
  {
    item: {
      id: 'bnbpay',
      coin_id: 17519,
      name: 'BNBPay',
      symbol: 'BPAY',
      market_cap_rank: 542,
      thumb:
        'https://assets.coingecko.com/coins/images/17519/thumb/bnp.png?1634029495',
      small:
        'https://assets.coingecko.com/coins/images/17519/small/bnp.png?1634029495',
      large:
        'https://assets.coingecko.com/coins/images/17519/large/bnp.png?1634029495',
      slug: 'bnbpay',
      price_btc: 2.3165954240239645e-7,
      score: 5,
    },
  },
  {
    item: {
      id: 'harmony',
      coin_id: 4344,
      name: 'Harmony',
      symbol: 'ONE',
      market_cap_rank: 56,
      thumb:
        'https://assets.coingecko.com/coins/images/4344/thumb/Y88JAze.png?1565065793',
      small:
        'https://assets.coingecko.com/coins/images/4344/small/Y88JAze.png?1565065793',
      large:
        'https://assets.coingecko.com/coins/images/4344/large/Y88JAze.png?1565065793',
      slug: 'harmony',
      price_btc: 0.000004992617935575165,
      score: 6,
    },
  },
];

const Trending: React.FC = () => {
  return (
    <S.TrendingWrapper>
      <S.TrendingTitle>Trending</S.TrendingTitle>
      <S.TrendingItemsContainer>
        {coins.map((coin, i) => (
          <TrendingItem
            key={coin.item.coin_id}
            imageSrc={coin.item.large}
            coinName={coin.item.name}
            coinSymbol={coin.item.symbol}
          />
        ))}
      </S.TrendingItemsContainer>
    </S.TrendingWrapper>
  );
};

export default Trending;
