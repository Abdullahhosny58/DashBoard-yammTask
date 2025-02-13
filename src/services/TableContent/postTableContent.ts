import axios from "axios";

export const postTableContent = async (data: { id: string; active: boolean }) => {
    const response = await axios.patch(`http://localhost:5000/refundOrders/${data.id}`, { active: data.active });
    return response.data;
};