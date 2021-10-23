import type { NextPage } from 'next';
import DashboardLarge from '../../../layouts/dashboard/DashboardLarge.layout';
import DashboardMedium from '../../../layouts/dashboard/DashboardMedium.layout';
import DashboardMobile from '../../../layouts/dashboard/DashboardMobile.layout';
import DashboardSmall from '../../../layouts/dashboard/DashboardSmall.layout';
import { Media, MediaContextProvider } from '../../../styles/media';

const Dashboard: NextPage = () => {
  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <DashboardMobile />
      </Media>
      <Media at='small'>
        <DashboardSmall />
      </Media>
      <Media at='medium'>
        <DashboardMedium />
      </Media>
      <Media greaterThanOrEqual='large'>
        <DashboardLarge />
      </Media>
    </MediaContextProvider>
  );
};

export default Dashboard;
