import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { NavBar } from "./components";
import { Layout, Typography, Space } from "antd";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
