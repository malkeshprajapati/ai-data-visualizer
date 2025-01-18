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


const getRandomColor=()=> {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const ratings = data.user_satisfaction?.ratings?.map(item=>{
  return {
    label:`${item.rating} Stars`,value:item.count, color:getRandomColor()
  }
})

const dayWise = data.response_times?.day_wise?.map(item=>{
  return {label:item.date,value:item.average_time}
})

const responseWeekly = data.response_times?.week_wise.map(item=>{
  return {
    label:`week ${item.week}`,value:item.average_time,color:getRandomColor()
  }
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
        <PieChart data={ratings || []} title='Ratings' />
      </div>
      <div className="chart">
        <BarChart data={data.usage_statistics?.by_country  || {}} title='Usage By country' />
      </div>
      <div className="chart">
        <BarChart data={data.usage_statistics?.by_platform  || {}} title='Usage By platform' />
      </div>
      <div className="chart">
        <PieChart data={responseWeekly || []} title='Weekly Response' />
      </div>
    </Layout>
  );
}

export default App;
