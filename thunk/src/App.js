import "./styles.css";
import { AllRoutes } from "./Pages/AllRoutes";
import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";

export default function App() {
  return <div className="App">
    <Routes>
            <Route path="/" element={Home}/>
            <Route path="/posts" element={Posts}/>
        </Routes>
    <AllRoutes />
   
  
   
  </div>;
}
