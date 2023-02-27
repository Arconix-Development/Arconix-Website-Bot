import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { UserData } from "./Data";


function LineChart() {
  const [userData, setUserData] = useState({
    labels: [["Mon","2022"], "Tue", "Wed", "Thu", "Fri", "Sat","Sun"],
    datasets: [
      {
        label: "Users Gained",
        data: [120, 20, 40, 153, 10, 190,320],
        tension: 0,
        // backgroundColor: [
        //   //"rgba(117,217,247,0.2)"
        //   "rgba(175, 175, 175,1.3)"
        // ],
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
        fill: true,
        pointBackgroundColor: "#7a77ff",
        pointBorderColor: "white",
        pointBorderWidth:2,
        borderColor: "#1F86FF",
        borderWidth: 3,
      },
    ],
  });

  const options = {
    hoverOffset: 12,
    // radius: 110,
    // rotation:201,
    layout: {
      padding: 20,
    },
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
          color:"rgba(0,0,0,)",
          font:{
            size:12,
          }
        },
        grid:{
            color:'rgba(0,0,0,0)'
        }
      },
      y:{
        grid:{
          color: 'rgba(0,0,0,0.1)'
        }
      }
    }
  }

  return <Line data={userData} options={options} />
}

export default LineChart