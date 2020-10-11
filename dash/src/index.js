import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import App from "./App";
import Farm from "./screens/farm";
import Dash from "./screens/landing";
import Yc from './screens/yc';



ReactDOM.render(
  <Router>
    <div className="App">
      <Route exact path="/" component={Dash} />
      <Route exact path="/yc" component={Yc} />
      <Route exact path="/farm" component={Farm} />
      
    </div>
  </Router>,
  document.getElementById("root")
);