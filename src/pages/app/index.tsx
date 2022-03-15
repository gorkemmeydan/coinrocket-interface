import { NextPage } from 'next';

const AppPage: NextPage = () => {
  return <></>;
};

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: '/app/dashboard',
    },
  };
}

export default AppPage;
