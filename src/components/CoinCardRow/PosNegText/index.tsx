import React from 'react';

import { ColoredText } from '../CoinCardRow.styled';

interface Props {
  change: number;
}

const PosNegText: React.FC<Props> = ({ change }: Props) => {
  const isPositive = change >= 0;

  return (
    <ColoredText isPositive={isPositive}>
      {`${isPositive ? '+' : ''}`}
      {change}%
    </ColoredText>
  );
};

export default PosNegText;
