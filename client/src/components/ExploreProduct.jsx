import { useInfiniteQuery } from '@tanstack/react-query';
import { getProducts } from '../utils/Fetcher';
import axios from 'axios';

const getProduct = async ({ pageParam = 0 }) => {
    const res = await fetch(`http://localhost:2002/api/product/get-all-products?limit=10&offset=${pageParam}`);
    const data = await res.json();
    return { products: [...data], prevOffset: pageParam }
    // const { data } = await axios.get(`http://localhost:2002/api/product/get-all-products?limit=10&offset=10`)
    // return { product: data }
}
export const ExploreProduct = () => {
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['productByPage'],
        queryFn: getProduct,
        getNextPageParam: (lastPage) => {
            if (lastPage.products.length === 0) {
                return undefined
            }
            console.log("lastPage", lastPage.products.length)
            return lastPage.prevOffset + 10
        }
    })
    console.log("data", data)
    const products = data?.pages.reduce((acc, page) => {
        return [...acc, ...page.products];
    }, []);
    console.log("products", products)

    return (
        <div>
            <h1>ExploreProduct</h1>
            <div>
                {products?.map((product) => {
                    return (
                        <div key={product._id}>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                            <p>{product.quantity}</p>
                            <p>{product.sold}</p>
                        </div>
                    )
                })}
            </div>
            <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>Load More</button>
        </div>
    )
}
