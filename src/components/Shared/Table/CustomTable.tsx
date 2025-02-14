"use client";

import { Table, TableProps } from "antd";
import { useState } from "react";

interface CustomTableProps<T> extends TableProps<T> {
    onPageChange?: (page: number) => void;
    page?: number;
    items?: number;
    pages?: number;
    rowSelection?: TableProps<T>["rowSelection"];
}

const CustomTable = <T extends object>({
    dataSource = [],
    columns = [],
    children,
    rowSelection,
    onPageChange,
    page = 1,
    items = 10,
    pages = 0,
    ...restProps
}: CustomTableProps<T>) => {
    const [currentPage, setCurrentPage] = useState(page);

    const handleTableChange: TableProps<T>["onChange"] = (pagination) => {
        const newPage = pagination?.current ?? 1;
        setCurrentPage(newPage);
        if (onPageChange) {
            onPageChange(newPage);
        }
    };

    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            rowSelection={rowSelection}
            pagination={{
                pageSize: items,
                total: pages * items || dataSource?.length || 0,
                current: currentPage,
                position: ["bottomCenter"],
                showSizeChanger: false,
            }}
            onChange={handleTableChange}
            {...restProps}
        >
            {children}
        </Table>
    );
};

export default CustomTable;
