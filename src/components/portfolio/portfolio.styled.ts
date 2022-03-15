import styled from 'styled-components';

export const PortfolioWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  gap: 1vh;
`;

export const HorizontalScrollable = styled.div`
  background: var(--background);

  height: 70vh;
  width: 80vw;
  border-radius: 2vmin;
  overflow-y: auto;
  overflow-x: hidden;
`;
