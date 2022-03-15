import styled from 'styled-components';

export const TrendingWrapper = styled.div`
  background: var(--background);
  color: var(--text);

  height: 72vh;
  width: 20vw;
  border-radius: 2vmin;
  padding: 2vmin;

  display: flex;
  flex-direction: column;
`;

export const TrendingTitle = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

export const TrendingItemsContainer = styled.div`
  margin-top: 1.5vh;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;
