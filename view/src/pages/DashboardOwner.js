import React from "react";
import { Line } from 'react-chartjs-2';
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function cart() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],

    }]
  };
  const options = {
    plugins: {
      legend: true
    }
  };

  return (
    <div className='container'>
      <Navbar />
      <div class="container w-75 px-10 mt-5">
        <div class="row gx-20" >
          <div class="col">
            <div class="p-4 border rounded-3 bg-primary text-white text-start">
              <div class="row">
                <div class="col">
                  <div className='fw-light fs-6'>Total Pendapatan</div>
                  <div className='fw-bold fs-5'>6.000.000</div>
                </div>
                <div class="col-4 text-end">
                  {<FontAwesomeIcon icon={faMoneyBillWave} style={{ color: "#ffffff", }} size="2xl" />}
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-4 border rounded-3 bg-secondary text-white text-start">
              <div class="row">
                <div class="col">
                  <div className='fw-light fs-6'>Total Pesanan</div>
                  <div className='fw-bold fs-5'>6.000.000</div>
                </div>
                <div class="col text-end">
                  {<FontAwesomeIcon icon={faNewspaper} style={{ color: "#ffffff", }} size="2xl" />}
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-4 border  rounded-3 text-white">Custom column padding</div>
          </div>
        </div>
      </div>
      <div className="container bg-light w-75 mt-5 text-start text-primary fw-bold fs-6 px-4 py-4 rounded-4">
        Grafik Penjualan Tahunan

        <Line data={data} options={options}></Line>
      </div>

    </div>
  );
}
export default cart;