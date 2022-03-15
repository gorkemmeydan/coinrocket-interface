import styled from 'styled-components';

export const MarketWrapper = styled.div`
  background: var(--background);
  color: var(--text);

  flex: 1;
  margin: 2vmin;
  border-radius: 2vmin;
  padding 2vmin;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: calc(1vw + 1vmin);
  margin-bottom: 2vh;
`;

export const HorizontalScrollable = styled.div`
  background: var(--background);
  color: var(--text);

  height: 88vh;
  width: 80vw;
  border-radius: 2vmin;
  overflow-y: auto;
  overflow-x: hidden;
`;
