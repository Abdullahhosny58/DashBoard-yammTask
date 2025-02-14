import { getSingleProductId } from "@/services/TableContent/singleProductId";
import { useQuery } from "@tanstack/react-query";

const useGetSingleProductId = (id: string) => {
    return useQuery({
        queryKey: ["SingleProduct", id], 
        queryFn: () => getSingleProductId(id), 
        enabled: !!id, 
    });
};

export default useGetSingleProductId;
