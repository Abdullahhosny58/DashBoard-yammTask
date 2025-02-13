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

interface DataType {
    key: string;
    id: string;
    reason: string;
    store_name: string;
    store_logo: string;
    store_url: string;
    amount: number;
    active: boolean;
    decision: string;
    items: { id: string; name: string; price: number; quantity: number }[];
}

const TableContent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data: refundOrders = [], isLoading, refetch } = useGetRefundOrders();  
    const { mutate, isPending } = usePostRefundOrders();

    const updateDecision = async (id: string, decision: string) => {
        const response = await axios.patch(`http://localhost:5000/refundOrders/${id}`, { decision });
        return response.data;
    };

    const handleDecisionChange = (record: DataType, decision: string) => {
        updateDecision(record.id, decision)
            .then((res) => {
                console.log(`Decision for order ${record.id} updated successfully to ${decision}`);

                CustomNotification({
                    type: "success",
                    message: res?.message || "Decision updated successfully",
                });

                refetch(); // Fetch updated data from the server
            })
            .catch((error) => {
                console.error(`Failed to update decision for order ${record.id}:`, error);

                CustomNotification({
                    type: "error",
                    message: error.message || "Failed to update decision",
                });
            });
    };

    const handleActiveChange = (record: DataType, checked: boolean) => {
        if (!record.id || !record.reason || !record.store_name || !record.items) {
            console.error("Incomplete data, cannot update active status");
            return;
        }

        mutate(
            { id: record.id, active: checked },
            {
                onSuccess: (res) => {
                    console.log(`Active status for order ${record.id} updated successfully`);

                    CustomNotification({
                        type: "success",
                        message: res?.message || "Active status updated successfully",
                    });

                    refetch();
                },
                onError: (error) => {
                    console.error(`Failed to update active status for order ${record.id}:`, error);

                    CustomNotification({
                        type: "error",
                        message: error.message || "Failed to update active status",
                    });
                },
            }
        );
    };

    const handleViewDetails = (record: DataType) => {
        console.log(`Viewing details for order ${record.id}`);
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
                    loading={isPending} // Show loading state when updating
                />
            ),
        },
        {
            title: "Items",
            dataIndex: "items",
            key: "items",
            render: (_, record) => `${record.items.length} items`,
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <div style={{ display: "flex", gap: "8px" }}>
                    <Dropdown
                        menu={{
                            items: [
                                {
                                    key: "reject",
                                    label: "Reject",
                                    onClick: () => handleDecisionChange(record, "Reject"),
                                },
                                {
                                    key: "accept",
                                    label: "Accept",
                                    onClick: () => handleDecisionChange(record, "Accept"),
                                },
                                {
                                    key: "escalate",
                                    label: "Escalate",
                                    onClick: () => handleDecisionChange(record, "Escalate"),
                                },
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

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <CustomTable
                dataSource={refundOrders} 
                columns={columns}
                onPageChange={handlePageChange}
                page={currentPage}
                items={10}
                pages={5}
                loading={isLoading}
            />
        </div>
    );
};

export default TableContent;