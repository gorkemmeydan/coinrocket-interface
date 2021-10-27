import type { NextPage } from 'next';
import NewsLayout from '../../../components/news/news.component';
import AppLayout from '../../../layouts/app/app.layout';
import { Media, MediaContextProvider } from '../../../styles/media';

const News: NextPage = () => {
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
