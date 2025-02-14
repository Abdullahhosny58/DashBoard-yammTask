"use client";

import useGetSingleProductId from "@/query/ProductId";
import {
  Card,
  Typography,
  Table,
  Image,
  Flex,
  Button,
  Spin,
  Alert,
} from "antd";
import styles from "./SingleProduct.module.scss";
import { columns } from "./columns";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

const SingleProduct = ({ id }: { id?: string }) => {
  const { data, isLoading, error, refetch } = useGetSingleProductId(id ?? "");
  const router = useRouter();

  if (isLoading) {
    return (
      <Flex justify="center" align="center" style={{ height: "100vh" }}>
        <Spin size="large" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex
        justify="center"
        align="center"
        vertical
      >
        <Alert
          message="Error loading product details"
          description="Something went wrong while fetching the product. Please try again."
          type="error"
          showIcon
        />
        <Button type="primary" onClick={() => refetch()}>
          Retry
        </Button>
      </Flex>
    );
  }

  return (
    <Card className={styles.card}>
      <Button type="text" onClick={() => router.push("/")}>
        Back
      </Button>

      <Flex className={styles.storeContainer}>
        <Image
          width={50}
          src={data?.store_logo}
          alt={data?.store_name || "Store"}
        />
        <Flex className={styles.storeInfo}>
          <Title level={4}>{data?.store_name || "N/A"}</Title>
        </Flex>
      </Flex>

      <Flex className={styles.productDetails}>
        <Text strong>Amount: </Text> ${data?.amount ?? "N/A"}
        <Text strong>Decision: </Text> {data?.decision ?? "N/A"}
        <Text strong>Reason: </Text> {data?.reason ?? "N/A"}
        <Text strong>Active: </Text> {data?.active ? "Yes" : "No"}
      </Flex>

      <Table
        className={styles.tableContainer}
        dataSource={data?.items || []}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
    </Card>
  );
};

export default SingleProduct;
