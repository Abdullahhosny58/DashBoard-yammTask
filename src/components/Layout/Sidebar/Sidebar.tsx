"use client";

import React, { FC, useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styles from "./Sidebar.module.scss";
import Link from "next/link";

const { Sider } = Layout;

const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className={styles.side}
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
  );
};

export default Sidebar;
