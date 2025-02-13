import { postTableContent } from "@/services/TableContent/postTableContent";
import { useMutation } from "@tanstack/react-query";

const usePostRefundOrders = () => {
    return useMutation({
        mutationFn: postTableContent
    });
};

export default usePostRefundOrders;
