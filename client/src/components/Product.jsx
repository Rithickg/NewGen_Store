import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
// import { getProductById } from "../utils/Fetcher"
import axios from "axios"

export const Product = () => {
    const { productId } = useParams()
    const { data } = useQuery({
        queryKey: ['productById'],
        queryFn: async () => {
            // const { productId } = queryKey
            const { data } = await axios.get(`http://localhost:2002/api/product/get-product-by-id/${productId}`)
            // console.log("datagf", data)
            return data
        },
    })
    console.log("productId", productId)
    console.log("dataghhghghgh", data)
    return (
        <div>
            <div>Image</div>
            <div>{data?.map((product) => {
                return (
                    <div key={product._id}>
                        <h2>{product.name}</h2>
                    </div>
                )
            })}</div>
            <div>Similar products</div>
            <div>Bought Togather</div>
            <div>Recently Viewed</div>
        </div>
    )
}
