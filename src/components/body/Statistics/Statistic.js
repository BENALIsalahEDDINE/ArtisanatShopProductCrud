import React, { Component } from "react";
import LineChart from "./LineChart";
import LineChart2 from "./LineChart2";
import BarChart from "./BarChart";
import HeaderAdmin from "../../layout/HeaderAdmin";
import Footer from "../../layout/Footer";

export default class Statistic extends Component {
  render() {
    return (
      <div>
        <HeaderAdmin />
        <LineChart2 />
        <BarChart />
        <Footer />
      </div>
    );
  }
}
