import React,{useState} from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { UserData } from "./Data";


function BarChart () {
    const [userData, setUserData] = useState({
      labels: [["Mon","2022"], "Tue", "Wed", "Thu", "Fri","frii","friii","friii","friii","Tue", "Wed", "Thu", "Fri","frii","friii","friii","friii"],
      datasets: [
          {
            label: "Users Gained",
            data: [120, 20, 40, 50, 320,30,189,42,510,120, 20, 40, 50, 320,30,189,42,510],
            tension: 0,
            backgroundColor: [
                '#1F86FF',
                '#1F86FF',
              ],
          },
        ],
      });

    const options ={
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 1000,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor:"#5511bb"
        }
      },
      scales: {
        x: {
          ticks:{
            color:"rgba(0,0,0,1)",
            font:{
              size:12,
            }
          }
        }
      },
      layout: {
        padding:{
          bottom:-20
        }
      }
    }
  return (
    <Bar data={userData} options={options} />
  )
}

export default BarChart

