import axios from "axios";

export const getRefundOrders = async () => {
    const response = await axios.get(`http://localhost:5000/refundOrders`);
    return response.data;
};
