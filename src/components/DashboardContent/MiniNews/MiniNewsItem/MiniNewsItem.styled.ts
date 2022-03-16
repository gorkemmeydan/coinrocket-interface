import styled from 'styled-components';

export const NewsItemWrapper = styled.div`
  background: var(--background);
  color: var(--text);

  display: flex;
  flex-direction: row;
  flex: 0 1;
  height: 5vh;
  justify-content: space-between;
  border: solid var(--text);
  border-width: thin;
  border-radius: 1vh;
  padding: 0.5vh;
`;

export const NewsTitle = styled.div`
  font-size: 1.2rem;
`;

export const CreatedAt = styled.div``;

export const RedirectButtonWrapper = styled.a``;
