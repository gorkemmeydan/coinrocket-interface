import React from 'react';
import Panel from '../../components/dashboard/panel/panel.component';

const DashboardMobile: React.FC = () => {
  return (
    <div>
      <Panel isFullSize={false} isTop={true} />
    </div>
  );
};

export default DashboardMobile;
