import styled from 'styled-components';

export const FavoriteItemWrapper = styled.div`
  background: var(--background);
  color: var(--text);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 20vw;
  border-radius: 25px;
  padding: 1rem;
`;

export const IconAndButtonWrapper = styled.div`
  display: flex;
  width: 18vw;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CryptoIcon = styled.img`
  height: 5vh;
  background: var(--background);
  border-radius: 1vmin;
`;

export const DropdownButton = styled.button`
  background: none;
  color: var(--text);
  border: 1px solid var(--text);

  &: hover {
    cursor: pointer;
  }
`;

export const StatisticsElementsWrapper = styled.div`
  width: 18vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
`;

export const PriceItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoinPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: var(--text);
`;

export const PriceChange = styled.div`
  font-size: 1rem;
  color: grey;
  margin-top: 10px;
  font-weight: bold;
`;

export const PriceChart = styled.div`
  width: 8vw;
  height: 5vw;
`;

export const AddToWatchlistButton = styled.div`
  background: var(--background);
  color: var(--text);

  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: dashed 1px var(--text);
  border-radius: 1vmin;
  cursor: pointer;
`;
