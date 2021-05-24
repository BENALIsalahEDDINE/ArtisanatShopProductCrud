import React, { Component } from "react";
import ReactDOM from "react-dom";
import VentesApi from "./ventesApi";
import { Line } from "react-chartjs-2";
import "./Style.css";

import StatisticJanv from "./StatisticJanv";

class LineChart2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ventes: [],
      days: [],
      nbrVentes: [],
      month: "selected month",
      monthID: 0,
      myData: {
        labels: [1, 3, 8, 10],
        datasets: [
          {
            label: "Hello there!",
            data: [5, 70, 90, 90, 90],
            backgroundColor: ["rgba(0, 0, 0, 1)"],
            borderWidth: 5,
          },
        ],
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    VentesApi.get_Ventes().then((resp) => {
      console.log(resp.data);
      this.setState({ ventes: resp.data });
    });
  }

  handleChange(event) {
    console.log("Month Selected!!");
    this.state.month = event.target.value;
    console.log(this.state.month);
    let x = this.state.month;
    switch (x) {
      case "Janvier":
        this.state.monthID = 1;
        break;

      case "Février":
        this.state.monthID = 2;
        break;

      case "Mars":
        this.state.monthID = 3;
        break;

      case "Avril":
        this.state.monthID = 4;
        break;

      case "Mai":
        this.state.monthID = 5;
        break;

      default:
        console.log("You should select a month!!");
        break;
    }
    console.log(this.state.monthID);
    var totalVentesParMois = 0;

    for (const element of this.state.ventes) {
      if (element.mois == this.state.monthID) {
        totalVentesParMois = totalVentesParMois + element.qte;
        this.state.nbrVentes.push(element.qte);

        this.state.days.push(element.day);
      }
    }
    console.log(this.state.nbrVentes, this.state.days);
    this.state.myData.labels = this.state.days;
    this.state.myData.datasets[0].data = this.state.nbrVentes;

    console.log(this.state.myData);
  }
  handleSubmit() {
    ReactDOM.render(<StatisticJanv />, document.getElementById("root"));
  }

  /*
  handleSubmit() {
    var totalVentesParMois = 0;
    let nbrVentes = [];
    let days = [];
    for (const element of this.state.ventes) {
      if (element.mois == this.state.monthID) {
        totalVentesParMois = totalVentesParMois + element.qte;
        nbrVentes.push(element.qte);
        days.push(element.day);
      }
    }
    this.state.setData({
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
  }*/

  render() {
    return (
      <div>
        <div className="drop">
          <form onSubmit={this.handleSubmit}>
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
            <select className="form-select" onChange={this.handleChange}>
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
          <h1>Nombre de ventes par mois</h1>
          <div>
            <Line
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
  }
}
export default LineChart2;
