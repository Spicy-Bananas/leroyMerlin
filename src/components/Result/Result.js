import React, { Component } from "react";
import "./Result.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, description, url } = this.props;
    return (
      <div className="result__card">
        <h3>{title}</h3>
        <Container>
          <Row>
            <Col>
              <div className="result__container-img">
                <img src="https://www.controradio.it/wp-content/uploads/2019/02/Leroy-Merlin-loja-de-Leiria-Distribuic%CC%A7a%CC%83o-Hoje.jpg"></img>
              </div>
            </Col>
          </Row>
        </Container>

        <p>{description}</p>

        <a href={url}> ECCO COSA ABBIAMO SCELTO PER TE</a>
      </div>
    );
  }
}

export default Result;
