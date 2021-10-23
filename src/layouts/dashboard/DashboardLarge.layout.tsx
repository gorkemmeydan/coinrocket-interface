import React from 'react';
import Panel from '../../components/dashboard/panel/panel.component';

const DashboardLarge: React.FC = () => {
  return (
    <div>
      <Panel isFullSize={true} isTop={false} />
    </div>
  );
};

export default DashboardLarge;
