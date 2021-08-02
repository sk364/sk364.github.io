import "./App.css";

import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import Home from "./home";
import ProjectList from "./project-list";
import Logs from "./logs";
import Contact from "./contact";

const App = () => {
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={ProjectList} />
      <Route exact path="/" component={Logs} />
      <Route exact path="/" component={Contact} />
    </HashRouter>
  );
}

export default App;
