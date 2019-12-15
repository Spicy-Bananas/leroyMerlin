import React, { Component } from "react";
import logo from "./../../assets/img/logo.svg";
import "./Header.css";

import { ReactComponent as Help } from "./../../assets/img/aiuto.svg";
import { ReactComponent as Accedi } from "./../../assets/img/accedi.svg";
import { ReactComponent as Search } from "./../../assets/img/search.svg";
import { ReactComponent as Località } from "./../../assets/img/localita.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <Container fluid={true}>
          <Row>
            <Col xs="2">
              <img src={logo} className="App-logo header__logo" alt="logo" />
            </Col>
            <Col xs="2">
              <a href="#">
                <div className="header__località">
                  <Località className="header__località-icon"></Località>
                  <div className="header__località-text">
                    <span className="header__località-title">
                      Il mio negozio
                    </span>
                    <span className="header__località-subtitle">
                      Seleziona un negozio
                    </span>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs="4">
              <div className="header__search">
                <span className="header__search-text">Cosa stai cercando?</span>
                <Search className="header__search-icon"></Search>
              </div>
            </Col>
            <Col xs="4">
              <nav>
                <ul>
                  <li>
                    <a hre="#">
                      <Help className="header__icon"></Help>
                      <span>Aiuto</span>
                    </a>
                  </li>
                  <li>
                    <a hre="#">
                      <Accedi className="header__icon"></Accedi>
                      <span>Accedi</span>
                    </a>
                  </li>
                  <li>
                    <a hre="#">
                      <Help className="header__icon"></Help>
                      <span>Aiuto</span>
                    </a>
                  </li>
                  <li>
                    <a hre="#">
                      <Help className="header__icon"></Help>
                      <span>Aiuto</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
