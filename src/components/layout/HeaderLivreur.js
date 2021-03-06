import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { logout } from "../../utils/logout";

import "../../css/layout/Header.css";

class HeaderLivreur extends Component {
  handleSubmit = (e) => {
    console.log("log");
    e.preventDefault();
  };

  render() {
    return (
      <>
        <div>
          <Navbar
            className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end"
            light
            expand="md"
          >
            <NavbarBrand href="/login">
              {" "}
              Artisanat<em id="emm">SHOP </em>
            </NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/commandes" className="nav-element">
                    {" "}
                    Commandes{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/deliveries" className="nav-element">
                    {" "}
                    Livraisons{" "}
                  </NavLink>
                </NavItem>
              </Nav>
           
              <button
                className="btn btn-success  mr-1"
                onClick={(e) => logout(e)}
              >
                <i className="fas fa-sign-out-alt" />
              </button>
            </Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}

export default HeaderLivreur;
