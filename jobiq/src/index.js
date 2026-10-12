import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import Skillanalysis from "./components/Skillanalysis";

import Navbar from "./components/Navbar";
import Skillgap from "./components/Skillgap";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
