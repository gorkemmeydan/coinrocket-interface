import styled from 'styled-components';

export const NewsWrapper = styled.div`
  background: var(--background);
  color: var(--text);

  height: 21vh;
  width: 60vw;
  border-radius: 2vmin;

  display: flex;
  flex-direction: column;
  padding: 2vmin;
`;

export const NewsTitle = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

export const NewsContainer = styled.div`
  margin-top: 0.5vh;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;
