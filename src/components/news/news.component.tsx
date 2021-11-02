import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import { fetchNewsStartAsync } from '../../redux/news/news.actions';
import { News, NewsItem } from '../../types/types';
import NewsItemContainer from './news-item/news-item.component';

import * as S from './news.styled';

const NewsLayout: React.FC = () => {
  const dispatch = useDispatch();
  const news = useAppSelector((state) => state.news.news);

  useEffect(() => {
    dispatch(fetchNewsStartAsync());
  }, [dispatch]);

  return (
    <S.NewsWrapper>
      <S.Title>News</S.Title>
      <S.HorizontalScrollable>
        <S.NewsContainer>
          {news.map((newsItem: NewsItem) => (
            <NewsItemContainer key={newsItem.id} data={newsItem} />
          ))}
        </S.NewsContainer>
      </S.HorizontalScrollable>
    </S.NewsWrapper>
  );
};

export default NewsLayout;
