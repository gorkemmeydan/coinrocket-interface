import React from 'react';
import { News, NewsItem } from '../../types/types';
import NewsItemContainer from './news-item/news-item.component';

import * as S from './news.styled';

const dummyData: NewsItem = {
  id: '4751048c-b5f3-42e4-8cd0-21a30fac611f',
  title: 'Centralized Exchange NFT Platforms: The Advantages & Disadvantages',
  published_at: '2021-10-22T14:05:00Z',
  content:
    'The NFT marketplace landscape is heating up with Coinbase and FTX announcing NFT platforms and trading. Centralized exchanges in general will have some key advantages as well as some disadvantages as they seek to become dominant NFT exchange venues.\nCompetitive Advantages for Centralized Exchanges:\nCentralized exchanges have some key advantages given their size and resources. Some of these advantages will be key in determining if these existing behemoths are successful in the NFT market.\n\nCustody\nAsset custody is a key benefit of centralized exchanges. Coinbase ensures that retail traders don’t misplace their assets or get locked out of their accounts from forgotten passwords. Essentially, centralized exchanges help prevent errors that your parents would make when transferring crypto.\n\nMore importantly, Coinbase and other exchanges will be able to find synergies with high-end NFT custody (e.g. Punks, BAYC) and their NFT platforms. Most high net worth individuals will opt for custody on Coinbase over self custody for their highly valuable NFTs. Coinbase will be able to list and let individuals bid on NFTs that are stored in Coinbase Custody. This will help bring NFT liquidity to Coinbase as they’ll naturally have some of the higher-end NFTs available on their platform.\n\nThere are other potential benefits where centralized exchanges can leverage their vertically integrated services (node infrastructure, staking, etc.) to add more value to their platforms, however, custody seems like the largest immediate advantage.\n\nBrand & Distribution\nLarge exchanges have massive brands, capital to spend, and strong existing audiences. For instance, Robinhood will be a formidable competitor to Coinbase because of their larger existing userbase. Similarly, Coinbase will be competitive with OpenSea and other NFT platforms. The potential for Coinbase or FTX to convert a small portion of their existing customer base into NFT traders will mean hundreds of thousands of customers. For reference, OpenSea, the largest NFT marketplace has supported NFT trading for over 500,000 unique addresses (not necessarily different traders).\n\nBeyond, distribution alone, Coinbase and FTX have large brands that will allow them to find the best NFT artists and projects and have them launch (drop) on their respective platforms. This is yet another way that centralized exchanges will be able to bootstrap liquidity.\n\nPartnerships & Intellectual Property\nPaired with Coinbase’s existing userbase, the prominent U.S exchange will also possess a stronger ability to partner with large brands and influencers. FTX has acquired name rights to all your favorite franchises, and rumor has it they’re going after your high school football stadium next. Coinbase recently announced its partnership with the WNBA and NBA that will consist of unique content, innovations, and experiences for basketball fans.\n\nLarge organizations like Disney are more likely to partner with established companies like OpenSea or Coinbase that can offer legal contracts versus permissionless protocols. Additionally, centralized exchanges will have a competitive advantage of working with existing intellectual property and ensuring that royalties pass through on their platforms.\nPotential Disadvantages:\nPermissionless NFT marketplaces (i.e. Rarible, NFTX, Genie) will still have advantages over their centralized competitors.\n\nRegulation\nBy and large, the key disadvantage for U.S. exchanges like Coinbase is regulation. Many NFTs resemble securities or will likely tip-toe on the line between consumer product and financial product. Does the NFT provide governance over a DAO which takes a royalty on trade volume? Security. The cool NFT you bought directly earns royalties from a song, piece of content, or video? Security. Owning the NFT provides access to obtain other NFTs released by the project which potentially have monetary value or require the exchange of funds to purchase? Potential security. Fractinalized NFT? Security. Note this likely holds true for U.S based firms, and FTX or other non-US-centric firms might not have the same restrictions.\n\nAsset Breadth\nLiquidity is arguably the most important quality of any marketplace. Binance originally gained market share because it provided access to trade assets that weren’t listed elsewhere which in turn drew capital and users (Binance also had a great UX and onboarding experience). Similarly, Uniswap gained traction because it offered assets faster than even fast-moving exchanges like Binance. Similarly, permissionless protocols or even other exchanges may be able to list a wider variety of NFT assets and at a faster pace. Coupled with potential regulatory concerns over specific NFTs and permissionless NFT protocols may find a unique advantage to accruing liquidity whether from NFTs that generate cash flows or fractionalized NFTs.\n\nIntegrations\nOne of the hallmark traits of Ethereum is the composability of smart contracts and software. Alchemix can seamlessly utilize Yearn vaults for yield generation while InstaDapp is able to facilitate a one-click process to transfer collateral from one lending protocol to another (e.g. Aave to Compound). These types of integrations and secondary applications drive liquidity to platforms. Permissionless marketplaces, due to their open nature, will have an easier time integrating with other protocols compared to Coinbase, FTX, or other centralized NFT marketplaces.\nFinal Thoughts\nUltimately, Coinbase and FTX have the potential to build robust NFT exchanges with unique value propositions. Similar to how Coinbase and Uniswap can both remain successful, so too can Coinbase and OpenSea or decentralized NFT marketplaces. Importantly, NFT exchanges like Coinbase, OpenSea, Rarible, NFTX, or otherwise are also competing for liquidity across different blockchains and a variety of assets. The upcoming growth of NFTs across a variety of industries means that there will be plenty of opportunities.',
  newsUrl:
    'https://messari.io/article/centralized-exchange-nft-platforms-the-advantages-disadvantages',
};

const dummyInput: News = {
  news: [dummyData, dummyData, dummyData],
};

for (let i = 0; i < 20; i++) {
  dummyInput.news.push(dummyData);
}

const NewsLayout: React.FC = () => {
  return (
    <S.NewsWrapper>
      <S.Title>News</S.Title>
      <S.HorizontalScrollable>
        <S.NewsContainer>
          {dummyInput.news.map((data) => (
            <NewsItemContainer key={data.id} data={data} />
          ))}
        </S.NewsContainer>
      </S.HorizontalScrollable>
    </S.NewsWrapper>
  );
};

export default NewsLayout;
