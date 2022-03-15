import { notifyError } from '../lib/toast';
import { CoinData, NewsItem, TrendingCoin, UserHoldings } from '../types/types';
import { getMarketTop100 } from './api/getMarketTop100';
import { getMe } from './api/getMe';
import { getNews } from './api/getNews';
import { getTrending } from './api/getTrending';
import getUserHoldingsAndParseData from './getUserHoldingsAndParseData';

interface Props {
  setTrendingLoading: (state: boolean) => void;
  setTrendingCoins: (trendingCoins: TrendingCoin[]) => void;
  setCoins: (coins?: CoinData[] | undefined) => void;
  setNewsLoading: (state: boolean) => void;
  setNews: (news?: NewsItem[] | undefined) => void;
  setEmail: (email?: string | undefined) => void;
  setHoldingsLoading: (state: boolean) => void;
  setHoldings: (holdings?: UserHoldings | undefined) => void;
}

const getDashboardData = async ({
  setTrendingLoading,
  setTrendingCoins,
  setCoins,
  setNewsLoading,
  setNews,
  setEmail,
  setHoldingsLoading,
  setHoldings,
}: Props) => {
  setTrendingLoading(true);
  setHoldingsLoading(true);
  setNewsLoading(true);

  // user might not logged in, hence get the name from token
  let email = '';
  await getMe().then((result) => {
    setEmail(result);
    email = result ? result : '';
  });

  const promises = [
    getTrending(),
    getMarketTop100(),
    getNews(),
    getUserHoldingsAndParseData({ email, setHoldings }),
  ];

  await Promise.all<any>(promises)
    .then(([trendingCoins, marketCoins, news, ...other]) => {
      setTrendingCoins(trendingCoins);
      setCoins(marketCoins);
      setNews(news);
    })
    .catch(() => notifyError());

  setTrendingLoading(false);
  setNewsLoading(false);
  setHoldingsLoading(false);
};

export default getDashboardData;
