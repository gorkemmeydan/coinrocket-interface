import React from 'react';
import Panel from '../../components/panel/panel.component';
import { Column } from '../column-styled';

const DashboardMobile: React.FC = () => {
  return (
    <Column>
      <Panel isFullSize={false} isTop={true} />
    </Column>
  );
};

export default DashboardMobile;
