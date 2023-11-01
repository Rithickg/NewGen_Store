import { FeaturedContainer, ProductFour, ProductImage, ProductOne, ProductThree, ProductTwo, ProductDetail, StyledLink } from "../styles/FeaturedProduct.styled"
import productOne from "../assets/featuredProduct/irene-kredenets-dwKiHoqqxk8-unsplash.jpg"
import productTwo from "../assets/featuredProduct/devin-avery-BRVqq2uak4E-unsplash.jpg"
import productThree from "../assets/featuredProduct/c-d-x-PDX_a_82obo-unsplash.jpg"
import productFour from "../assets/featuredProduct/rachit-tank-2cFZ_FB08UM-unsplash.jpg"

export const FeaturedProduct = () => {
    return (
        <FeaturedContainer>
            <ProductOne>
                <ProductImage src={productOne} alt="placeholder" />
                <ProductDetail>
                    <h2>Adidas Stylish Shoe</h2>
                    <p>Best casual shoe for day to day use.</p>
                    <StyledLink to="/product/">Show Now</StyledLink>
                </ProductDetail>
            </ProductOne>
            <ProductTwo>
                <ProductImage src={productTwo} alt="placeholder" />
                <ProductDetail>
                    <h2>Pressed Lemon</h2>
                    <p>Lemon based cream for skincare.</p>
                    <StyledLink to="/product/">Show Now</StyledLink>
                </ProductDetail>
            </ProductTwo>
            <ProductThree>
                <ProductImage src={productThree} alt="placeholder" />
                <ProductDetail>
                    <h2>Sony Headset</h2>
                    <p>Experience the world of sound with sony.</p>
                    <StyledLink to="/product/">Shop Now</StyledLink>
                </ProductDetail>
            </ProductThree>
            <ProductFour>
                <ProductImage src={productFour} alt="placeholder" />
                <ProductDetail>
                    <h2>Samsung Smart Watch</h2>
                    <p>Track your fitness and lifestyle.</p>
                    <StyledLink to="/product/">Show Now</StyledLink>
                </ProductDetail>
            </ProductFour>
        </FeaturedContainer>
    )
}
