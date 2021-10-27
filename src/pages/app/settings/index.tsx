import type { NextPage } from 'next';
import SettingsLayout from '../../../components/settings/settings.component';
import AppLayout from '../../../layouts/app/app.layout';
import { Media, MediaContextProvider } from '../../../styles/media';

const Settings: NextPage = () => {
  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <AppLayout size={'mobile'} children={<SettingsLayout />} />
      </Media>
      <Media at='small'>
        <AppLayout size={'small'} children={<SettingsLayout />} />
      </Media>
      <Media at='medium'>
        <AppLayout size={'medium'} children={<SettingsLayout />} />
      </Media>
      <Media greaterThanOrEqual='large'>
        <AppLayout size={'large'} children={<SettingsLayout />} />
      </Media>
    </MediaContextProvider>
  );
};

export default Settings;
