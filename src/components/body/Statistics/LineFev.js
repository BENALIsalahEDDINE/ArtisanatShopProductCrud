import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./Style.css";
import ReactDOM from "react-dom";
import StatisticFev from "./StatisticFev";
import StatMars from "./StatMars";
const url = "http://localhost:3000/statmars";
const LineFev = () => {
  const [chartData, setData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empID = [];
    var emps = [
      {
        id: "1",
        employee_name: "Tiger Nixon",
        employee_salary: "150",
        employee_age: "1",
        profile_image: "",
      },
      {
        id: "2",
        employee_name: "Garrett Winters",
        employee_salary: "148",
        employee_age: "2",
        profile_image: "",
      },
      {
        id: "3",
        employee_name: "Ashton Cox",
        employee_salary: "140",
        employee_age: "3",
        profile_image: "",
      },
      {
        id: "4",
        employee_name: "Cedric Kelly",
        employee_salary: "130",
        employee_age: "4",
        profile_image: "",
      },
      {
        id: "5",
        employee_name: "Airi Satou",
        employee_salary: "147",
        employee_age: "5",
        profile_image: "",
      },
      {
        id: "6",
        employee_name: "Brielle Williamson",
        employee_salary: "153",
        employee_age: "6",
        profile_image: "",
      },
      {
        id: "7",
        employee_name: "Herrod Chandler",
        employee_salary: "155",
        employee_age: "7",
        profile_image: "",
      },
      {
        id: "8",
        employee_name: "Rhona Davidson",
        employee_salary: "157",
        employee_age: "8",
        profile_image: "",
      },
      {
        id: "9",
        employee_name: "Colleen Hurst",
        employee_salary: "160",
        employee_age: "9",
        profile_image: "",
      },
      {
        id: "10",
        employee_name: "Sonya Frost",
        employee_salary: "170",
        employee_age: "23",
        profile_image: "",
      },
      {
        id: "11",
        employee_name: "Jena Gaines",
        employee_salary: "160",
        employee_age: "30",
        profile_image: "",
      },
      {
        id: "12",
        employee_name: "Quinn Flynn",
        employee_salary: "161",
        employee_age: "22",
        profile_image: "",
      },
      {
        id: "13",
        employee_name: "Charde Marshall",
        employee_salary: "165",
        employee_age: "36",
        profile_image: "",
      },
      {
        id: "14",
        employee_name: "Haley Kennedy",
        employee_salary: "166",
        employee_age: "43",
        profile_image: "",
      },
      {
        id: "15",
        employee_name: "Tatyana Fitzpatrick",
        employee_salary: "174",
        employee_age: "19",
        profile_image: "",
      },
      {
        id: "16",
        employee_name: "Michael Silva",
        employee_salary: "180",
        employee_age: "66",
        profile_image: "",
      },
      {
        id: "17",
        employee_name: "Paul Byrd",
        employee_salary: "190",
        employee_age: "64",
        profile_image: "",
      },
      {
        id: "18",
        employee_name: "Gloria Little",
        employee_salary: "193",
        employee_age: "59",
        profile_image: "",
      },
      {
        id: "19",
        employee_name: "Bradley Greer",
        employee_salary: "200",
        employee_age: "41",
        profile_image: "",
      },
      {
        id: "20",
        employee_name: "Dai Rios",
        employee_salary: "201",
        employee_age: "35",
        profile_image: "",
      },
      {
        id: "21",
        employee_name: "Jenette Caldwell",
        employee_salary: "205",
        employee_age: "30",
        profile_image: "",
      },
      {
        id: "22",
        employee_name: "Yuri Berry",
        employee_salary: "222",
        employee_age: "40",
        profile_image: "",
      },
      {
        id: "23",
        employee_name: "Caesar Vance",
        employee_salary: "230",
        employee_age: "21",
        profile_image: "",
      },
      {
        id: "24",
        employee_name: "Doris Wilder",
        employee_salary: "235",
        employee_age: "23",
        profile_image: "",
      },
      {
        id: "25",
        employee_name: "Caesar Vance",
        employee_salary: "220",
        employee_age: "21",
        profile_image: "",
      },
      {
        id: "26",
        employee_name: "Doris Wilder",
        employee_salary: "215",
        employee_age: "23",
        profile_image: "",
      },
      {
        id: "27",
        employee_name: "Caesar Vance",
        employee_salary: "170",
        employee_age: "21",
        profile_image: "",
      },
      {
        id: "28",
        employee_name: "Doris Wilder",
        employee_salary: "300",
        employee_age: "23",
        profile_image: "",
      },
    ];

    // Fetch Function

    for (const dataObj of emps) {
      empSal.push(parseInt(dataObj.employee_salary));
      empID.push(parseInt(dataObj.id));
    }
    setData({
      labels: empID,
      datasets: [
        {
          label: "level of thiccness",
          data: empSal,
          backgroundColor: ["rgba(0, 0, 0, 1)"],
          borderWidth: 5,
        },
      ],
    });

    console.log(empSal, empID);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <div className="drop">
        <form>
          <select className="form-select">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031 </option>
          </select>
          <select className="form-select">
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
          <input type="submit" value="Submit" className="btn btn-primary" />
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

export default LineFev;
