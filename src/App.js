import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  NavBar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import { Layout, Typography, Space, Col } from "antd";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <Col className="footer">
          <Typography.Title level={5} style={{ color: "white" }}>
            CryptoDorm
            <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </Col>
      </div>
    </div>
  );
};

export default App;
