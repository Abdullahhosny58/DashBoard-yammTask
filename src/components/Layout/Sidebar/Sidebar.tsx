"use client";

import React, { FC, useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
} from "@ant-design/icons";
import styles from "./Sidebar.module.scss";

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
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Home
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
