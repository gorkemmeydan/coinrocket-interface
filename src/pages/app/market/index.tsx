import type { NextPage } from 'next';
import MarketLayout from '../../../components/market/market.component';
import AppLayout from '../../../layouts/app/app.layout';
import { Media, MediaContextProvider } from '../../../styles/media';

const Market: NextPage = () => {
  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <AppLayout size={'mobile'} children={<MarketLayout />} />
      </Media>
      <Media at='small'>
        <AppLayout size={'small'} children={<MarketLayout />} />
      </Media>
      <Media at='medium'>
        <AppLayout size={'medium'} children={<MarketLayout />} />
      </Media>
      <Media greaterThanOrEqual='large'>
        <AppLayout size={'large'} children={<MarketLayout />} />
      </Media>
    </MediaContextProvider>
  );
};

export default Market;
