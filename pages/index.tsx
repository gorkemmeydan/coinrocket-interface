import type { NextPage } from 'next';
import Header from '../components/header/header.component';
import StoryCard from '../components/story-card/story-card.component';

import PortfolioIcon from '../public/portfolio';

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
