import { useEffect } from 'react';
import type { NextPage } from 'next';

import { useAuth } from '@contexts/auth';
import { useHoldings } from '@contexts/holdings';
import { useMarket } from '@contexts/market';

import getPortfolioPageData from '@services/getPortfolioPageData';

import PortfolioContent from '@components/PortfolioContent';
import AppLayout from '@layouts/app';
import { Media, MediaContextProvider } from '@styles/media';

const Portfolio: NextPage = () => {
  const { setCoins } = useMarket();
  const { setEmail } = useAuth();
  const { setHoldingsLoading, setHoldings } = useHoldings();

  useEffect(() => {
    getPortfolioPageData({
      setCoins,
      setEmail,
      setHoldingsLoading,
      setHoldings,
    });
  }, []);

  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <AppLayout size={'mobile'} children={<PortfolioContent />} />
      </Media>
      <Media at='small'>
        <AppLayout size={'small'} children={<PortfolioContent />} />
      </Media>
      <Media at='medium'>
        <AppLayout size={'medium'} children={<PortfolioContent />} />
      </Media>
      <Media greaterThanOrEqual='large'>
        <AppLayout size={'large'} children={<PortfolioContent />} />
      </Media>
    </MediaContextProvider>
  );
};

export default Portfolio;
