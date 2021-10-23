import type { NextPage } from 'next';
import Header from '../../components/header/header.component';
import SignUpContent from '../../components/signup-content/signup-content.component';

const SignUp: NextPage = () => {
  return (
    <div>
      <Header withLoginButton={false} withHomePageLink={true} />
      <SignUpContent />
    </div>
  );
};

export default SignUp;
