import axios from "axios";

export const getProducts = async () => {
    const { data } = await axios.get("http://localhost:2002/api/product/get-all-products")
    return data
}

export const getProductByPage = async ({ pageParam = 0 }) => {
    const { data } = await axios.get(`http://localhost:2002/api/product/get-all-products?limit=10&offset=${pageParam}`);
    return { products: [...data], prevOffset: pageParam }
}