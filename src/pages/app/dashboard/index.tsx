import type { NextPage } from 'next';
import { useEffect } from 'react';

import { useAuth } from '@contexts/auth';
import { useHoldings } from '@contexts/holdings';
import { useMarket } from '@contexts/market';
import { useNews } from '@contexts/news';
import { useTrending } from '@contexts/trending';

import getDashboardData from '@services/getDashboardData';

import DashboardContent from '@components/DashboardContent';
import AppLayout from '@layouts/app';
import { Media, MediaContextProvider } from '@styles/media';

const Dashboard: NextPage = () => {
  const { setTrendingLoading, setTrendingCoins } = useTrending();
  const { setCoins } = useMarket();
  const { setNewsLoading, setNews } = useNews();
  const { setEmail } = useAuth();
  const { setHoldingsLoading, setHoldings } = useHoldings();

  useEffect(() => {
    getDashboardData({
      setTrendingLoading,
      setTrendingCoins,
      setCoins,
      setNewsLoading,
      setNews,
      setEmail,
      setHoldingsLoading,
      setHoldings,
    });
  }, []);

  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <AppLayout
          size={'mobile'}
          children={<DashboardContent isFullSize={false} />}
        />
      </Media>
      <Media at='small'>
        <AppLayout
          size={'small'}
          children={<DashboardContent isFullSize={false} />}
        />
      </Media>
      <Media at='medium'>
        <AppLayout
          size={'medium'}
          children={<DashboardContent isFullSize={false} />}
        />
      </Media>
      <Media greaterThanOrEqual='large'>
        <AppLayout
          size={'large'}
          children={<DashboardContent isFullSize={true} />}
        />
      </Media>
    </MediaContextProvider>
  );
};

export default Dashboard;
