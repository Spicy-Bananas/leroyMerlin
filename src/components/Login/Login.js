import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "tonio.cartonio@authent.it",
      password: "Prova123",
      rememberMe: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const { username, password, rememberMe } = this.state;

    axios
      .get(
        "https://api-dev-commercio.leroymerlin.it/api/v1/customer/1_0_0/profilelight/get/{customerID}"
      )
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>BOTTONE</button>
      </div>
    );
  }
}

export default Login;
