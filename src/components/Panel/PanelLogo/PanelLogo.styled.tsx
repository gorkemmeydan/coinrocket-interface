import styled from 'styled-components';

export const PanelLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  color: white;
`;

export const CompanyName = styled.div`
  font-size: calc(1vw + 1.2vmin);
  color: var(--text);
`;

export const LogoContainer = styled.div`
  fill: var(--text);

  transform: rotate(20deg);
  height: 5vmin;
  min-height: 30px;
  width: 5vmin;
  min-width: 30px;
`;
