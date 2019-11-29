import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Personas from "./components/pages/Personas";
import Planets from "./components/pages/Planets";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div className="base">
      <h1>Select Which Data to Fetch:</h1>

      <Link to="/">Home</Link>

      <Link to="/planets">
        <button>Planets</button>
      </Link>

      <Link to="/personas">
        <button>Personas</button>
      </Link>

      <Route exact path="/" component={App} />
      <Route path="/planets" component={Planets} />
      <Route path="/personas" component={Personas} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
