import styled from 'styled-components';

export const RowData = styled.td``;

export const RowDataWrapper = styled.tr`
  box-shadow: 0px 2px 0px 0px var(--text);
  height: 8vh;
`;

interface ColoredTextProps {
  isPositive: boolean;
}
export const ColoredText = styled.div<ColoredTextProps>`
  color: ${(p: ColoredTextProps) => (p.isPositive ? 'green' : 'red')};
`;

export const PriceChartWrapper = styled.div`
  height: 8vh;
  width: 10vw;
`;
