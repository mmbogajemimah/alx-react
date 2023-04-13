import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore, applyMiddleware } from "redux";
import uiReducer from "./reducers/uiReducer";
import thunk from 'redux-thunk'
import { Map } from 'immutable'


const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
