import React from 'react';

import * as S from './news-content.styled';

interface NewsContentPorps {
  content: string;
}

const NewsContent: React.FC<NewsContentPorps> = ({
  content,
}: NewsContentPorps) => {
  return (
    <S.NewsContentWrapper>
      {content.split('\n').map((parag) => (
        <p>{parag}</p>
      ))}
    </S.NewsContentWrapper>
  );
};

export default NewsContent;
