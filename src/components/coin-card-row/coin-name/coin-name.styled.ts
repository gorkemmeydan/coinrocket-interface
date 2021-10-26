import styled from 'styled-components';

interface CoinNameWrapperProps {
  isFullSize: boolean;
}

export const CoinNameWrapper = styled.div<CoinNameWrapperProps>`
  display: flex;
  color: white;
  align-items: center;
  gap: 2vw;

  flex-direction: ${(p: CoinNameWrapperProps) =>
    p.isFullSize ? 'row' : 'column'};
`;

export const CoinIcon = styled.img`
  height: 30px;
  width: 30px;
`;

export const CoinNameAndSymbolWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const CoinNameText = styled.div``;

export const CoinSymbol = styled.div``;
