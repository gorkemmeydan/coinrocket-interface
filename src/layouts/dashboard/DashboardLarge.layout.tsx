import React from 'react';
import DashboardLayout from '../../components/dashboard/dashboard.component';
import Panel from '../../components/panel/panel.component';

import { Row } from './row.styled';

const DashboardLarge: React.FC = () => {
  return (
    <Row>
      <Panel isFullSize={true} isTop={false} />
      <DashboardLayout />
    </Row>
  );
};

export default DashboardLarge;
