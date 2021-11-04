import styled from 'styled-components';

export const AddToWatchlistContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

export const AddToWatchlistButton = styled.div`
  width: 10vw;
  height: 5vh;
  border-radius: 2vmin;
  background: white;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;

  cursor: pointer;

  box-shadow: 3px 3px #888888;
`;

export const ErrorText = styled.div`
  height: 3vh;
  color: red;
`;
