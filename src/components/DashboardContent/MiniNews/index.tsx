import React from 'react';
import _uniqueId from 'lodash/uniqueId';

import { NewsItem } from 'types';

import { selectNews } from '@contexts/news';
import connectToContext from '@contexts/connectToContext';

import MiniNewsItem from './MiniNewsItem';
import Spinner from '../../Spinner';
import * as S from './MiniNews.styled';

interface Props {
  newsLoading: boolean;
  news: NewsItem[];
}

const MiniNews: React.FC<Props> = React.memo(({ newsLoading, news }) => {
  const renderMiniNews = () => {
    if (news && news.length >= 3) {
      return (
        <>
          <MiniNewsItem
            key={_uniqueId('mininews-item')}
            title={news[0].title}
            newUrl={news[0].newsUrl}
          />
          <MiniNewsItem
            key={_uniqueId('mininews-item')}
            title={news[1].title}
            newUrl={news[1].newsUrl}
          />
          <MiniNewsItem
            key={_uniqueId('mininews-item')}
            title={news[2].title}
            newUrl={news[2].newsUrl}
          />
        </>
      );
    } else {
      return (
        <>
          <Spinner />
        </>
      );
    }
  };

  return (
    <S.NewsWrapper>
      <S.NewsTitle>News</S.NewsTitle>
      {newsLoading ? (
        <Spinner />
      ) : news ? (
        <S.NewsContainer>{renderMiniNews()}</S.NewsContainer>
      ) : null}
    </S.NewsWrapper>
  );
});

export default connectToContext(MiniNews, selectNews);
