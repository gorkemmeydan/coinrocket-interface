import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { NewsItem } from '../../../types/types';

import * as S from './news-item.styled';

interface Props {
  data: NewsItem;
}

const NewsItemContainer: React.FC<Props> = ({ data }: Props) => {
  return (
    <S.NewsItemWrapper>
      <S.NewsTitleDataWrapper>
        <S.NewsTitle>{data.title}</S.NewsTitle>
        <S.NewsDate>{data.published_at}</S.NewsDate>
      </S.NewsTitleDataWrapper>
      <S.RedirectButtonWrapper
        target='_blank'
        href={data.newsUrl}
        rel='noopener noreferrer'
      >
        <HiOutlineExternalLink size={'2rem'} />
      </S.RedirectButtonWrapper>
    </S.NewsItemWrapper>
  );
};

export default NewsItemContainer;
