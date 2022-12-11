import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import OverallProvider from "./components/provider";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <OverallProvider>
      <App />
    </OverallProvider>
  </React.StrictMode>
);
