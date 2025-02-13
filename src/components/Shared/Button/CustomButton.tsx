import { Button, ButtonProps } from "antd";
import React from "react";

interface CustomButtonProps extends ButtonProps {
    icon?: React.ReactNode;
    text: string;
}

function CustomButton({
    type = "primary",
    icon,
    text,
    ...restProps
}: CustomButtonProps) {
    return (
        <Button
            type={type}
            icon={icon}
            {...restProps}
        >
            {text}
        </Button>
    );
}

export default CustomButton;
