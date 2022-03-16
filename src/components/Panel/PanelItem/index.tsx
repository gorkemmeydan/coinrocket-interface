import React from 'react';
import { useRouter } from 'next/router';

import * as S from './PanelItem.styled';

interface PanelItemProps {
  displayText: boolean;
  icon: React.SVGAttributes<SVGElement>;
  text: string;
  linkPath: string;
}

const PanelItem: React.FC<PanelItemProps> = ({
  displayText,
  icon,
  text,
  linkPath,
}: PanelItemProps) => {
  const router = useRouter();

  return (
    <S.PanelItemWrapper onClick={() => router.push(linkPath)}>
      <S.IconWrapper>{icon}</S.IconWrapper>
      {displayText ? <S.TextWrapper>{text}</S.TextWrapper> : null}
    </S.PanelItemWrapper>
  );
};

export default PanelItem;
