"use client";

import { Table, TableProps } from "antd";
import { useState } from "react";

interface CustomTableProps extends TableProps {
    onPageChange?: (page: number) => void;
    page?: number;
    items?: number;
    pages?: number;
    rowSelection?: any;
}

const CustomTable = ({
    dataSource = [],
    columns = [],
    children,
    rowSelection,
    onPageChange,
    page = 1,
    items = 10,
    pages = 0,
    ...restProps
}: CustomTableProps) => {
    const [currentPage, setCurrentPage] = useState(page);

    const handleTableChange = (paginationValue: any) => {
        const newPage = paginationValue.current;
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
