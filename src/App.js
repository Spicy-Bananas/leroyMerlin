import React, { Component } from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Località from "./components/Località/Località";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Route>
        <Route exact path="/" render={routerProps => <Main></Main>} />
        <Route
          exact
          path="/località"
          render={routerProps => <Località></Località>}
        />
      </Route>
    );
  }
}

export default App;
