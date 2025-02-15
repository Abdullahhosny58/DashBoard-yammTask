
import { ReactNode } from "react";
import Navbar from "@/components/Layout/Navbar/Navbar";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import styles from "./DashboardLayout.module.scss"; 
import { Flex } from "antd";

interface LayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <Flex align="center" justify="space-between"  className={styles.dashboardLayout}> 
      <Sidebar />
      <Flex className={styles.dashboardContent}>
        <Navbar />
        <main className={styles.content}>{children}</main>
      </Flex>
    </Flex>
  );
}
