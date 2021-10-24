import styled from 'styled-components';

export const TrendingWrapper = styled.div`
  height: 72vh;
  width: 20vw;
  background: black;
  border-radius: 2vmin;
  padding: 2vmin;

  display: flex;
  flex-direction: column;
`;

export const TrendingTitle = styled.div`
  font-weight: bold;
  font-size: 2rem;
  color: white;
`;

export const TrendingItemsContainer = styled.div`
  margin-top: 1.5vh;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;
