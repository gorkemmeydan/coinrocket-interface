import type { NextPage } from 'next';

import Header from '@components/Header';
import SignUpContent from '@components/SignupContent';

const SignUp: NextPage = () => {
  return (
    <>
      <Header withLoginButton={false} withHomePageLink={true} />
      <SignUpContent />
    </>
  );
};

export default SignUp;
