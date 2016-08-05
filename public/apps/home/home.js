import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { Index } from "./pages/index";
import { About } from "./pages/about";
import { Dashboard as AuthDashboard } from "./pages/dashboard";

render((
  <Router history={hashHistory}>
    <Route path="/" component={Index} />
    <Route path="/about" component={About} />
    <Route path="/auth/dashboard" component={AuthDashboard} />
  </Router>
), document.querySelector("#example"))
