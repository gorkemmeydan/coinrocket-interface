import dynamic from 'next/dynamic';
import React from 'react';
import LogoutButton from './logout-button/logout-button.component';
import PanelItemsContainer from './panel-items-container/panel-items-container.component';
import PanelLogo from './panel-logo/panel-logo.component';

const DynamicColorThemeSwitch = dynamic(
  () => import('./color-theme-switch/color-theme-switch.component'),
  { ssr: false }
);

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
      <LogoutButton isFullSize={isFullSize} />
      <DynamicColorThemeSwitch />
    </S.PanelWrapper>
  );
};

export default Panel;
