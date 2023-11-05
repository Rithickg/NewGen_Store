import { BestSeller } from "./BestSeller"
import { ExploreProduct } from "./ExploreProduct"
import { FeaturedProduct } from "./FeaturedProduct"
import { Footer } from "./Footer"
import { NavBar } from "./NavBar"
import { OfferSale } from "./OfferSale"
import { Slider } from "./Slider"
import { TopDeals } from "./TopDeals"


export const Header = () => {
    return (
        <>
            <OfferSale />
            <NavBar />
            <Slider />
            <BestSeller />
            <FeaturedProduct />
            <TopDeals />
            <ExploreProduct />
            <Footer />
        </>
    )
}
