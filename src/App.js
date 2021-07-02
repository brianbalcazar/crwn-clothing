import React from "react";
import "./App.css";
import { Route, Switch, NavLink, Link } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
