import React from 'react';
import { useRouter } from 'next/router';

import { logout } from '@services/api/logout';

import { BiLogOut } from 'react-icons/bi';

import * as S from './LogoutButton.styled';

interface PanelItemsContainerProps {
  isFullSize: boolean;
}

const LogoutButton: React.FC<PanelItemsContainerProps> = ({ isFullSize }) => {
  const router = useRouter();

  const handleClick = () => {
    logout().then((result) => {
      if (!result) {
        router.push('/');
      }
    });
  };

  return (
    <S.PanelItemWrapper onClick={() => handleClick()}>
      <S.IconWrapper>
        <BiLogOut size='30' />
      </S.IconWrapper>
      {isFullSize ? <S.TextWrapper>Logout</S.TextWrapper> : null}
    </S.PanelItemWrapper>
  );
};

export default LogoutButton;
