import React from 'react';

import * as S from './TrendingItem.styled';

interface Props {
  imageSrc: string;
  coinName: string;
  coinSymbol: string;
}

const TrendingItem: React.FC<Props> = ({
  imageSrc,
  coinName,
  coinSymbol,
}: Props) => {
  return (
    <S.TrendingItemWrapper>
      <S.CrpytoIconNameWrapper>
        <S.CryptoIcon src={imageSrc} />
        <S.CryptoName>
          {coinName} / {coinSymbol}
        </S.CryptoName>
      </S.CrpytoIconNameWrapper>
    </S.TrendingItemWrapper>
  );
};

export default TrendingItem;
