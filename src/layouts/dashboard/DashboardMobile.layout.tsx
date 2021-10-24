import React from 'react';
import Panel from '../../components/panel/panel.component';
import { Row } from './row.styled';

const DashboardMobile: React.FC = () => {
  return (
    <Row>
      <Panel isFullSize={false} isTop={true} />
    </Row>
  );
};

export default DashboardMobile;
