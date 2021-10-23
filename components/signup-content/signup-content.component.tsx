import { useRouter } from 'next/router';
import React from 'react';
import SignUpForm from '../signup-form/signup-form.component';

import * as S from './signup-content.styled';

const SignUpContent: React.FC = () => {
  const router = useRouter();

  return (
    <S.SignUpContentWrapper>
      <S.SignUpTitle>Sign Up</S.SignUpTitle>
      <SignUpForm />
      <S.RedirectToSignInWrapper>
        <S.RedirectInfoText>Already have an account?</S.RedirectInfoText>
        <S.RedirectToSignInText onClick={() => router.push('/login')}>
          Sign in now.
        </S.RedirectToSignInText>
      </S.RedirectToSignInWrapper>
    </S.SignUpContentWrapper>
  );
};

export default SignUpContent;
