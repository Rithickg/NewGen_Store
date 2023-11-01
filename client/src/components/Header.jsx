import { FeaturedProduct } from "./FeaturedProduct"
import { NavBar } from "./NavBar"
import { OfferSale } from "./OfferSale"
import { Slider } from "./Slider"


export const Header = () => {
    return (
        <>
            <OfferSale />
            <NavBar />
            <Slider />
            <FeaturedProduct />
        </>
    )
}
