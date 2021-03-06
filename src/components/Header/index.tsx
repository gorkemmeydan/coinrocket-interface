import React from 'react';
import { useRouter } from 'next/router';

import RocketIcon from '@assets/rocket';
import * as S from './Header.styled';

interface HeaderProps {
  withLoginButton: boolean;
  withHomePageLink: boolean;
}

const Header: React.FC<HeaderProps> = ({
  withLoginButton,
  withHomePageLink,
}: HeaderProps) => {
  const router = useRouter();

  return (
    <S.HeaderWrapper>
      <S.LogoAndNameWrapper
        onClick={() => (withHomePageLink ? router.push('/') : null)}
        homePageHover={withHomePageLink}
      >
        <S.LogoContainer>
          <RocketIcon />
        </S.LogoContainer>
        <S.CompanyName>CoinRocket</S.CompanyName>
      </S.LogoAndNameWrapper>
      {withLoginButton ? (
        <S.LaunchAppButton onClick={() => router.push('/login')}>
          Sign In
        </S.LaunchAppButton>
      ) : null}
    </S.HeaderWrapper>
  );
};

export default Header;
