import type { NextPage } from 'next';
import { useEffect } from 'react';
import MarketLayout from '../../../components/market/market.component';
import { useMarket } from '../../../contexts/market.context';
import AppLayout from '../../../layouts/app/app.layout';
import { getMarketTop100 } from '../../../services/api/getMarketTop100';
import { Media, MediaContextProvider } from '../../../styles/media';

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
