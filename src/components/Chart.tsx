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

interface ChartProps {
  data: number[];
  label: string;
  color: string;
}

const ChartComponent = ({ data, label, color }: ChartProps) => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label,
        data,
        borderColor: color,
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ChartComponent;
