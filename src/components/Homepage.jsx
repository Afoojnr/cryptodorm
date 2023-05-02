import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={5} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            // value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap:"
            // value={`$${millify(globalStats.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            // value={`$${millify(globalStats.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            // value={globalStats.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            // value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
