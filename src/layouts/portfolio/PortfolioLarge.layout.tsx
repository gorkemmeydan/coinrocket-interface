import React from 'react';
import Panel from '../../components/panel/panel.component';
import PortfolioLayout from '../../components/portfolio/portfolio.component';

import { Row } from '../row.styled';

const PortfolioLarge: React.FC = () => {
  return (
    <Row>
      <Panel isFullSize={true} isTop={false} />
      <PortfolioLayout />
    </Row>
  );
};

export default PortfolioLarge;
