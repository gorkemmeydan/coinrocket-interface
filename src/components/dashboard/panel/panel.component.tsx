import React from 'react';
import ColorThemeSwitch from './color-theme-switch/color-theme-switch.component';
import PanelItemsContainer from './panel-items-container/panel-items-container.component';
import PanelLogo from './panel-logo/panel-logo.component';

import * as S from './panel.styled';

interface PanelProps {
  isFullSize: boolean;
  isTop: boolean;
}

const Panel: React.FC<PanelProps> = ({ isFullSize, isTop }: PanelProps) => {
  return (
    <S.PanelWrapper isSmallSize={!isFullSize} isTop={isTop}>
      <PanelLogo isFullSize={isFullSize} />
      <PanelItemsContainer isFullSize={isFullSize} isTop={isTop} />
      <ColorThemeSwitch />
    </S.PanelWrapper>
  );
};

export default Panel;
