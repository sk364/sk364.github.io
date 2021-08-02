import "./app.css";

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
      <Route exact path="/projects" component={ProjectList} />
      <Route exact path="/logs" component={Logs} />
      <Route exact path="/contact" component={Contact} />
    </HashRouter>
  );
}

export default App;
