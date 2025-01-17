import React, { Component } from 'react';

//import component
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
//import router
import {BrowserRouter as Router} from "react-router-dom";
//import motion
import { motion } from "framer-motion";

const App = () => {
  return(
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  ); 
};

export default App;
