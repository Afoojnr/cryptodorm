import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar, Drawer } from "antd";
import { Link } from "react-router-dom";
import icon from "../images/crypto.png";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [openMenu, setOpenMenu] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      {smallScreen && (
        <>
          <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
              <Link to="/">CryptoDorm</Link>
            </Typography.Title>
            <Button
              className="menu-control-container"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <MenuOutlined />
            </Button>
          </div>
          <Drawer
            onClose={() => {
              setOpenMenu(false);
            }}
            placement="right"
            open={openMenu}
            closable={false}
            style={{ backgroundColor: "#001529" }}
          >
            <Menu
              theme="dark"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
              mode="inline"
            >
              <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              </Menu.Item>
              <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
              </Menu.Item>
            </Menu>
          </Drawer>
        </>
      )}

      {!smallScreen && (
        <>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item
              style={{
                marginRight: "20vw",
                backgroundColor: `${bgColor && "#001529"}`,
                color: "white",
              }}
              icon={<Avatar src={icon} size="medium" />}
              onClick={() => setBgColor(true)}
            >
              <Link to="/" style={{ fontSize: "30px" }}>
                CryptoDorm
              </Link>
            </Menu.Item>
            <Menu.Item icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
              <Link to="/news">News</Link>
            </Menu.Item>
          </Menu>
        </>
      )}
    </div>
  );
};

export default Navbar;
