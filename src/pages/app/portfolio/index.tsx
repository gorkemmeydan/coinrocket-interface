import type { NextPage } from 'next';

import { Media, MediaContextProvider } from '../../../styles/media';
import AppLayout from '../../../layouts/app/app.layout';
import PortfolioLayout from '../../../components/portfolio/portfolio.component';

const Portfolio: NextPage = () => {
  return (
    <MediaContextProvider>
      <Media at='mobile'>
        <AppLayout size={'mobile'} children={<PortfolioLayout />} />
      </Media>
      <Media at='small'>
        <AppLayout size={'small'} children={<PortfolioLayout />} />
      </Media>
      <Media at='medium'>
        <AppLayout size={'medium'} children={<PortfolioLayout />} />
      </Media>
      <Media greaterThanOrEqual='large'>
        <AppLayout size={'large'} children={<PortfolioLayout />} />
      </Media>
    </MediaContextProvider>
  );
};

export default Portfolio;
