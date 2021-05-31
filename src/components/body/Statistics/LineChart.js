import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./Style.css";
import { NavLink, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import StatisticFev from "./StatisticFev";
import Statistic from "./Statistic";
import StatisticJanv from "./StatisticJanv";
const url = "http://localhost:3000/statmars";
const LineChart = () => {
  const [chartData, setData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let nbrVentes = [
      5, 20, 25, 27, 29, 30, 39, 47, 50, 50, 60, 63, 66, 69, 67, 65, 60, 71, 73,
      74, 78, 90, 95, 100, 105, 130, 150, 140, 148, 153, 170,
    ];
    let days = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
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

    console.log(nbrVentes, days);
  };
  function hundleChange(event) {
    var month = event.target.value;
    if (month == "Février") {
      ReactDOM.render(<StatisticFev />, document.getElementById("root"));
    } else if (month == "Janvier") {
      ReactDOM.render(<StatisticJanv />, document.getElementById("root"));
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
        <h1>Nombre de ventes pour le mois Janvier</h1>
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

export default LineChart;
