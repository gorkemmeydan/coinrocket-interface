import styled from 'styled-components';

export const TrendingItemWrapper = styled.div`
  color: white;
  border: solid white;
  border-width: thin;
  border-radius: 1vh;
  padding: 1.5vh;
  height: 8vh;
`;

export const CrpytoIconNameWrapper = styled.div`
  flex: 0 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CryptoIcon = styled.img`
  height: 5vh;
  background: white;
  border-radius: 1vmin;
`;

export const CryptoName = styled.div`
  display: flex;
  height: 2vh;
  font-size: calc(0.7vw + 0.7vmin);
`;
