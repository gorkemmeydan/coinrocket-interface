import type { NextPage } from 'next';
import Header from '../../components/header/header.component';
import LoginContent from '../../components/login-content/login-content.component';

const LoginPage: NextPage = () => {
  return (
    <div>
      <Header withLoginButton={false} withHomePageLink={true} />
      <LoginContent />
    </div>
  );
};

export default LoginPage;
