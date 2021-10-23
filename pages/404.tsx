import type { NextPage } from 'next';
import Header from '../components/header/header.component';
import StoryCard from '../components/story-card/story-card.component';

import Icon404 from '../public/icon404';

const Custom404: React.FC = () => {
  const cardText = "404 - We can't find the page you're looking for";

  return (
    <div>
      <Header withLoginButton={false} withHomePageLink={true} />
      <StoryCard cardText={cardText} CardImage={Icon404} />
    </div>
  );
};

export default Custom404;
