import { useInfiniteQuery } from '@tanstack/react-query';
import { getProducts } from '../utils/Fetcher';

const getProduct = async ({ pageParam = 0 }) => {
    const res = await fetch(`http://localhost:2002/api/product/get-all-products?limit=10&offset=${pageParam}`);
    const data = await res.json();
    return { ...data, prevOffset: pageParam }
}
export const ExploreProduct = () => {
    const { data } = useInfiniteQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        // getNextPageParam: (lastPage) => lastPage.prevOffset + 10,
    })
    console.log("Load", data);
    return (
        <div>
            <h1>ExploreProduct</h1>
        </div>
    )
}
