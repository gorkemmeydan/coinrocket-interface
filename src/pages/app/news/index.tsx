import type { NextPage } from 'next';
import { useEffect } from 'react';
import NewsLayout from '../../../components/news/news.component';
import { useNews } from '../../../contexts/news.context';
import AppLayout from '../../../layouts/app/app.layout';
import { getNews } from '../../../services/api/getNews';
import { Media, MediaContextProvider } from '../../../styles/media';

const News: NextPage = () => {
  const { setNewsLoading, setNews } = useNews();

  useEffect(() => {
    setNewsLoading(true);
    getNews().then((result) => setNews(result));
    setNewsLoading(false);
  }, []);

  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <AppLayout size={'mobile'} children={<NewsLayout />} />
      </Media>
      <Media at='small'>
        <AppLayout size={'small'} children={<NewsLayout />} />
      </Media>
      <Media at='medium'>
        <AppLayout size={'medium'} children={<NewsLayout />} />
      </Media>
      <Media greaterThanOrEqual='large'>
        <AppLayout size={'large'} children={<NewsLayout />} />
      </Media>
    </MediaContextProvider>
  );
};

export default News;
