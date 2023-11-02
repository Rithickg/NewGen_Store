import { BestSeller } from "./BestSeller"
import { ExploreProduct } from "./ExploreProduct"
import { FeaturedProduct } from "./FeaturedProduct"
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
            <FeaturedProduct />
            <BestSeller />
            <TopDeals />
            <ExploreProduct />
        </>
    )
}
