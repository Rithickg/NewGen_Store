import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProductById } from "../utils/Fetcher"
import { useState } from "react"
import { ProductContainer, ImageContainer, ProductDetails, ActiveImage, BuySection, Button, ProductImage, ProductImageCollection, WishListButton } from "../styles/Product.styled"
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import { IoIosFlash } from "react-icons/io"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../globalState/features/cart/cartSlice"


export const Product = () => {
    const navigate = useNavigate()
    const { productId } = useParams()
    const { data, isPending, error } = useQuery({
        queryKey: ['productById', { productId }],
        queryFn: () => getProductById({ productId }),

    })
    console.log("data-return", data)
    const [activeImage, setActiveImage] = useState(0)
    const [isCartActive, setIsCartActive] = useState(false)

    const cart = useSelector((state) => state.cart.cartItems)
    console.log("Cart", cart)
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        const product = { productId: data._id, quantity: 1 }
        dispatch(addToCart(product))
        setIsCartActive(true)
    }

    const handleBuyNow = () => {

    }

    const handleGoToCart = () => {
        navigate('/cart')
    }

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message



    const productImage = {
        name: "Product 1",
        imageUrls: [
            "https://via.placeholder.com/210x250",
            "https://via.placeholder.com/220x250",
            "https://via.placeholder.com/230x250",
            "https://via.placeholder.com/240x250",
            "https://via.placeholder.com/250x250",
        ],
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <ProductImage>
                    <ProductImageCollection>
                        {productImage.imageUrls.map((img, index) => {
                            console.log("img", { img: index })
                            return (
                                <div key={index} onMouseEnter={() => setActiveImage(index)} style={{
                                    border: `1px solid ${activeImage === index ? 'red' : 'white'}`,
                                }}>
                                    <img src={img} alt={`Product image ${index}`} />
                                </div>
                            )
                        })}
                    </ProductImageCollection>
                    <div>
                        <ActiveImage src={productImage.imageUrls[activeImage]} alt="Product image" />
                    </div>
                </ProductImage>
                <BuySection>
                    {isCartActive ? (
                        <Button onClick={handleGoToCart}><AiOutlineShoppingCart /> Go to cart</Button>
                    ) : (
                        <Button onClick={handleAddToCart}><AiOutlineShoppingCart /> Add to cart</Button>
                    )}
                    <Button onClick={handleBuyNow}><IoIosFlash /> Buy Now</Button>
                    <WishListButton><AiOutlineHeart /></WishListButton>

                </BuySection>
            </ImageContainer>
            <ProductDetails>
                <h2>{data.name}</h2>
                <p>Description: {data.description}</p>
                <p>Category: {data.category}</p>
                <p>Price: ${data.price}</p>
                <p>Brand: {data.brand}</p>
                <p>Seller: {data.seller}</p>

                <h3>Attributes:</h3>
                <ul>
                    {Object.entries(data.attributes).map(([key, value]) => (
                        <li key={key}>
                            {key}: {value}
                        </li>
                    ))}
                </ul>

                <h3>Ratings:</h3>
                <ul>
                    {data.ratings.map((rating) => (
                        <li key={rating._id}>
                            <p>User: {rating.user}</p>
                            <p>Rating: {rating.rating}</p>
                        </li>
                    ))}
                </ul>

                <h3>Reviews:</h3>
                <ul>
                    {data.reviews.map((review) => (
                        <li key={review._id}>
                            <p>User: {review.user}</p>
                            <p>Review: {review.review}</p>
                        </li>
                    ))}
                </ul>
            </ProductDetails>
        </ProductContainer>
    )
}
