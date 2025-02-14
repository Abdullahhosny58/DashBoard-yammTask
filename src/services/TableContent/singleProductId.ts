import axios from "axios";

export const getSingleProductId = async (id: string) => {
    const response = await axios.get(`http://localhost:5000/refundOrders/${id}`);
    return response.data;
};