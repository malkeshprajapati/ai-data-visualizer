import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  data: Record<string, number>; 
}

const BarChart: React.FC<BarChartProps> = ({ data,title }) => {
  
  const chartData = {
    labels: Object.keys(data),
    datasets: [{
      label: title,
      data: Object.values(data),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  const options= {
    plugins: {
        title: {
            display: true,
            text: title || ''
        },
       
    }
}

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
