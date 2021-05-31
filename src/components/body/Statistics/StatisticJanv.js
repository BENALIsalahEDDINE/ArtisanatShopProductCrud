import React, { Component } from "react";
import LineChart from "./LineChart";

import BarJanv from "./BarJanv";
import HeaderAdmin from "../../layout/HeaderAdmin";
import Footer from "../../layout/Footer";

export default class StatisticJanv extends Component {
  render() {
    return (
      <div>
        <HeaderAdmin />
        <LineChart />
        <BarJanv />
        <Footer />
      </div>
    );
  }
}
