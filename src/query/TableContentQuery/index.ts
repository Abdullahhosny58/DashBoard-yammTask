import { getRefundOrders } from "@/services/TableContent";
import { useQuery } from "@tanstack/react-query";

const useGetRefundOrders= () => {
    const result = useQuery({
        queryKey: ["RefundOrders"],
        queryFn: getRefundOrders,
    });

    return {
        ...result,
        data: result.data,
    };
};

export default useGetRefundOrders;
