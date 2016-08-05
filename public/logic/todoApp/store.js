import { combineReducers, createStore } from 'redux';
import Middleware from "../../libs/middleware";
import * as Reducers from "./reducers";

export let store = createStore(
  combineReducers(Reducers),
  {},
  Middleware
);