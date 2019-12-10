import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import home from '../4_Pages/Home/HomeReducer';

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      home,
    }),
    applyMiddleware(logger),
  );

  return store;
}
