import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';

interface Props {
  isPositive: boolean;
  data: object[];
  range: number[];
}

const PriceChart: React.FC<Props> = ({ isPositive, data, range }: Props) => {
  const plotColor = `${isPositive ? '#00F902' : '#F90000'}`;

  console.log(data);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart data={data}>
        <YAxis hide={true} type='number' domain={range} />
        <Line
          type='linear'
          dataKey='key'
          stroke={plotColor}
          strokeWidth={2}
          dot={false}
          isAnimationActive={true}
          connectNulls={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
