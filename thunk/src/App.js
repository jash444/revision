import "./styles.css";
import { AllRoutes } from "./Pages/AllRoutes";
import { Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
  return <div className="App">
   <Home />
  
   
  </div>;
}
