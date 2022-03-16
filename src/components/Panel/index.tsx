import dynamic from 'next/dynamic';
import React from 'react';
import LogoutButton from './LogoutButton';
import PanelItemsContainer from './PanelItemsContainer';
import PanelLogo from './PanelLogo';

const DynamicColorThemeSwitch = dynamic(() => import('./ColorThemeSwitch'), {
  ssr: false,
});

import * as S from './Panel.styled';

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
