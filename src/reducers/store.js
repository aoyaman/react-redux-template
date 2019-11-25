import { combineReducers } from "redux";
import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import todo from "./TodoReducer";

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      todo
    }),
    applyMiddleware(logger)
  );

  return store;
}
