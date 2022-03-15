import type { NextPage } from 'next';
import { useEffect } from 'react';
import DashboardLayout from '../../../components/dashboard/dashboard.component';
import { useAuth } from '../../../contexts/auth.context';
import { useHoldings } from '../../../contexts/holdings.context';
import { useMarket } from '../../../contexts/market.context';
import { useNews } from '../../../contexts/news.context';
import { useTrending } from '../../../contexts/trending.context';
import AppLayout from '../../../layouts/app/app.layout';
import getDashboardData from '../../../services/getDashboardData';

import { Media, MediaContextProvider } from '../../../styles/media';

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
          children={<DashboardLayout isFullSize={false} />}
        />
      </Media>
      <Media at='small'>
        <AppLayout
          size={'small'}
          children={<DashboardLayout isFullSize={false} />}
        />
      </Media>
      <Media at='medium'>
        <AppLayout
          size={'medium'}
          children={<DashboardLayout isFullSize={false} />}
        />
      </Media>
      <Media greaterThanOrEqual='large'>
        <AppLayout
          size={'large'}
          children={<DashboardLayout isFullSize={true} />}
        />
      </Media>
    </MediaContextProvider>
  );
};

export default Dashboard;
