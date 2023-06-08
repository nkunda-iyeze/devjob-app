import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import JobProvider from "./context/JobContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <JobProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </JobProvider>
  
);
