import styled from 'styled-components';

export const NewsWrapper = styled.div`
  background: var(--background);
  color: var(--text);

  display: flex;
  flex-direction: column;

  flex: 1;
  margin: 2vmin;
  border-radius: 2vmin;
  padding: 2vmin;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: calc(1vw + 1vmin);
  margin-bottom: 2vh;
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1vmin;
  gap: 1vh;
`;

export const HorizontalScrollable = styled.div`
  background: var(--background);
  height: 88vh;
  width: 80vw;
  border-radius: 2vmin;
  overflow-y: auto;
  overflow-x: hidden;
`;
