import React, { Component } from "react";
import ReactDOM from "react-dom";
import VentesApi from "./ventesApi";
import { Line } from "react-chartjs-2";
import "./Style.css";

import StatisticJanv from "./StatisticJanv";
import StatisticFev from "./StatisticFev";

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
        labels: [],
        datasets: [
          {
            label: " ",
            data: [],
            backgroundColor: ["rgba(0, 0, 0, 1)"],
            borderWidth: 5,
          },
        ],
      },
    };
    this.handleChange = this.handleChange.bind(this);
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
    }
    console.log(this.state.monthID);
    console.log(this.state.myData.datasets[0].data);
    var totalVentesParMois = 0;

    for (const element of this.state.ventes) {
      if (element.mois == this.state.monthID) {
        totalVentesParMois = totalVentesParMois + element.qte;
        this.state.nbrVentes.push(element.qte);

        this.state.myData.labels.push(element.day);
      }
    }

    this.state.myData.datasets[0].data = this.state.nbrVentes;

    console.log(this.state.myData);
    if (this.state.monthID == 1) {
      ReactDOM.render(<StatisticJanv />, document.getElementById("root"));
    }
    if (this.state.monthID == 2) {
      ReactDOM.render(<StatisticFev />, document.getElementById("root"));
    }
  }

  render() {
    return (
      <div>
        <div className="drop">
          <form onSubmit={this.handleChange}>
            <select className="form-select">
              <option value="2021">2021</option>
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
          </form>
        </div>
        <div className="chartContainer">
          <h1>Nombre de ventes par mois</h1>
          <div>
            <Line
              data={this.state.myData}
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
