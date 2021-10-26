import React from 'react';
import Panel from '../../components/panel/panel.component';
import { Row } from '../row.styled';

const DashboardSmall: React.FC = () => {
  return (
    <Row>
      <Panel isFullSize={false} isTop={false} />
    </Row>
  );
};

export default DashboardSmall;
