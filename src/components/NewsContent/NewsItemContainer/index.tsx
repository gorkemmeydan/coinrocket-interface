import React, { useState } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { NewsItem } from 'types';
import Modal from '../../Modal';
import NewsContent from '../NewsModalContent';

import * as S from './NewsItemContainer.styled';

interface Props {
  data: NewsItem;
}

const NewsItemContainer: React.FC<Props> = ({ data }: Props) => {
  const isModalOpen = useState(false);

  return (
    <S.NewsItemWrapper>
      <S.NewsTitleDataWrapper onClick={() => isModalOpen[1](true)}>
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
      <Modal
        isOpenState={isModalOpen}
        children={<NewsContent content={data.content} />}
        title={data.title}
      />
    </S.NewsItemWrapper>
  );
};

export default NewsItemContainer;
