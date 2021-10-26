import React from 'react';
import Panel from '../../components/panel/panel.component';
import { Column } from '../column-styled';

const PortfolioMobile: React.FC = () => {
  return (
    <Column>
      <Panel isFullSize={false} isTop={true} />
      <div>mobile</div>
    </Column>
  );
};

export default PortfolioMobile;
