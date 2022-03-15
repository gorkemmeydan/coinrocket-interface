import { useRouter } from 'next/router';
import React from 'react';
import LoginForm from '../login-form/login-form.component';

import * as S from './login-content.styled';

const LoginContent: React.FC = () => {
  const router = useRouter();
  const { session } = router.query;

  return (
    <S.LoginContentWrapper>
      {session && <S.QueryMessage>Your session has expired</S.QueryMessage>}
      <S.LoginTitle>Log In</S.LoginTitle>
      <LoginForm />
      <S.RedirectToSignUpWrapper>
        <S.RedirectInfoText>New to CoinRocket?</S.RedirectInfoText>
        <S.RedirectToSignUpText onClick={() => router.push('/signup')}>
          Sign up now.
        </S.RedirectToSignUpText>
      </S.RedirectToSignUpWrapper>
    </S.LoginContentWrapper>
  );
};

export default LoginContent;
