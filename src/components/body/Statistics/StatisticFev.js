import React, { Component } from "react";
import LineFev from "./LineFev";

import BarFev from "./BarFev";
import HeaderAdmin from "../../layout/HeaderAdmin";
import Footer from "../../layout/Footer";

export default class StatisticJanv extends Component {
  render() {
    return (
      <div>
        <HeaderAdmin />
        <LineFev />
        <BarFev />
        <Footer />
      </div>
    );
  }
}
