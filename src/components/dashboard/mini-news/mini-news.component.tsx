import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import MiniNewsItem from './mini-news-item/mini-news-item.component';

import * as S from './mini-news.styled';

const MiniNews: React.FC = () => {
  const news = useAppSelector((state) => state.news.news);

  return (
    <S.NewsWrapper>
      <S.NewsTitle>News</S.NewsTitle>
      <S.NewsContainer>
        <MiniNewsItem title={news[0].title} newUrl={news[0].newsUrl} />
        <MiniNewsItem title={news[1].title} newUrl={news[1].newsUrl} />
        <MiniNewsItem title={news[2].title} newUrl={news[2].newsUrl} />
      </S.NewsContainer>
    </S.NewsWrapper>
  );
};

export default MiniNews;
