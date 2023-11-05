import { BestSeller } from "./BestSeller"
import { ExploreProduct } from "./ExploreProduct"
import { FeaturedProduct } from "./FeaturedProduct"
import { Slider } from "./Slider"
import { TopDeals } from "./TopDeals"


export const Header = () => {
    return (
        <>
            <Slider />
            <BestSeller />
            <FeaturedProduct />
            <TopDeals />
            <ExploreProduct />
        </>
    )
}
