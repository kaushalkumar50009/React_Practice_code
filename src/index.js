import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./component/contextApi/context/CreateContext";

//! 2nd method of context api will use here

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
