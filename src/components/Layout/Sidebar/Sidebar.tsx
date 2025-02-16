"use client";

import React, { FC, useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import styles from "./Sidebar.module.scss";
import Link from "next/link";

const { Sider } = Layout;

const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <>
      <Button
        type="primary"
        icon={<MenuOutlined />}
        className={styles.menuButton}
        onClick={() => setDrawerVisible(true)}
      />

      <Drawer
        title="Menu"
        placement="left"
        closable
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={250}
      >
        <Menu mode="vertical" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Drawer>

      {/* Sidebar for larger screens */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className={`${styles.side} ${styles.desktopOnly}`}
      >
        <Menu mode="inline" defaultSelectedKeys={["1"]} className={styles.menu}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
