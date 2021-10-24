import React from 'react';

import { HiOutlineExternalLink } from 'react-icons/hi';

import * as S from './news-item.styled';

interface NewsItemProps {
  title: string;
  newUrl: string;
}

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  newUrl,
}: NewsItemProps) => {
  return (
    <S.NewsItemWrapper>
      <S.NewsTitle>{title}</S.NewsTitle>
      <S.RedirectButtonWrapper
        target='_blank'
        href={newUrl}
        rel='noopener noreferrer'
      >
        <HiOutlineExternalLink size={'1.2rem'} />
      </S.RedirectButtonWrapper>
    </S.NewsItemWrapper>
  );
};

export default NewsItem;
