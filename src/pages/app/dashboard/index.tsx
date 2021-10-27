import type { NextPage } from 'next';
import DashboardLayout from '../../../components/dashboard/dashboard.component';
import AppLayout from '../../../layouts/app/app.layout';

import { Media, MediaContextProvider } from '../../../styles/media';

const Dashboard: NextPage = () => {
  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <AppLayout size={'mobile'} children={<DashboardLayout />} />
      </Media>
      <Media at='small'>
        <AppLayout size={'small'} children={<DashboardLayout />} />
      </Media>
      <Media at='medium'>
        <AppLayout size={'medium'} children={<DashboardLayout />} />
      </Media>
      <Media greaterThanOrEqual='large'>
        <AppLayout size={'large'} children={<DashboardLayout />} />
      </Media>
    </MediaContextProvider>
  );
};

export default Dashboard;
