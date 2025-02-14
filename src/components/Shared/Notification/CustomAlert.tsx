import { useEffect } from "react";
import { Alert } from "antd";

interface CustomAlertProps {
    type: "success" | "error";
    message: string;
    onClose?: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ type, message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onClose) {
                onClose();
            }
        }, 1000); 

        return () => clearTimeout(timer); 
    }, [onClose]);

    return (
        <Alert
            message={message}
            type={type}
            showIcon
            closable
            onClose={onClose}
            style={{ marginBottom: "16px" }}
        />
    );
};

export default CustomAlert;
