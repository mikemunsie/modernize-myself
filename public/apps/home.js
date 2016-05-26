// Next up: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
import React from 'react';
import { render } from 'react-dom';
import { Todo } from '../components/todo/todo';
import { GiphySearch } from '../components/giphySearch/giphySearch';
import { Router, Route, Link, hashHistory } from 'react-router';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Todo} />
    <Route path="/giphy" component={GiphySearch} />
  </Router>
), document.querySelector("#example"))
