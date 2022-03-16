import type { NextPage } from 'next';
import Header from '@components/Header';
import StoryCard from '@components/StoryCard';

import Icon500 from '@assets/icon500';

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
