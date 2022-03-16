import type { NextPage } from 'next';

import Header from '@components/Header';
import StoryCard from '@components/StoryCard';

import Icon404 from '@assets/icon404';

const Custom404: NextPage = () => {
  const cardText = "404 - We can't find the page you're looking for";

  return (
    <div>
      <Header withLoginButton={false} withHomePageLink={true} />
      <StoryCard cardText={cardText} CardImage={Icon404} />
    </div>
  );
};

export default Custom404;
