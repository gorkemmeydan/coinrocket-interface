import type { NextPage } from 'next';

import Header from '@components/Header';
import LoginContent from '@components/LoginContent';

const Login: NextPage = () => {
  return (
    <>
      <Header withLoginButton={false} withHomePageLink={true} />
      <LoginContent />
    </>
  );
};

export default Login;
