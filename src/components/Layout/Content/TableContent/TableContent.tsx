"use client";

import CustomTable from "@/components/Shared/Table/CustomTable";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { Switch, Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import useGetRefundOrders from "@/query/TableContentQuery";
import Dropdown from "antd/es/dropdown/dropdown";
import usePostRefundOrders from "@/query/TableContentMutation";
import CustomNotification from "@/components/Shared/Notification";
import axios from "axios";
import { useRouter } from "next/navigation";
import { DataType } from "./type";



const TableContent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const { data: refundOrders = [], isLoading, refetch } = useGetRefundOrders();  
    const { mutate, isPending } = usePostRefundOrders();

    const updateDecision = async (id: string, decision: string) => {
        const response = await axios.patch(`http://localhost:5000/refundOrders/${id}`, { decision });
        return response.data;
    };

    const handleDecisionChange = (record: DataType, decision: string) => {
        updateDecision(record.id, decision)
            .then((res) => {
                CustomNotification({
                    type: "success",
                    message: res?.message || "Decision updated successfully",
                });
                refetch(); 
            })
            .catch((error) => {
                CustomNotification({
                    type: "error",
                    message: error.message || "Failed to update decision",
                });
            });
    };

    const handleActiveChange = (record: DataType, checked: boolean) => {
        if (!record.id || !record.reason || !record.store_name || !record.items) {
            return;
        }

        mutate(
            { id: record.id, active: checked },
            {
                onSuccess: (res) => {
                    CustomNotification({
                        type: "success",
                        message: res?.message || "Active status updated successfully",
                    });
                    refetch();
                },
                onError: (error) => {
                    CustomNotification({
                        type: "error",
                        message: error.message || "Failed to update active status",
                    });
                },
            }
        );
    };
    
    const router = useRouter();

    const handleViewDetails = (record: DataType) => {
        router.push(`/products/${record.id}`);
    };

    const columns: ColumnsType<DataType> = [
        { title: "Reason", dataIndex: "reason", key: "reason" },
        { title: "Store Name", dataIndex: "store_name", key: "store_name" },
        { title: "Amount", dataIndex: "amount", key: "amount" },
        {
            title: "Decision",
            dataIndex: "decision",
            key: "decision",
            render: (_, record) => record.decision || "not yet",
        },
        {
            title: "Active",
            dataIndex: "active",
            key: "active",
            render: (_, record) => (
                <Switch
                    checked={record.active}
                    onChange={(checked) => handleActiveChange(record, checked)}
                    loading={isPending}
                />
            ),
        },
        {
            title: "Items",
            dataIndex: "items",
            key: "items",
            render: (_, record) => `${record.items?.length || 0} items`,
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <div style={{ display: "flex", gap: "8px" }}>
                    <Dropdown
                        menu={{
                            items: [
                                { key: "reject", label: "Reject", onClick: () => handleDecisionChange(record, "Reject") },
                                { key: "accept", label: "Accept", onClick: () => handleDecisionChange(record, "Accept") },
                                { key: "escalate", label: "Escalate", onClick: () => handleDecisionChange(record, "Escalate") },
                            ],
                        }}
                        trigger={["click"]}
                    >
                        <Button icon={<MoreOutlined />} />
                    </Dropdown>
                    <Button onClick={() => handleViewDetails(record)}>View Details</Button>
                </div>
            ),
        },
    ];

    
    const totalRecords = refundOrders?.length || 0;
    const totalPages = Math.ceil(totalRecords / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = refundOrders?.slice(startIndex, startIndex + itemsPerPage) || [];

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", height: "80vh", overflowY: "auto" }}>
            <CustomTable
                dataSource={paginatedData} 
                columns={columns}
                onPageChange={handlePageChange}
                page={currentPage}
                items={itemsPerPage}
                pages={totalPages}
                loading={isLoading}
            />
        </div>
    );
};

export default TableContent;
