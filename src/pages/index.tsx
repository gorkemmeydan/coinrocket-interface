import type { NextPage } from 'next';

import Header from '@components/Header';
import StoryCard from '@components/StoryCard';

import PortfolioIcon from '@assets/portfolio';

const Home: NextPage = () => {
  const cardText = 'Track All Of Your Crypto Assets In One Place';

  return (
    <div>
      <Header withLoginButton={true} withHomePageLink={false} />
      <StoryCard cardText={cardText} CardImage={PortfolioIcon} />
    </div>
  );
};

export default Home;
