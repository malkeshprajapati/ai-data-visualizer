import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface RatingData {
  rating: number;
  count: number;
}

interface PieChartProps {
  data: RatingData[];
}


const PieChart: React.FC<PieChartProps> = ({ data,title }) => {
  const pieData = {
    labels: data.map(item => item.label), 
    datasets: [
      {
        data: data.map(item => item.value), 
        backgroundColor: data.map(item => item.color),
        
      },
      
      
    ]
  };
const  options= {
    plugins: {
        title: {
            display: true,
            text: title||''
        }
    }
}
  return (

      <Pie data={pieData} options={options}/>

  );
};

export default PieChart;
