import React from 'react';
import { Props } from 'recharts/types/component/DefaultTooltipContent';

import * as S from './coin-name.styled';

interface CoinDataProps {
  logoUrl: string;
  name: string;
  symbol: string;
}

interface CoinNameProps {
  isFullSize: boolean;
  coinData: CoinDataProps;
}

const CoinName: React.FC<CoinNameProps> = ({
  isFullSize,
  coinData,
}: CoinNameProps) => {
  return (
    <S.CoinNameWrapper isFullSize={isFullSize}>
      <S.CoinIcon src={coinData.logoUrl} />
      <S.CoinNameAndSymbolWrapper>
        {isFullSize ? <S.CoinNameText> {coinData.name} </S.CoinNameText> : null}
        <S.CoinSymbol>{coinData.symbol}</S.CoinSymbol>
      </S.CoinNameAndSymbolWrapper>
    </S.CoinNameWrapper>
  );
};

export default CoinName;
