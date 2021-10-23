import styled from 'styled-components';

export const PanelItemWrapper = styled.div`
  width: 10vmin;
  height: 10vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const IconWrapper = styled.div`
  margin: auto;
`;

export const TextWrapper = styled.div`
  font-size: 30px;
`;
