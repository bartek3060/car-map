import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { CarContextProvider } from "./context/car-context";

ReactDOM.render(
  <CarContextProvider>
    <App />
  </CarContextProvider>,
  document.getElementById("root")
);
