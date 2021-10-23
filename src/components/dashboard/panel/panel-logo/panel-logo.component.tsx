import React from 'react';
import RocketIcon from '../../../../assets/rocket';

import * as S from './panel-logo.styled';

interface PanelLogoProps {
  isFullSize: boolean;
}

const PanelLogo: React.FC<PanelLogoProps> = ({
  isFullSize,
}: PanelLogoProps) => {
  return (
    <S.PanelLogoWrapper>
      <S.LogoContainer>
        <RocketIcon />
      </S.LogoContainer>
      {isFullSize ? <S.CompanyName>CoinRocket</S.CompanyName> : null}
    </S.PanelLogoWrapper>
  );
};

export default PanelLogo;
