import React from 'react';

import clearHtmlTags from '@utils/clearHtmlTags';

import * as S from './NewsModalContent.styled';

interface NewsContentPorps {
  content: string;
}

const NewsContent: React.FC<NewsContentPorps> = ({
  content,
}: NewsContentPorps) => {
  return (
    <S.NewsContentWrapper>
      {content.split('\n').map((parag) => (
        <p>{clearHtmlTags(parag)}</p>
      ))}
    </S.NewsContentWrapper>
  );
};

export default NewsContent;
