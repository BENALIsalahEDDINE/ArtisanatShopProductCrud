import React, { Component } from "react";
import Mars from "./Mars";
import MarsBar from "./MarsBar";
import HeaderAdmin from "../../layout/HeaderAdmin";
import Footer from "../../layout/Footer";

export default class StatMars extends Component {
  render() {
    return (
      <div>
        <HeaderAdmin />
        <Mars />
        <MarsBar />
        <Footer />
      </div>
    );
  }
}
