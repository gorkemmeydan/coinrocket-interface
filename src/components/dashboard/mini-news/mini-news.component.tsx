import React from 'react';
import MiniNewsItem from './mini-news-item/mini-news-item.component';

import * as S from './mini-news.styled';

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

const MiniNews: React.FC = () => {
  return (
    <S.NewsWrapper>
      <S.NewsTitle>News</S.NewsTitle>
      <S.NewsContainer>
        <MiniNewsItem title={dummyData[0].title} newUrl={dummyData[0].newUrl} />
        <MiniNewsItem title={dummyData[1].title} newUrl={dummyData[1].newUrl} />
        <MiniNewsItem title={dummyData[2].title} newUrl={dummyData[2].newUrl} />
      </S.NewsContainer>
    </S.NewsWrapper>
  );
};

export default MiniNews;
