import { useInfiniteQuery } from '@tanstack/react-query';
import { getProductByPage } from '../utils/Fetcher';
import { ExploreProductContainer, ExploreProductHeader, ExploreProducts, ExploreProductss, LinkStyled, ProductLink, StyledImage, LoadButton } from '../styles/ExploreProduct.styled';
import TestImage from '../assets/featuredProduct/varun-gaba-dcgB3CgidlU-unsplash.jpg'


export const ExploreProduct = () => {
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['productByPage'],
        queryFn: getProductByPage,
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
        <ExploreProductContainer>
            <ExploreProductHeader>
                <h1>Explore Products</h1>
                <LinkStyled to="/products">View all</LinkStyled>
            </ExploreProductHeader>
            <ExploreProducts>
                {products?.map((product) => {
                    return (
                        <ExploreProductss key={product._id}>
                            <ProductLink to={`/${product._id}`}>
                                <StyledImage src={TestImage} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                            </ProductLink>
                        </ExploreProductss>
                    )
                })}
            </ExploreProducts>
            <LoadButton onClick={() => fetchNextPage()} disabled={!hasNextPage}>Load More</LoadButton>
        </ExploreProductContainer>
    )
}
