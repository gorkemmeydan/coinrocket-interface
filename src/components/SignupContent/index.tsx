import React from 'react';
import { useRouter } from 'next/router';

import SignUpForm from '../SignupForm';
import * as S from './SignupContent.styled';

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
