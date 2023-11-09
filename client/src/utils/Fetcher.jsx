import axios from "axios";

export const getProducts = async () => {
    const { data } = await axios.get("http://localhost:2002/api/product/get-all-products")
    return data
}

export const getProductByPage = async ({ pageParam = 0 }) => {
    const { data } = await axios.get(`http://localhost:2002/api/product/get-all-products?limit=10&offset=${pageParam}`);
    return { products: [...data], prevOffset: pageParam }
}

export const getProductById = async (queryKey) => {
    const { productId } = queryKey
    const { data } = await axios.get(`http://localhost:2002/api/product/get-product-by-id/${productId}`)
    console.log("data", data)
    return data
}

export const signUpUser = async (values) => {
    const { data } = await axios.post("http://localhost:2002/api/auth/sign-up", values)
    return data
}

export const signInUser = async (values) => {
    const { data } = await axios.post("http://localhost:2002/api/auth/sign-in", values)
    return data
}