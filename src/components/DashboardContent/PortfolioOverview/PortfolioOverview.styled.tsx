import styled from 'styled-components';

export const PortfolioOverviewWrapper = styled.div`
  background: var(--background);
  color: var(--text);

  height: 50vh;
  width: 60vw;
  padding: 3vmin;
  border-radius: 3vmin;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1vmin;
`;

export const ChartWrapper = styled.div`
  flex: 1;
  height: 40vh;
`;
