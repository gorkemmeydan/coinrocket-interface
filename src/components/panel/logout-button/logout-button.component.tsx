import React from 'react';
import { useRouter } from 'next/router';

import { BiLogOut } from 'react-icons/bi';

import * as S from './logout-button.styled';
import { logout } from '../../../services/api/logout';

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
