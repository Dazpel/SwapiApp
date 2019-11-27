import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Personas from "./components/pages/Personas";
import Planets from "./components/pages/Planets";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div className="base">
    <h1>Select Which Data to Fetch:</h1>
      
          <Link to="/planets">
              <button>Planets</button>
          </Link>
      
          <Link to="/personas">
          <button>Personas</button>
          </Link>
      
      <Route exact path="/planets" component={Planets} />
      <Route exact path="/personas" component={Personas} />
    </div>
  </Router>
);


ReactDOM.render(routing, document.getElementById('root'));
