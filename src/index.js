import React from "react";
import ReactDOM from "react-dom/client";
import "./reportWebVitals";
import App from "./App";
import "./assets/styles/index.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
