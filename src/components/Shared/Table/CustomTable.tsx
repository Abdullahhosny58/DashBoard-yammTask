"use client";

import { Table, TableProps } from "antd";
import { useState } from "react";

interface CustomTableProps extends TableProps {
    onPageChange: (page: number) => void;
    page?: number;
    items?: number;
    rowSelection?: any;
    pages?: number;
    next?: number;
}

const CustomTable = ({
    dataSource,
    columns,
    children,
    pagination,
    rowSelection,

    onPageChange,
    page = 1,
    items = 10,
    pages = 0,
    next,
    ...restProps
}: CustomTableProps) => {
    const [currentPage, setCurrentPage] = useState(page);

    const handleTableChange = (paginationValue: any) => {
        const newPage = paginationValue.current;
        setCurrentPage(newPage);
        onPageChange(newPage);
    };
    return (
        <Table
            columns={columns || undefined}
            dataSource={dataSource}
            rowSelection={rowSelection}
            pagination={{
                pageSize: items,
                total: pages * items,
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
