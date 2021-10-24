import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface Props {
  isPositive: boolean;
  data: readonly object[];
}

const FavoriteItemChart: React.FC<Props> = ({ isPositive, data }: Props) => {
  const plotColor = `${isPositive ? '#00F902' : '#F90000'}`;

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart data={data}>
        <Line
          type='monotone'
          dataKey='key'
          stroke={plotColor}
          strokeWidth={2}
          dot={false}
          isAnimationActive={true}
          connectNulls={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default FavoriteItemChart;
