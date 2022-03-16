import React from 'react';

import { useNews } from '@contexts/news';

import { NewsItem } from 'types';

import Spinner from '../Spinner';
import NewsItemContainer from './NewsItemContainer';
import * as S from './NewsContent.styled';

const NewsLayout: React.FC = () => {
  const { newsLoading, news } = useNews();

  return (
    <S.NewsWrapper>
      <S.Title>News</S.Title>
      {newsLoading ? (
        <Spinner />
      ) : (
        <S.HorizontalScrollable>
          <S.NewsContainer>
            {news ? (
              news.map((newsItem: NewsItem) => (
                <NewsItemContainer key={newsItem.id} data={newsItem} />
              ))
            ) : (
              <Spinner />
            )}
          </S.NewsContainer>
        </S.HorizontalScrollable>
      )}
    </S.NewsWrapper>
  );
};

export default NewsLayout;
