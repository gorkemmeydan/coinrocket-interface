import React from 'react';
import Panel from '../../components/panel/panel.component';
import { Column } from './column-styled';

const DashboardSmall: React.FC = () => {
  return (
    <Column>
      <Panel isFullSize={false} isTop={false} />
    </Column>
  );
};

export default DashboardSmall;
