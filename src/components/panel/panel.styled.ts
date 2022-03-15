import styled, { css } from 'styled-components';

interface PanelWrapperProps {
  isSmallSize: boolean;
  isTop: boolean;
}

const TopPanel = css`
  height: 10vh;
  width: 100%;
  flex-direction: row;
`;

const SmallPanel = css`
  width: 5%;
  min-width: 100px;
`;

const getPanelStyles = (props: PanelWrapperProps) => {
  if (props.isTop) {
    return TopPanel;
  } else if (props.isSmallSize) {
    return SmallPanel;
  }
};

export const PanelWrapper = styled.div<PanelWrapperProps>`
  background: var(--background);
  color: var(--text);

  height: 100vh;
  width: 15%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;

  ${getPanelStyles}
`;
