import { useEffect } from 'react';
import type { NextPage } from 'next';

import { useNews } from '@contexts/news';

import { getNews } from '@services/api/getNews';

import AppLayout from '@layouts/app';
import NewsContent from '@components/NewsContent';
import { Media, MediaContextProvider } from '@styles/media';

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
        <AppLayout size={'mobile'} children={<NewsContent />} />
      </Media>
      <Media at='small'>
        <AppLayout size={'small'} children={<NewsContent />} />
      </Media>
      <Media at='medium'>
        <AppLayout size={'medium'} children={<NewsContent />} />
      </Media>
      <Media greaterThanOrEqual='large'>
        <AppLayout size={'large'} children={<NewsContent />} />
      </Media>
    </MediaContextProvider>
  );
};

export default News;
