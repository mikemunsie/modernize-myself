import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, hashHistory } from 'react-router';

import { Loader } from "../../components/loader/loader";
import { Index } from "./pages/index";
import { About } from "./pages/about";
import { Dashboard as AuthDashboard } from "./pages/dashboard";
import { configureStore } from '../../store/store';

const store = configureStore();

render((
  <Provider store={store}>
    <div>
      <Loader />
      <div className="pages">
        <Router history={hashHistory}>
          <Route path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/auth/dashboard" component={AuthDashboard} />
        </Router>
      </div>
    </div>
  </Provider>
), document.querySelector("#example"))
