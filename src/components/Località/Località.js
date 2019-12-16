import React, { Component } from "react";

import "./../../App.css";
import "./Località.css";

import Header from "./../Header/Header";
import axios from "axios";
import logo from "./../../assets/img/logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";

class Località extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Località">
        <header className="App-header">
          <img src={logo} className="App-logo-small" alt="logo" />

          <Header></Header>
          <div className="background-header"></div>
        </header>

        <div className="località__filter">
          <div className="loclaità__contenuto">
            <h1 className="Località__main-title">
              Scopri come prenderti cura del tuo giardino
            </h1>
            <div className="Località__content">
              <h2 className="Località__h2">
                Seleziona il tuo negozio di riferimento
              </h2>
              <select name="località" className="Select">
                <option value="volvo">ASSAGO</option>
                <option value="saab">SAAB</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            <div className="Località__continua">
              <span>
                <a href="#">CONTINUA</a>
              </span>
            </div>
          </div>
        </div>
        <div className="Località__padding"></div>
      </div>
    );
  }
}

export default Località;
