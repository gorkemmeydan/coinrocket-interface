import { useEffect } from 'react';
import type { NextPage } from 'next';

import { useMarket } from '@contexts/market';

import { getMarketTop100 } from '@services/api/getMarketTop100';

import MarketContent from '@components/Market';
import AppLayout from '@layouts/app';
import { Media, MediaContextProvider } from '@styles/media';

const Market: NextPage = () => {
  const { setMarketLoading, setCoins } = useMarket();

  useEffect(() => {
    setMarketLoading(true);
    getMarketTop100().then((result) => setCoins(result));
    setMarketLoading(false);
  }, []);

  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <AppLayout size={'mobile'} children={<MarketContent />} />
      </Media>
      <Media at='small'>
        <AppLayout size={'small'} children={<MarketContent />} />
      </Media>
      <Media at='medium'>
        <AppLayout size={'medium'} children={<MarketContent />} />
      </Media>
      <Media greaterThanOrEqual='large'>
        <AppLayout size={'large'} children={<MarketContent />} />
      </Media>
    </MediaContextProvider>
  );
};

export default Market;
