import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { Home } from "../components/pages/home";
import { About } from "../components/pages/about";
import { Dashboard as AuthDashboard } from "../components/pages/auth/dashboard";

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/auth/dashboard" component={AuthDashboard} />
  </Router>
), document.querySelector("#example"))
