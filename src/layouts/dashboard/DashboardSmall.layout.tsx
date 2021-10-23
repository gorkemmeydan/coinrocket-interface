import React from 'react';
import Panel from '../../components/dashboard/panel/panel.component';

const DashboardSmall: React.FC = () => {
  return (
    <div>
      <Panel isFullSize={false} isTop={false} />
    </div>
  );
};

export default DashboardSmall;
