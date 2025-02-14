import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartComponentProps {
  data: any[];
  label: string;
  color: string;
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  data,
  label,
  color,
}) => {
  const chartData = {
    labels: data.map(
      (item) => item.date || `${item.name.first} ${item.name.last}`
    ),
    datasets: [
      {
        label,
        data: data.map((item) => item.value || 1),
        borderColor: color,
        backgroundColor: color,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: label,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default ChartComponent;
