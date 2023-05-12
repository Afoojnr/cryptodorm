import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../service/cryptoApi";
import { Cryptocurrencies, News } from "../components";
import Loader from "./Loader";


const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching, isError, error } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching || isError || error) return <Loader />;

  return (
    <>
      <Title level={2}>
        Crypto Market Stats
      </Title>
      <Row>
        <Col span={8}>
          <Statistic title="Total Cryptos" value={globalStats.total} />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total Market Cap:"
            value={`$${millify(globalStats.totalMarketCap)}`}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total 24h Volume"
            value={`$${millify(globalStats.total24hVolume)}`}
          />
        </Col>
        <Col span={8}>
          <Statistic title="Total Cryptos" value={globalStats.total} />
        </Col>
        <Col span={6}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top Cryptos
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
