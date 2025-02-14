export const columns = [
    {
        title: "Item Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: (price: number) => `$${price}`,
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
    },
];