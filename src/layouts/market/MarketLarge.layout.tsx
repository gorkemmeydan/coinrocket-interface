import React from 'react';
import MarketLayout from '../../components/market/market.component';
import Panel from '../../components/panel/panel.component';

import { Row } from '../row.styled';

const MarketLarge: React.FC = () => {
  return (
    <Row>
      <Panel isFullSize={true} isTop={false} />
      <MarketLayout />
    </Row>
  );
};

export default MarketLarge;
