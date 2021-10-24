import React from 'react';
import Panel from '../../components/panel/panel.component';
import { Row } from './row.styled';

const DashboardMedium: React.FC = () => {
  return (
    <Row>
      <Panel isFullSize={true} isTop={false} />
    </Row>
  );
};

export default DashboardMedium;
