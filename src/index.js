import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import createStore from "./reducers/store";

import "./styles.css";

const store = createStore();

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
