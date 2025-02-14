"use client";

import React, { FC } from "react";
import { Layout, Button, Flex } from "antd";
import { MenuOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";
import styles from "./Navbar.module.scss";

const { Header } = Layout;

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    
    <Header className={styles.navbar}>
        
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={toggleSidebar}
        className={styles.menuButton}
      />

      <Flex align="center" justify="space-between">
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