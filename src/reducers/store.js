import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import home from '../4_Pages/Home/HomeReducer';
import addBoardDialog from '../2_Organisms/AddBoardDialog/AddBoardDialogReducer';

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      home,
      addBoardDialog,
    }),
    applyMiddleware(logger),
  );

  return store;
}
