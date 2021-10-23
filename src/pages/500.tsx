import type { NextPage } from 'next';
import Header from '../components/header/header.component';
import StoryCard from '../components/story-card/story-card.component';

import Icon500 from '../assets/icon500';

const Custom500: NextPage = () => {
  const cardText = '500 - Oooops... Something went wrong.';

  return (
    <div>
      <Header withLoginButton={false} withHomePageLink={true} />
      <StoryCard cardText={cardText} CardImage={Icon500} />
    </div>
  );
};

export default Custom500;