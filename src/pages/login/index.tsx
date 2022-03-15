import type { NextPage } from 'next';
import Header from '../../components/header/header.component';
import LoginContent from '../../components/login-content/login-content.component';

const Login: NextPage = () => {
  return (
    <>
      <Header withLoginButton={false} withHomePageLink={true} />
      <LoginContent />
    </>
  );
};

export default Login;
