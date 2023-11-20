
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'


function cart(){
const labels =  ['January', 'February', 'March', 'April', 'May'];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};
const config = {
    type: 'line',
    data: data,
  };

  return (
    <div>
      <Line data={data} options={config}></Line>
    </div>
  );
}
export default cart;