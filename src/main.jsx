import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LangContext from "./context/LangContext/LangContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangContext>
      <App />
    </LangContext>
  </React.StrictMode>
);
