"use client";

import useGetSingleProductId from "@/query/ProductId";
import { Card, Typography, Table, Image, Flex, Button } from "antd";
import styles from "./SingleProduct.module.scss";
import { columns } from "./columns";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

const SingleProduct = ({ id }: { id?: string }) => {
  const { data, isLoading, error } = useGetSingleProductId(id ?? "");
  const router = useRouter();


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <Card className={styles.card}>
      <Button type="text" onClick={() => router.push("/")}>Back</Button>

      <Flex className={styles.storeContainer}>
        <Image width={50} src={data.store_logo} alt={data.store_name} />
        <Flex className={styles.storeInfo}>
          <Title level={4}>{data.store_name}</Title>
        </Flex>
      </Flex>

      <Flex className={styles.productDetails}>
        <Text strong>Amount: </Text> ${data.amount}
        <Text strong>Decision: </Text> {data.decision}
        <Text strong>Reason: </Text> {data.reason}
        <Text strong>Active: </Text> {data.active ? "Yes" : "No"}
      </Flex>

      <Table
        className={styles.tableContainer}
        dataSource={data.items}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
    </Card>
  );
};

export default SingleProduct;
