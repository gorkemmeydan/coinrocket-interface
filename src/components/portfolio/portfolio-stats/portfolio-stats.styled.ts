import styled from 'styled-components';

export const PortFolioStatsWrapper = styled.div`
  background: black;
  color: white;
  padding: 2vmin;
  margin: 1vh;
  border-radius: 2vmin;
  height: 25vh;
  width: 95%;

  display: flex;
  flex-direction: column;
`;

export const PortfolioHeaderWrapper = styled.div`
  display: flex;
  flex: direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
`;

export const PortfolioHeaderText = styled.div`
  font-weight: bold;
  font-size: calc(0.8vw + 0.8vmin);
`;

export const HidePortfolioButton = styled.div`
  &: hover {
    cursor: pointer;
  }
`;

export const StatsWrapper = styled.div`
  margin-top: 1vh;
  padding: 1vh;
  flex: 1;

  display: flex;
  flex-direction: row;
  gap: 2vmin;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2vh;
  border: solid white;
  border-radius: 2vmin;
  padding: 1.5vmin;
`;

export const MoneyField = styled.div`
  font-weight: bold;
  font-size: calc(1vw + 1vmin);
`;

export const TextField = styled.div`
  font-size: calc(0.9vw + 0.9vmin);
`;

export const TextAndColorWrapper = styled.div`
  display: flex;
  gap: 1vw;
`;

interface ColoredTextProps {
  isPositive: boolean;
}

export const ColoredText = styled.div<ColoredTextProps>`
  font-size: calc(0.9vw + 0.9vmin);
  color: ${(p: ColoredTextProps) => (p.isPositive ? 'green' : 'red')};
`;
