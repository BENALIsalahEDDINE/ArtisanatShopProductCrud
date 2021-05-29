import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./Style.css";
import ReactDOM from "react-dom";
import StatisticJanv from "./StatisticJanv";
import StatisticFev from "./StatisticFev";
import Statistic from "./Statistic";

const url = "http://localhost:3000/statmars";
const LineFev = () => {
  const [chartData, setData] = useState({});

  const chart = () => {
    let nbrVentes = [
      270, 272, 275, 290, 300, 287, 286, 287, 287, 288, 316, 340, 300, 313, 320,
      310, 311, 315, 320, 323, 330, 350, 352, 360, 361, 365, 370, 377,
    ];
    let days = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ];

    setData({
      labels: days,
      datasets: [
        {
          label: "level of thiccness",
          data: nbrVentes,
          backgroundColor: ["rgba(0, 0, 0, 1)"],
          borderWidth: 5,
        },
      ],
    });

    console.log(days, nbrVentes);
  };
  function hundleChange(event) {
    var month2 = event.target.value;
    if (month2 == "Janvier") {
      ReactDOM.render(<StatisticJanv />, document.getElementById("root"));
    } else if (month2 == "Février") {
      ReactDOM.render(<StatisticFev />, document.getElementById("root"));
    } else {
      ReactDOM.render(<Statistic />, document.getElementById("root"));
    }
  }

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <div className="drop">
        <form>
          <select className="form-select">
            <option value="2021">2021</option>
          </select>
          <select className="form-select" onChange={hundleChange}>
            <option value="default-value">select month</option>
            <option value="Janvier">Janvier</option>
            <option value="Février">Février</option>
            <option value="Mars">Mars</option>
            <option value="Avril">Avril</option>
            <option value="Mai">Mai</option>
            <option value="Juin">Juin</option>
            <option value="Juillet">Juillet</option>
            <option value="Aout">Aout</option>
            <option value="Septembre">Septembre</option>
            <option value="Octobre">Octobre</option>
            <option value="Novembre">Novembre </option>
            <option value="Décembre">Décembre </option>
          </select>
        </form>
      </div>
      <div className="chartContainer">
        <h1>Nombre de ventes pour le mois Février</h1>
        <div>
          <Line
            data={chartData}
            options={{
              responsive: true,
              title: { text: "THICCNESS SCALE", display: true },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true,
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
            }}
          />
          <div className="chartBorder"></div>
        </div>
      </div>
    </div>
  );
};

export default LineFev;
