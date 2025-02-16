
import { ReactNode } from "react";
import Navbar from "@/components/Layout/Navbar/Navbar";
import styles from "./DashboardLayout.module.scss"; 
import { Flex } from "antd";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <Flex  className={styles.dashboardLayout}> 
      <Sidebar />
      <Flex className={styles.dashboardContent}>
        <Navbar />
        <main className={styles.content}>{children}</main>
      </Flex>
    </Flex>
  );
}
