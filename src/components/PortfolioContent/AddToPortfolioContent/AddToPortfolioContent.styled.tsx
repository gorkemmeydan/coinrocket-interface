import styled from 'styled-components';

export const AddToPortfolioContentWrapper = styled.div`
  background: var(--background);
  color: var(--text);

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

export const AddToPortfolioButton = styled.div`
  background: var(--text);
  color: var(--background);

  width: 10vw;
  height: 5vh;
  border-radius: 2vmin;

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
