import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import uiReducer from "./reducers/uiReducer";
import thunk from 'redux-thunk'
import { Map } from 'immutable'
import { composeWihDevTools } from "redux-devtools-extension";
import rootReducer, { initialState } from "./reducers/rootReducer";

const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWihDevTools;
const store = createStore(combineReducers(rootReducer), initialState, reduxExtension(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
