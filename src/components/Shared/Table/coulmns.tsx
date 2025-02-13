import Link from "next/link";
import dayjs from "dayjs";
import CustomBadge from "../CustomBadge/CustomBadge";

export const dataSource = [
    {
        // key: "1",
        id: "1",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Active",
    },
    {
        // key: "2",
        id: "2",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Active",
    },
    {
        // key: "3",
        id: "3",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Active",
    },
    {
        // key: "4",
        id: "4",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Churned",
    },
    {
        // key: "5",
        id: "5",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Registered",
    },
    {
        // key: "6",
        id: "6",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Churned",
    },
    {
        // key: "7",
        id: "7",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Churned",
    },
    {
        // key: "8",
        id: "8",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Registered",
    },
    {
        key: "9",
        id: "9",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Churned",
    },
    {
        key: "10",
        id: "10",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Registered",
    },
    {
        key: "11",
        id: "11",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Registered",
    },
    {
        key: "12",
        id: "12",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Active",
    },
    {
        key: "13",
        id: "13",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Churned",
    },
    {
        key: "14",
        id: "14",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Churned",
    },
    {
        key: "15",
        id: "15",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Active",
    },
    {
        key: "16",
        id: "16",
        UserName: "01154593668",
        RegistrationDate: "30/4/2024 - 3:00 PM",
        LastLoginDate: "30/4/2024 - 3:00 PM",
        Status: "Registered",
    },
];

export const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
        render: (id: number) => (
            <Link
                href={`/storeUsers/${id}`}
                style={{ color: "black" }}
            >
                #{id}
            </Link>
        ),
    },
    {
        title: "Phone Number",
        dataIndex: "phone_number",
        key: "phone_number",
        render: (phone_number: any) => {
            return phone_number || "N/A";
        },
    },
    {
        title: "Registration date",
        key: "created_at",
        dataIndex: "created_at",
        render: (date: string) => {
            const formattedDate = dayjs(date);
            return formattedDate.isValid()
                ? formattedDate.format("DD-MM-YYYY HH:mm:ss")
                : "N/A";
        },
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (Status: string) => <CustomBadge status={Status} />,
    },
    {
        title: "Last login date",
        dataIndex: "last_sign_in_at",
        key: "last_sign_in_at",
        render: (date: string) => {
            const formattedDate = dayjs(date);
            return formattedDate.isValid()
                ? formattedDate.format("DD-MM-YYYY HH:mm:ss")
                : "N/A";
        },
    },
];
