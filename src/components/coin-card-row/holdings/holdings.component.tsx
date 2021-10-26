import React from 'react';

import * as S from './holdings.styled';

interface HoldingsProps {
  totalMoney: number;
  totalAmount: number;
}

const Holdings: React.FC<HoldingsProps> = ({
  totalMoney,
  totalAmount,
}: HoldingsProps) => {
  return (
    <S.HoldingsWrapper>
      <S.TextField>${totalMoney}</S.TextField>
      <S.TextField>{totalAmount}</S.TextField>
    </S.HoldingsWrapper>
  );
};

export default Holdings;
