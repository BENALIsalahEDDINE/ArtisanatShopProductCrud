import React, { Component } from "react";
import axios from "axios";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "../../css/layout/Header.css";

class Header extends Component {
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
              Artisanat<em  id="emm">SHOP </em>
            </NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/products" className="nav-element">
                    {" "}
                    Produits{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/users" className="nav-element">
                    Utilisateurs{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/categories" className="nav-element">
                    Categories
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/users" className="nav-element">
                    {" "}
                    Fournisseurs
                  </NavLink>
                </NavItem>
                {/* <NavItem>
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
                </NavItem> */}
                <NavItem>
                  <NavLink href="/articles" className="nav-element">
                    {" "}
                    Articles
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/statistics" className="nav-element">
                    {" "}
                    Statistics
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/boite" className="nav-element">
                    Boite
                  </NavLink>
                </NavItem>
              </Nav>
             
              <button className="btn btn-success  mr-1">
                <i className="fas fa-sign-out-alt" />
              </button>
            </Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}

export default Header;
