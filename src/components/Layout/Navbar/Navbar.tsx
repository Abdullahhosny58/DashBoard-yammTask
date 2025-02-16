"use client";

import React, { FC } from "react";
import { Layout, Button, Flex } from "antd";
import { UserOutlined, BellOutlined } from "@ant-design/icons";
import styles from "./Navbar.module.scss";

const { Header } = Layout;

const Navbar: FC = () => {
  return (
    <Header className={styles.navbar}>
      <Flex align="center" justify="space-between" className={styles.container}>
        <Flex className={styles.logo}>Dashboard</Flex>

        <Flex>
          <Flex className={styles.actions}>
            <Button type="text" icon={<BellOutlined />} />
            <Button type="text" icon={<UserOutlined />} />
          </Flex>
        </Flex>
      </Flex>
    </Header>
  );
};

export default Navbar;
