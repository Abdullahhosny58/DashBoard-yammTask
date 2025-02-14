
"use client";

import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

const ActionsDropdown = ({
    onActionSelect,
    items,
}: {
    onActionSelect: (key: string) => void;
    items: MenuProps["items"];
}) => {
    const onItemClick = ({ key }: { key: string }) => {
        onActionSelect(key);
    };
    const menuProps = {
        items,
        onClick: onItemClick,
    };
    return (
        <Dropdown
            menu={menuProps}
            trigger={["click"]}
        >
            <MoreOutlined
                rotate={90}
                style={{ color: "#BBBCBE" }}
                onClick={(e) => e.preventDefault()}
            />
        </Dropdown>
    );
};

export default ActionsDropdown;
