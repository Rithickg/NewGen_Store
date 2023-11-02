import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../utils/Fetcher"
import TestImage from "../assets/featuredProduct/domino-164_6wVEHfI-unsplash.jpg"
import { BestSellerContainer, BestSellerProduct, LinkStyled, BestSellerHeader, BestProduct, StyledImage } from "../styles/BestSeller.styled"

export const BestSeller = () => {
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })
    return (
        <BestSellerContainer>
            <BestSellerHeader>
                <h1>Best Selling Products</h1>
                <LinkStyled to="/products">View All</LinkStyled>
            </BestSellerHeader>
            <BestSellerProduct>
                {data.splice(0, 5).map((product) => (
                    <BestProduct key={product._id}>
                        <StyledImage src={TestImage} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>&#x20B9;{product.price}</p>
                    </BestProduct>
                ))}
            </BestSellerProduct>

        </BestSellerContainer>
    )
}
