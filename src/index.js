import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './reducers/store';
import HomeContainer from './4_Pages/Home/HomeContainer';

import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HomeContainer />
    </PersistGate>
  </Provider>,
  rootElement,
);
