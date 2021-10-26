import React from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

interface Props {
  isPositive: boolean;
  data: object[];
}

const PortfolioChart: React.FC<Props> = ({ isPositive, data }: Props) => {
  const plotColor = `${isPositive ? '#00F902' : '#F90000'}`;

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart data={data}>
        <CartesianGrid vertical={false} strokeDasharray='4' />
        <Tooltip />
        <XAxis dataKey='time' />
        <YAxis />
        <Line
          type='monotone'
          dataKey='key'
          stroke={plotColor}
          strokeWidth={5}
          activeDot={{ r: 8 }}
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PortfolioChart;
