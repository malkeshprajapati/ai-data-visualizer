import React, { useEffect } from 'react';
import Layout from './components/layout.tsx';
import BarChart from './components/charts/Bar.tsx';
import LineChart from './components/charts/Line.tsx';
import PieChart from './components/charts/Pie.tsx';
import './styles/main.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from './features/aiDataSlice.ts';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state: { aiData: { data: any } }) => state.aiData.data);

  useEffect(() => {
    fetch('/ai-data.json')
      .then((res) => res.json())
      .then((res) => dispatch(setData(res)))
      
  }, []);


const dayWise = data.response_times?.day_wise?.map(item=>{
  return {label:item.date,value:item.average_time}
})


  return (
    <Layout>
      <div className="chart">
        <BarChart data={data.category_distribution || {} } title='Category' />
      </div>
      <div className="chart">
        <LineChart data={dayWise || []} title='Day Wise Response'/>
      </div>
      <div className="chart">
        <PieChart data={data.user_satisfaction?.ratings || []} title='Ratings' />
      </div>
      <div className="chart">
        <BarChart data={data.usage_statistics?.by_country  || {}} title='Usage By country' />
      </div>
      <div className="chart">
        <BarChart data={data.usage_statistics?.by_platform  || {}} title='Usage By platform' />
      </div>
    </Layout>
  );
}

export default App;
