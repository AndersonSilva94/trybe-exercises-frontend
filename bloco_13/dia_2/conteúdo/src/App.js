// import logo from './logo.svg';
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import HowTo from "./HowTo";
import Profile from "./Profile";

/* const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
} */

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/howto" component={HowTo} />
            <Route
              path="/profile/:ship"
              render={(props) => (
                <Profile {...props} name="Barbaruiva, o bucaneiro da rede" />
              )}
            />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
        {/*  <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai> */}
      </div>
    );
  }
}

export default App;
