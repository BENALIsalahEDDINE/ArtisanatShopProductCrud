import React, { Component } from "react";

import { Link } from "react-router-dom";

import "../../../css/body/HomePage.css";

import background from "../../../images/homepage.jpg";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div
          className="homepage"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="homepage-content center-block text-center ">
            <h1
              style={{ fontSize: "5rem", paddingRight: "15px" }}
              className="homepage-text"
            >
              ArtisanatShop
            </h1>
            <p id="bienv" style={{ fontSize: "2.5rem" }}>
              Bienvenue à l'application d'administration Artisanat 
              <span id="shop">SHOP</span>
            </p>
            <p id="connect"style={{ fontSize: "1.5rem" }}>
              Connectez-vous à votre compte Administrateur ou Livreur.
            </p>
            <Link to="/login">
              <button class="homepage-btn"><span>Login </span></button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
