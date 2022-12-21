import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement

} from 'chart.js';
import { Pie } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

type Props = {}

const PieChart = ({labels}:{labels:string[]}) => {
    // const labels = ['Very Likely','Likely','Neutral',"Unlikely","Very Unlikely"];
    const data:any = {
    labels,
    datasets: [
        {
        label: ['Users'],
        data: [21,123,125],
        backgroundColor: ['rgba(15, 99, 132, 0.5)','rgba(15, 199, 132, 0.5)','rgba(25, 49, 32, 0.5)']
        },
    ],
    };
  return (
    <div><Pie data={data}/></div>
  )
}

export default PieChart