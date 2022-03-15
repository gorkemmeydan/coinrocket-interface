import React from 'react';
import { useNews } from '../../contexts/news.context';
import { NewsItem } from '../../types/types';
import Spinner from '../spinner/spinner.component';
import NewsItemContainer from './news-item/news-item.component';

import * as S from './news.styled';

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
