import React, { Component } from "react";

import "../../css/layout/Footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="fixed-bottom">
          <p>
            &copy;2021 - Artisanat<em id="emm" >SHOP </em> 
          </p>
        </footer>
      </>
    );
  }
}

export default Footer;
