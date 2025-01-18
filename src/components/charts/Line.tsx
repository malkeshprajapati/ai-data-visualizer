import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface LineChartProps {
  data: Array<{ date: string; average_time: number }>;
}

const LineChart: React.FC<LineChartProps> = ({ data,title }) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [{
      label: 'Average Response Time (Days)',
      data: data.map((item) => item.value),
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      fill: false,
    }],
  };

  const  options= {
    plugins: {
        title: {
            display: true,
            text: title||''
        }
    }
}

  return <Line data={chartData} options={options}/>;
};

export default LineChart;
