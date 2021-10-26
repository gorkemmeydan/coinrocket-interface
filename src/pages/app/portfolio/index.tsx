import type { NextPage } from 'next';
import PortfolioMobile from '../../../layouts/portfolio/PortfolioMobile.layout';
import PortfolioLarge from '../../../layouts/portfolio/PortfolioLarge.layout';

import { Media, MediaContextProvider } from '../../../styles/media';

const Portfolio: NextPage = () => {
  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <PortfolioMobile />
      </Media>
      <Media greaterThan='mobile'>
        <PortfolioLarge />
      </Media>
    </MediaContextProvider>
  );
};

export default Portfolio;
