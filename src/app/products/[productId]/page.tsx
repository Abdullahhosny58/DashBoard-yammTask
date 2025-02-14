"use client";

import SingleProduct from "@/components/Layout/SingleProduct/SingleProduct";
import { useParams } from "next/navigation";

const Products = () => {
    const params = useParams();
    

    let id = params?.id || params?.productId;
    id = Array.isArray(id) ? id[0] : id; 
    return <SingleProduct id={id} />;
};

export default Products;
