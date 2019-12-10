import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './reducers/store';
import HomeContainer from './4_Pages/Home/HomeContainer';

import './styles.css';

const store = createStore();

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <HomeContainer />
  </Provider>,
  rootElement,
);
