import React from 'react';
import { selectNews } from '../../../contexts/news.context';
import Spinner from '../../spinner/spinner.component';
import MiniNewsItem from './mini-news-item/mini-news-item.component';
import _uniqueId from 'lodash/uniqueId';

import * as S from './mini-news.styled';
import { NewsItem } from '../../../types/types';
import connectToContext from '../../../contexts/connectToContext';

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
