import styled, { css } from 'styled-components';

interface PanelItemsContainerWrapperProps {
  isTop: boolean;
}

const TopPanel = css`
  flex-direction: row;
`;

export const PanelItemsContainerWrapper = styled.div<PanelItemsContainerWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(p: PanelItemsContainerWrapperProps) => (p.isTop ? TopPanel : null)};)}
`;
