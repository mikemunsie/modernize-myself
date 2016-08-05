import { combineReducers, createStore } from 'redux';
import Middleware from "../../libs/middleware";
import * as Reducers from "./reducers";

export const defaultState = {
  giphy: "isCool",
  criteria: "Hamburger"
}

export const store = createStore(
  Reducers.search,
  defaultState,
  Middleware
);
