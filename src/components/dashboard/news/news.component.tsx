import React from 'react';
import NewsItem from './news-item/news-item.component';

import * as S from './news.styled';

const dummyData = [
  {
    title: 'Centralized Exchange NFT Platforms: The Advantages & Disadvantages',
    time: '24.10.2021',
    newUrl:
      'https://messari.io/article/centralized-exchange-nft-platforms-the-advantages-disadvantages',
  },
  {
    title: 'Twitter Tips, NFTs, and The Twitterverse. ',
    time: '22.10.2021',
    newUrl: 'https://messari.io/article/twitter-tips-nfts-and-the-twitterverse',
  },
  {
    title: 'The Collegiate Athlete Creator Economy',
    time: '15.09.2021',
    newUrl: 'https://messari.io/article/the-collegiate-athlete-creator-economy',
  },
];

const News: React.FC = () => {
  return (
    <S.NewsWrapper>
      <S.NewsTitle>News</S.NewsTitle>
      <S.NewsContainer>
        <NewsItem title={dummyData[0].title} newUrl={dummyData[0].newUrl} />
        <NewsItem title={dummyData[1].title} newUrl={dummyData[1].newUrl} />
        <NewsItem title={dummyData[2].title} newUrl={dummyData[2].newUrl} />
      </S.NewsContainer>
    </S.NewsWrapper>
  );
};

export default News;
