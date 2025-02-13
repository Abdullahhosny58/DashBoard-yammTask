import React from "react";
import { notification, Typography } from "antd";
import { CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { NotificationPlacement } from "antd/es/notification/interface";
import styles from "./Notification.module.scss";

interface NotificationProps {
    type: "success" | "error";
    message: any;
    icon?: React.ReactNode;
    placement?: NotificationPlacement;
    style?: React.CSSProperties;
}
const CustomNotification = ({
    type,
    message,
    icon,
    style,
    placement = "top",
    ...restProps
}: NotificationProps) => {
    const { Text } = Typography;

    const openNotification = () => {
        notification[type]({
            message: (
                <Text
                    className={
                        type === "success"
                            ? styles.notificationSuccess
                            : styles.notificationError
                    }
                >
                    {message}
                </Text>
            ),

            icon:
                icon ||
                (type === "success" ? (
                    <CheckCircleOutlined
                        className={styles.notificationSuccess}
                    />
                ) : (
                    <MinusCircleOutlined className={styles.notificationError} />
                )),
            placement,
            style: {
                minWidth: "580px",
                minHeight: "55px",
                ...style,
            },
            ...restProps,
        });
    };

    return openNotification();
};

export default CustomNotification;
