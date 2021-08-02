import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import Home from "./home";
import PostDetail from "./post-detail";

const App = () => {
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={PostDetail} />
    </HashRouter>
  );
}

export default App;
