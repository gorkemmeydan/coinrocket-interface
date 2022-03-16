import styled from 'styled-components';

export const NewsItemWrapper = styled.div`
  background: var(--background);
  color: var(--text);

  display: flex;
  flex-direction: row;
  height: 10vh;
  flex: 0 1;
  justify-content: space-between;
  border: solid var(--text);
  border-width: thin;
  border-radius: 1vh;
  padding: 2vmin;
`;

export const NewsTitle = styled.div`
  font-size: calc(0.8vw + 0.8vmin);
  font-weight: bold;
`;

export const NewsDate = styled.div`
  font-size: calc(0.6vw + 0.6vmin);
  color: grey;
`;

export const NewsTitleDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;

  &: hover {
    cursor: pointer;
  }
`;

export const RedirectButtonWrapper = styled.a``;
