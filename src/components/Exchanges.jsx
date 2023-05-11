import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetCryptosQuery } from "../service/cryptoApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const simplified = false;
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);
  console.log(cryptos);
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Coins</Col>
        <Col span={6}>Price</Col>
        <Col span={6}>Market Cap</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {cryptos?.map((crypto) => (
          <Col span={24}>
            <Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`}>
              <Collapse>
                <Panel
                  key={crypto.uuid}
                  showArrow={false}
                  header={
                    <Row key={crypto.uuid}>
                      <Col span={6}>
                        <Text>
                          <strong>{crypto.rank}.</strong>
                        </Text>
                        <Avatar
                          size="small"
                          className="exchange-image"
                          src={crypto.iconUrl}
                        />
                        <Text>
                          <strong>{crypto.name}</strong>
                        </Text>
                      </Col>
                      <Col span={6}>${millify(crypto.price)}</Col>
                      <Col span={6}>{millify(crypto.marketCap)}</Col>
                      <Col span={6}>{millify(crypto.change)}%</Col>
                    </Row>
                  }
                >
                  {HTMLReactParser(crypto.description || "")}
                </Panel>
              </Collapse>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;

// const dataSource = [
//   {
//     key: crypto.uuid,
//     name: crypto.name,
//     age: 32,
//     address: "10 Downing Street",
//   },
// ];

// const columns = [
//   {
//     title: "Coins",
//     dataIndex: "coin",
//     key: "coin",
//   },
//   {
//     title: "Price",
//     dataIndex: "price",
//     key: "price",
//   },
//   {
//     title: "Market Cap",
//     dataIndex: "market_cap",
//     key: "market_cap",
//   },
//   {
//     title: "Daily Change",
//     dataIndex: "daily_change",
//     key: "daily_change",
//   },
// ];

// <Table dataSource={dataSource} columns={columns} />;
