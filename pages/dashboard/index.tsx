import type { NextPage } from 'next';
import { Media, MediaContextProvider } from '../media';

const Dashboard: NextPage = () => {
  return (
    <MediaContextProvider>
      <Media at='mobile'>Hello mobile!</Media>
      <Media at='small'>Hello small!</Media>
      <Media at='medium'>Hello medium!</Media>
      <Media at='large'>Hello large!</Media>
    </MediaContextProvider>
  );
};

export default Dashboard;
