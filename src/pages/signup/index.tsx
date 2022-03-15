import type { NextPage } from 'next';
import Header from '../../components/header/header.component';
import SignUpContent from '../../components/signup-content/signup-content.component';

const SignUp: NextPage = () => {
  return (
    <>
      <Header withLoginButton={false} withHomePageLink={true} />
      <SignUpContent />
    </>
  );
};

export default SignUp;
