import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { Store } from './store' ;



const rootElement = document.querySelector("#root");
ReactDom.render(
  <Provider store={Store}>
  <App />
  </Provider>
  ,rootElement);
