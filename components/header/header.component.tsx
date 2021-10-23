import React from 'react';

import { useRouter } from 'next/router';
import * as S from './header.styled';
import RocketIcon from '../../public/rocket';

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
